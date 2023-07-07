<template>
  <!-- 充值二维码模板 -->
  <div class="qr-code-pay">
    <!-- 头部 -->
    <div class="header">
      <span>支付宝支付</span>
      <span class="pointer" @click="emit('cancelOrder')">取消订单</span>
    </div>
    <!-- 订单倒计时 -->
    <div class="countdown">
      <div class="countdown-left">
        <img src="@/assets/img/icon-prompt.webp" />
      </div>
      <div class="countdown-right">
        <p>
          订单 <span>{{ countdownText }}</span> 后订单将自动取消，请在订单取消完成前完成支付！</p
        >
        <p>若订单中使用了优惠券，订单取消后会原路返回您的账户中。</p>
      </div>
    </div>
    <div class="qr-code-box">
      <p>需要支付金额</p>
      <p>¥500.35</p>
      <!-- TODO:引入vue-qr -->
      <div class="qr-code"></div>
      <p>请打开支付宝扫一扫</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onUnmounted } from 'vue'

const emit = defineEmits(['cancelOrder'])
// 倒计时计时器
let timer = null
// 倒计时文本
const countdownText = ref('30:00')

/**
 * 倒计时30分钟
 */
const countdown = () => {
  let time = 30 * 60
  let isGetOredrType = 0
  timer = setInterval(() => {
    // 计时器耗尽 结束计时并且触发取消订单事件
    if (time <= 0) {
      clearInterval(timer)
      emit('cancelOrder')
    } else {
      time--
      if (isGetOredrType < 5) {
        isGetOredrType++
      } else {
        isGetOredrType = 0
        getOredrType()
      }
      countdownText.value = `${Math.floor(time / 60)}:${time % 60}`
    }
  }, 1000)
}

/**
 * 请求服务端订单状态
 */
const getOredrType = () => {
  console.log('准备向服务端请求订单状态')
}

onMounted(() => {
  countdown()
})
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<style lang="less" scoped>
.qr-code-pay {
  padding: 0 10px 10px 10px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    // 选择第一个span
    span:nth-child(1) {
      font-size: 24px;
      font-weight: 700;
      color: #3d3d3d;
      line-height: 32px;
    }
    // 选择最后一个span
    span:nth-child(2) {
      font-size: 18px;
      font-weight: 350;
      color: #3053e4;
      line-height: 17px;
    }
  }
  .countdown {
    display: flex;
    border: 1px solid #ffcc8e;
    border-radius: 4px 4px 4px 4px;
    padding: 15px;
    background: #fff7ed;
    .countdown-left {
      margin-right: 10px;
      img {
        width: 16px;
        height: 16px;
      }
    }

    .countdown-right {
      width: 100%;
      font-size: 16px;
      p {
        span {
          color: #ff8e00;
        }
        &:nth-child(1) {
          margin-bottom: 5px;
        }
      }
    }
  }
  .qr-code-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;

    p:nth-child(1) {
      font-size: 14px;
      font-weight: 400;
      color: #999999;
      line-height: 20px;
    }
    p:nth-child(2) {
      margin-top: 10px;
      font-size: 30px;
      font-weight: 700;
      color: #f29e38;
      line-height: 27px;
    }
    .qr-code {
      width: 200px;
      height: 200px;
      margin: 20px 0;
      background: #999999;
    }
  }
}
</style>
