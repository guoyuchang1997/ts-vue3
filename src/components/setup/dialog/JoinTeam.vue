<template>
  <!-- 绑定手机号 -->
  <div class="join-team">
    <!-- 插槽 -->
    <slot></slot>
    <div class="form-box">
      <el-form label-position="top" label-width="100px" :model="queryForm" :rules="rules" ref="queryFormRef">
        <el-form-item label="团队ID：" prop="teamID">
          <el-input v-model="queryForm.teamID" placeholder="请输入团队ID" />
        </el-form-item>
        <!-- <el-form-item label="用户名：" prop="userName">
          <el-input v-model="queryForm.userName" placeholder="请输入用户名" />
        </el-form-item> -->
        <!-- <el-form-item label="密码：" prop="passWord">
          <el-input
            v-model="queryForm.passWord"
            type="password"
            placeholder="请输入6-20位数字和字母组合"
            show-password
          />
        </el-form-item> -->
        <el-form-item label="真实姓名：" prop="realName">
          <el-input v-model="queryForm.realName" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item label="联系方式：" prop="contactInformation">
          <el-input v-model="queryForm.contactInformation" placeholder="请输入正确的手机号" />
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
  teamID: [{ required: true, message: '请输入团队ID', trigger: 'blur' }],
  // userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  // passWord: [
  //   { required: true, message: '请输入密码', trigger: 'blur' },
  //   { pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, message: '请输入6-20位数字和字母组合', trigger: 'blur' },
  // ],
  realName: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
  contactInformation: [
    { required: true, message: '请输入联系方式', trigger: 'blur' },
    { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' },
  ],
})
// 修改密码表单
const queryForm = reactive({
  teamID: '',
  userName: '',
  passWord: '',
  realName: '',
  contactInformation: '',
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
.join-team {
  .form-box {
    margin-top: 40px;
    padding: 0 10px;
  }
}
</style>
