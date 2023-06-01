<template>
  <div class="shrink">
    <div class="title fs-xs pointer" @click="openlist">
      <i class="iconfont icon-CHANGYONG fs-xs"></i>
      <div class="text">常用</div>
      <i
        class="iconfont icon-jiantou fs-xs test"
        :class="{ xialajiantou: rotate, xialajiantous: !rotate }"
      ></i>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 *  箭头翻转
 */
let rotate = ref<boolean>(false);
const openlist = () => {
  rotate.value = !rotate.value;
};
</script>

<style scoped lang="less">
.title {
  display: flex;
  margin-left: 8px;
  margin-top: 22px;
  .text {
    margin-left: 4px;
    margin-right: 2px;
  }
  .test {
    transform: scale(0.7);
  }
  .xialajiantou {
    transform: rotate(180deg);
    transition: transform 0.5s;
  }
  .xialajiantous {
    transform: rotate(0deg);
    transition: transform 0.5s;
  }
}
</style>
