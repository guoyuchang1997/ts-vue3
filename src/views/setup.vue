<template>
  <!-- page:设置 -->
  <div class="setup">
    <div class="setup-left">
      <EnterpriseInfo />
    </div>
    <div class="setup-right">
      <PersonalInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import EnterpriseInfo from '@/components/setup/EnterpriseInfo.vue'
import PersonalInfo from '@/components/setup/PersonalInfo.vue'
</script>

<style lang="less" scoped>
.setup {
  display: flex;
  justify-content: space-between;
  gap: 0 10px;
  height: 100%;
  background: #f6f6f6;
  overflow-y: auto;

  .setup-left {
    min-width: 300px;
    padding: 10px;
    background: #fff;
    min-height: 710px;
  }
  .setup-right {
    width: 100%;
    padding: 30px;
    background: #fff;
    min-height: 710px;
  }
}
</style>
