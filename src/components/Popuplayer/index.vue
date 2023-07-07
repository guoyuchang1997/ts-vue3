<template>
  <div class="flex-st">
    <el-dialog v-model="getIsShow" :close-on-click-modal="false" :destroy-on-close="true" :before-close="handlerCancer">
      <template #header>
        <slot name="title">
          <div class="title">
            {{ title }}
          </div>
        </slot>
      </template>

      <div>
        <el-divider v-if="divider" />
        <slot name="main"> </slot>
      </div>
      <template #footer>
        <div class="dialog-btn">
          <slot name="footer">
            <el-button @click="handlerCancer">{{ Cancel }}</el-button>
            <el-button @click="sbmit">{{ verify }}</el-button>
          </slot>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

type Props = {
  /**
   * 表头
   */
  title?: string
  /**
   * 确认
   */
  verify?: string
  /**
   * 取消
   */
  Cancel?: string
  /**
   * 显示隐藏
   */
  isShow: boolean
  /**
   * 分割线
   */
  divider?: boolean
  /**
   * 宽度
   */
  width?: string
}
const props = withDefaults(defineProps<Props>(), {
  title: '弹出层',
  verify: '确认',
  Cancel: '取消',
  isShow: false,
  divider: false,
  width: '400px',
})
const emits = defineEmits(['update:isShow', 'sbmit'])

/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})

/**
 * 关闭
 */
const handlerCancer = () => {
  emits('update:isShow', false)

}
/**
 * 确定
 */
const sbmit = () => {
  emits('sbmit')
}
</script>

<style lang="less" scoped>
:deep(.el-dialog) .el-dialog__headerbtn {
  margin-right: 10px;
  margin-top: 10px;
}

.flex-st {
  :deep(.el-dialog) {
    width: v-bind(width);
    border-radius: 16px !important;
    padding: 30px !important;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.3);

    .el-dialog__close {
      color: #333;
    }

    .el-dialog__footer {
      padding: 0;
    }

    .el-divider--horizontal {
      margin: 14px 0 30px;
      color: #eeeeee;
    }
  }
}

:deep(.dialog-btn) {
  margin-top: 40px;

  .el-button {
    width: 80px;
    height: 40px;
    line-height: 40px;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #333333;
  }

  .el-button:nth-child(1) {
    color: #000;
  }

  .el-button:nth-child(2) {
    color: #fff;
    background: #2b53e5;
  }
}

.type-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

.title {
  font-size: 20px;
  font-weight: 500;
  color: #333333;
}

:deep(.el-dialog__header) {
  margin-top: unset;
}
</style>
