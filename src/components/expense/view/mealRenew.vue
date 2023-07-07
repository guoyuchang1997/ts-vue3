<template>
  <!-- 套餐续费 -->
  <div class="payment">
    <p class="title">套餐信息</p>
    <div class="user-meal">
      浏览器环境数<span>{{ userMeal.environment_number }}</span> 额外成员数<span>{{ userMeal.member_number }}</span>
      套餐费用<span>￥159.00元/月</span>
    </div>
    <!-- 续费时长 -->
    <div class="duration">
      续费时长：
      <div class="item">
        <p
          v-for="item in effectiveList"
          :key="item.num"
          :class="{ active: duration === item.num }"
          @click="changeDuration(item.num)"
          >{{ item.num }}天</p
        >
      </div>
    </div>
    <!-- 支付方式 -->
    <p class="title">支付方式</p>
    <div class="pay-con">
      <p class="amount">应付金额：<span>￥159.00</span></p>
      <div class="settlement-bottom">
        <span>支付方式：</span>
        <ul>
          <li class="active">
            <div class="item-l">
              <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
              <div class="notSelect"></div>
            </div>
            <div class="item-r">
              <img src="@/assets/img/payType/icon-alipay.webp" />
              <div>
                <p class="text1">支付宝</p>
                <p class="text2">ALIPAY</p>
              </div>
            </div>
          </li>
          <li>
            <div class="item-l">
              <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
              <div class="notSelect"></div>
            </div>
            <div class="item-r">
              <img src="@/assets/img/payType/icon-weChatPay.webp" />
              <div>
                <p class="text1">微信</p>
                <p class="text2">WeChatPay</p>
              </div>
            </div>
          </li>
          <li>
            <div class="item-l">
              <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
              <div class="notSelect"></div>
            </div>
            <div class="item-r">
              <span class="text1">账号云币支付</span>
              <span class="num">（我的云币：30000.00）</span>
              <el-icon>
                <Refresh />
              </el-icon>
              <el-button type="info" @click="emitOpenTopup">充值</el-button>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <p class="automatic-renew" @click="isRenew = !isRenew">
          <img v-if="isRenew" class="select" src="@/assets/img/c-payment/icon-select.webp" />
          <span v-else class="notSelect"></span><span>到期自动续费（请确认扣款账户余额充足）</span>
        </p>
        <p class="automatic-renew-tips"
          >自动续费可手动取消，进入云登录浏览器客户端 - 设备管理 -<el-icon><Setting /></el-icon> - 取消续费</p
        >
      </div>
    </div>
    <div class="submit-payment">
      <button class="resetting-btn" @click="emit('submitPayment')">提交支付</button>
      <span>（如有疑问，请联系客服）</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['submitPayment', 'openTopup'])

/**
 * 续费订单信息
 */
type itemMeal = {
  end_time: string
  free_status: number
  environment_number: number
  member_number: number
  effective_day: number
  payable_amount: number
  validityPeriod: number
}
interface ListItem {
  num: number
  price?: number
  expire?: string
  discount?: number
}
const props = defineProps({
  /**
   * 当前套餐
   */
  userMeal: {
    type: Object as () => itemMeal,
    default: () => ({} as itemMeal),
  },
  /**
   * 续费时长
   */
  effectiveList: {
    type: Array as () => ListItem[],
    default: () => [] as ListItem[],
  },
})

/**
 * 续费时长
 */
const duration = ref(30)

/**
 * 改变续费时长
 * @param item 时长
 */
const changeDuration = (item: number) => {
  duration.value = item
}
/**
 * 自动续费
 */
const isRenew = ref(false)
/**
 * 打开充值
 */
const emitOpenTopup = () => {
  emit('openTopup')
}
</script>

<style lang="less" scoped>
.payment {
  padding: 10px;
  .title {
    font-size: 16px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 700;
    color: #3d3d3d;
    line-height: 24px;
    position: relative;
    padding-left: 15px;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      top: 4px;
      width: 6px;
      height: 16px;
      background: #242af3;
      border-radius: 3px;
    }
  }
  //当前套餐
  .user-meal {
    // height: 50px;
    padding: 14px 10px;
    background: #f4f6fd;
    margin-top: 20px;
    span {
      color: @fontcolor;
      margin-right: 60px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
  // 续费时长
  .duration {
    padding: 20px 0;
    display: flex;
    line-height: 30px;
    .item {
      flex: 1;
      display: flex;
      flex-wrap: wrap;
      p {
        width: 80px;
        height: 30px;
        background: #ffffff;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid rgba(43, 83, 229, 0.1);
        margin-right: 20px;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
        margin-bottom: 10px;
        &.active {
          background: #2b53e5;
          border: 1px solid #2b53e5;
          color: #ffffff;
        }
      }
    }
  }
  // 支付方式
  .pay-con {
    box-shadow: 0px 0px 10px 0px rgba(48, 83, 228, 0.08);
    border-radius: 8px 8px 8px 8px;
    margin-top: 25px;
    padding-bottom: 22px;
    .amount {
      border-bottom: 1px solid #eeeeee;
      line-height: 60px;
      margin: 0 10px;
      font-size: 16px;
      display: flex;
      align-items: center;
      span {
        font-size: 20px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: 700;
        color: #ff6a01;
      }
    }
    .settlement-bottom {
      display: flex;
      align-items: center;
      padding: 0 10px;
      margin-top: 20px;
      margin-bottom: 26px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: #3d3d3d;
        line-height: 24px;
      }

      ul {
        display: flex;
        flex: 1;
        li {
          display: flex;
          min-width: 160px;
          height: 56px;
          border-radius: 8px;
          padding: 0 15px;
          background: #f8faff;
          border: 1px solid #f8faff;
          cursor: pointer;

          &.active {
            border-color: #2b53e5;

            .item-l {
              .select {
                display: block;
              }

              .notSelect {
                display: none;
              }
            }
          }

          .item-l {
            display: flex;
            align-items: center;
            margin-right: 10px;

            img {
              width: 16px;
              height: 16px;
            }

            .select {
              display: none;
            }

            .notSelect {
              display: block;
              width: 16px;
              height: 16px;
              border: 1px solid rgba(43, 83, 229, 0.3);
              border-radius: 4px;
            }
          }

          .item-r {
            display: flex;
            align-items: center;

            img {
              width: 30px;
              height: 30px;
              margin-right: 10px;
              object-fit: contain;
            }

            // 选择第一个p
            .text1 {
              font-size: 14px;
              font-weight: 500;
              color: #333333;
              line-height: 21px;
            }

            // 选择第二个p
            .text2 {
              font-size: 12px;
              font-weight: 400;
              color: #666666;
            }

            .num {
              font-size: 14px;
              color: #666666;
            }

            .el-icon {
              color: @fontcolor;
              margin-right: 25px;
            }

            .el-button {
              --el-button-text-color: #333333;
              --el-button-hover-text-color: #333333;
              --el-button-active-text-color: #333333;
              --el-button-bg-color: #e4edff;
              --el-button-hover-bg-color: #e4edff;
              --el-button-active-bg-color: #e4edff;
            }

            .el-button:focus,
            .el-button:hover,
            .el-button:active {
              border: none;
            }
          }

          & + li {
            margin-left: 10px;
          }
        }
      }
    }
  }
  //自动续费
  .automatic-renew {
    display: flex;
    align-items: center;
    width: 300px;
    margin-top: 10px;
    margin-left: 20px;
    cursor: pointer;
    .notSelect {
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid rgba(43, 83, 229, 0.3);
      border-radius: 4px;
      margin-right: 4px;
    }
    .select {
      width: 16px;
      height: 16px;
      margin-right: 4px;
    }
  }
  .automatic-renew-tips {
    display: flex;
    align-items: center;
    color: #999999;
    font-size: 12px;
    padding-left: 40px;
    .el-icon {
      font-size: 14px;
    }
  }
  .submit-payment {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 30px;
    .resetting-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      height: 50px;
      margin-right: 10px;
      border-radius: 8px;
      font-size: 16px;
      color: #fff;
      background: #2b53e5;
    }
  }
}
</style>
