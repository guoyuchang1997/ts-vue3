<template>
  <div class="time-selector">
    <span>日志时间：</span>
    <el-date-picker v-model="daterange" type="daterange" range-separator="至" start-placeholder="开始日期"
      end-placeholder="结束日期" class="my-date-picker" @change="changeTime" />
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['setTime'])
const daterange = ref('')
/**
 * 修改日期
 */
const changeTime = () => {
  emit('setTime', daterange)
}

interface Iprops {
  /**
   * 宽度
   */
  width?: string
  /**
   * 高度
   */
  height?: string
}
defineProps<Iprops>()
</script>

<style scoped lang="less">
.time-selector {
  margin-right: 10px;

  span {
    font-size: 14px;
    font-weight: 400;
    color: #333333;
  }

  :deep(.el-range-editor, .el-input__wrapper) {
    width: v-bind(width);
    height: v-bind(height);
    box-shadow: none;

    i {
      color: #2b53e5;
    }
  }
}
</style>
