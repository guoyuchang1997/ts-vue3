<template>
  <!-- 修改企业用户名 -->
  <div class="modify-enterprise-user-name">
    <!-- 插槽 -->
    <slot></slot>
    <div class="form-box">
      <el-form label-position="top" label-width="100px" :model="queryForm" :rules="rules" ref="queryFormRef">
        <el-form-item label="用户名" prop="phoneEmail">
          <el-input v-model="queryForm.phoneEmail" placeholder="修改个人用户名" />
        </el-form-item>

        <el-form-item>
          <div class="post-btn-box">
            <el-button class="cancel" @click="emit('CancelForm')">取消</el-button>
            <el-button class="preserve" type="primary" @click="onSubmit(queryFormRef)">保存</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['SubmitForm', 'CancelForm'])
const queryFormRef = ref(null)

// 表单验证规则
const rules = reactive({
  phoneEmail: [{ required: true, message: '请输入企业用户名', trigger: 'blur' }],
})
// 修改密码表单
const queryForm = reactive({
  phoneEmail: '',
})
/**
 * 提交表单
 * @param fromData 表单数据
 */
const onSubmit = fromData => {
  fromData.validate(valid => {
    if (valid) {
      emit('SubmitForm', queryForm)
    } else {
      return false
    }
  })
}
</script>

<style scoped lang="less">
// 引入模态框表单样式
@import '@/assets/style/elDialogForm.less';
.modify-enterprise-user-name {
  .form-box {
    margin-top: 40px;
    padding: 0 10px;
  }
}
</style>
