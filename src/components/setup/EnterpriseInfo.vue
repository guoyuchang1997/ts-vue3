<template>
  <div class="enterprise-info">
    <div class="enterprise-info-box">
      <!-- 企业信息 -->
      <div>
        <DecorativeTitle msg="企业信息" font-size="16px" ava-width="3px" ava-height="16px" />
        <!-- 团队名称 -->
        <div class="line">
          <span class="label">团队名称：</span><EditInput value="8292122的团队" @call-back="changeTimeName" />
        </div>
        <!-- 团队id -->
        <div class="line">
          <span class="label">团队ID：</span><EditInput value="team_h9tf5y" :is-show-edit="false" />
        </div>
        <p class="csr">
          <span class="label">认证状态：</span>
          <span class="yellow">
            <el-icon><WarningFilled /></el-icon>未认证
          </span>
          <span class="unnamed-btn">去认证</span>
        </p>
        <p class="csr">
          认证状态：
          <span class="named-btn">已认证</span>
        </p>
      </div>
      <!-- 企业信息  不要了 -->
      <div v-if="false" style="margin-top: 40px">
        <DecorativeTitle msg="企业登录方式" font-size="16px" ava-width="3px" ava-height="16px" ava-color="#FA7232" />
        <!-- 用户名: -->
        <EditInput style="margin-top: 20px" title="用户名：" value="变成光守护嘉然小姐" />
        <!-- 密码 -->
        <EditInput style="margin-top: 20px" title="密码：" value="********" @call-back="changePassword" />
      </div>
      <div class="bottom">
        <p class="title">企业认证方式有：</p>
        <p class="content">1.法人直接认证：需营业执照，适用于办理人是大陆籍法人本人</p>
        <p class="content">2.法人授权认证：需营业执照。大陆籍法人卖名授权，适用于办理人非法人</p>
        <p class="content">3.对公打款认证：需营业执照。企业认证申请表盖章、对公账号等，办理人法人或非法人均适用。</p>
        <p class="content yellow"
          >要求：企业必须在中国工商局注册；如果法人身份系非大陆籍居民，只限大陆籍代理人提交对公打款认证</p
        >
      </div>
    </div>
    <!-- 切换公司按钮 -->
    <button class="resetting-btn" @click="changeCompany">
      <qiehuan-icon></qiehuan-icon>
      <span>切换公司</span>
    </button>
    <!-- 加入/创建新公司按钮 -->
    <button class="resetting-btn" @click="joinCreate">
      <add-icon></add-icon>
      <span>加入/创建新公司</span>
    </button>

    <!-- 修改企业登录方式密码 -->
    <el-dialog v-model="isShowChangePassword" width="600px" :show-close="false" destroy-on-close>
      <ChangePassword @SubmitForm="changePassword" @CancelForm="changePassword">
        <DialogTitle title="修改个人登录密码" @close="changePassword" />
      </ChangePassword>
    </el-dialog>
    <!-- 修改团队名称 -->
    <el-dialog v-model="isShowChangeTimeName" width="600px" :show-close="false" destroy-on-close>
      <ModifyTeamName @SubmitForm="changeTimeName" @CancelForm="changeTimeName">
        <DialogTitle title="修改团队名称" @close="changeTimeName" />
      </ModifyTeamName>
    </el-dialog>
    <!-- 切换公司 -->
    <el-dialog v-model="isShowChangeCompany" width="600px" :show-close="false" destroy-on-close>
      <ChangeCompany @SubmitForm="changeCompany" @CancelForm="changeCompany">
        <DialogTitle title="我的更多公司" @close="changeCompany" />
      </ChangeCompany>
    </el-dialog>
    <!-- 加入创建公司 -->
    <el-dialog v-model="isShowJoinCreate" width="800px" :show-close="false" destroy-on-close>
      <JoinCreate @ShowCreatedTeam="createdTeam" @ShowJoinTeam="joinTeam">
        <DialogTitle title="加入或创建团队" @close="joinCreate" />
      </JoinCreate>
    </el-dialog>
    <!-- 创建新公司 -->
    <el-dialog v-model="isShowCreatedTeam" width="600px" :show-close="false" destroy-on-close>
      <CreatedTeam @submitForm="createdTeam" @CancelForm="createdTeam">
        <DialogTitle title="创建新公司" @close="createdTeam" />
      </CreatedTeam>
    </el-dialog>
    <!-- 申请加入公司 -->
    <el-dialog v-model="isShowJoinTeam" width="600px" :show-close="false" destroy-on-close>
      <JoinTeam @submitForm="joinTeam" @CancelForm="joinTeam">
        <DialogTitle title="申请加入公司" @close="joinTeam" />
      </JoinTeam>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
// 这个页面所有模态框都通过formData往上面传值吧 传值的时候判断一下formData是否为reactive 如果存在就是提交表单 如果不存在就是关闭模态框
import DecorativeTitle from '@/components/DecorativeTitle.vue'
import EditInput from '@/components/setup/EditInput.vue'
import DialogTitle from '@/components/DialogTitle.vue'
import ChangePassword from '@/components/setup/dialog/ChangePassword.vue'
import ModifyTeamName from '@/components/setup/dialog/ModifyTeamName.vue'
import ChangeCompany from '@/components/setup/dialog/ChangeCompany.vue'
import JoinCreate from '@/components/setup/dialog/JoinCreate.vue'
import CreatedTeam from '@/components/setup/dialog/CreatedTeam.vue'
import JoinTeam from '@/components/setup/dialog/JoinTeam.vue'
import addIcon from '@/assets/img/setUp/svg/add.svg'
import qiehuanIcon from '@/assets/img/setUp/svg/qiehuan.svg'

// 是否显示修改团队名称模态
const isShowChangeTimeName = ref(false)
/**
 * 修改团队名称
 */
const changeTimeName = () => {
  isShowChangeTimeName.value = !isShowChangeTimeName.value
}

// 是否显示修改密码模态
const isShowChangePassword = ref(false)
/**
 * 修改企业登录密码
 * @param formData 表单数据
 */

const changePassword = formData => {
  console.log('-------')
  // if (formData) {
  //   // 准备进行修改密码操作
  //   console.log(formData)
  // } else {
  //   isShowChangePassword.value = !isShowChangePassword.value
  // }
}

// 是否显示切换公司模态
const isShowChangeCompany = ref(false)
/**
 * 切换公司
 */
const changeCompany = () => {
  isShowChangeCompany.value = !isShowChangeCompany.value
}

// 是否显示加入创建公司
const isShowJoinCreate = ref(false)
/**
 * 加入创建公司
 */
const joinCreate = () => {
  isShowJoinCreate.value = !isShowJoinCreate.value
}

// 是否显示创建新公司
const isShowCreatedTeam = ref(false)
/**
 * 创建新公司
 */
const createdTeam = () => {
  isShowJoinCreate.value = !isShowJoinCreate.value
  isShowCreatedTeam.value = !isShowCreatedTeam.value
}

// 是否显示申请加入公司
const isShowJoinTeam = ref(false)
/**
 * 申请加入公司
 */
const joinTeam = () => {
  isShowJoinCreate.value = !isShowJoinCreate.value
  isShowJoinTeam.value = !isShowJoinTeam.value
}
</script>

<style lang="less" scoped>
.enterprise-info {
  position: relative;
  height: 100%;
  padding-bottom: 280px;
  .enterprise-info-box {
    border-radius: 8px;
    padding: 20px;
    background: #f8faff;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    border-radius: 8px;
    width: 100%;
    padding: 16px 0;
    background: #f8faff;
    svg {
      margin-right: 4px;
      width: 14px;
      height: 14px;
    }
  }
  .label {
    width: 70px;
  }
  .line {
    display: flex;
    margin-top: 20px;
    .edit-input {
      flex: 1;
    }
  }

  .csr {
    display: flex;
    align-items: center;
    margin-top: 17px;
    font-size: 14px;
    .yellow {
      color: #ff7b00;
      margin-right: 10px;
      .el-icon {
        vertical-align: text-bottom;
      }
    }
    .btn {
      width: 68px;
      height: 24px;
      border-radius: 4px;
      font-size: 12px;
      text-align: center;
      line-height: 24px;
      color: #ffffff;
      cursor: pointer;
    }
    .unnamed-btn {
      .btn;
      background: #2b53e5; //linear-gradient(90deg, #ed6f3e 2%, #edbd3b 100%)
    }
    .named-btn {
      .btn;
      background: linear-gradient(-90deg, #ed6f3e 2%, #ffbe0a 100%);
    }
  }
  .bottom {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 20px;
    width: 100%;
    background: rgba(255, 123, 0, 0.05);
    border-radius: 8px 8px 8px 8px;
    .title {
      font-size: 12px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #333333;
      line-height: 17px;
      padding-bottom: 5px;
    }
    .content {
      margin-bottom: 10px;
      font-size: 12px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #333333;
      line-height: 18px;
      &:last-child {
        margin-bottom: 0;
      }
      &.yellow {
        color: #ff7b00;
      }
    }
  }
}
:deep(.el-dialog) {
  .el-dialog__header {
    margin-top: 0;
  }
}
</style>
