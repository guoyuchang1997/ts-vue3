<template>
  <div class="shrink">
    <div class="title fs-xs pointer" @click="emit('openoff')">
      <i class="iconfont fs-xs" :class="props.headline.headline"></i>
      <div class="text">{{ props.headline.title }}</div>
      <i
        class="iconfont icon-jiantou fs-xs test"
        :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
      ></i>
    </div>
    <div ref="height" class="shrinklist " :class="{ conten: isshwo, contenopen: !isshwo }">
      <div  @click="gorouter(item)" :class="{active:useLeftList.name === item.mate}" class="item pointer" v-for="(item, index) in props.titlelist" :key="index">
        <i class="iconfont fs-xxl " :class="item.icon"></i>
        <div class="text fs-xs">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, Icon } from "~/home/title";
import router from "@/router/index.js";
import useStore from '@/store/index.js'
/**
 *  箭头翻转
 */
// let rotate = ref<boolean>(false);
// const openlist = () => {
//   rotate.value = !rotate.value;
// };
/**
 * 展开下拉
 */
const emit = defineEmits(["openoff"]);
/**
 * 点击状态
 */
const {useLeftList}  = useStore()
const gorouter = (item: any) => {
  useLeftList.changemate(item.mate)
  router.push({
    path: item.router,
    // name: 'home',
    // query: {
    // msg: 'hello'
    // }
    // 参数接受
    // const route = useRoute()
    // console.log(route.query)
  });
};

/**
 * 元素高度
 */
interface Height {
  /**
   * 高度
   */
  clientHeight: string;
}
const height = ref<Height>();
const listheight = ref({
  height: "",
});
onMounted(() => {
  getheight();
});
const getheight = () => {
  // 直接给false会导致高度为0,需要父组件异步传递false
  if (height.value) {
    listheight.value.height = `${height.value.clientHeight}px`;
  }
};

interface Iprops {
  /**
   * 列表
   */
  titlelist: Title[];
  /**
   * 展开
   */
  isshwo: Boolean;
  /**
   * 列表标题
   */
  headline: Icon;
}
const props = defineProps<Iprops>();
</script>

<style scoped lang="less">
.conten {
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
}
.title:hover {
  color: #2b53e5;
}
.contenopen {
  height: v-bind("listheight.height");
  overflow: hidden;
  transition: all 0.3s;
}
.title {
  display: flex;
  margin-left: 8px;
  .text {
    margin-left: 4px;
    margin-right: 2px;
  }
  // .test {
  //   transform: scale(0.7);
  // }
}
.shrinklist {
  text-align: center;
  width: 50px;
  margin: 20px auto 0;
  border-radius: 8px 8px 8px 8px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    &.active {
    color: #fff !important;
    background: #2d5aff !important;
    box-shadow: 0px 4px 10px 0px rgba(59, 59, 59, 0.2);
    border-radius: 8px 8px 8px 8px;
  }
  }
  .item:hover {
    background: #e9edfc;
    color: #2b53e5;
    transition: all 0.3s;
    border-radius: 8px 8px 8px 8px;
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
