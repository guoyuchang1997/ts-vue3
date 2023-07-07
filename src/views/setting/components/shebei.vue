<template>
  <div class="item">
    <p class="title">设备信息</p>
    <div class="region">
      <div class="line between">
        <span class="label"><span style="width: 86px">终端识别码：</span>8a0d64322daac0299de269f43370121a_v1</span>
        <span class="text-btn">复制</span>
      </div>
      <div class="line between">
        <span class="label"><span style="width: 86px">MAC地址 ：</span>18-C0-4D-91-95-3E</span>
        <span class="text-btn">复制</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/**
 * 语言选择
 */
const url = ref('C:/Users/Administrator/AppData/Roaming/kuajingvs')
</script>

<style lang="less" scoped>
@import './item.less';
</style>
