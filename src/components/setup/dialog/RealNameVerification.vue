<template>
  <!-- 实名认证 -->
  <div class="real-name-verification">
    <!-- 插槽 -->
    <slot></slot>
    <div class="real-name-verification-box">
      <!-- 步骤条 -->
      <div class="steps">
        <ul>
          <li>
            <img :src="computedProcedure.procedure11" alt="" />
            <span>信息认证</span>
          </li>
          <li :class="steps === 1 || steps === 2 ? 'line-active' : 'line-no-active'"></li>
          <li>
            <img :src="computedProcedure.procedure12" alt="" />
            <span>刷脸认证</span>
          </li>
          <li :class="steps === 2 || steps === 3 ? 'line-active' : 'line-no-active'"></li>
          <li>
            <img :src="computedProcedure.procedure13" alt="" />
            <span>认证成功</span>
          </li>
        </ul>
      </div>
      <!-- 信息认证 -->
      <div v-if="steps === 1" class="step1">
        <div class="steps-box">
          <el-form label-position="top" label-width="100px" :model="queryForm" :rules="rules" ref="queryFormRef">
            <el-form-item label="真实姓名" prop="name">
              <el-input v-model="queryForm.name" placeholder="请输入真实姓名" />
            </el-form-item>
            <el-form-item label="身份证号" prop="noID">
              <el-input v-model="queryForm.noID" placeholder="请输入身份证号" />
            </el-form-item>
            <el-form-item style="margin-bottom: 63px">
              <el-button class="preserve" type="primary" @click.prevent="onSubmit(queryFormRef)">提交审核</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 刷脸认证 -->
      <div v-if="steps === 2" class="step2">
        <p>您已完成信息认证，请使用<span>支付宝扫一扫</span>进行刷脸认证</p>
        <div class="qr-code-box"></div>
      </div>
      <!-- 认证成功 -->
      <div v-if="steps === 3" class="step3">
        <img src="@/assets/img/setUp/avater-completeCertification.webp" alt="认证成功" />
        <p>恭喜您！您已完成实名认证</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 引入图片
import procedureComplete from '@/assets/img/setUp/avater-procedure-complete.webp'
import procedure11 from '@/assets/img/setUp/avater-procedure1-1.webp'
import procedure12 from '@/assets/img/setUp/avater-procedure1-2.webp'
import procedure13 from '@/assets/img/setUp/avater-procedure1-3.webp'
import procedure21 from '@/assets/img/setUp/avater-procedure2-1.webp'
import procedure31 from '@/assets/img/setUp/avater-procedure3-1.webp'

// 用于计算实名状态步骤
const steps = ref(1)

// 表单验证规则
const rules = {
  name: [{ required: true, message: '请输入真实姓名', trigger: 'blur' }],
  noID: [
    { required: true, message: '请输入身份证号', trigger: 'blur' },
    { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号', trigger: 'blur' },
  ],
}

// 表单数据
const queryForm = reactive({
  name: '',
  noID: '',
})

// 表单DOM
const queryFormRef = ref(null)

/**
 * 表单提交
 * @param fromData 表单数据
 */
const onSubmit = fromData => {
  fromData.validate(valid => {
    if (valid) {
      steps.value = 2
    } else {
      return false
    }
  })
}

/**
 * 根据步骤计算出步长图片路径
 */
const computedProcedure = computed(() => {
  switch (steps.value) {
    case 1:
      return {
        procedure11,
        procedure12,
        procedure13,
      }
    case 2:
      return {
        procedure11: procedureComplete,
        procedure12: procedure21,
        procedure13,
      }
    case 3:
      return {
        procedure11: procedureComplete,
        procedure12: procedureComplete,
        procedure13: procedure31,
      }
  }
})
</script>

<style scoped lang="less">
.real-name-verification {
  .real-name-verification-box {
    padding: 0 10px;
    .steps {
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px auto 0;
        width: 632px;
        li {
          display: flex;
          align-items: center;
          img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
          }
        }
        .line-active {
          width: 120px;
          border-bottom: 1px dashed #446ae0;
        }
        .line-no-active {
          width: 120px;
          border-bottom: 1px dashed #ccc;
        }
      }
    }
    .step1 {
      margin: 50px auto 0;
      width: 320px;
      .preserve {
        width: 100%;
        height: 38px;
        margin-top: 37px;
        border: 1px solid #2b53e5;
        font-size: 16px;
        background: #2b53e5;
      }
    }
    .step2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        margin: 50px 0 40px;
        font-size: 20px;
        color: #3d3d3d;
        span {
          color: #446ae0;
        }
      }
      .qr-code-box {
        width: 200px;
        height: 200px;
        margin-bottom: 30px;
        border-radius: 8px;
        background: #ccc;
      }
    }
    .step3 {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 40px;
      img {
        width: 268px;
        height: 206px;
      }
      p {
        margin-top: 22px;
        margin-bottom: 54px;
        font-size: 20px;
        font-weight: 600;
        color: #3d3d3d;
        line-height: 29px;
      }
    }
  }
}
</style>
