<template>
  <div class="hander">
    <div class="top">
      <i class="iconfont icon-a-gantanhao1"></i
      ><span class="fs-lg">修改建议：有4项填写错误，请修改后再上传，若继续上传将剔除错误数据</span>
    </div>
    <div class="cale">
      <div class="le pointer" @click="emit('close')"><i class="iconfont icon-xiangzuojiantou"></i> 返回上级 </div>
      <div class="ri">继续导入</div>
    </div>
    <div class="page-content">
      <div class="table-wrapper">
        <el-table
          ref="tableRef"
          height="677"
          :data="tableData"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column width="180" prop="name" label="所属平台/自定义网址"> </el-table-column>
          <el-table-column label="名称" prop="group" show-overflow-tooltip> </el-table-column>
          <el-table-column label="登录账号" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="登录密码" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="Cookie" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="代理类型" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="代理设备信息" prop="account" show-overflow-tooltip> </el-table-column>
          <el-table-column label="UA" prop="type" show-overflow-tooltip> </el-table-column>
          <el-table-column label="标签">
            <template #default="scope">
              <div class="tags ellipsistag" style="display: flex; gap: 8px 5px; flex-wrap: wrap">
                <el-tag class="marb" v-for="(tag, index) in scope.row.tags" :key="index" :type="tag.type">{{
                  tag.name
                }}</el-tag>
                <i class="iconfont icon-edit"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="授权人" prop="group" show-overflow-tooltip> </el-table-column>
        </el-table>
      </div>
      <div class="pagination-wrapper">
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
  </div>
</template>

<script setup lang="ts">
import Paging from '~/paging.vue'
import { reactive } from 'vue'

const emit = defineEmits(['close'])
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
.zmhttp {
  color: #999999;
}
.iconmar {
  padding-right: 5px;
}

.iconimage {
  width: 19px;
  vertical-align: middle;
  padding-right: 5px;
}
.icon-a-gantanhao1 {
  color: red;
}
.qidong {
  display: flex;
  align-items: center;
}
.hander {
  .top {
    margin: 0 15px 10px;
    height: 50px;
    background: rgba(255, 0, 0, 0.05);
    border-radius: 100px 100px 100px 100px;
    opacity: 1;
    line-height: 50px;
    border: 1px solid #ff0000;
    padding-left: 20px;
    .iconfont {
      color: red;
      padding-right: 10px;
    }
  }
  .cale {
    display: flex;
    justify-content: space-between;
    padding: 0 15px;
    .le {
      color: #2d5aff;
    }
    .ri {
      cursor: pointer;
      width: 100px;
      height: 40px;
      background: #2b53e5;
      border-radius: 8px 8px 8px 8px;
      color: #fff;
      line-height: 40px;
      text-align: center;
    }
  }
}
.filter {
  background-color: #f6f6f6;
  padding-bottom: 10px;
  display: flex;

  :deep(.el-button) {
    width: 104px;
    border-radius: 8px;

    &.is-plain {
      border: 1px solid @fontactive;
      background: transparent;
      margin-right: 20px;

      &:hover,
      &:focus {
        background: @fontactive;
        color: #fff;
      }
    }
  }

  :deep(.el-select.el-select--large) {
    width: 132px;
    border: none;
    margin-right: 10px;
  }

  :deep(.el-input__wrapper) {
    border-radius: 8px;
    box-shadow: none !important;

    .el-input__inner::placeholder {
      color: #333333;
      font-size: 12px;
    }
  }

  .search-box {
    width: 410px;
    height: 40px;
    background: @tcolor;
    border-radius: 6px;
    padding: 0 30px;
    position: relative;

    :deep(.el-input__wrapper) {
      padding: 0 0 0 6px;

      .el-input__inner::placeholder {
        color: #999999;
      }
    }

    .iconfont {
      position: absolute;
    }

    .icon-sousuo {
      top: 50%;
      left: 10px;
      transform: translateY(-50%);
    }

    .icon-a-23 {
      top: 50%;
      right: 10px;
      transform: translateY(-50%);
    }
  }
}

.page-content {
  padding: 15px 10px 0 15px;

  .table-wrapper {
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
          font-family: Source Han Sans CN-Normal, Source Han Sans CN, serif;
          font-weight: 350;
          color: #333333;
        }

        .el-table__row.hover-row {
          // background-color: #f1f4ff;

          & > td.el-table__cell {
            // background-color: #f1f4ff;
          }

          .icon-edit {
            opacity: 1;
          }
        }
      }
    }
    .icon-dong {
      border: 1px solid #3363fc;
      color: #3363fc;
    }
    .icon-jing1 {
      border: 1px solid #00b899;
      color: #00b899;
    }
    .icon-zhi1 {
      border: 1px solid #7d3cff;
      color: #7d3cff;
    }
    .icon-dizhi {
      color: #ea7a00;
      margin-right: 5px;
      cursor: default;
    }

    .icon-edit {
      margin-left: 5px;
      color: #3363fc;
      opacity: 0;
      transition: opacity 0.3s;
    }
    .succer {
      color: #55e8ed;
    }
    .image {
      top: -9px;
      left: 16px;
      position: absolute;
      width: 12px;
    }
    .error {
      color: #ea0202;
    }

    .marb {
      margin-bottom: 5px;
      margin-right: 3px;
    }

    .topbtn {
      display: flex;
      align-items: center;
      position: relative;
    }
    .ellipsistag {
      display: -webkit-box !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .martopbtn {
      margin-top: 10px;
    }
    .topcolor {
      margin-left: 20px;
      color: #999;
    }

    .icon-more1 {
      margin-left: 10px;
      font-size: 18px;

      &[aria-describedby] {
        color: #2d5aff;
      }
    }

    .account-img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    .state-fail {
      color: #ff0000;
    }

    .state-loading {
      color: #2d5aff;
      display: flex;
      align-items: center;
      gap: 0 5px;

      .el-icon {
        animation: rotate 3s linear infinite;
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
.el-table {
  --el-table-row-hover-bg-color: #f1f4ff;
}
</style>
