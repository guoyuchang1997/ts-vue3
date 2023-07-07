<template>
  <div class="all-member">
    <div class="page-header">
      <div class="operational">
        <p class="company-name">杭州辰链信息科技有限公司<span>（145）</span></p>
        <!--
        <el-popover :width="108" placement="bottom" popper-class="member-add-popper" trigger="click">
          <template #reference>
            <el-button type="primary">
              添加成员
              <el-icon>
                <CaretBottom />
              </el-icon>
            </el-button>
          </template>
          <div>
            <p class="line"><AddIcon />单个添加</p>
            <p class="line"><CopyIcon />批量导入</p>
          </div>
        </el-popover>
        -->
        <el-button class="invite">邀请成员</el-button>
      </div>
      <div class="search-box">
        <i class="iconfont icon-menu"></i>
        <div class="input-wrapper">
          <i class="iconfont icon-sousuo" @click="handleSearchBefore"></i>
          <el-input v-model="memberName" placeholder="搜索或新建搜索条件" @keyup.enter="handleSearchBefore" />
          <i class="iconfont icon-a-23"></i>
        </div>
      </div>
    </div>
    <div class="page-content">
      <div class="left-side">
        <div class="company-name">
          <GongsiIcon />
          <span>杭州辰链信息科技有限公司</span>
        </div>
        <div style="padding-left: 21px">
          <departmentTree @change="treeChange"></departmentTree>
        </div>
      </div>
      <div class="table-wrapper">
        <el-table
          :data="dataSources"
          height="calc(100% - 62px)"
          row-key="id"
          style="width: 100%"
          @selection-change="handleTableSelectionChange"
        >
          <!-- <el-table-column type="selection" /> -->
          <el-table-column label="姓名/账号" prop="name">
            <template #default="{ row }">
              <div class="name-wrapper">
                <GongsiIcon />
                <div class="name">
                  <span>{{ row.true_name }}</span>
                  <p>{{ row.mobile || row.name }}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="所在部门" prop="dept">
            <template #default="{ row }">
              <span v-if="row.dept">{{ row.dept?.department_name }}</span>
              <span v-else>{{ row.company.company_name }}</span>
            </template>
          </el-table-column>
          <el-table-column label="授权账号" prop="accounts">
            <template #default="{ row }">
              <div v-for="(item, index) in arrform(row.accounts)" :key="index">
                <div v-if="index < 2" class="authorizedAccount">
                  {{ item }}
                </div>
                <div v-if="index === 2" class="authorizedAccount">...</div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="角色" prop="role_slugs">
            <template #default="{ row }">
              <div v-if="row.is_company_owner === 1">
                <span>创始人</span>
              </div>
              <div v-else>
                <span v-for="id in roleslugs(row.role_slugs)" :key="id">{{ id }} </span>
                <span v-if="!row.role_ids.length">-</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="代理状态" prop="status">
            <template #default="{ row }">
              <span v-if="row.status === 0" class="state default">{{ row.status_text }}</span>
              <span v-else-if="row.status === 1" class="state fail">{{ row.status_text }}</span>
              <span v-else>{{ row.status_text }}</span>
            </template>
          </el-table-column>
          <el-table-column label="联系方式" prop="mobile" />
          <el-table-column label="最后登录时间" prop="last_login_at">
            <template #default="{ row }">
              <span class="last-login-time">{{ row.last_login_at }}</span>
            </template>
          </el-table-column>
          <el-table-column label="是否在线" prop="is_online">
            <template #default="{ row }">
              <div class="online-state">
                <div v-if="row.is_online" class="online">
                  <span class="point"></span>
                  是
                </div>
                <div v-else class="offline">
                  <span class="point"></span>
                  否
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="action">
                <span class="link" @click="showAuthAccountDialog(row)">授权账号</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
        <div v-if="!dataSources.length" class="empty">
          <img alt="" src="@/assets/img/member/empty.png" />
        </div>
        <!-- 分页 -->
        <div class="pagination-wrapper">
          <Paging
            :current-page="pagination.currentPage"
            :layout="pagination.layout"
            :page-size="pagination.limit"
            :page-sizes="pagination.pageSizes"
            :total="pagination.total"
            @handle-size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
    <!-- 授权账号弹窗 -->
    <authAccount
      v-model:dialog-visible="authAccountDialog"
      :row-data="currentTableRow"
      @handle-search="handleSearch"
    ></authAccount>
  </div>
</template>

<script lang="ts" setup>
import GongsiIcon from '@/assets/svg/member/gongsi.svg'
import { onMounted, ref } from 'vue'
import { CaretBottom } from '@element-plus/icons-vue'
import Paging from '@/components/paging.vue'
import { TableData } from './typing'
import departmentTree from '@/components/department/index.vue'
import authAccount from './components/authAccount.vue'

const api = inject<any>('$api')

const dataSources = ref<TableData[]>([]) // table数据源
const pagination = ref({
  currentPage: 1,
  limit: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 0,
  departmentId: '',
}) // 分页配置

const currentTableRow = ref<TableData>() // 当前行数据
const authAccountDialog = ref(false) // 授权账号弹窗

/**
 * 点击组织架构
 * @param data - 节点信息
 */
const treeChange = (data: any) => {
  console.log(data)
  pagination.value.departmentId = data.id
}

/**
 * table 选择事件
 * @param { TableData[] } selection - 选中的数据
 */
const handleTableSelectionChange = (selection: TableData[]) => {
  console.log(selection)
}

/**
 * 显示授权账号弹窗
 * @param { TableData } row - 当前行数据
 */
const showAuthAccountDialog = (row: TableData) => {
  currentTableRow.value = row
  authAccountDialog.value = true
}

/**
 * 搜索字段
 */
const memberName = ref('')
/**
 * 搜索接口
 */
const handleSearch = () => {
  const { limit, currentPage, departmentId } = pagination.value
  api.memberList({ limit, currentPage, department_id: departmentId, true_name: memberName.value }).then((res: any) => {
    // console.log('res----', res)
    if (res.code === 200) {
      dataSources.value = res.data.data
      pagination.value.total = res.data.total
    }
  })
}
/**
 * 条件搜索
 */
const handleSearchBefore = () => {
  pagination.value.currentPage = 1
  handleSearch()
}
/**
 * 每页条数改变时触发
 * @param { number } val - 每页条数
 */
const handleSizeChange = (val: number) => {
  // console.log(`${val} items per page`)
  pagination.value.limit = val
  handleSearch()
}

/**
 * 当前页改变时触发
 * @param { number } val - 当前页
 */
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
  pagination.value.currentPage = val
  handleSearch()
}

/**
 * c处理授权账号显示
 * @param { any } arr - 授权账号
 * @returns { string } - 处理后的授权账号
 */
const arrform = (arr: any) => {
  if (!arr) return ''
  return arr.split(',')
}
/**
 * 处理角色显示
 * @param { any } va - 角色
 * @returns { string } - 处理后的角色
 */
const roleslugs = (va: any) => {
  if (va) {
    return va.split(',')
  }
  return ['-']
}

onMounted(() => {
  handleSearch()
})
</script>

<style lang="less">
@import '@/views/ownProxy/resetTable.less';
@import '@/views/ownProxy/popover.less';
</style>

<style lang="less" scoped>
@import 'index';
</style>
