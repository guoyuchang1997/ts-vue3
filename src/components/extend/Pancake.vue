<template>
  <!-- 各行各业均可成为推广者 -->
  <div class="pancake">
    <h1>各行各业均可成为推广者</h1>
    <p>
      无论您是个人推广者，或您的公司正从事代理IP、电商培训、运营媒体论坛、软件工具、知识产权财税相关服务、跨境物流、跨境支付等业务，我们诚邀您成为推广合作者，创造丰厚又持久的推广奖励
    </p>
    <!-- 推广人群信息容器 -->
    <div class="promoters-box">
      <div class="t">
        <ul>
          <li>
            <img src="@/assets/img/extend/icon-kj.webp" alt="" />
            <span>跨境物流</span>
          </li>
          <li>
            <img src="@/assets/img/extend/icon-zs.webp" alt="" />
            <span>知识产权</span>
          </li>
          <li>
            <img src="@/assets/img/extend/icon-qt.webp" alt="" />
            <span>其他行业</span>
          </li>
        </ul>
      </div>
      <div class="m">
        <ul>
          <li>
            <img src="@/assets/img/extend/icon-kjds.webp" alt="" />
            <span>跨境电商</span>
          </li>
          <li>
            <img src="@/assets/img/extend/icon-jypx.webp" alt="" />
            <span>教育培训</span>
          </li>
        </ul>
      </div>
      <div class="b">
        <ul>
          <li>
            <img src="@/assets/img/extend/icon-kjzf.webp" alt="" />
            <span>跨境支付</span>
          </li>
          <li>
            <img src="@/assets/img/extend/icon-rj.webp" alt="" />
            <span>软件工具</span>
          </li>
          <li>
            <img src="@/assets/img/extend/icon-mt.webp" alt="" />
            <span>媒体论坛</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.pancake {
  h1 {
    font-size: 20px;
    font-weight: 700;
    color: #333333;
    margin-bottom: 10px;
  }
  P {
    width: 740px;
    font-size: 14px;
    color: #333333;
    line-height: 20px;
    margin-bottom: 40px;
  }
  .promoters-box {
    max-height: 290px;
    background-image: url('@/assets/img/extend/background-promotionRuleBox.webp');
    background-repeat: no-repeat;
    background-position: center center;
    width: 85%;
    ul {
      display: flex;
      justify-content: space-between;
      li {
        display: flex;
        justify-content: center;
        font-size: 18px;
        color: #333;
        align-items: center;
        background: #fff;
        width: 168px;
        height: 60px;
        border-radius: 100px 100px 100px 100px;
        box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.2);
        img {
          width: 28px;
          height: 28px;
          margin-right: 20px;
        }
      }
    }
    .t {
      ul {
        padding: 0 14px;
      }
    }
    .m {
      margin-top: 52px;
      margin-bottom: 54px;
      ul {
        padding: 0 112px;
      }
    }
    .b {
      ul {
        padding: 0 42px;
      }
    }
  }
}
</style>
