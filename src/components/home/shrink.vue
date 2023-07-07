<template>
  <div class="shrink">
    <div class="title fs-xs pointer" @click="emit('openoff')"
      :class="{ active: props.titlelist.some(item => item.mate === useLeftList.name) }">
      <i class="iconfont fs-lg" :class="props.headline.headline"></i>
      <div class="text">{{ props.headline.title }}</div>
      <img src="@/assets/img/account/xialalg.webp" class="jiatou"
        :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }" alt="" />
      <!-- <i class="iconfont icon-jiantou fs-xs test" :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"></i> -->
    </div>
    <div ref="height" class="shrinklist" :class="{ conten: isshwo, contenopen: !isshwo }">
      <template v-for="(item, index) in props.titlelist" :key="index">
        <div class="item pointer" :class="{ active: useLeftList.name === item.mate, items: item.children }"
          @click="gorouter(item)">
          <i class="iconfont fs-xxl iconmar" v-if="item.icon !== 'icon-a-tongbu1'" :class="item.icon"></i>
          <i class="fs-xxl iconma" v-else>
            <chuangkou class="svgceshi" />
          </i>
          <div class="text fs-xs">{{ item.text }}</div>
        </div>
        <el-dropdown v-if="item.children" placement="right">
          <div style="outline: none" class="item pointer">
            <i class="iconfont fs-xxl iconmar" :class="item.children[0].headline"></i>
            <div class="text fs-xs">{{ item.children[0].title.slice(0, 2) }}</div>
          </div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="gorouters(item)" command="a" v-for="item in item.children[1]">
                <i class="iconfont iconmar" :class="item.icon"></i>
                <span class="textmar">{{ item.text }}</span></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, Icon } from '~/home/title'
import router from '@/router/index.js'
import useStore from '@/store/index.js'
import chuangkou from '@/assets/img/account/tongbu-1.svg'
/**
 * 展开下拉
 */
const emit = defineEmits(['openoff'])
/**
 * isshowchildren 子集显示
 */
const isshowchildren = ref(false)
/**
 * 点击状态
 */
const { useLeftList } = useStore()
/**
 * 一级
 * @param item 一级
 */
const gorouter = (item: any) => {
  useLeftList.changemate(item.mate)
  useLeftList.changeCurrentname(item.name)
  if (item.mate === 'Quickstart') return
  router.push({
    path: item.router,
    // name: 'home',
    // query: {
    // msg: 'hello'
    // }
    // 参数接受
    // const route = useRoute()
    // console.log(route.query)
  })
}
/**
 * 二级
 * @param item 二级
 */
const gorouters = (item: any) => {
  useLeftList.changemate(item.mate)
  useLeftList.changeCurrentname(item.text)
  if (item.mate === 'Quickstart') return
  router.push({
    path: item.router,
  })
}
/**
 * 元素高度
 */
interface Height {
  /**
   * 高度
   */
  clientHeight: string
}

interface Iprops {
  /**
   * 列表
   */
  titlelist: Title[]
  /**
   * 展开
   */
  isshwo: Boolean
  /**
   * 列表标题
   */
  headline: Icon
}
const props = defineProps<Iprops>()
const height = ref<Height>()
const listheight = ref({
  height: '',
})
onMounted(() => {
  isshowchildren.value = props.titlelist.some(item => item.hasOwnProperty('children'))
  getheight()
})
const getheight = () => {
  // 直接给false会导致高度为0,需要父组件异步传递false
  if (height.value) {
    listheight.value.height = `${64 * props.titlelist.length}px`
  }
  if (height.value && isshowchildren.value) {
    listheight.value.height = `${64 * (props.titlelist.length + 1)}px`
  }
}
</script>

<style scoped lang="less">
.svgceshi {
  width: 16px;
  height: 16px;
  fill: #333;
}

.conten {
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
}

.fotter {
  position: absolute;
  left: 10px;
  width: 50px;
  height: 50px;
  background: @fontcolor;
  color: @tcolor;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px 8px 8px 8px;
}

.rpashow {
  position: relative;
}

:deep(.el-dropdown) {
  width: 50px;
  height: 50px;
  display: inline-block;
  margin-bottom: 15px;

  .iconmar {
    margin-bottom: 5px;
  }

  .item {
    padding: 5px;
  }
}

.position:hover {
  display: block;
}

.items {}

.textmar {
  margin-right: 40px;
}

.title:hover {
  color: @fontcolor;
}

.contenopen {
  height: v-bind('listheight.height');
  overflow: hidden;
  transition: all 0.3s;
}

.title {
  display: flex;
  margin-left: 8px;
  align-items: center;

  &.active {
    color: @fontcolor;
  }

  .text {
    margin-left: 4px;
    margin-right: 2px;
  }

  // .test {
  //   transform: scale(0.7);
  // }
}

.rpaishow {
  position: relative;
}

.jiatou {
  width: 6px;
  height: 6px;
}

.shrinklist {
  text-align: center;
  width: 50px;
  margin: 15px auto 0;
  border-radius: 8px 8px 8px 8px;
  position: relative;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;

    // padding: 5px;
    &.active {
      color: @tcolor !important;
      background: @fontactive !important;
      box-shadow: 0px 4px 10px 0px rgba(59, 59, 59, 0.2);
      border-radius: 8px 8px 8px 8px;

      .svgceshi {
        fill: #fff;
      }
    }
  }

  .item:hover {
    background: #e9edfc;
    color: @fontcolor;
    transition: all 0.3s;
    border-radius: 8px 8px 8px 8px;

    .svgceshi {
      fill: @fontcolor;
    }
  }
}

.xialajiantou {
  transform: rotate(0deg);
  transition: transform 0.3s;
}

.xialajiantous {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
</style>
