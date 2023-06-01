<template>
  <div class="down pointer" @click="emit('openoff')">
    <i class="iconfont icon-CHANGYONG1 fs-xss"></i>
    <div class="text fs-sm">常用</div>
    <i
      class="iconfont icon-xialajiantou"
      :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
    ></i>
  </div>
  <div ref="height" :class="{ conten: isshwo, contenopen: !isshwo }">
    <div class="downlist pointer" v-for="(item, index) in props.titlelist" :key="index">
      <i class="iconfont fs-lg" :class="item.icon"></i>
      <div class="text fs-sm">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// /**
//  *  箭头翻转
//  */
// let rotate = ref<boolean>(false);
// const openlist = () => {
//   rotate.value = !rotate.value;
// };

/**
 * 展开下拉
 */
const emit = defineEmits(["openoff"]);

/**
 * 元素高度
 */
const height = ref(null);
const listheight = ref({
  height: "",
});
onMounted(() => {
  if (height.value) {
    listheight.value.height = `${height.value.clientHeight}px`;
  }
});

/**
 * 列表数据
 */
const props = defineProps({
  titlelist: Array,
  isshwo: Boolean,
});
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
}
.downlist:hover {
  background: #e9edfc;
  border-radius: 8px 8px 8px 8px;
  color: #2b53e5;
  transition: all 0.2s;
}
</style>
