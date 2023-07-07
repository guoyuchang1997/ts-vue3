<template>
  <!-- page:登录请求 -->
  <div class="request">
    <!-- 筛选功能 -->
    <div class="filter">
      <TimeSelector v-model="daterange" :width="'245px'" :height="'40px'" @setTime="setTime" />
      <div style="width: 359px">
        <Inputsea
          v-model="search"
          :iconleft="'icon-a-23'"
          :iconright="'icon-sousuo'"
          :placeholder="'搜索或新建搜索条件'"
          :width="'359px'"
          :height="'40px'"
          @enter="enter"
        />
      </div>
      <button class="search-btn">搜索</button>
      <button class="reset-btn">重置</button>
    </div>
    <!-- 表格 -->
    <div class="layout-box-right-bottom">
      <el-table :data="tableData" style="width: 100%" height="100%">
        <el-table-column prop="user" label="请求授权用户" />
        <el-table-column prop="name" label="请求授权姓名" />
        <el-table-column prop="terminalCode" label="终端识别码" width="300" />
        <el-table-column prop="macAddress" label="MAC地址" />
        <el-table-column prop="localNetwork" label="本机网络" />
        <el-table-column prop="applicationTime" label="申请时间" />
        <el-table-column prop="applicationStatus" label="申请状态" min-width="60">
          <template #default="{ row }">
            <span class="applicationStatus0" v-if="row.applicationStatus === '0'">等待授权</span>
            <span class="applicationStatus1" v-else>授权成功</span>
          </template>
        </el-table-column>
        <el-table-column prop="operate" label="操作" width="240">
          <template #default="{ row }">
            <span class="login" @click="showAccredit">授权</span>
            <span class="login" @click="showTemporaryAuth">临时授权</span>
            <span class="login" @click="showRefusalAuth">拒绝</span>
          </template>
        </el-table-column>
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
    <!-- 授权 -->
    <el-dialog v-model="isShowAccredit" width="538px" :show-close="false" destroy-on-close>
      <Empower @close="showAccredit">
        <DialogTitle title="授权设置" @close="showAccredit" />
      </Empower>
    </el-dialog>
    <!-- 临时授权 -->
    <el-dialog v-model="isShowTemporaryAuth" width="600px" :show-close="false" destroy-on-close>
      <TemporaryAuth @close="showTemporaryAuth">
        <DialogTitle title="临时授权设置" @close="showTemporaryAuth" />
      </TemporaryAuth>
    </el-dialog>
    <!-- 拒绝 -->
    <el-dialog v-model="isShowRefusalAuth" width="700px" :show-close="false" destroy-on-close>
      <RefusalAuth @close="showRefusalAuth">
        <DialogTitle title="拒绝授权设置" @close="showRefusalAuth" />
      </RefusalAuth>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import TimeSelector from '@/components/TimeSelector.vue'
import Inputsea from '@/components/Searchbox/Search.vue'
import Paging from '@/components/paging.vue'
import DialogTitle from '@/components/DialogTitle.vue'
import Empower from '@/components/operationlog/Empower.vue'
import TemporaryAuth from '@/components/operationlog/TemporaryAuth.vue'
import RefusalAuth from '@/components/operationlog/RefusalAuth.vue'

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
    user: '156639327327',
    name: '蔡徐坤',
    terminalCode: '8a0d64322daac0299de269f43370121a_v1',
    macAddress: 'B0-25-AA-24-75-7B',
    localNetwork: '125.120.226.247',
    applicationTime: '2023-06-26  11:55:56',
    applicationStatus: '0',
  },
  {
    user: '156639327327',
    name: '坤柳',
    terminalCode: '8a0d64322daac0299de269f43370121a_v1',
    macAddress: 'B0-25-AA-24-75-7B',
    localNetwork: '125.120.226.247',
    applicationTime: '2023-06-26  11:55:56',
    applicationStatus: '1',
  },
  {
    user: '156639327327',
    name: '坤蛋',
    terminalCode: '8a0d64322daac0299de269f43370121a_v1',
    macAddress: 'B0-25-AA-24-75-7B',
    localNetwork: '125.120.226.247',
    applicationTime: '2023-06-26  11:55:56',
    applicationStatus: '0',
  },
]

// 筛选功能-日志时间
const daterange = ref('')

/**
 * 筛选功能-日志时间
 * @param {string} value - 日志时间
 */
const setTime = value => {
  daterange.value = value.value
}

// 筛选功能-搜索框内容
const search = ref('')
/**
 *筛选功能-搜索框回车事件
 */
const enter = () => {
  console.log(search.value)
}

// 是否显示授权模态
const isShowAccredit = ref(false)
/**
 * 显示授权模态
 */
const showAccredit = () => {
  isShowAccredit.value = !isShowAccredit.value
}
// 是否显示临时授权模态
const isShowTemporaryAuth = ref(false)
/**
 * 显示临时授权模态
 */
const showTemporaryAuth = () => {
  isShowTemporaryAuth.value = !isShowTemporaryAuth.value
}
// 是否显示拒绝授权模态
const isShowRefusalAuth = ref(false)
/**
 * 显示拒绝授权模态
 */
const showRefusalAuth = () => {
  isShowRefusalAuth.value = !isShowRefusalAuth.value
}
</script>

<style scoped lang="less">
.request {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
  .filter {
    display: flex;
    align-items: center;
    padding-bottom: 10px;
  }
  .layout-box-right-bottom {
    height: calc(100vh - 210px);
    padding: 10px 15px 0;
    background: #fff;
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
  .paging-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
    padding: 0 20px;
    height: 70px;
    background: #fff;
  }
  .login {
    margin-right: 10px;
    font-size: 12px;
    color: #2b53e5;
    // text-decoration: underline;
    cursor: pointer;
  }
  .applicationStatus0 {
    color: #e40303;
  }
  .applicationStatus1 {
    color: #21c161;
  }
}
</style>
