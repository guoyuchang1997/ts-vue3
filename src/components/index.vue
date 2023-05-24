<template>
  <div class="main">
    <div class="le"></div>
    <div class="ri">
      <div class="ritop"></div>
      <div class="rimain"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { deviceCol } from "@/plugin/models";
import { Itltle } from "@/plugin/tabletitle";
import { ref } from "vue";
let title = ref<Itltle>(null);
// title.value = deviceCol;
console.log(deviceCol, title);
</script>

<style lang="less" scoped>
.main {
  width: calc(100vw - 20px);
  height: calc(100vh - 20px);
  margin: auto;
  display: flex;
}
.le {
  width: 140px;
  height: 100%;
  border: 1px solid #ccc;
  margin-right: 10px;
}
.ri {
  width: calc(100vw - 170px);
  height: 100%;
  .ritop {
    width: 100%;
    height: 120px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .rimain {
    width: 100%;
    height: calc(100vh - 150px);
    border: 1px solid #ccc;
  }
}
</style>
