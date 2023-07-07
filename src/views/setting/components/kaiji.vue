<template>
  <div class="item">
    <p class="title">开机启动</p>
    <div class="region">
      <div class="line between">
        <span class="label">开机后自动启动客户端</span>
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
