<template>
  <div class="hander">
    <div class="page-content">
      <div class="table-wrapper">
        <el-table
          ref="tableRef"
          height="370"
          :scrollbar-always-on="true"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column width="120" prop="name" label="代理名称"> </el-table-column>
          <el-table-column label="IP" prop="group" show-overflow-tooltip> </el-table-column>
          <el-table-column label="归属地" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="代理标签" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column width="150" label="已绑定的账号序号" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="到期时间" prop="account" show-overflow-tooltip> </el-table-column>
        </el-table>
      </div>
      <div class="pagination-wrapper">
        <Paging
          fontsize="14px"
          :current-page="changePage.currentPage"
          :page-sizes="[5, 10, 20, 30, 40]"
          :total="changePage.total"
          :page_size="changePage.page_size"
          @current-change="handleCurrentChange"
          @handleSizeChange="handleSizeChange"
        />
      </div>
      <div class="text fs-xs">
        代理绑定账号前，请核对各平台的政策，谨慎操作～多个账号同时使用一代理可能会导致网速会较差，请谨慎操作
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Paging from '~/paging.vue'
import { reactive } from 'vue'

// const emit = defineEmits(['close'])
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

interface Tag {
  name: string
  type: string
}
interface TableData {
  id: number
  name: string
  ip: string
  address: string
  type: number
  account: string
  state: number
  remark: string
  tags: Tag[]
  Serial: string
  group: string
  icon: string
}

const tableData: TableData[] = [
  {
    id: 1,
    Serial: '1',
    group: '未分组',
    name: '亚马逊',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 1,
    account: '90UV9',
    icon: 'icon-dong',
    state: 3,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 2,
    group: '未分组',
    icon: 'icon-jing1',
    Serial: '2',
    name: '004',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 2,
    account: '123456',
    state: 2,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 1,
    Serial: '1',
    group: '未分组',
    name: '亚马逊',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 1,
    account: '90UV9',
    icon: 'icon-dong',
    state: 3,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 2,
    group: '未分组',
    icon: 'icon-jing1',
    Serial: '2',
    name: '004',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 2,
    account: '123456',
    state: 2,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 1,
    Serial: '1',
    group: '未分组',
    name: '亚马逊',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 1,
    account: '90UV9',
    icon: 'icon-dong',
    state: 3,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 2,
    group: '未分组',
    icon: 'icon-jing1',
    Serial: '2',
    name: '004',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 2,
    account: '123456',
    state: 2,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 1,
    Serial: '1',
    group: '未分组',
    name: '亚马逊',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 1,
    account: '90UV9',
    icon: 'icon-dong',
    state: 3,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 2,
    group: '未分组',
    icon: 'icon-jing1',
    Serial: '2',
    name: '004',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 2,
    account: '123456',
    state: 2,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
  {
    id: 3,
    group: '未分组',
    icon: 'icon-zhi1',
    Serial: '3',
    name: '辰链',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司',
    tags: [
      {
        name: 'loser',
        type: 'danger',
      },
      {
        name: 'cool',
        type: 'success',
      },
      {
        name: 'teacher',
        type: 'info',
      },
    ],
  },
]
/**
 * 选择发生变化时触发
 */
const handleSelectionChange = () => {}
</script>

<style scoped lang="less">
.pagination-wrapper {
  margin-top: 18px;
  display: flex;
  justify-content: flex-end;
}
.page-content {
  padding: 15px 10px 0 15px;
 >.text{
  margin-top: 15px;
 }
  .table-wrapper {
    // height: 400px;
    // overflow-y: auto;
    :deep(.el-table__header-wrapper) {
      .el-table__header {
        height: 40px;

        .el-table__cell {
          background: rgba(43, 83, 229, 0.05);
          font-weight: normal;
          color: #333333;
          height: 40px;
        }
      }
    }

    :deep(.el-table__body-wrapper) {
      .el-table__body {
        .el-table__cell {
          font-family: Source Han Sans CN-Normal, Source Han Sans CN, serif;
          font-weight: 400;
          color: #666666;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
