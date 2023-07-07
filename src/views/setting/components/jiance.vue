<template>
  <div class="item">
    <p class="title">检测版本</p>
    <div class="region">
      <div class="line between">
        <span class="label">版本号 1.0.0</span>
        <el-button class="tacitly-btn">立即清理</el-button>
      </div>
      <div class="line between">
        <span class="label">版本更新提醒</span>
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
