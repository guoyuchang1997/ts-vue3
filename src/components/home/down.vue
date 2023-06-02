<template>
  <div class="down pointer" @click="emit('openoff')">
    <i class="iconfont fs-xss" :class="props.headline.headline"></i>
    <div class="text fs-sm">{{ props.headline.title }}</div>
    <i
      class="iconfont icon-xialajiantou"
      :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
    ></i>
  </div>
  <div id="height" ref="height" :class="{ conten: isshwo, contenopen: !isshwo }">
    <div
      class="downlist pointer "
      v-for="(item, index) in props.titlelist"
      :key="index"
      @click="gorouter(item.router)"
    >
      <i class="iconfont fs-lg" :class="item.icon"></i>
      <div class="text fs-sm">
        {{ item.text }}
      </div>
      <!-- 可以直接补充icon图标 -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title, Icon } from "~/home/title";
import router from "@/router/index.js";
// /**
//  *  箭头翻转
//  */
// let rotate = ref<boolean>(false);
// const openlist = () => {
//   rotate.value = !rotate.value;
// };
const gorouter = (item: any) => {
  router.push({
    path: item,
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
 * 展开下拉
 */
const emit = defineEmits(["openoff"]);

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
const indexurl = ref('')
onMounted(() => {
  getheight();
  indexurl.value = window.location.href
  console.log(router);
  
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
.contenopen {
  height: v-bind("listheight.height");
  overflow: hidden;
  transition: all 0.3s;
}
.down {
  width: 220px;
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  .text {
    width: 80%;
  }
  i:first-child {
    padding-right: 10px;
  }
}
.down:hover {
  color: #2b53e5;
}
.xialajiantou {
  transform: rotate(0deg);
  transition: transform 0.3s;
}
.xialajiantous {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
.downlist {
  width: 220px;
  display: flex;
  padding-left: 50px;
  height: 45px;
  align-items: center;
  .text {
    margin: 0 14px;
  }
  &.active {
    color: #fff !important;
    background: #2d5aff !important;
    box-shadow: 0px 4px 10px 0px rgba(59, 59, 59, 0.2);
    border-radius: 8px 8px 8px 8px;
  }
}
.downlist:hover {
  background: #e9edfc;
  border-radius: 8px 8px 8px 8px;
  color: #2b53e5;
  transition: all 0.2s;
}
</style>
