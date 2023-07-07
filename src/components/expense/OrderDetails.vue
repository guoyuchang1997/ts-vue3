<template>
  <!-- 订单详情模态 -->
  <div class="order-details">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 横线装饰 -->
    <div class="line"></div>
    <!-- 订单详情列表 -->
    <ul class="order-info-list">
      <div class="group">
        <li>
          <span class="title">订单状态：</span>
          <span style="color: #2b53e5">已完成</span>
        </li>
        <li>
          <span class="title">订单号：</span>
          <span>10007898776678909838737</span>
        </li>
        <li>
          <span class="title">付款用户：</span>
          <span>guchuang</span>
        </li>
        <li>
          <span class="title">商品名称：</span>
          <span>设备-设备购买</span>
        </li>
      </div>
      <div class="group">
        <li>
          <span class="title">付款时间：</span>
          <span>2022-12-0812:58:45</span>
        </li>
        <li>
          <span class="title">创建时间：</span>
          <span>2022-12-0812:58:55</span>
        </li>
        <li>
          <span class="title">订单类型：</span>
          <span>设备订单</span>
        </li>
        <li>
          <span class="title">支付方式：</span>
          <span>支付宝</span>
        </li>
      </div>
    </ul>
    <!-- 购买的设备信息 -->
    <div class="table">
      <el-table :data="tableData" style="width: 100%" height="170px">
        <el-table-column prop="deviceName" label="设备名称" />
        <el-table-column prop="enableAutomaticRenewal" label="是否开启自动续费" width="150px" />
        <el-table-column prop="deviceInfo" label="设备信息" />
        <el-table-column prop="quantity" label="数量" />
        <el-table-column prop="equipmentOwnership" label="设备归属地" />
        <el-table-column prop="equipmentUnitPrice" label="设备单价" />
        <el-table-column prop="purchaseDuration" label="购买时长" />
        <el-table-column prop="ExpirationTime" label="到期时间" />
      </el-table>
    </div>
    <!-- 订单价格信息 -->
    <div class="order-price-info">
      <div class="payable-amount">
        <span>应付金额：</span>
        <span>¥78.00</span>
      </div>
      <ul>
        <li>
          <span>订单总额：</span>
          <span style="color: #2b53e5">¥78.00</span>
        </li>
        <li>
          <span>订单优惠：</span>
          <span style="color: #ff6a01">-¥20.00</span>
        </li>
        <li>
          <span>余额扣款：</span>
          <span>-¥0.00</span>
        </li>
        <li>
          <span>在线支付：</span>
          <span>¥58.00</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const tableData = [
  {
    deviceName: '20220908-1',
    enableAutomaticRenewal: '否',
    deviceInfo: '34.81.154.61',
    quantity: '1',
    equipmentOwnership: '中国台湾-谷歌云',
    equipmentUnitPrice: '¥78',
    purchaseDuration: '1个月',
    ExpirationTime: '2023.07.15',
  },
  {
    deviceName: '20220908-1',
    enableAutomaticRenewal: '否',
    deviceInfo: '34.81.154.61',
    quantity: '1',
    equipmentOwnership: '中国台湾-谷歌云',
    equipmentUnitPrice: '¥78',
    purchaseDuration: '1个月',
    ExpirationTime: '2023.07.15',
  },
  {
    deviceName: '20220908-1',
    enableAutomaticRenewal: '否',
    deviceInfo: '34.81.154.61',
    quantity: '1',
    equipmentOwnership: '中国台湾-谷歌云',
    equipmentUnitPrice: '¥78',
    purchaseDuration: '1个月',
    ExpirationTime: '2023.07.15',
  },
]
</script>

<style scoped lang="less">
.order-details {
  padding: 0 10px;
  .line {
    margin: 20px 0;
    width: 100%;
    height: 1px;
    background-color: #eeeeee;
  }
  .order-info-list {
    display: flex;
    .group {
      display: flex;
      flex-direction: column;
      gap: 20px 0;
      width: 384px;
      font-size: 16px;
      color: #999999;
      font-weight: 400;
      .title {
        color: #333333;
      }
    }
  }
  .table {
    margin-top: 30px;
    :deep(.el-table) {
      border-radius: 10px 10px 0 0;
    }

    :deep(.el-button) {
      height: 28px;
      border-radius: 6px;

      & > span {
        justify-content: center;
      }
    }

    :deep(.el-table__header-wrapper) {
      .el-table__header {
        height: 50px;

        .el-table__cell {
          background-color: rgba(43, 83, 229, 0.05);
          font-weight: normal;
          font-size: 14px;
          color: #333333;
          height: 40px;

          &.is-leaf {
            border-bottom: 0;
          }

          &:first-child {
            border-top-left-radius: 10px;
          }

          &:last-child {
            border-top-right-radius: 10px;
          }
        }
      }
    }

    :deep(.el-table__body-wrapper) {
      .el-table__body {
        .el-table__cell {
          font-weight: 350;
          color: #333333;
          height: 40px;
          font-size: 12px;
        }

        .el-table__row.hover-row {
          background-color: #f1f4ff;

          & > td.el-table__cell {
            background-color: #f1f4ff;
          }

          .icon-edit {
            opacity: 1;
          }
        }

        tr td.el-table-fixed-column--right,
        tr td.el-table-fixed-column--left {
          background-color: transparent;
        }
      }
    }
  }
  .order-price-info {
    padding: 30px 0;
    .payable-amount {
      display: flex;
      align-items: center;
      // 选择第一个span
      span:first-child {
        color: #333333;
        font-size: 20px;
        font-weight: 700;
      }
      // 选择最后一个span
      span:last-child {
        color: #ff6a01;
        font-size: 24px;
        font-weight: 700;
        // 选择第一个字符
        &:first-letter {
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
    ul {
      display: flex;
      gap: 0 50px;
      margin-top: 20px;
      li {
        span:first-child {
          color: #333333;
          font-size: 16px;
          font-weight: 400;
        }
        span:last-child {
          color: #666;
          font-size: 16px;
          font-weight: 400;
        }
      }
    }
  }
}
</style>
