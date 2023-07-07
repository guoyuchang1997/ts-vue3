<template>
  <!-- 用户信息面板 -->
  <div class="user-info">
    <div class="content">
      <!-- 设备信息 -->
      <div class="device-info">
        <!-- 套餐等级 -->
        <div class="device-info-row">
          <span>Free</span>
          <button>
            <img src="@/assets/img/c-header/icon-topUp.webp" alt="套餐升级icon" />
            <span>升级</span>
          </button>
        </div>
        <div class="device-info-row">
          <span>环境数</span>
          <span>4/10</span>
        </div>
        <div class="device-info-row">
          <span>用户数</span>
          <span>2/2</span>
        </div>
        <div class="device-info-row">到期时间：2023-05-25</div>
      </div>
      <!-- 云币信息 -->
      <div class="coin-info">
        <div class="coin-info-row">
          <div>
            <img src="@/assets/img/c-header/icon-cloudCoin.webp" alt="云币icon" />
            <span>云币数</span>
          </div>
          <button> <img src="@/assets/img/c-header/icon-topUp.webp" alt="套餐升级icon" /> 充值</button>
        </div>
        <div class="coin-info-row">1987.89</div>
      </div>
      <!-- 代理信息 -->
      <div class="agent-info">
        <div class="agent-info-row">
          <div>
            <img src="@/assets/img/c-header/icon-cloudCoin.webp" alt="" />
            <span>代理数</span>
          </div>
          <button> <img src="@/assets/img/c-header/icon-topUp.webp" alt="套餐升级icon" /> 购买</button>
        </div>
        <div class="agent-info-row">23333</div>
      </div>
      <!-- 切换 账号设置 黑暗模式 -->
      <div class="account-settings">
        <div class="account-settings-item pointer switching">
          <div class="account-settings-item-left">
            <img src="@/assets/img/c-header/icon-corporation.webp" alt="公司icon" />
            <span>切换企业（杭州辰链信息...）</span>
          </div>
          <i class="iconfont">&#xe642;</i>
          <div class="switching-box">
            <ul>
              <li
                v-for="item in companyList"
                :key="item.id"
                :class="item.id === companyActive ? 'active' : 'noActive'"
                @click="handleSwitching(item.id)"
              >
                <img src="@/assets/img/c-header/icon-company2.webp" alt="切换公司icon" />
                杭州辰链信息科技有限公司
              </li>
            </ul>
          </div>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe663;</i>
            <span>账号设置</span>
          </div>
          <i class="iconfont right-icon">&#xe642;</i>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe621;</i>
            <span>偏好设置</span>
          </div>
          <i class="iconfont right-icon">&#xe642;</i>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe69f;</i>
            <span>我的插件</span>
          </div>
          <i class="iconfont right-icon">&#xe642;</i>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe688;</i>
            <span>新手引导</span>
          </div>
          <i class="iconfont right-icon">&#xe642;</i>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe621;</i>
            <span>帮助中心</span>
          </div>
          <i class="iconfont right-icon">&#xe642;</i>
        </div>
        <div class="account-settings-item pointer">
          <div class="account-settings-item-left">
            <i class="iconfont">&#xe665;</i>
            <span>黑暗设置</span>
          </div>
          <el-switch v-model="isDarkPattern" size="small" />
        </div>
      </div>
    </div>
    <!-- 退出登录 -->
    <div class="logout pointer">
      <img src="" alt="" />
      <span>退出登录</span>
    </div>
  </div>
</template>

<script setup lang="ts">
// 是否是黑暗模式
const isDarkPattern = ref(false)

// 公司焦点
const companyActive = ref(1)

// 公司列表
const companyList = reactive([
  {
    id: 1,
    name: '杭州辰链信息科技有限公司',
  },
  {
    id: 2,
    name: '江苏灵匠信息科技有限公司',
  },
])

/**
 * 切换公司
 * @param id 公司id
 */
const handleSwitching = id => {
  companyActive.value = id
}
</script>

<style lang="less" scoped>
.user-info {
  position: absolute;
  top: 20px;
  left: -90px;
  width: 229px;
  padding-top: 30px;
  z-index: 1000;
  .content {
    border-radius: 10px 10px 0 0;
    padding: 10px 10px 0 10px;
    background-color: @cbcolor;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    .device-info {
      background: linear-gradient(360deg, #ff8d91 7%, #fca16f 97%);
      .device-info-row:first-child {
        margin-bottom: 7px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        button {
          color: #fc8686;
        }
      }
      .device-info-row:nth-child(2),
      .device-info-row:nth-child(3) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        font-size: 12px;
      }
      .device-info-row:nth-child(4) {
        font-size: 12px;
        color: #ffe089;
      }
    }
    .coin-info {
      margin: 5px 0;
      background: linear-gradient(270deg, #6eb8fa 0%, #96dbd5 99%);
      .coin-info-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        div {
          display: flex;
          align-items: center;
          font-size: 14px;
          img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
        }
        button {
          color: #6fb9f9;
        }
      }
      .coin-info-row:nth-child(2) {
        font-size: 20px;
        font-weight: 900;
        color: #fff;
      }
    }
    .agent-info {
      background: linear-gradient(311deg, #a4d6ff 7%, #76adff 94%);
      .agent-info-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6px;
        div {
          display: flex;
          img {
            width: 24px;
            height: 24px;
            margin-right: 5px;
          }
        }
        button {
          color: #6fb9f9;
        }
      }
      .agent-info-row:nth-child(2) {
        font-size: 20px;
        font-weight: 900;
        color: #fff;
      }
    }
    .device-info,
    .coin-info,
    .agent-info {
      border-radius: 8px;
      padding: 10px;
      color: #fff;
      button {
        display: flex;
        align-items: center;
        border: none;
        border-radius: 8px;
        padding: 4px 10px;
        font-size: 12px;
        background: #fff;
        cursor: pointer;

        img {
          width: 12px;
          height: 12px;
          margin-right: 5px;
        }
      }
    }
    .account-settings {
      font-size: 12px;
      .right-icon {
        //TODO: 沙雕UI又忘切图 懒得要了
        transform: rotate(-90deg);
      }
      .account-settings-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 5px;
        padding: 5px 0;
        .account-settings-item-left {
          display: flex;
          align-items: center;
          i {
            size: 18px;
            margin-right: 10px;
          }
          img {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
        }
        // 选择最后一个
        &:last-child {
          padding-bottom: 15px;
        }
      }
    }
  }
  .logout {
    display: flex;
    justify-content: center;
    border-radius: 0 0 10px 10px;
    padding: 12px 0;
    font-size: 14px;
    color: #333;
    background: #f4f6fd;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.15);
  }
}
// 悬浮切换企业
.switching {
  position: relative;
  &:hover {
    .switching-box {
      display: block;
    }
  }
  .switching-box {
    display: none;
    position: absolute;
    top: -10px;
    left: -245px;
    width: 253px;
    z-index: 1000;
    ul {
      width: 223px;
      border-radius: 8px;
      padding: 10px;
      background: #fff;
      box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
      li {
        display: flex;
        align-items: center;
        border-radius: 4px;
        padding: 10px;
        // margin-bottom: 13px;
        &:last-child {
          margin-bottom: 0;
        }
        img {
          margin-right: 10px;
          width: 18px;
          height: 18px;
        }
      }
      .active {
        background: #f4f6fd;
        color: #2b53e5;
      }
      .noActive {
        img {
          filter: grayscale(100%) brightness(150%);
        }
      }
    }
  }
}
</style>
