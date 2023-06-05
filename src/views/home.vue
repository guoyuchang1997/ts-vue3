<template>
  <div class="main">
    <Hmoe></Hmoe>
    <div class="rgmain">
      <hander />
      <div class="content">
        <router-view v-slot="{ Component }">
          <transition mode="out-in" name="fade-transform">
            <component :is="Component" :key="Component" />
          </transition>
        </router-view>
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
  background-color: @mlcolor;
  display: flex;
  .rgmain {
    margin: 10px 15px 0 0;
    flex: 1;
    width: 0;
  }
  .content {
    background-color: #fff;
    margin-top: 10px;
    height: calc(100vh - 80px);
  }
}

</style>
