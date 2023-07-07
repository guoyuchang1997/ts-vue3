<template>
  <!-- 创建新公司 -->
  <div class="created-team">
    <!-- 插槽 -->
    <slot></slot>
    <div class="form-box">
      <el-form label-position="top" label-width="100px" :model="queryForm" :rules="rules" ref="queryFormRef">
        <el-form-item label="公司名称" prop="companyName">
          <el-input v-model="queryForm.companyName" placeholder="请输入您的新公司名称" />
        </el-form-item>
        <el-form-item label="安全验证方式" prop="verificationMethod">
          <el-select v-model="queryForm.verificationMethod" class="m-2" placeholder="请选择安全验证方式" size="large">
            <el-option value="1" label="手机" />
            <el-option value="2" label="邮箱" />
          </el-select>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile">
          <el-input v-model="queryForm.mobile" placeholder="请输入手机号" />
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode">
          <el-input v-model="queryForm.verificationCode" placeholder="请输入验证码" />
          <button
            :class="[
              { 'verification-btn': verificationCodeText === '获取验证码' },
              { 'verification-btn-disable': verificationCodeText !== '获取验证码' },
            ]"
            @click.prevent="getVerificationCode"
            >{{ verificationCodeText }}</button
          >
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
  companyName: [
    { required: true, message: '请输入公司名称', trigger: 'blur' },
    { min: 2, max: 20, message: '长度在 2 到 20 个字符', trigger: 'blur' },
  ],
  verificationMethod: [{ required: true, message: '请选择安全验证方式', trigger: 'change' }],
  mobile: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' },
  ],
  verificationCode: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
})
// 修改密码表单
const queryForm = reactive({
  companyName: '',
  verificationMethod: '',
  mobile: '',
  verificationCode: '',
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

// 验证码文本
const verificationCodeText = ref('获取验证码')

/**
 * 获取验证码
 */
const getVerificationCode = () => {
  // 倒计时60秒
  let time = 60
  const timer = setInterval(() => {
    time--
    verificationCodeText.value = `重新获取 ${time} s`
    if (time <= 0) {
      clearInterval(timer)
      verificationCodeText.value = '获取验证码'
    }
  }, 1000)
}
</script>

<style scoped lang="less">
// 引入模态框表单样式
@import '@/assets/style/elDialogForm.less';
.created-team {
  .form-box {
    margin-top: 40px;
    // padding: 0 10px;
    padding-bottom: 10px;
  }
}
// :deep(.el-form-item__content) {
//   width: 100%;
//   height: 30px;

//   .el-input__wrapper {
//     width: 100%;
//     height: 30px;
//   }
// }
:deep(.m-2) {
  // height: 30px;
  width: 100%;
  .el-input__wrapper {
    height: 34px;
  }
}
</style>
