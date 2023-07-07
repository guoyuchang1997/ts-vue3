<template>
  <!-- 带编辑功能的输入框 -->
  <div class="edit-input" v-bind="$attrs">
    <div class="edit-input-box">
      <span v-if="propos.title" class="title">{{ propos.title }}</span>
      <span :class="['value', { bigSize: bigSize }]">{{ propos.value }}</span>
      <img v-if="propos.isShowEdit" src="@/assets/img/setUp/icon-edit.webp" alt="修改icon" @click="emit('callBack')" />
    </div>
  </div>
</template>

<script setup lang="ts">
const propos = defineProps({
  // 标题
  title: {
    type: String,
    default: '',
  },
  // 显示的数值
  value: {
    type: String,
    default: '',
  },
  // 是否使用大字体
  bigSize: {
    type: Boolean,
    default: false,
  },
  // 是否显示编辑按钮
  isShowEdit: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['callBack'])
</script>

<style scoped lang="less">
.edit-input {
  .edit-input-box {
    display: flex;
    align-items: center;
    span {
      font-size: 14px;
    }
    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
      margin-left: 10px;
    }

    .bigSize {
      font-size: 20px;
      font-weight: 500;
      color: #333333;
    }
  }
}
</style>
