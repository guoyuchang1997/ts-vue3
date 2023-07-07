<template>
  <div class="personal-info">
    <DecorativeTitle msg="个人信息" font-size="16px" ava-width="3px" ava-height="16px" />
    <div class="top">
      <div class="header-box">
        <div class="header-box-left">
          <img src="@/assets/img/setUp/avater-header.webp" alt="用户头像" />
        </div>
        <div class="header-box-right">
          <div>
            <!-- 已认证用户不允许编辑名称 -->
            <span class="label">姓名：</span><EditInput value="233333333" :big-size="true" @callBack="editUserName" />
            <span class="yellow">
              <el-icon><WarningFilled /></el-icon>未认证
            </span>
            <span class="unnamed-btn" @click="realName">实名认证</span>
            <span class="named-btn">已认证</span>
          </div>
          <p class="user-id"> ID：user_12300 </p>
        </div>
      </div>
      <div class="kefu">
        <div class="left">
          <p class="btn"><kefu-icon></kefu-icon>点击在线咨询</p>
          <p class="btn"><shouji-icon></shouji-icon>19106778023</p>
          <span class="tips">7*24在线咨询</span>
        </div>
        <div class="right">
          <img src="@/assets/img/qr.png" alt="" class="qr" srcset="" />
          <span>有问题扫码咨询</span>
        </div>
      </div>
    </div>
    <!-- 各种绑定 -->
    <ul class="bind-list">
      <li>
        <div class="l">
          <div class="title">
            <shouji-icon></shouji-icon>
            <div>
              <h1>手机登录</h1>
              <p v-if="!!bindInfo.phone">已绑定，可使用手机号登录</p>
              <p v-else>当前未绑定</p>
            </div>
          </div>
        </div>
        <div class="r" :class="{ bind: bindInfo.phone }">
          <span>手机号：{{ bindInfo.phone }}</span>
          <button class="resetting-btn" @click.prevent="bindPhone">{{ bindInfo.phone ? '修改' : '绑定' }}手机号</button>
        </div>
      </li>
      <li>
        <div class="l">
          <div class="title">
            <youxiang-icon></youxiang-icon>
            <div>
              <h1>邮箱登录</h1>
              <p v-if="bindInfo.email">已绑定，可使用邮箱登录</p>
              <p v-else>当前未绑定</p>
            </div>
          </div>
        </div>
        <div class="r">
          <button class="resetting-btn" @click="bindEmail">绑定邮箱</button>
        </div>
      </li>
      <li>
        <div class="l">
          <div class="title">
            <zhanghao-icon></zhanghao-icon>
            <div>
              <h1>账号密码</h1>
              <p>手机登录与邮箱登录密码一致</p>
            </div>
          </div>
        </div>
        <div class="r">
          <button class="resetting-btn" @click="isShowChangePassword = true">修改密码</button>
        </div>
      </li>
      <li>
        <div class="l">
          <div class="title">
            <dingding-icon></dingding-icon>
            <div>
              <h1>钉钉登录</h1>
              <p v-if="bindInfo.email">已绑定，可使用钉钉扫码登录</p>
              <p v-else>已绑定，可使用钉钉扫码登录</p>
            </div>
          </div>
        </div>
        <div class="r">
          <button class="resetting-btn">绑定钉钉</button>
        </div>
      </li>
      <li>
        <div class="l">
          <div class="title">
            <weixin-icon></weixin-icon>
            <div>
              <h1>微信登录</h1>
              <p>当前未绑定，绑定后可使用微信扫码登录</p>
            </div>
          </div>
        </div>
        <div class="r">
          <button class="resetting-btn" @click="bindWeChat">绑定微信</button>
        </div>
      </li>
      <li>
        <div class="l">
          <div class="title">
            <weixin-icon></weixin-icon>
            <div>
              <h1>公众号通知</h1>
              <p>绑定后您可以通过微信公众号接收到权限范围内的通知，如：成员登录申请/续费设备提醒等通知</p>
            </div>
          </div>
        </div>
        <div class="r">
          <button class="resetting-btn">绑定公众号</button>
        </div>
      </li>
    </ul>
    <!-- 绑定微信模态框 -->
    <el-dialog v-model="isShowBindWeChatModal" width="600px" :show-close="false" destroy-on-close>
      <BindWechat>
        <DialogTitle title="绑定微信" @close="bindWeChat" />
      </BindWechat>
    </el-dialog>
    <!-- 绑定手机号模态框 -->
    <el-dialog v-model="isShowBindPhoneModal" width="600px" :show-close="false" destroy-on-close>
      <BindPhone @SubmitForm="bindPhone" @CancelForm="bindPhone">
        <DialogTitle title="绑定手机号" @close="bindPhone" />
      </BindPhone>
    </el-dialog>
    <!-- 绑定邮箱模态框 -->
    <el-dialog v-model="isShowBindEmailModal" width="600px" :show-close="false" destroy-on-close>
      <BindMail @SubmitForm="bindEmail" @CancelForm="bindEmail">
        <DialogTitle title="绑定邮箱" @close="bindEmail" />
      </BindMail>
    </el-dialog>
    <!-- 修改企业用户名弹窗 -->
    <el-dialog v-model="isShowEditUserNameModal" width="600px" :show-close="false" destroy-on-close>
      <ModifyEnterpriseUserName @SubmitForm="editUserName" @CancelForm="editUserName">
        <DialogTitle title="修改个人用户名" @close="editUserName" />
      </ModifyEnterpriseUserName>
    </el-dialog>
    <!-- 实名验证弹窗 -->
    <el-dialog v-model="isShowRealNameModal" width="800px" :show-close="false" destroy-on-close>
      <RealNameVerification>
        <DialogTitle title="实名验证" @close="realName" />
      </RealNameVerification>
    </el-dialog>
    <!-- 修改账号密码 -->
    <el-dialog v-model="isShowChangePassword" width="600px" :show-close="false" destroy-on-close>
      <ChangePassword @submit-form="changePassword" @cancel-form="changePassword">
        <DialogTitle title="修改个人登录密码" @close="changePassword" />
      </ChangePassword>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import DecorativeTitle from '@/components/DecorativeTitle.vue'
import EditInput from '@/components/setup/EditInput.vue'
import DialogTitle from '@/components/DialogTitle.vue'
import BindWechat from '@/components/setup/dialog/BindWechat.vue'
import BindPhone from '@/components/setup/dialog/BindPhone.vue'
import BindMail from '@/components/setup/dialog/BindMail.vue'
import ModifyEnterpriseUserName from '@/components/setup/dialog/ModifyEnterpriseUserName.vue'
import RealNameVerification from '@/components/setup/dialog/RealNameVerification.vue'
import dingdingIcon from '@/assets/img/setUp/svg/dingding.svg'
import ChangePassword from '@/components/setup/dialog/ChangePassword.vue'
import kefuIcon from '@/assets/img/setUp/svg/kefu.svg'
import shoujiIcon from '@/assets/img/setUp/svg/shouji.svg'
import weixinIcon from '@/assets/img/setUp/svg/weixin.svg'
import youxiangIcon from '@/assets/img/setUp/svg/youxiang.svg'
import zhanghaoIcon from '@/assets/img/setUp/svg/zhanghao.svg'
import { ref, isReactive } from 'vue'

// 是否显示绑定微信模态框
const isShowBindWeChatModal = ref(false)
/**
 * 绑定微信
 */
const bindWeChat = () => {
  isShowBindWeChatModal.value = !isShowBindWeChatModal.value
}

// 是否显示绑定手机号模态框绑定手机号
const isShowBindPhoneModal = ref(false)
/**
 * 绑定手机号
 * @param formData 表单数据
 */
const bindPhone = formData => {
  // 校验formData是否为响应式对象 如果是响应式对象则为提交表单
  if (isReactive(formData)) {
    console.log(formData)
  } else {
    isShowBindPhoneModal.value = !isShowBindPhoneModal.value
  }
}

// 是否显示绑定邮箱手机号
const isShowBindEmailModal = ref(false)
/**
 * 绑定邮箱
 * @param formData 表单数据
 */
const bindEmail = formData => {
  if (isReactive(formData)) {
    console.log(formData)
  } else {
    isShowBindEmailModal.value = !isShowBindEmailModal.value
  }
}
// 是否显示修改企业用户名
const isShowEditUserNameModal = ref(false)
/**
 * 修改企业用户名
 * @param formData 表单数据
 */
const editUserName = formData => {
  if (isReactive(formData)) {
    console.log(formData)
  } else {
    isShowEditUserNameModal.value = !isShowEditUserNameModal.value
  }
}
// 是否显示实名验证模态框
const isShowRealNameModal = ref(false)
/**
 * 实名验证
 */
const realName = () => {
  isShowRealNameModal.value = !isShowRealNameModal.value
}
/**
 * 绑定手机号
 */
const bindInfo = ref({
  phone: '12345677894',
  email: '',
})
/**
 * 修改账号密码
 */
const isShowChangePassword = ref(false)
/**
 * 修改账号密码
 * @param formData 表单数据
 */
const changePassword = formData => {
  if (isReactive(formData)) {
    console.log(formData)
  } else {
    isShowChangePassword.value = !isShowChangePassword.value
  }
}
</script>

<style lang="less" scoped>
.personal-info {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .kefu {
      border-radius: 3px 3px 3px 3px;
      border: 1px solid #01aef3;
      padding: 15px;
      display: flex;
      .tips {
        font-size: 12px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #999999;
        line-height: 17px;
      }
      .left {
        text-align: center;
        .btn {
          width: 113px;
          height: 24px;
          background: #01aef3;
          border: 1px solid #01aef3;
          border-radius: 50px;
          color: #fff;
          line-height: 24px;
          font-size: 12px;
          margin-bottom: 10px;
          svg {
            width: 16px;
            height: 16px;
            fill: #fff;
            vertical-align: sub;
            margin-right: 5px;
          }
          &:first-child {
            cursor: pointer;
          }
          & + .btn {
            background: #fff;
            color: #01aef3;
            svg {
              fill: #01aef3;
            }
          }
        }
      }
      .right {
        padding-left: 15px;
        .qr {
          width: 72px;
          height: 72px;
          display: block;
          margin: 0 auto 6px;
        }
        span {
          .tips;
          color: #666666;
        }
      }
    }
  }
  .header-box {
    display: flex;
    align-items: center;
    margin-top: 20px;
    .header-box-left {
      img {
        width: 80px;
        height: 80px;
        margin-right: 20px;
        border-radius: 50%;
      }
    }
    .header-box-right {
      div {
        display: flex;
        align-items: center;
        // span {
        //   display: flex;
        //   justify-content: center;
        //   align-items: center;
        //   margin-left: 12px;
        //   width: 60px;
        //   height: 24px;
        //   border-radius: 4px;
        //   color: #fff;
        //   font-size: 12px;
        //   font-weight: 400;
        //   background: #2d5aff;
        //   cursor: pointer;
        // }
        .label {
          font-size: 14px;
          font-family: Source Han Sans CN-Normal, Source Han Sans CN;
          font-weight: 350;
          color: #666666;
        }
        .yellow {
          color: #ff7b00;
          font-size: 14px;
          padding-left: 20px;
          .el-icon {
            vertical-align: text-bottom;
            margin-right: 5px;
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
          margin-left: 10px;
        }
        .named-btn {
          .btn;
          background: linear-gradient(-90deg, #ed6f3e 2%, #ffbe0a 100%);
          margin-left: 20px;
        }
      }
      p.user-id {
        margin-top: 10px;
        font-size: 14px;
        font-weight: 300;
        color: #666666;
        display: inline-block;
        line-height: 20px;
        font-weight: 350;
        background: rgba(45, 90, 255, 0.05);
        border-radius: 4px;
        padding: 6px 10px;
      }
    }
  }
  .bind-list {
    margin-top: 10px;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px 0;
      flex-wrap: wrap;
      border-bottom: 1px solid #eeeeee;
      padding: 17px 10px;
      &:nth-child(1) {
        border-top: 1px solid #eeeeee;
      }
      .l {
        .title {
          display: flex;
          align-items: center;
          svg {
            width: 30px;
            height: 30px;
            margin-right: 20px;
            fill: #bbbbbb;
          }
          div {
            h1 {
              font-size: 16px;
              font-weight: 600;
              color: #333333;
              line-height: 23px;
            }
            P {
              font-size: 14px;
              font-weight: 350;
              color: #999999;
              line-height: 20px;
            }
          }
        }
      }
      .r {
        display: flex;
        align-items: center;
        .resetting-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-left: 20px;
          width: 90px;
          height: 36px;
          border-radius: 4px;
          color: #fff;
          background: #2d5aff;
          border: 1px solid #2d5aff;
        }
        &.bind {
          .resetting-btn {
            background: #fff;
            color: #333333;
            border: 1px solid #cccccc;
          }
        }
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
