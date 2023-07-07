<script lang="ts" setup>
import { ref } from 'vue'
import CloseIcon from '@/assets/svg/team/close.svg'
import TipsIcon from '@/assets/svg/proxy/tips.svg'

const emits = defineEmits(['confirm'])
const visible = ref(false)

/**
 * 打开弹窗
 */
const openDialog = () => {
  visible.value = true
}

/**
 * 确认
 */
const handleConfirm = () => {
  emits('confirm')
}

defineProps({
  row: {
    type: Object || Array,
    default: () => ({}),
  },
})

defineExpose({
  openDialog,
})
</script>

<template>
  <el-dialog v-model="visible" :show-close="false" :title="null" class="delete-dialog" width="615">
    <template #header>
      <div class="dialog-header">
        <div class="dialog-header">
          <div class="title">删除</div>
          <div class="close" @click="visible = false">
            <CloseIcon />
          </div>
        </div>
      </div>
    </template>
    <template #default>
      <div class="dialog-body">
        <TipsIcon />
        <span>
          {{
            row.device_name
              ? `删除代理后无法恢复，确认删除“${row.device_name}”吗？`
              : '删除代理后无法恢复，确认删除吗？'
          }}
        </span>
      </div>
    </template>
    <template #footer>
      <button class="btn default" @click="visible = false">取消</button>
      <button class="btn primary" @click="handleConfirm">确认</button>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.delete-dialog {
  position: relative;

  .dialog-header {
    padding-bottom: 14px;
    border-bottom: 1px solid #eeeeee;

    .title {
      font-size: 20px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #333333;
    }

    .close {
      position: absolute;
      top: 30px;
      right: 30px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }
  }

  .dialog-body {
    //padding-top: 20px;
    height: 70px;
    background: rgba(255, 153, 0, 0.05);
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #ff9900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;

    :deep(svg) {
      margin-right: 10px;

      path {
        fill: #ff9900;
      }
    }

    span {
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #ff9900;
    }
  }

  .btn {
    outline: 0;
    width: 80px;
    height: 40px;
    border-radius: 8px 8px 8px 8px;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    border: 1px solid #333333;
    cursor: pointer;

    &.default {
      border-radius: 8px 8px 8px 8px;
      color: #333333;
      background-color: transparent;
      margin-right: 10px;
    }

    &.primary {
      background: #2b53e5;
      color: #ffffff;
      border-color: #2b53e5;
    }
  }
}
</style>
