<template>
  <!-- 修改个人登录密码 -->
  <div class="change-password">
    <!-- 插槽 -->
    <slot></slot>
    <div class="form-box">
      <el-form label-position="top" label-width="100px" :model="queryForm" :rules="rules" ref="queryFormRef">
        <el-form-item label="手机/邮箱" prop="phoneEmail">
          <el-input v-model="queryForm.phoneEmail" placeholder="请输入手机号或邮箱" />
        </el-form-item>
        <el-form-item label="验证码" prop="verificationCode">
          <el-input v-model="queryForm.verificationCode" placeholder="请输入验证码" />
          <!-- verification-btn verification-btn-disable -->
          <button
            :class="[
              { 'verification-btn': verificationCodeText === '获取验证码' },
              { 'verification-btn-disable': verificationCodeText !== '获取验证码' },
            ]"
            @click.prevent="getVerificationCode"
            >{{ verificationCodeText }}</button
          >
        </el-form-item>
        <el-form-item label="设置新密码" prop="password">
          <el-input
            v-model="queryForm.password"
            type="password"
            placeholder="请输入6-20位数字和字母组合"
            show-password
          />
        </el-form-item>
        <!-- <el-form-item label="确认新密码" prop="confirmPassword">
          <el-input v-model="queryForm.confirmPassword" type="password" placeholder="请再次输入新密码" show-password />
        </el-form-item> -->

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
  phoneEmail: [
    { required: true, message: '请输入手机号或邮箱', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const phonePattern = /^1[3456789]\d{9}$/ // 手机号正则表达式
        const emailPattern = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ // 邮箱正则表达式

        if (!phonePattern.test(value) && !emailPattern.test(value)) {
          callback(new Error('请输入正确的手机号或邮箱'))
        } else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
  verificationCode: [
    { required: true, message: '请输入验证码', trigger: 'blur' },
    { pattern: /^\d{6}$/, message: '请输入正确的验证码', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: '请输入6-20位数字和字母组合', trigger: 'blur' },
  ],
  // confirmPassword: [
  //   { required: true, message: '请输入确认密码', trigger: 'blur' },
  //   { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: '请输入6-20位数字和字母组合', trigger: 'blur' },
  // ],
})
// 修改密码表单
const queryForm = reactive({
  phoneEmail: '',
  verificationCode: '',
  password: '',
  confirmPassword: '',
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
.change-password {
  .form-box {
    margin-top: 40px;
    padding: 0 10px;
  }
}
</style>
