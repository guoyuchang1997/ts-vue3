<template>
  <div class="item">
    <p class="title">语言切换</p>
    <div class="region">
      <div class="line between">
        <span class="label">简体中文</span>
        <el-checkbox v-model="checked2"></el-checkbox>
      </div>
      <div class="line between">
        <span class="label">English</span>
        <el-checkbox v-model="checked2"></el-checkbox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/**
 * 语言选择
 */
const checked2 = ref(false)
</script>

<style lang="less" scoped>
@import './item.less';
</style>
