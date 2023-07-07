<template>
  <!-- 模态框标题组件 -->
  <!-- TMDUI画的模态框标题位置字号颜色都不统一，还有那个关闭按钮。麻了 呜呜 -->
  <div class="dialog-title">
    <span>{{ props.title }}</span>
    <img src="@/assets/img/icon-close.webp" alt="关闭icon" @click="emit('close')" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '请输入模态框标题',
  },
})
const emit = defineEmits(['close'])
</script>

<style scoped lang="less">
.dialog-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 0 10px 0 0;
  span {
    font-size: 20px;
    font-weight: 400;
    color: #333333;
    line-height: 29px;
  }
  img {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
