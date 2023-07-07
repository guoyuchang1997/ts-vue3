<template>
  <div class="order-management">
    <!-- 订单管理 -->
    <DecorativeTitle msg="订单管理" />
    <!-- 筛选 -->
    <div class="screen">
      <div class="l">
        <button class="resetting-btn derive">
          <i></i>
          <span>导出</span>
        </button>
        <div class="lable">
          <span>操作人员：</span>
          <input v-model="queryForm.name" type="text" placeholder="请输入操作人员姓名" />
        </div>
        <div class="lable">
          <span>订单类型：</span>
          <el-select v-model="queryForm.transactionType">
            <el-option label="全部" value="全部" />
            <el-option label="类型1" value="类型1" />
            <el-option label="类型2" value="类型2" />
          </el-select>
        </div>
        <div class="lable">
          <span>状态：</span>
          <el-select v-model="queryForm.status">
            <el-option label="待转帐" value="待转帐" />
            <el-option label="类型1" value="类型1" />
            <el-option label="类型2" value="类型2" />
          </el-select>
        </div>
        <div class="lable">
          <span>支付方式：</span>
          <el-select v-model="queryForm.way">
            <el-option label="待转帐" value="待转帐" />
            <el-option label="类型1" value="类型1" />
            <el-option label="类型2" value="类型2" />
          </el-select>
        </div>
        <!-- 时间选择器 -->
        <div>
          <el-date-picker
            v-model="queryForm.daterange"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            class="my-date-picker"
          />
        </div>
      </div>
      <!-- 搜索 -->
      <div class="buttonsBox">
        <button class="resetting-btn search"> 搜索 </button>
        <button class="resetting-btn reset"> 重置 </button>
      </div>
    </div>
    <!-- 表格 status-->
    <div class="table">
      <el-table :data="tableData" style="width: 100%" height="100%">
        <el-table-column prop="orderNumber" label="订单号" width="220" />
        <el-table-column prop="orderCreator" label="订单创建人" />
        <el-table-column prop="orderType" label="订单类型" />
        <el-table-column prop="tradeName" label="商品名称" />
        <el-table-column prop="orderAmount" label="订单金额" />
        <el-table-column prop="amountPayable" label="应付金额" />
        <el-table-column prop="creationTime" label="创建时间" />
        <el-table-column prop="paymentMethod" label="支付方式" />
        <el-table-column prop="orderStatus" label="订单状态" />
        <el-table-column label="操作">
          <template #default="{ row }">
            <button v-if="row.type === 0" @click="payment(row.orderNumber)" class="table-payment resetting-btn"
              >付款</button
            >
            <button v-if="row.type === 1" @click="details(row.orderNumber)" class="table-details resetting-btn"
              >查看详情</button
            >
            <span v-if="row.type === 2" class="table-off">交易已关闭</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页器 -->
    <div class="pagination">
      <Paging
        :current-page="changePage.currentPage"
        :page-sizes="[5, 10, 20, 30, 40]"
        :total="changePage.total"
        :page_size="changePage.page_size"
        @current-change="handleCurrentChange"
        @handleSizeChange="handleSizeChange"
      />
    </div>
    <!-- 支付模态 -->
    <el-dialog v-model="showPay" width="652px" :show-close="false" destroy-on-close>
      <QrCodePay @cancelOrder="cancelOrder" />
    </el-dialog>
    <!-- 详情模态 -->
    <el-dialog v-model="showDetails" width="1000px" :show-close="false" destroy-on-close>
      <OrderDetails>
        <DialogTitle title="订单详情" @close="cancelDetails" />
      </OrderDetails>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import DecorativeTitle from '@/components/DecorativeTitle.vue'
import QrCodePay from '@/components/QrCodePay.vue'
import Paging from '@/components/paging.vue'
import OrderDetails from '@/components/expense/OrderDetails.vue'
import DialogTitle from '@/components/DialogTitle.vue'

const tableData = [
  {
    orderNumber: '10007898776678909838737',
    orderCreator: '充值',
    orderType: '设备订单',
    tradeName: '代理-代理购买',
    orderAmount: '¥567.0',
    amountPayable: '-¥567.0',
    creationTime: '2022-12-0812:50',
    paymentMethod: '支付宝',
    orderStatus: '待付款',
    type: 0,
  },
  {
    orderNumber: '10007898776678909838737',
    orderCreator: '充值',
    orderType: '设备订单',
    tradeName: '代理-代理购买',
    orderAmount: '¥567.0',
    amountPayable: '-¥567.0',
    creationTime: '2022-12-0812:50',
    paymentMethod: '支付宝',
    orderStatus: '待付款',
    type: 1,
  },
  {
    orderNumber: '10007898776678909838737',
    orderCreator: '充值',
    orderType: '设备订单',
    tradeName: '代理-代理购买',
    orderAmount: '¥567.0',
    amountPayable: '-¥567.0',
    creationTime: '2022-12-0812:50',
    paymentMethod: '支付宝',
    orderStatus: '待付款',
    type: 2,
  },
]

const queryForm = reactive({
  name: '',
  transactionType: '',
  status: '',
  way: '',
  daterange: '',
})

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
// 是否显示支付模态
const showPay = ref(false)
/**
 * 支付订单
 * @param {string} orderNumber - 订单号
 */
const payment = (orderNumber: string) => {
  console.log(orderNumber)
  showPay.value = true
}
/**
 * 取消订单
 * @returns {void}
 */
const cancelOrder = () => {
  showPay.value = false
}

// 是否显示详情模态
const showDetails = ref(false)
/**
 * 查看详情
 * @param {string} orderNumber - 订单号
 */
const details = (orderNumber: string) => {
  showDetails.value = true
}
/**
 * 关闭详情
 * @returns {void}
 */
const cancelDetails = () => {
  showDetails.value = false
}
</script>

<style scoped lang="less">
.order-management {
  position: relative;
  .screen {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    .l {
      display: flex;
      width: 1190px;
      justify-content: space-between;
      // background: red;
      .lable {
        display: flex;
        align-items: center;
        text-align: end;
        span {
          min-width: 42px;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          // 禁止换行
          white-space: nowrap;
        }
        input {
          width: 160px;
          height: 40px;
          border-radius: 6px;
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
    }

    .buttonsBox {
      display: flex;
      justify-content: space-between;
      align-items: center;

      button:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        border-radius: 6px;
        width: 104px;
        height: 40px;
        color: #fff;
        background: #2b53e5;
      }
      button:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        width: 104px;
        height: 40px;
        border: 1px solid #2b53e5;
        border-radius: 6px;
        color: #2b53e5;
        background: #fff;
      }
    }
    .derive {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 104px;
      height: 40px;
      border-radius: 6px;
      font-size: 14px;
      color: #fff;
      background-color: #2b53e5;
      i {
        size: 16px;
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
  .table {
    margin-top: 20px;
    height: calc(100vh - 278px);
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
  .pagination {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
  }
  .table-payment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 24px;
    border-radius: 4px;
    font-size: 12px;
    color: #fff;
    background: #2b53e5;
  }
  .table-details {
    font-size: 12px;
    text-decoration: underline;
    color: #2b53e5;
  }
  .table-off {
    font-size: 12px;
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
