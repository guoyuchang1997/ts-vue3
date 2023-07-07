<template>
  <!-- 绑定微信模态框 -->
  <div class="bind-we-chat">
    <!-- 插槽 -->
    <slot></slot>
    <div class="qrCodeBox">
      <div class="qrCode"></div>
    </div>
    <p>打开<span>微信</span>扫一扫&#x3000;绑定微信</p>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.bind-we-chat {
  display: flex;
  flex-direction: column;
  align-items: center;
  .qrCodeBox {
    width: 200px;
    height: 200px;
    border: 1px solid #dddddd;
    margin-top: 40px;
    padding: 15px;
    .qrCode {
      width: 170px;
      height: 170px;
      background: #dddddd;
    }
  }
  p {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 60px;
    span {
      color: red;
    }
  }
}
</style>
