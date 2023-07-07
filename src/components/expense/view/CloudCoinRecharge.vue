<template>
  <div class="cloud-coin-recharge">
    <div class="layout-box-right-top">
      <!-- 云币充值标题 -->
      <DecorativeTitle msg="云币充值" />
      <!-- 云币详情卡片 -->
      <BalanceCard class="margin-top" @show-topup="changeTopupType" />
    </div>
    <div class="layout-box-right-between">
      <DecorativeTitle msg="订单明细" />
      <!-- 筛选容器 -->
      <div class="filter-box">
        <div class="filter-box-left">
          <button class="resetting-btn">
            <i></i>
            <span>导出</span>
          </button>
        </div>
        <div class="filter-box-right">
          <!-- 操作人员 -->
          <div class="lable" style="margin-right: 20px">
            <span>操作人员：</span>
            <input type="text" v-model="name" placeholder="请输入操作人员姓名" />
          </div>
          <!-- 交易类型 -->
          <div class="lable" style="margin-right: 30px">
            <span>交易类型：</span>
            <el-select v-model="transactionType">
              <el-option label="充值" value="充值" />
              <el-option label="充值2" value="充值2" />
            </el-select>
          </div>
          <!-- 时间筛选 -->
          <el-date-picker
            v-model="daterange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="my-date-picker"
          />
          <!-- 搜索 -->
          <div class="buttonsBox">
            <button class="resetting-btn"> 搜索 </button>
            <button class="resetting-btn"> 重置 </button>
          </div>
        </div>
      </div>
      <!-- 表格 -->
      <div class="layout-box-right-bottom">
        <el-table :data="tableData" style="width: 100%" height="100%">
          <el-table-column prop="orderNumber" label="交易单号" width="220" />
          <el-table-column prop="transactionType" label="交易类型" />
          <el-table-column prop="tradingHours" label="交易时间" />
          <el-table-column prop="item" label="项目" />
          <el-table-column prop="amount" label="金额" />
          <el-table-column prop="accountBalance" label="账户余额" />
          <el-table-column prop="operator" label="操作人" />
        </el-table>
      </div>
      <!-- 分页器 -->
      <div class="paging-box">
        <Paging
          :current-page="changePage.currentPage"
          :page-sizes="[5, 10, 20, 30, 40]"
          :total="changePage.total"
          :page_size="changePage.page_size"
          @current-change="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        />
      </div>
    </div>
    <!-- 充值模态 -->
    <el-dialog v-model="showTopup" title="充值" width="905px" destroy-on-close center>
      <Payment @submitPayment="submitPayment" />
    </el-dialog>
    <!-- 支付模态 -->
    <el-dialog v-model="showPay" width="652px" :show-close="false" destroy-on-close>
      <QrCodePay @cancelOrder="cancelOrder" />
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import BalanceCard from '@/components/expense/BalanceCard.vue'
import DecorativeTitle from '@/components/DecorativeTitle.vue'
import Payment from '@/components/Payment.vue'
import QrCodePay from '@/components/QrCodePay.vue'
import Paging from '@/components/paging.vue'

// 日期范围
const daterange = ref([])
// 操作人员
const name = ref('')
// 交易类型
const transactionType = ref('充值')

// 分页器数据
const changePage = reactive({
  currentPage: 1,
  total: 380,
  page_size: 10,
})
/**
 * 处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleCurrentChange = (data: number) => {
  changePage.currentPage = data
}
/**
 *处理当前页码变化的方法
 * @param {number} data - 当前页码的值
 * @returns {void}
 */
const handleSizeChange = (data: number) => {
  changePage.page_size = data
}

const tableData = [
  {
    orderNumber: '10007898776678909838737',
    transactionType: '充值',
    tradingHours: '2023-06-09-19:51:25',
    item: '云币充值',
    amount: '+¥567.0',
    accountBalance: '¥567.0',
    operator: '张泽',
  },
  {
    orderNumber: '10007898776678909838737',
    transactionType: '充值',
    tradingHours: '2023-06-09-19:51:25',
    item: '云币充值',
    amount: '+¥567.0',
    accountBalance: '¥567.0',
    operator: '张泽',
  },
  {
    orderNumber: '10007898776678909838737',
    transactionType: '充值',
    tradingHours: '2023-06-09-19:51:25',
    item: '云币充值',
    amount: '+¥567.0',
    accountBalance: '¥567.0',
    operator: '张泽',
  },
  {
    orderNumber: '10007898776678909838737',
    transactionType: '充值',
    tradingHours: '2023-06-09-19:51:25',
    item: '云币充值',
    amount: '+¥567.0',
    accountBalance: '¥567.0',
    operator: '张泽',
  },
  {
    orderNumber: '10007898776678909838737',
    transactionType: '充值',
    tradingHours: '2023-06-09-19:51:25',
    item: '云币充值',
    amount: '+¥567.0',
    accountBalance: '¥567.0',
    operator: '张泽',
  },
]

// 是否展示充值模态
const showTopup = ref(false)
/**
 * 切换充值模态
 */
const changeTopupType = () => {
  showTopup.value = !showTopup.value
}
/**
 * 提交充值表单
 */
const submitPayment = () => {
  showTopup.value = false
  showPay.value = true
}

// 是否展示支付模态
const showPay = ref(false)
// 取消订单逻辑
const cancelOrder = () => {
  showPay.value = false
}
</script>

<style scoped lang="less">
.cloud-coin-recharge {
  .layout-box-right-top {
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 20px;
  }
  .layout-box-right-between {
    padding-top: 25px;
    .filter-box {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      .filter-box-left {
        button {
          color: #fff;
          background: #2b53e5;
        }
      }
      .filter-box-right {
        display: flex;
        align-items: center;
        .lable {
          display: flex;
          align-items: center;
          span {
            min-width: 70px;
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }
          input {
            width: 160px;
            height: 40px;
            border-radius: 8px;
            padding: 10px;
            background: #f7f7f7;
          }
          :deep(.el-input__wrapper) {
            width: 110px;
            height: 40px;
            background: #f7f7f7;
            box-shadow: none;
          }
        }
        .buttonsBox {
          display: flex;
          justify-content: space-between;
          align-items: center;
          button:nth-child(1) {
            margin-left: 10px;
            color: #fff;
            background: #2b53e5;
          }
          button:nth-child(2) {
            margin-left: 10px;
            border: 1px solid #2b53e5;
            color: #2b53e5;
            background: #fff;
          }
        }
      }
    }
    .paging-box {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 70px;
    }
  }
  .layout-box-right-bottom {
    margin-top: 20px;
    height: calc(100vh - 491px);
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
          background-color: #fbfbfc;
          font-weight: normal;
          color: #333333;

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
          height: 68px;
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
  // 组件距离顶部边距 使用透传传递 https://cn.vuejs.org/guide/components/attrs.html#disabling-attribute-inheritance
  .margin-top {
    margin-top: 20px;
  }
  .resetting-btn {
    display: flex;
    justify-content: center;
    width: 104px;
    height: 40px;
    border-radius: 8px;
    i {
      margin-right: 5px;
    }
  }
  :deep(.el-range-editor, .el-input__wrapper) {
    width: 245px;
    height: 40px;
    background: #f7f7f7;
    box-shadow: none;
    i {
      color: #2b53e5;
    }
  }
}
</style>
