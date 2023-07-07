<template>
  <div class="page-content">
    <div class="table-wrapper">
      <el-table
        ref="tableRef"
        :data="tableData"
        style="width: 100%"
        height="calc(100vh - 220px)"
        class="selection-table"
        @selection-change="handleSelectionChange"
      >
        <el-table-column fixed type="selection" width="56" />
        <el-table-column width="70" label="序号" prop="Serial" show-overflow-tooltip> </el-table-column>
        <el-table-column width="110" prop="group" label="分组"> </el-table-column>
        <el-table-column label="账号名称" show-overflow-tooltip>
          <template #default="scope">
            <p
              ><i class="iconfont icon-windows iconmar font-color"></i>{{ scope.row.name }}
              <!-- <i class="iconfont icon-edit"></i> -->
            </p>
          </template>
        </el-table-column>
        <el-table-column label="账号/密码">
          <template #default="scope">
            <div class="account">
              <el-tooltip
                popper-class="recyclebin-table-popper"
                class="box-item"
                effect="dark"
                placement="bottom-start"
                :show-arrow="false"
              >
                <!-- trigger="click" -->
                <template #content>
                  <div>
                    <p>所属平台：<span>Shopee</span></p>
                    <p>账号名称：<span>12</span></p>
                    <p>账号：<span>12345679</span></p>
                  </div>
                </template>
                <span><i class="iconfont icon-anzhuo iconmar"></i><span>123456123456123456</span></span>
              </el-tooltip>
              <!-- <i class="iconfont icon-edit"></i> -->
            </div>
          </template>
        </el-table-column>
        <el-table-column label="备注" show-overflow-tooltip>
          <template #default="scope">
            <p class="ellipsis">杭州辰链</p>
            <!-- <i class="iconfont icon-edit"></i> -->
          </template>
        </el-table-column>
        <el-table-column label="标签">
          <template #default="scope">
            <div class="tags ellipsistag" style="display: flex; gap: 8px 5px; flex-wrap: wrap">
              <el-tag class="marb" v-for="(tag, index) in scope.row.tags" :key="index" :type="tag.type">{{
                tag.name
              }}</el-tag>
              <!-- <i class="iconfont icon-edit"></i> -->
            </div>
          </template>
        </el-table-column>
        <el-table-column label="操作者" prop="group" show-overflow-tooltip> </el-table-column>
        <el-table-column label="删除时间" show-overflow-tooltip>
          <template #default="scope">
            <p>03/14 15:35:56</p>
          </template>
        </el-table-column>
        <el-table-column label="" width="170">
          <template #default="scope">
            <div class="edit-btn">
              <p @click="edit({ name: '123456', id: 2, type: 2 })"
                ><i class="iconfont icon-shanchu"></i><span>删除</span></p
              >
              <p @click="edit({ name: '123456', id: 2, type: 1 })"><huifu-icon></huifu-icon><span>恢复</span></p>
            </div>
          </template>
        </el-table-column>
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
</template>

<script setup lang="ts">
import Paging from '~/paging.vue'
import { reactive } from 'vue'
import huifuIcon from '@/assets/svg/recyclebin/huifu.svg'

const emits = defineEmits(['edit'])
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

/**
 * 操作
 * @param {object} info
 */
const edit = info => {
  emits('edit', info)
}
</script>

<style scoped lang="less">
@import './accmain.less';

.opts:hover {
  color: @fontactive;
}

.tags {
  height: 55px;

  :deep(.el-tag) {
    height: 22px !important;
    transform: scale(0.9);
    font-weight: 500;
  }
}

.opts {
  padding: 16px 10px 0;

  > i {
    padding-right: 5px;
  }
}

.opts:nth-child(1) {
  padding-top: unset;
  padding-top: 7px;
}

.opts:nth-child(6) {
  padding-top: unset;
  padding-bottom: 7px;
}

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

.qidong {
  display: flex;
  align-items: center;
}

.page-content {
  background-color: #fff;
  // .table-wrapper {
  //   height: calc(100vh - 200px);
  //   overflow-y: auto;
  // }
  padding: 10px;
}

:deep(.el-table) {
  --el-table-row-hover-bg-color: #f1f4ff;
  --el-table-fixed-left-column: inset 10px 0 10px -10px rgba(43, 83, 229, 0.2);
  --el-table-fixed-right-column: inset -10px 0 10px -10px rgba(43, 83, 229, 0.2);

  border-radius: 10px;
  //box-shadow: 0px 0px 10px 0px rgb(43 83 229 / 20%);

  .el-table__header-wrapper tr th.el-table-fixed-column--left.is-last-column::before,
  .el-table__body-wrapper tr td.el-table-fixed-column--left.is-last-column::before {
    box-shadow: var(--el-table-fixed-left-column);
  }

  .el-table__header-wrapper tr th.el-table-fixed-column--right.is-first-column::before,
  .el-table__body-wrapper tr td.el-table-fixed-column--right.is-first-column::before {
    box-shadow: var(--el-table-fixed-right-column);
  }
  .edit-btn {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: #2d5aff;
    p {
      display: flex;
      align-items: center;
      cursor: pointer;
      .iconfont {
        font-size: 14px;
        margin-right: 5px;
      }

      svg {
        margin-right: 5px;
        width: 16px;
        height: 16px;
        fill: #2d5aff;
        margin-bottom: 2px;
      }
      & + p {
        margin-left: 30px;
        // border-left: 1px solid #dddddd;
        position: relative;
        // &::affter {
        //   content: '';
        //   position: absolute;
        //   left: 0;
        //   top: 0;
        //   width: 1px;
        //   height: 50px;
        //   background-color: #dddddd;
        // }
        &::before {
          content: '';
          position: absolute;
          left: -15px;
          top: 0;
          width: 1px;
          height: 20px;
          background-color: #dddddd;
        }
        // align-items: flex-start;
      }
    }
  }
  .account {
    .el-tooltip__trigger {
      display: flex;
      height: 20px;
      line-height: 20px;
      max-width: 100%;
      // max-width: calc(100% - 21px);
      float: left;
      span {
        flex: 1;
        //溢出显示。。。
        overflow: hidden; //超出的文本隐藏
        text-overflow: ellipsis; //溢出用省略号显示
        white-space: nowrap; // 默认不换行；
      }
    }
    .iconfont {
      float: left;
    }
  }

  .el-table__header-wrapper {
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

  .el-table__body-wrapper {
    .el-table__body {
      .el-table__cell {
        font-family: Source Han Sans CN-Normal, Source Han Sans CN, serif;
        font-weight: 350;
        color: #333333;
      }

      .el-table__row.hover-row {
        .icon-edit {
          opacity: 1;
        }
      }
    }
  }
}
</style>

<style lang="less">
.recyclebin-table-popper {
  min-width: 180px;
  max-width: 280px;
  div {
    padding: 5px 0;
    p {
      line-height: 24px;
      font-size: 14px;
      display: flex;
      span {
        flex: 1;
      }
    }
  }
}
</style>
