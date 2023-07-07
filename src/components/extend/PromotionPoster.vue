<template>
  <!-- 推广海报 -->
  <div class="promotion-poster">
    <h1>15%佣金返现！</h1>
    <h2>永久收入，不限期限！</h2>
    <p>分享推广链接或邀请码，推荐用户使用产品以获取奖励。</p>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.promotion-poster {
  height: 213px;
  background: #fff;

  padding: 30px 30px 41px;
  background-image: url('../../assets/img/extend/background-RebateInfoCard-promotionLinkBox.webp');
  background-repeat: no-repeat;
  background-size: cover;
  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #ff8533;
    line-height: 46px;
    margin-bottom: 10px;
  }
  h2 {
    font-size: 32px;
    font-weight: 400;
    color: #333333;
    line-height: 46px;
    margin-bottom: 20px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    color: #666666;
  }
}
</style>
