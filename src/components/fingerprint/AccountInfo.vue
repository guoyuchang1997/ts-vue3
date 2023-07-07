<template>
  <!-- 指纹页 账号信息组件 -->
  <div class="account-info">
    <p class="title">账号信息</p>
    <ul>
      <li class="account-info-left">
        <!-- 绑定账号情况下 -->
        <div class="type0">
          <div class="l">
            <img src="@/assets/img/fingerprint/icon-3.webp" />
            <div>
              <p>亚马逊</p>
              <p>账号名称：123466</p>
            </div>
          </div>
          <div class="r">
            <button class="resetting-btn">打开</button>
          </div>
        </div>
        <!-- 未绑定账号情况下 -->
        <div class="type1">
          <img src="@/assets/img/fingerprint/avater-unbound.webp" alt="未绑定" />
          <p>本环境暂未绑定账号</p>
        </div>
      </li>
      <li class="line"></li>
      <li class="account-info-right">
        <div class="l">
          <p>
            <span class="title">序号：</span>
            <span class="info">1234</span>
          </p>
          <p>
            <span class="title">分组：</span>
            <span class="info">未分组</span>
          </p>
          <p>
            <span class="title">名称：</span>
            <span class="info">
              <img src="@/assets/img/fingerprint/icon-1.webp" />
              辰链
            </span>
          </p>
          <p>
            <span class="title">账号/密码：</span>
            <span class="info">
              <img src="@/assets/img/fingerprint/icon-2.webp" />
              123456
            </span>
          </p>
        </div>
        <div class="r">
          <p>
            <span class="title">备注：</span>
            <span class="info"> 辰链科技电商-美国 </span>
          </p>
          <div class="tag-list-box">
            <span class="title">标签：</span>
            <!-- 标签列表 -->
            <div class="tag-list">
              <el-tag>标签</el-tag>
              <el-tag type="success">签</el-tag>
              <el-tag type="info">标签</el-tag>
              <el-tag type="warning">Tag 4Tag 4Tag 4Tag</el-tag>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// 环境检测状态 用于绑定css变量
const isBind = ref('flex')
const isNoBind = ref('none')
const isBindPadding = ref('35px 28px')
const props = defineProps({
  // 账号信息
  accountInfo: {
    type: Object,
    default: () => {
      return {
        // 平台名称
        platformName: '',
        // 账号名称
        accountName: '',
        // 序号
        serialNumber: '',
        // 分组
        grouping: '',
        // 名称
        name: '',
        // 账号/密码
        AccountPassword: '',
        // 备注
        Remarks: '',
        // 标签
        labelList: '',
      }
    },
  },
  detectionStatus: {
    type: Number,
    default: 0,
  },
})
/**
 *计算账号绑定状态
 */
const countLayout = () => {
  if (props.detectionStatus === 0) {
    isBind.value = 'flex'
    isNoBind.value = 'none'
    isBindPadding.value = '35px 28px'
  } else {
    isBind.value = 'none'
    isNoBind.value = 'flex'
    isBindPadding.value = '0 0 10px 0'
  }
}
/**
 * 生命周期
 */
onMounted(() => {
  // 1 计算账号绑定状态
  countLayout()
})
</script>

<style scoped lang="less">
.account-info {
  width: 100%;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  .title {
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    li {
      display: flex;
      //   justify-content: space-between;
    }
    .account-info-left {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 452px;
      border-radius: 8px;
      padding: v-bind(isBindPadding);
      background: #f6faff;
      .type0 {
        display: v-bind(isBind);
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .l {
          display: flex;
          align-items: center;
          img {
            width: 60px;
            height: 60px;
            margin-right: 20px;
            border-radius: 50%;
          }
          p {
            font-size: 16px;
            font-weight: 400;
            color: #3d3d3d;
            line-height: 24px;
          }
        }

        .r {
          .resetting-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 85px;
            height: 35px;
            border-radius: 8px;
            font-size: 16px;
            color: #fff;
            background: #2b53e5;
          }
        }
      }
      .type1 {
        display: v-bind(isNoBind);
        align-items: center;
        flex-direction: column;
        width: 100%;
        img {
          width: 100px;
          height: 100px;
        }
        p {
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          line-height: 20px;
        }
      }
    }
    .line {
      width: 1px;
      height: 80px;
      background: #eeeeee;
    }
    .account-info-right {
      display: flex;
      justify-content: space-between;
      width: 452px;
      padding: 35px 28px;
      p,
      .tag-list-box {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        .title {
          font-size: 14px;
          font-weight: 350;
          color: #999999;
          line-height: 20px;
        }
        .info {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 350;
          color: #333333;
          line-height: 20px;
        }
        img {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
      }

      .l {
        width: 172px;
      }
      .r {
        width: 172px;
        .title {
          display: inline-block;
          width: 42px;
          white-space: nowrap;
        }
        .tag-list-box {
          display: flex;
          align-items: start;
          .tag-list {
            display: flex;
            gap: 8px 5px;
            flex-wrap: wrap;
          }
        }
      }
    }
  }
}
</style>
