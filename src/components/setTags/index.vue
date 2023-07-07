<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const tagName = ref('')

/**
 * 打开弹窗
 */
const openDialog = () => {
  visible.value = true
}

/**
 * 关闭弹窗
 */
const closeDialog = () => {
  visible.value = false
}

defineExpose({
  openDialog,
  closeDialog,
})
</script>

<template>
  <el-dialog v-model="visible" :title="null" width="800" class="set-tags-dialog">
    <template #header>
      <div class="custom-title">设置标签</div>
    </template>
    <template #default>
      <div class="content">
        <div class="item">
          <div class="label">代理方式：</div>
          <div class="item-wrapper">
            <span style="margin-right: 30px">01/名称</span>
            <span>02/名称</span>
          </div>
        </div>
        <div class="item">
          <div class="label">输入标签：</div>
          <div class="item-wrapper">
            <div class="content">
              <el-input v-model="tagName" placeholder="请输入标签" />
              <button class="link-btn">创建</button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <el-button plain @click="closeDialog">取消</el-button>
      <el-button type="primary">保存</el-button>
    </template>
  </el-dialog>
</template>

<style scoped lang="less">
.set-tags-dialog {
  .el-dialog__header {
    margin-top: 0;
  }

  .custom-title {
    font-size: 18px;
    color: #3d3d3d;
    line-height: 29px;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 14px;
    margin-bottom: 30px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
  }

  .content {
    .item {
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      font-size: 14px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #333333;
      line-height: 32px;

      .item-wrapper {
        .content {
          width: 320px;
          height: 32px;
          display: flex;
          align-items: center;
          padding-right: 10px;
          background: #FFFFFF;
          border-radius: 4px 4px 4px 4px;
          opacity: 1;
          border: 1px solid #DDDDDD;

          :deep(.el-input) {
            height: 100%;

            .el-input__wrapper {
              box-shadow: none;
            }
          }

          .link-btn {
            cursor: pointer;
            flex-shrink: 0;
            border: 0;
            outline: 0;
            background: none;
            font-size: 14px;
            font-family: Source Han Sans CN-Normal, Source Han Sans CN;
            font-weight: 350;
            color: #2B53E5;
          }
        }
      }
    }
  }

  .el-button {
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;

    &.is-plain {
      width: 80px;
      height: 40px;
      border-radius: 8px;
      border: 1px solid #333333;
    }

    &.el-button--primary {
      color: #FFFFFF;
      border-color: #2B53E5;
    }
  }
}
</style>
