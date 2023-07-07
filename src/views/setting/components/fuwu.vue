<template>
  <div class="item">
    <p class="title">服务协议</p>
    <div class="region">
      <div class="line between">
        <span class="label">云登录浏览器</span>
        <span class="text-btn">服务协议</span>
      </div>
      <div class="line between">
        <span class="label">用户体验改善计划</span>
        <el-switch v-model="value" active-color="#62D65E" inactive-color="#DBDBDB"></el-switch>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/**
 * 版本提醒
 */
const value = ref(true)
</script>

<style lang="less" scoped>
@import './item.less';
</style>
