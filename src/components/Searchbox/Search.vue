<template>
  <el-input v-model="search" class="w-50 m-2 fs-xs" @keyup.enter="seacthfe" :placeholder="placeholder">
    <template #suffix>
      <i class="iconfont" :class="iconleft"></i>
    </template>
    <template #prefix>
      <i class="iconfont" :class="iconright"></i>
    </template>
  </el-input>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['input', 'enter'])
const search = ref()
/**
 * 将数据传给父组件
 * @param {KeyboardEvent} event - 键盘事件对象
 */
const seacthfe = event => {
  emit('input', search)
  if (event.key === 'Enter') {
    emit('enter')
  }
}

interface Iprops {
  /**
   * 左侧图标
   */
  iconleft?: string
  /**
   * 右侧图标
   */
  iconright?: string
  /**
   * 候选词
   */
  placeholder?: string
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

<style lang="less" scoped>
.search {
  background: #ffffff;
  border-radius: 6px 6px 6px 6px;
}
:deep(.el-input__wrapper) {
  width: v-bind(width);
  height: v-bind(height);
  background: #ffffff;
  box-shadow: unset;
  border-radius: 6px 6px 6px 6px;
  .iconfont {
    color: @fontcolorbtn;
  }
}
</style>
