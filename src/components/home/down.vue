<template>
  <div class="down pointer" :class="{ active: props.titlelist.some(item => item.mate === useLeftList.name) }"
    @click="emit('openoff')">
    <i class="iconfont fs-xss" :class="props.headline.headline"></i>
    <div class="text fs-sm">{{ props.headline.title }}</div>
    <img src="@/assets/img/account/gengduo.webp" class="jiatou" :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
      alt="" />
  </div>
  <div id="height" ref="height" :class="{ conten: isshwo, contenopen: !isshwo }">
    <template v-for="(item, index) in props.titlelist" :key="index">
      <div class="downlist pointer" :class="{ active: useLeftList.name === item.mate }" @click="gorouter(item)">
        <i class="iconfont fs-lg" v-if="item.icon !== 'icon-a-tongbu1'" :class="item.icon"></i>
        <chuangkou v-else class="svgceshi" />
        <div class="text fs-sm">
          {{ item.text }}
        </div>
        <!-- 可以直接补充icon图标 -->
      </div>
      <threenest v-if="item.children" :titlelist="item.children[1]" :headline="item.children[0]" :isshwo="Commonly"
        @openoff="Commonlyoff(item.children[1].length)" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Title, Icon } from '~/home/title'
import router from '@/router/index'
import useStore from '@/store/index'
import threenest from '~/home/threenest.vue'
import chuangkou from '@/assets/img/account/tongbu-1.svg'

/**
 * 判断是否含有子集
 */
const isshowchildren = ref<number>(0)
onMounted(() => {
  isshowchildren.value = props.titlelist.filter(item => item.hasOwnProperty('children'))
  getheight()
})
/**
 * 点击状态
 */
const { useLeftList } = useStore()
/**
 * 路由跳转
 * @param item 路由跳转
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
 * 展开下拉
 */
const emit = defineEmits(['openoff'])

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

/**
 * 高度计算
 */
const getheight = () => {
  if (height.value) {
    listheight.value.height = `${35 * props.titlelist.length}px`
  }
  // 判断是否含有三级列表
  if (height.value && isshowchildren.value) {
    listheight.value.height = `${35 * (props.titlelist.length + isshowchildren.value.length)}px`
  }
}

const Commonly = ref<boolean>(true)
/**
 * 高度
 * @param leng 子集数量
 */
const Commonlyoff = (leng: number) => {
  Commonly.value = !Commonly.value
  if (!Commonly.value) {
    /**
     * 设置高度加上所有含有子集
     */
    listheight.value.height = `${35 * (leng + props.titlelist.length + isshowchildren.value.length)}px`
  } else {
    /**
     * 父级数据的子集高度
     */
    listheight.value.height = `${35 * (props.titlelist.length + isshowchildren.value.length)}px`
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



.contenopen {
  height: v-bind('listheight.height');
  overflow: hidden;
  transition: all 0.3s;


}



.down {
  width: 215px;
  display: flex;
  height: 35px;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  margin-left: 6px;

  .text {
    width: 80%;
  }

  i:first-child {
    padding-right: 10px;
  }

  &.active {
    color: @fontcolor;
  }
}

.down:hover {
  color: @fontcolor;
}

.xialajiantou {
  transform: rotate(0deg);
  transition: transform 0.3s;
}

.jiatou {
  width: 7px;
  height: 4px;
  margin-left: 12px;
}

.xialajiantous {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}

.downlist {
  width: 189px;
  display: flex;
  padding-left: 30px;
  height: 35px;
  align-items: center;
  margin-left: 14px;

  .text {
    margin: 0 10px;
  }

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

.downlist:hover {
  background: #e9edfc;
  border-radius: 8px 8px 8px 8px;
  color: @fontcolor;
  transition: all 0.2s;

  .svgceshi {
    fill: @fontcolor;
  }
}
</style>
