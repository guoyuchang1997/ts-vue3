<template>
  <!-- 指纹页 -->
  <div class="fingerprint">
    <div class="header">
      <!-- 动画框 -->
      <div class="loader"></div>
      <!-- 顶部信息层 -->
      <div class="info">
        <span> 18888888888 </span>
        <span @click="renewal">
          <img :class="{ rotated: isRotated }" src="@/assets/img/fingerprint/icon-renew.webp" alt="更新按钮" />
        </span>
      </div>
      <!-- 状态层 -->
      <div class="suspension-title">
        <h1
          >{{ title }}
          <div class="copy-btn" v-if="detectionStatus === 3">
            <img src="@/assets/img/fingerprint/icon-copyBtn.webp" alt="" />
          </div>
          <div class="abnormal" v-if="detectionStatus === 4">
            <img src="@/assets/img/fingerprint/icon-mistake.webp" alt="" />
            <span>请检查代理IP是否可用</span>
          </div>
        </h1>
        <ul v-if="detectionStatus === 3 || detectionStatus === 4">
          <li>芝麻HTTP</li>
          <li class="line">|</li>
          <li>中国内地</li>
          <li class="line">|</li>
          <li>Zhejiang</li>
          <li class="line">|</li>
          <li>Hangzhou</li>
        </ul>
      </div>
      <div class="suspension-step">
        <!-- 步长 可以使用loding类去让图片开转-->
        <ul>
          <li class="loding"> <img src="@/assets/img/fingerprint/icon-loading.webp" /> <span>环境检测</span> </li>
          <li class="line"></li>
          <li class="loding"> <img src="@/assets/img/fingerprint/icon-loading.webp" /> <span>IP检测</span></li>
          <li class="line"></li>
          <li class="loding"> <img src="@/assets/img/fingerprint/icon-loading.webp" /> <span>网络加速</span></li>
        </ul>
      </div>
    </div>
    <!-- 检测信息层 -->
    <div class="safety-container">
      <!-- 基本信息 -->
      <AccountInfo :detection-status="detectionStatus" />
      <!-- 代理失败 -->
      <FailureMessage v-if="detectionStatus === 4" />
      <!-- 指纹信息 -->
      <FingerprintInfo v-if="detectionStatus >= 2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AccountInfo from '@/components/fingerprint/AccountInfo.vue'
import FingerprintInfo from '@/components/fingerprint/FingerprintInfo.vue'
import FailureMessage from '@/components/fingerprint/FailureMessage.vue'
// 环境检测状态 0环境检测中 1环境检测中无账号 2ip检测中 3代理成功 4代理失败
const detectionStatus = ref(3)
// 是否开转
const isRotated = ref(false)
/**
 * 点击更新按钮
 */
const renewal = () => {
  isRotated.value = !isRotated.value
}
/**
 * 计算标题
 */
const title = computed(() => {
  switch (detectionStatus.value) {
    case 0:
      return '环境检测中...'
    case 1:
      return '环境检测中...'
    case 2:
      return 'IP检测中...'
    default:
      return '192.168.0.1'
  }
})
/**
 * 计算标题定位
 */
const titlePosition = computed(() => {
  switch (detectionStatus.value) {
    case 3:
      return '109px'
    case 4:
      return '109px'
    default:
      return '153px'
  }
})
</script>

<style scoped lang="less">
@header-bg-color-start: #54c7c6;
@header-bg-color-end: #449bfd;
@loader-size: 297px;
@loader-border-color: #ffffff8e;
@loader-animation-duration: 3s;
@loader-animation-delay: 1s;

.fingerprint {
  height: 100%;
  background: red;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  .header {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 380px;
    background: linear-gradient(225deg, @header-bg-color-start 0%, @header-bg-color-end 90%, @header-bg-color-end 100%);
    .loader {
      height: @loader-size;
      width: @loader-size;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before,
      &::after {
        position: absolute;
        content: '';
        height: @loader-size;
        width: @loader-size;
        border: 1.5em solid @loader-border-color;
        border-radius: 50%;
        animation: loader-animation @loader-animation-duration linear infinite;
      }

      &::after {
        opacity: 0;
        animation-delay: @loader-animation-delay;
      }
    }
    .suspension-title {
      position: absolute;
      top: v-bind(titlePosition);
      h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-size: 40px;
        font-weight: 700;
        color: #fff;
        .copy-btn {
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-left: 10px;
          img {
            width: 30px;
            height: 30px;
            cursor: pointer;
          }
        }
        .abnormal {
          right: -100px;
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 30px;
          padding: 7px 10px;
          border-radius: 25px;
          background: rgba(255, 255, 255, 0.3);
          img {
            width: 16px;
            height: 16px;
            margin-right: 10px;
          }
          span {
            font-size: 12px;
            font-weight: 350;
            color: #ff0000;
            line-height: 18px;
          }
        }
      }
      ul {
        display: flex;
        margin-top: 20px;
        align-items: center;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        .line {
          margin: 0 20px;
        }
      }
    }
    .suspension-step {
      position: absolute;
      top: 256px;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 384px;
        height: 30px;
        // margin-top: 64px;
        padding: 0 18px;
        border-radius: 70px 70px 70px 70px;
        background: rgba(255, 255, 255, 0.2);
        li {
          display: flex;
          align-items: center;
          font-size: 14px;
          color: #fff;

          img {
            width: 16px;
            height: 16px;
            margin-right: 4px;
          }
        }
        .line {
          width: 34px;
          // 0.5px边框
          border-bottom: 1px solid #fff;
          transform: scaleY(0.5);
        }
        .loding {
          img {
            animation: rotate 3s linear infinite;
          }
        }
      }
    }

    .info {
      position: absolute;
      top: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 1000px;
      height: 10px;
      span:first-child {
        padding: 6px 12px;
        border-radius: 100px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        background: rgba(255, 255, 255, 0.2);
      }
      span:last-child {
        img {
          width: 30px;
          height: 30px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
      }
      .rotated {
        transform: rotate(360deg);
      }
    }
  }

  .safety-container {
    position: absolute;
    top: 350px;
    // 居中
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    padding-bottom: 80px;
  }

  @keyframes loader-animation {
    0% {
      border: 1.5em solid @loader-border-color;
      transform: scale(0);
      opacity: 1;
    }

    100% {
      border: 0 solid @loader-border-color;
      transform: scale(1);
      opacity: 0;
    }
  }

  // 转圈圈
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
