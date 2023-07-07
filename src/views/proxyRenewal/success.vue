<template>
  <div class="success">
    <SuccessIcon />
    <p>设备续费成功</p>
    <div class="btn primary">继续购买</div>
    <div class="btn back">返回账号列表</div>
  </div>
</template>

<script setup lang="ts">
import SuccessIcon from '@/assets/svg/proxy/success.svg'
</script>

<style scoped lang="less">
.success {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  background: linear-gradient(180deg, #ECF3FF 0%, #FFFFFF 100%);
}

p {
  font-size: 20px;
  font-family: Source Han Sans CN-Bold, Source Han Sans CN;
  font-weight: 700;
  color: #333333;
  line-height: 30px;
  margin-top: 23px;
  margin-bottom: 20px;
}

.btn {
  width: 151px;
  height: 40px;
  border: 1px solid #DDDDDD;
  font-size: 14px;
  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
  font-weight: 350;
  color: #666666;
  text-align: center;
  line-height: 40px;
  cursor: pointer;

  &.back {
    background: #FFFFFF;
  }

  &.primary {
    background: #2B53E5;
    color: #ffffff;
    margin-bottom: 15px;
  }
}
</style>
