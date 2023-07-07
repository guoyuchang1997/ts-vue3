<script lang="ts" setup>
import { useRouter } from 'vue-router'
import BackIcon from '@/assets/svg/proxy/back.svg'

const router = useRouter()
/**
 * 返回
 */
const handleBack = () => {
  router.push('/plat-proxy')
}
</script>

<template>
  <div class="proxy-renewal">
    <div class="header">
      <div class="back" @click="handleBack">
        <BackIcon />
        <span>代理续费</span>
      </div>
      <div class="steps">
        <div class="step active">
          <div class="index">1</div>
          <span>选择续费方案</span>
          <div class="line"></div>
        </div>
        <div class="step">
          <div class="index">2</div>
          <span>核对订单及支付</span>
          <div class="line"></div>
        </div>
        <div class="step">
          <div class="index">3</div>
          <span>续费成功</span>
        </div>
      </div>
    </div>
    <div class="contnet">
      <router-view />
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
