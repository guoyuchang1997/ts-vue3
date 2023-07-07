<template>
  <!-- page:成员登录控制 -->
  <div class="control">
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
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="role" label="角色" />
        <el-table-column prop="department" label="所在部门" />
        <el-table-column prop="loginTime" label="登录时间" />
        <el-table-column prop="controls" label="操作">
          <template #default="{ row }">
            <span class="login" @click="showDetails">变更登录限制权限</span>
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
    <!-- 变更登录限制权限模态框 -->
    <el-dialog v-model="isShowDetails" width="539px" :show-close="false" destroy-on-close>
      <ChangeLoginDisplay @close="showDetails">
        <DialogTitle title="变更登录限制权限" @close="showDetails" />
      </ChangeLoginDisplay>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import Paging from '@/components/paging.vue'
import DialogTitle from '@/components/DialogTitle.vue'
import TimeSelector from '@/components/TimeSelector.vue'
import Inputsea from '@/components/Searchbox/Search.vue'
import ChangeLoginDisplay from '@/components/operationlog/ChangeLoginDisplay.vue'

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
    username: '156639327327',
    name: '周培',
    role: '经理',
    department: '运营-运营一组',
    loginTime: '2023-06-26  11:55:56',
  },
  {
    username: '156639327327',
    name: '周培',
    role: '经理',
    department: '运营-运营一组',
    loginTime: '2023-06-26  11:55:56',
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

// 是否显示 变更登录限制权限模态框
const isShowDetails = ref(false)
/**
 * 变更登录限制权限模态框
 */
const showDetails = () => {
  isShowDetails.value = !isShowDetails.value
}
</script>

<style scoped lang="less">
.control {
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
    font-size: 12px;
    color: #2b53e5;
    // text-decoration: underline;
    cursor: pointer;
  }
}
</style>
