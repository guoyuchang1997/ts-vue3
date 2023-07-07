<script lang="ts" setup>
import { h, onMounted, ref, shallowRef } from 'vue'
import Paging from '@/components/paging.vue'
import CloseIcon from '@/assets/svg/team/close.svg'
import SeparatorIcon from '@/assets/svg/team/separatorIcon.svg'
import ResignedIcon from '@/assets/svg/team/resigned.svg'
import NoTeamMemberIcon from '@/assets/svg/team/no.svg'
import InfoErrorIcon from '@/assets/svg/team/infoError.svg'
import OtherIcon from '@/assets/svg/team/other.svg'
import SelectIcon from '@/assets/svg/team/selected.svg'
import CalendarIcon from './CalendarIcon.vue'
import { AlreadyPassedTable, PendingApprovalTable, RejectedTable, Tab } from './typing'
import { list1, list2 } from './mock' // TODO mock数据 之后删除

/**
 * 自定义前缀
 * @returns { VNode } 自定义前缀
 */
const customPrefix = shallowRef({
  // eslint-disable-next-line require-jsdoc
  render() {
    return h(CalendarIcon)
  },
})

const searchValue = ref('') // 搜索关键字
const tabs = ref<Tab[]>([
  {
    label: '待审批',
    value: 1,
  },
  {
    label: '已通过',
    value: 2,
  },
  {
    label: '不通过',
    value: 3,
  },
]) // tab列表
const currentTab = ref<number>(1) // 当前tab
const pendingApprovalTableData = ref<PendingApprovalTable[]>([]) // 待审批列表
const alreadyPassedTableData = ref<AlreadyPassedTable[]>([]) // 已通过列表
const rejectedTableData = ref<RejectedTable[]>([]) // 不通过列表
const currentTableRow = ref<PendingApprovalTable>() // 当前行数据
const pagination = ref({
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 100,
}) // 分页配置
const approvalDialogVisible = ref(false) // 审批弹窗
const roleList = ref(list2) // 角色列表
const departmentList = ref(list1) // 部门列表
const role = ref() // 审批成员时选择的角色
const department = ref() // 审批成员时选择的部门
const connect = ref('') // 审批成员时填写的联系方式
const authWay = ref('1') // 审批成员时选择的授权方式
const timeSetting = ref('1') // 审批成员时选择的时间设置
const availableDate = ref('') // 审批成员时选择的可登录日期
const availableTime = ref({
  startTime: '',
  endTime: '',
}) // 审批成员时选择的可登录时间
const rejectDialog = ref(false) // 拒绝弹窗
const currentReason = ref(1) // 当前拒绝原因
const otherReason = ref('') // 其他原因

/**
 * tab切换
 * @param {number} value tab的value值
 */
const handleTabChange = (value: number) => {
  currentTab.value = value
}

onMounted(() => {
  for (let i = 1; i < 11; i += 1) {
    pendingApprovalTableData.value.push({
      id: i,
      applicationTime: '2021-08-09 12:00:00',
      name: `张三${i}`,
      mobile: '13888888888',
    })
    alreadyPassedTableData.value.push({
      id: i,
      applicationTime: '2021-08-09 12:00:00',
      name: `张三${i}`,
      mobile: '13888888888',
      department: '技术部',
      role: '管理员',
      operator: '李四',
      operationTime: '2021-08-09 12:00:00',
    })
    rejectedTableData.value.push({
      id: i,
      applicationTime: '2021-08-09 12:00:00',
      name: `张三${i}`,
      mobile: '13888888888',
      rejectReason: '不通过',
      operator: '李四',
      operationTime: '2021-08-09 12:00:00',
    })
  }
})
/**
 * 每页条数改变时触发
 * @param { number } val 每页条数
 */
const handleSizeChange = (val: number) => {
  pagination.value.pageSize = val
}

/**
 * 当前页改变时触发
 * @param { number } val 当前页
 */
const handleCurrentChange = (val: number) => {
  pagination.value.currentPage = val
}

/**
 * 显示审批弹窗
 * @param { PendingApprovalTable } row 当前行数据
 */
const showApprovalDialog = (row: PendingApprovalTable) => {
  currentTableRow.value = row
  approvalDialogVisible.value = true
}

/**
 * 显示拒绝弹窗
 * @param { PendingApprovalTable } row 当前行数据
 */
const showRejectDialog = (row: PendingApprovalTable) => {
  currentTableRow.value = row
  rejectDialog.value = true
}

/**
 * 拒绝理由切换
 * @param { number } value 拒绝理由的value值
 */
const handleChangeReason = (value: number) => {
  currentReason.value = value
}
</script>

<template>
  <div class="apply-approval">
    <div class="page-header">
      <div class="company-name">杭州辰链信息科技有限公司（145）</div>
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="searchValue" placeholder="请输入关键字搜索" />
        <i class="iconfont icon-a-23"></i>
      </div>
    </div>
    <div class="page-content">
      <div class="tabs">
        <div
          v-for="tab in tabs"
          :key="tab.value"
          :class="['tab', { active: currentTab === tab.value }]"
          @click="handleTabChange(tab.value)"
        >
          {{ tab.label }}
        </div>
      </div>
      <div class="table-wrapper">
        <template v-if="currentTab === 1">
          <el-table :data="pendingApprovalTableData" height="100%" row-key="id" style="width: 100%">
            <el-table-column label="申请时间" prop="applicationTime" />
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="手机号" prop="mobile" />
            <el-table-column label="操作">
              <template #default="{ row }">
                <div class="action">
                  <button class="primary" @click="showApprovalDialog(row)">通过</button>
                  <button class="reject" @click="showRejectDialog(row)">拒绝</button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </template>
        <template v-else-if="currentTab === 2">
          <el-table :data="alreadyPassedTableData" row-key="id" style="width: 100%">
            <el-table-column label="申请时间" prop="applicationTime" />
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="手机号" prop="mobile" />
            <el-table-column label="所在部门" prop="department" />
            <el-table-column label="角色" prop="role" />
            <el-table-column label="操作人" prop="operator" />
            <el-table-column label="操作时间" prop="operationTime" />
          </el-table>
        </template>
        <template v-else>
          <el-table :data="rejectedTableData" row-key="id" style="width: 100%">
            <el-table-column label="申请时间" prop="applicationTime" />
            <el-table-column label="姓名" prop="name" />
            <el-table-column label="手机号" prop="mobile" />
            <el-table-column label="拒绝原因" prop="rejectReason" />
            <el-table-column label="操作人" prop="operator" />
            <el-table-column label="操作时间" prop="operationTime" />
          </el-table>
        </template>
      </div>
      <div class="pagination-wrapper">
        <Paging
          :current-page="pagination.currentPage"
          :layout="pagination.layout"
          :page-size="pagination.pageSize"
          :page-sizes="pagination.pageSizes"
          :total="pagination.total"
          @handle-size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <!-- 审批成员 -->
    <el-dialog v-model="approvalDialogVisible" :show-close="false" :title="null" class="approval-dialog" width="700px">
      <template #header>
        <div class="dialog-header">
          <div class="title">审批成员</div>
          <div class="close" @click="approvalDialogVisible = false">
            <CloseIcon />
          </div>
        </div>
      </template>
      <template #default>
        <div class="dialog-body">
          <div class="body-item flex">
            <div class="item-label">手机号/邮箱：</div>
            <div class="item-content">{{ currentTableRow && currentTableRow.mobile }}</div>
          </div>
          <div class="body-item flex">
            <div class="item-label">姓名：</div>
            <div class="item-content">{{ currentTableRow && currentTableRow.name }}</div>
          </div>
          <div class="inline-item">
            <div class="body-item">
              <div class="item-label required mb5">角色：</div>
              <div class="item-content">
                <el-select v-model="role" suffix-icon="CaretBottom">
                  <el-option v-for="item in roleList" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
              </div>
            </div>
            <div class="body-item">
              <div class="item-label required mb5">部门：</div>
              <div class="item-content">
                <el-tree-select
                  v-model="department"
                  :data="departmentList"
                  :render-after-expand="false"
                  suffix-icon="CaretBottom"
                />
              </div>
            </div>
          </div>
          <div class="body-item">
            <div class="item-label mb5">联系方式：</div>
            <div class="item-content">
              <el-input v-model="connect" placeholder="请输入" />
            </div>
          </div>
          <div class="auth-date-setting">
            <div class="setting">
              <div class="label required">授权方式：</div>
              <div class="content">
                <el-radio-group v-model="authWay">
                  <el-radio label="1">全部设备永久授权</el-radio>
                  <el-radio label="2">首设备永久授权，后续需授权</el-radio>
                  <el-radio label="3">首次登陆新设备，均需授权</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="setting">
              <div class="label required">时间设置：</div>
              <div class="content">
                <el-radio-group v-model="timeSetting">
                  <el-radio label="1">不限</el-radio>
                  <el-radio label="2" style="margin-bottom: 5px">固定时间登录</el-radio>
                </el-radio-group>
                <div class="time-select-wrapper">
                  <div class="option mb10">
                    <div class="label-text">可登录日期</div>
                    <el-date-picker
                      v-model="availableDate"
                      :prefix-icon="customPrefix"
                      end-placeholder="结束日期"
                      size="small"
                      start-placeholder="开始日期"
                      type="daterange"
                    >
                      <template #range-separator>
                        <SeparatorIcon />
                      </template>
                    </el-date-picker>
                  </div>
                  <div class="option">
                    <div class="label-text">可登录时间</div>
                    <el-time-picker v-model="availableTime.startTime" placeholder="开始时间" size="small" />
                    <span class="separator">-</span>
                    <el-time-picker v-model="availableTime.endTime" placeholder="结束时间" size="small" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #footer>
        <el-button style="width: 80px; height: 40px" type="primary">通过</el-button>
      </template>
    </el-dialog>
    <!-- 拒绝弹窗 -->
    <el-dialog v-model="rejectDialog" :show-close="false" :title="null" class="reject-dialog" width="700">
      <template #header>
        <div class="dialog-header">
          <div class="title">选择拒绝理由</div>
          <div class="close" @click="approvalDialogVisible = false">
            <CloseIcon />
          </div>
        </div>
      </template>
      <template #default>
        <div class="dialog-body">
          <div class="content">
            <div :class="['reason', currentReason === 1 ? 'is-selected' : '']" @click="handleChangeReason(1)">
              <div class="radio-label-wrapper">
                <div class="radio"></div>
                <SelectIcon class="svg-icon" />
                <span class="label-text">已离职</span>
              </div>
              <ResignedIcon />
            </div>
            <div :class="['reason', currentReason === 2 ? 'is-selected' : '']" @click="handleChangeReason(2)">
              <div class="radio-label-wrapper">
                <div class="radio"></div>
                <SelectIcon class="svg-icon" />
                <span class="label-text">非团队成员</span>
              </div>
              <NoTeamMemberIcon />
            </div>
            <div :class="['reason', currentReason === 3 ? 'is-selected' : '']" @click="handleChangeReason(3)">
              <div class="radio-label-wrapper">
                <div class="radio"></div>
                <SelectIcon class="svg-icon" />
                <span class="label-text">资料填写有误</span>
              </div>
              <InfoErrorIcon />
            </div>
            <div :class="['reason', currentReason === 4 ? 'is-selected' : '']" @click="handleChangeReason(4)">
              <div class="radio-label-wrapper">
                <div class="radio"></div>
                <SelectIcon class="svg-icon" />
                <span class="label-text">其它原因</span>
              </div>
              <OtherIcon />
            </div>
          </div>
          <transition name="slide-fade">
            <el-input v-if="currentReason === 4" v-model="otherReason" :rows="4" placeholder="请输入" type="textarea" />
          </transition>
        </div>
      </template>
      <template #footer>
        <button class="btn default" @click="rejectDialog = false">取消</button>
        <button class="btn primary">确认</button>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less">
@import '@/views/ownProxy/resetTable.less';

.el-tree {
  --el-tree-node-hover-bg-color: rgba(43, 83, 229, 0.05);

  .el-tree-node__content {
    height: 32px;
  }
}

.el-select-dropdown__item {
  height: 32px;

  &:hover {
    background-color: rgba(43, 83, 229, 0.05);
  }

  &.selected {
    font-weight: 400;
  }
}
</style>

<style lang="less" scoped>
@import './index.less';

:deep(.el-table__body) {
  .el-table__cell {
    height: 65px;
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
