<template>
  <div class="info-card-list">
    <!-- 返佣信息卡片列表 -->
    <ul>
      <!-- 可提现金额 -->
      <li>
        <img src="@/assets/img/extend/background-qian.webp" />
        <div class="info-box">
          <p>可提现金额</p>
          <div class="info">
            <p class="price">
              <span>888888</span>
              <span>元</span>
            </p>
            <div class="buttons">
              <button class="pointer">提现</button>
              <button class="pointer">提现设置</button>
            </div>
          </div>
        </div>
      </li>
      <!-- 邀请用户数 -->
      <li>
        <img src="@/assets/img/extend/background-yonghu.webp" />
        <div class="info-box">
          <p>邀请用户数</p>
          <div class="info">
            <p class="price">
              <span>20</span>
              <span>位</span>
            </p>
            <div class="buttons">
              <button class="pointer">查看详情</button>
            </div>
          </div>
        </div>
      </li>
      <!-- 累计佣金 -->
      <li>
        <img src="@/assets/img/extend/background-yongjin.webp" />
        <div class="info-box">
          <p>累计佣金</p>
          <div class="info">
            <p class="price">
              <span>300.00</span>
              <span>元</span>
            </p>
            <div class="buttons">
              <button class="pointer">查看记录</button>
            </div>
          </div>
        </div>
      </li>
      <!-- 累计提现 -->
      <li>
        <img src="@/assets/img/extend/background-tixian.webp" />
        <div class="info-box">
          <p>累计提现</p>
          <div class="info">
            <p class="price">
              <span>100.00</span>
              <span>元</span>
            </p>
            <div class="buttons">
              <button class="pointer">查看记录</button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.info-card-list {
  ul {
    display: flex;
    gap: 0 0.9rem;
    li {
      position: relative;
      width: 24.5%;
      min-width: 400.45px;
      height: 160px;
      border-radius: 8px;
      padding: 20px 20px 15px;
      color: #fff;
      font-size: 14px;
      box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.1);
      &:nth-child(1) {
        background: linear-gradient(91deg, #2b53e5 0%, #4d70f1 100%);
        img {
          bottom: -14px;
          right: 65px;
          //   width: 190px;
          //   height: 180px;
        }
      }
      &:nth-child(2) {
        background: linear-gradient(270deg, #8d6efa 0%, #6e47fe 100%);
      }
      &:nth-child(3) {
        background: linear-gradient(270deg, #4bf6ca 0%, #48d9b4 100%);
      }
      &:nth-child(4) {
        background: linear-gradient(270deg, #6ea2f8 0%, #4781f9 100%);
      }
    }
    img {
      position: absolute;
      right: 90px;
      bottom: 10px;
      width: 140px;
      height: 140px;
      z-index: 1;
    }

    .info-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .price {
          display: flex;
          align-items: end;
          // line-height: 67px;
          span {
            vertical-align: bottom;
          }
          span {
            &:nth-child(1) {
              font-size: 48px;
              font-family: DIN-Bold, DIN;
              font-weight: 700;
              line-height: 59px;
              max-width: 280px;
            }
            &:nth-child(2) {
              font-size: 14px;
              font-family: Source Han Sans CN-Bold, Source Han Sans CN;
              font-weight: 700;
              margin-left: 5px;
              margin-bottom: 7px;
            }
          }
        }
        .buttons {
          display: flex;
          flex-direction: column-reverse;
          z-index: 99;
          button {
            width: 90px;
            height: 36px;
            border: 1px solid #ffffff;
            border-radius: 8px;
            &:nth-child(1) {
              color: #fff;
              background: rgba(255, 255, 255, 0.15);
            }
            &:nth-child(2) {
              margin-bottom: 10px;
              color: #2b53e5;
              background: #fff;
            }
          }
        }
      }
    }
  }
}
</style>
