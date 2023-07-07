<template>
  <div v-drag class="customer-service">
    <div class="customer-service-box">
      <!-- 客服按钮 -->
      <img
        class="customer-service-icon"
        src="@/assets/img/avater-customerService.webp"
        alt="客服icon"
        draggable="false"
      />
      <!-- 悬浮出来的列表 -->
      <div class="hover-list">
        <ul>
          <li>
            <div class="item">
              <i class="iconfont">&#xe680;</i>
              <span>帮助中心</span>
            </div>
          </li>
          <li>
            <div class="item item-2">
              <i class="iconfont">&#xe680;</i>
              <span>客户经理</span>
              <div class="hover-box">
                <div
                  ><img src="@/assets/img/customerService/icon-contactInfo.png" alt="" /> 15891369159（微信同号）</div
                >
              </div>
            </div>
          </li>
          <li>
            <div class="item">
              <i class="iconfont">&#xe680;</i>
              <span>在线客服</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.customer-service {
  position: absolute;
  bottom: 100px;
  right: 42px;
  // 有事您联系我
  z-index: 18846103574;
  // 禁止复制
  user-select: none;
  .customer-service-box {
    position: relative;
    .hover-list {
      display: none;
      position: absolute;
      top: -130px;
      right: -10px;
      // background: red;
      padding-bottom: 20px;
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px 0;
        padding: 16px 20px;
        border-radius: 8px;
        background: #fff;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
        li {
          cursor: pointer;
          span {
            // 禁止换行
            white-space: nowrap;
          }
          .item {
            display: flex;
            align-items: center;
            i {
              margin-right: 4px;
              font-size: 16px;
            }
            span {
              font-size: 12px;
              font-weight: 350;
              color: #3d3d3d;
              line-height: 24px;
            }
            &:hover {
              span {
                color: #2b53e5;
              }
              i {
                color: #2b53e5;
              }
            }
          }
          .item-2 {
            position: relative;
            &:hover {
              .hover-box {
                display: block;
              }
            }
            .hover-box {
              display: none;
              position: absolute;
              left: -210px;
              padding-right: 40px;
              div {
                display: flex;
                align-items: center;
                width: 183px;
                border-radius: 8px 8px 8px 8px;
                padding: 8px;
                font-size: 12px;
                color: #2d5aff;

                box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
                background: #fff;
                img {
                  width: 16px;
                  height: 16px;
                  margin-right: 5px;
                }
              }
            }
          }
        }
      }
    }
    .customer-service-icon {
      width: 84px;
      height: 84px;
      border-radius: 50%;
      cursor: pointer;
    }
    &:hover {
      .hover-list {
        display: block;
      }
    }
  }
}
</style>
