<template>
  <!-- 支付模板 -->
  <div class="payment">
    <!-- 云币充值 -->
    <DecorativeTitle msg="云币充值" style="margin-top: 25px; margin-left: 10px" />
    <ul class="set-meal-list">
      <li :class="{ active: amountType === 0 }" @click="changeAmount(0)">¥100</li>
      <li :class="{ active: amountType === 1 }" @click="changeAmount(1)">¥1000</li>
      <li :class="{ active: amountType === 2 }" @click="changeAmount(2)">¥1500</li>
      <li :class="{ active: amountType === 3 }" @click="changeAmount(3)">¥5000</li>
    </ul>
    <!-- 关于云币 -->
    <div class="about">
      <h2>关于云币</h2>
      <ul>
        <li> 云币是云登提供的一种内部结算形式，1元（RMB）=1云币。 </li>
        <li>云币可以用于购买云登设备与套餐，支付时选择使用云币支付，用多少扣多少。</li>
        <li>云币充值记录、消费记录、剩余余额，在个人中心查询。</li>
      </ul>
    </div>
    <!-- 支付方式 -->
    <DecorativeTitle msg="支付方式" style="margin-top: 30px; margin-left: 10px" />
    <!-- 应付金额&支付方式 -->
    <div class="settlement">
      <div class="settlement-top">
        <span>应付金额：</span>
        <span>¥100</span>
      </div>
      <div class="settlement-bottom">
        <span>支付方式：</span>
        <ul>
          <li
            v-for="item in paymentList"
            :key="item.id"
            :class="{ active: paymentType === item.id }"
            @click="changePayment(item.id)"
          >
            <div class="item-l">
              <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
              <div class="notSelect"></div>
            </div>
            <div class="item-r">
              <img :src="item.icon" />
              <div>
                <p>{{ item.name }}</p>
                <p>{{ item.subtitle }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 提交支付 -->
    <div class="submit-payment">
      <button class="resetting-btn" @click="emit('submitPayment')">提交支付</button>
      <span>（如有疑问，请联系客服）</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import iconAlipay from '@/assets/img/payType/icon-alipay.webp'
import iconWeChatPay from '@/assets/img/payType/icon-weChatPay.webp'
import iconBitPay from '@/assets/img/payType/icon-bitPay.webp'
import iconTransferPay from '@/assets/img/payType/icon-transferPay.webp'
import DecorativeTitle from '@/components/DecorativeTitle.vue'

const emit = defineEmits(['submitPayment'])

// 支付方式列表
const paymentList = ref([
  {
    id: 0,
    name: '支付宝',
    subtitle: 'ALIPAY',
    icon: iconAlipay,
    pay_type: 'zfb',
  },
  {
    id: 1,
    name: '微信',
    subtitle: 'WeChatPay',
    icon: iconWeChatPay,
    pay_type: 'wx',
  },
  {
    id: 2,
    name: '数字支付',
    subtitle: 'Digital currency',
    icon: iconBitPay,
  },
  {
    id: 3,
    name: '对公转账',
    subtitle: 'Public transfer',
    icon: iconTransferPay,
  },
])

const amountType = ref(0)
/**
 * 改变充值套餐
 * @param item 充值套餐
 */
const changeAmount = item => {
  amountType.value = item
}

const paymentType = ref(0)
/**
 * 改变充值状态
 * @param item 支付方式
 */
const changePayment = item => {
  paymentType.value = item
}
</script>

<style lang="less" scoped>
.payment {
  .set-meal-list {
    display: flex;
    gap: 0 15px;
    margin-top: 25px;
    cursor: pointer;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 110px;
      height: 50px;
      border-radius: 6px;
      font-size: 18px;
      background: #fff6e8;
      &.active {
        position: relative;
        border: 1px solid #9e600f;
        border-radius: 8px;
        color: #9e600f;
        &:after {
          content: '';
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 22px;
          height: 22px;
          background-image: url('@/assets/img/c-payment/avater-active.webp') !important;
          background-size: 100% 100%;
        }
      }
    }
  }
  .about {
    margin-top: 25px;
    // margin-left: 10px;
    h2 {
      font-size: 16px;
      color: #333333;
      margin-bottom: 10px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 5px 0;
      margin-top: 10px;
      li {
        display: flex;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: #666666;
        // 前面追加蓝点
        &:before {
          content: '';
          display: inline-block;
          width: 5px;
          height: 5px;
          margin-right: 10px;
          background: #2b53e5;
          border-radius: 50%;
        }
      }
    }
  }
  .settlement {
    margin-top: 25px;
    // margin-left: 10px;
    // margin-right: 10px;
    border-radius: 8px 8px 8px 8px;
    padding: 18px 10px 28px;
    box-shadow: 0px 0px 10px 0px rgba(48, 83, 228, 0.2);
    .settlement-top {
      display: flex;
      align-items: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #eeeeee;

      span:first-child {
        font-size: 16px;
        font-weight: 400;
        color: #333333;
        line-height: 24px;
      }
      span:last-child {
        font-size: 20px;
        font-weight: 700;
        color: #ff6a01;
        line-height: 30px;
      }
    }
    .settlement-bottom {
      display: flex;
      align-items: center;
      margin-top: 20px;
      span {
        font-size: 16px;
        font-weight: 400;
        color: #3d3d3d;
        line-height: 24px;
      }
      ul {
        display: flex;
        gap: 0 15px;
        li {
          display: flex;
          width: 175px;
          height: 56px;
          border-radius: 8px;
          padding: 0 12px;
          padding-right: 0;
          background: rgba(48, 83, 228, 0.08);
          cursor: pointer;
          &.active {
            border: 1px solid #2b53e5;
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
            div {
              // 选择第一个p
              p:first-child {
                font-size: 14px;
                font-weight: 500;
                color: #333333;
                line-height: 21px;
              }
              // 选择第二个p
              p:last-child {
                font-size: 12px;
                font-weight: 400;
                color: #666666;
              }
            }
          }
        }
      }
    }
  }
  .submit-payment {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-top: 35px;
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
