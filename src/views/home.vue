<template>
  <div class="main">
    <Hmoe></Hmoe>
    <div class="rgmain">
      <hander />
      <div class="content">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Hmoe from "~/home/index.vue";
import Hander from "~/home/hander.vue";
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: @van-mainbgc-color;
  display: flex;
  .rgmain {
    margin: 10px 15px 0 0;
    flex: 1;
    width: 0;
  }
  .content {
    margin-top: 10px;
    height: calc(100vh - 80px);
  }
}
</style>
