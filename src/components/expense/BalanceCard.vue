<template>
  <!-- 余额卡片 -->
  <div class="balance-card" v-bind="$attrs">
    <!-- 充值 -->
    <div class="balance-card-top">
      <div class="balance-card-top-left">
        <img src="@/assets/img/c-header/icon-cloudCoin.webp" alt="云币icon" />
        <h1>云币数</h1>
      </div>
      <div class="balance-card-top-right">
        <button
          class="resetting-btn"
          @mouseenter="isHoverBox = 'block'"
          @mouseleave="isHoverBox = 'none'"
          @click="emit('show-topup')"
        >
          <img src="@/assets/img/expense/icon-recharge.webp" alt="充值icon" />
          <span>充值</span>
        </button>
      </div>
    </div>
    <!-- 云币数量 -->
    <div class="balance-card-bottom">
      <p>2333.00</p>
    </div>
    <!-- 悬浮弹框 -->
    <div class="hoverBox">
      <h2>关于云币</h2>
      <ul>
        <li> 云币是云登提供的一种内部结算形式，1元（RMB）=1云币。 </li>
        <li>云币可以用于购买云登设备与套餐，支付时选择使用云币支付，用多少扣多少。</li>
        <li>云币充值记录、消费记录、剩余余额，在个人中心查询。</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const isHoverBox = ref('none')
const emit = defineEmits(['show-topup'])
</script>

<style lang="less" scoped>
.balance-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 266px;
  height: 118px;
  padding: 15px;
  background: url('@/assets/img/expense/bg-balanceCard.webp') no-repeat;
  background-size: 100% 100%;
  .balance-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .balance-card-top-left {
      display: flex;
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      h1 {
        font-size: 18px;
        font-weight: 700;
        line-height: 30px;
        color: #fff;
      }
    }
    .balance-card-top-right {
      .resetting-btn {
        border-radius: 6px;
        padding: 8px 15px;
        font-size: 12px;
        color: #ff685f;
        background: #fff;
        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
      }
    }
  }
  .balance-card-bottom {
    font-size: 36px;
    font-weight: 700;
    color: #ffffff;
    line-height: 40px;
    font-family: DIN-Bold, DIN;
  }
  .hoverBox {
    display: v-bind(isHoverBox);
    position: absolute;
    top: -15px;
    left: 282px;
    width: 482px;
    height: 140px;
    border-radius: 8px 8px 8px 8px;
    padding: 15px 20px;
    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    h2 {
      font-size: 14px;
      color: #333333;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px 0;
      margin-top: 10px;
      li {
        display: flex;
        align-items: center;
        font-size: 12px;
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
    // 侧边追加三角和投影
    // &:after {
    //   content: '';
    //   position: absolute;
    //   top: 40px;
    //   left: -13px;
    //   width: 25px;
    //   height: 25px;
    //   margin-top: -10px;
    //   background: #fff;
    //   transform: rotate(45deg);
    //   // 只有左侧投影
    //   box-shadow: -2px 0px 5px 0px rgba(83, 83, 229, 0.2);
    // }
  }
}
</style>
