<template>
  <div
    class="down pointer"
    :class="{ active: props.titlelist.some(item => item.mate === useLeftList.name) }"
    @click="emit('openoff')"
  >
    <i class="iconfont fs-xss" :class="props.headline.headline"></i>
    <div class="text fs-sm">{{ props.headline.title }}</div>
    <img
      src="@/assets/img/account/zhankai2hei1.webp"
      class="jiatou"
      :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
      alt=""
    />
    <!-- <i class="iconfont icon-xialajiantou" :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"></i> -->
  </div>
  <div id="height" ref="height" :class="{ conten: isshwo, contenopen: !isshwo }">
    <div
      class="downlist pointer"
      :class="{ active: useLeftList.name === item.mate }"
      v-for="(item, index) in props.titlelist"
      :key="index"
      @click="gorouter(item)"
    >
      <i class="iconfont fs-lg iconfontmar" :class="item.icon"></i>
      <div class="text fs-sm">
        {{ item.text }}
      </div>
      <!-- 可以直接补充icon图标 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, Icon } from '~/home/title'
import router from '@/router/index'
import useStore from '@/store/index'
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
  useLeftList.changeCurrentname(item.text)
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
onMounted(() => {
  getheight()
})
/**
 * 高度计算
 */
const getheight = () => {
  // 直接给false会导致高度为0,需要父组件异步传递false
  if (height.value) {
    listheight.value.height = `${35 * props.titlelist.length}px`
  }
}
</script>

<style scoped lang="less">
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
  width: 206px;
  display: flex;
  height: 35px;
  align-items: center;
  padding-left: 29px;
  padding-right: 20px;
  margin-left: 14px;
  .text {
    width: 80%;
    height: 22px;
    line-height: 22px;
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
  width: 6px;
  height: 6px;
  margin-left: 12px;
}
.xialajiantous {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
.downlist {
  width: 189px;
  display: flex;
  padding-left: 50px;
  height: 35px;
  align-items: center;
  margin-left: 18px;
  .text {
    margin: 0 10px;
  }
  &.active {
    color: @tcolor !important;
    background: @fontactive !important;
    box-shadow: 0px 4px 10px 0px rgba(59, 59, 59, 0.2);
    border-radius: 8px 8px 8px 8px;
  }
}
.downlist:hover {
  background: #e9edfc;
  border-radius: 8px 8px 8px 8px;
  color: @fontcolor;
  transition: all 0.2s;
}
</style>
