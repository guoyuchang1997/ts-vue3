<script lang="ts" setup>
import { inject, nextTick, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage, ElTable } from 'element-plus'
import SetTagDialog from '@/components/setTags/index.vue'
import OperationLog from '@/assets/img/proxy/operationLog.svg'
import AccessLog from '@/assets/img/proxy/accessLog.svg'
import BindDeviceLog from '@/assets/img/proxy/bindDeviceLog.svg'
import PlusRound from '@/assets/svg/proxy/plusRound.svg'
import AccountLog from '@/assets/img/proxy/accountLog.svg'
import TipsIcon from '@/assets/svg/proxy/tips.svg'
// import TipsSuccessIcon from '@/assets/svg/proxy/tipsSuccess.svg'
// import TipsErrorIcon from '@/assets/svg/proxy/tipsError.svg'
// import ErrorFailIcon from '@/assets/svg/proxy/errorFail.svg'
// import ErrorPrimaryIcon from '@/assets/svg/proxy/errorPrimary.svg'
import MountedTeleport from '~/MountedTeleport.vue'
import DeleteDialog from './DeleteDialog.vue'
import { Pagination, QueryData, Sunmmary, TableData } from './typing'

const api: any = inject('$api')
const router = useRouter()

const style = ref({})
const dialogVisible = ref<boolean>(false) // 自动续费弹窗
const searchState = ref({
  proxyType: '',
  keyword: '',
})
const tableRef = ref<InstanceType<typeof ElTable>>()
const selection = ref<TableData[]>([])
const loading = ref<boolean>(false)
const tableData = ref<TableData[]>([])
const pagination = ref<Pagination>({
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 0,
})
type CurrentTableRow = TableData | TableData[]
const currentTableRow = ref<CurrentTableRow>()
const expands = ref<number[]>([]) // 展开行ids
const colors = ['#DD5A3C', '#21C161', '#4E21C1', '#3C57DC']
const tagTypes = ['', 'success', 'info', 'warning', 'danger']
const inputRef = ref<HTMLElement | null>(null)
const summaryData = ref<Sunmmary>({} as Sunmmary)

/**
 * 按顺序返回标签类型
 * @param {number} index - 标签索引
 * @returns { string } - 标签类型
 */
const randomTagType = (index: number) => {
  return tagTypes[index % tagTypes.length]
}

/**
 * 获取代理统计信息
 */
async function getSummary() {
  try {
    const { data } = await api.getPlatformProxySummary()
    summaryData.value = data
  } catch (e) {
    ElMessage.error('服务异常')
  }
}

/**
 * 获取代理列表
 */
async function getProxyList() {
  loading.value = true
  try {
    const params: QueryData = {
      page: pagination.value.currentPage,
      limit: pagination.value.pageSize,
      device_name: searchState.value.keyword,
    }
    const { data } = await api.getPlatformProxyList(params)
    tableData.value = data.data
    pagination.value.total = data.total
  } catch (e) {
    ElMessage.error('服务异常')
  }
  loading.value = false
}

/**
 * 当表格选择项发生变化时会触发该事件。
 * @param {TableData[]} val - 所有选中项数据。
 */
const handleSelectionChange = (val: TableData[]) => {
  selection.value = val
}

/**
 * 每页条数改变时触发
 */
const handleSizeChange = () => {
  getProxyList()
}

/**
 * 当前页改变时触发
 */
const handleCurrentChange = () => {
  getProxyList()
}

/**
 * 设置展开行的宽度
 */
function setLineWidth() {
  const content = document.querySelector('.log-list')
  const lineEl = document.querySelector('.expand-content > .line') as HTMLDivElement
  if (!content || !lineEl) return
  const contentWidth = content?.scrollWidth
  lineEl.style.width = `${contentWidth}px`
}

/**
 * 表格行点击事件
 * @param { TableData } row - 行数据
 * @returns { void }
 */
const handleRowClick = (row: TableData) => {
  // 只允许展开一行
  if (expands.value.includes(row.id)) {
    expands.value = []
    return
  }
  expands.value = [row.id]

  // 允许展开多行
  // if (!expands.value.includes(row.id)) {
  //   expands.value.push(row.id)
  // } else {
  //   expands.value = expands.value.filter(val => val !== row.id);
  // }

  // 设置展开行的宽度
  setTimeout(setLineWidth)
}

/**
 * 显示编辑框
 * @param { 'name' | 'tag' } editType - 编辑类型
 * @param { TableData } row - 行数据
 */
const handleShowEdit = (editType: 'name' | 'tag', row: TableData) => {
  switch (editType) {
    case 'name':
      row.showEditName = true
      break
    default:
      row.showEditTags = true
      break
  }
  nextTick(() => {
    // @ts-ignore
    inputRef.value.focus()
  }).then(r => r)
}

/**
 * 确定编辑
 * @param { 'name' | tag } editType - 编辑类型
 * @param { TableData } row - 行数据
 * @returns { void }
 */
const handleEdit = (editType: 'name' | 'tag', row: TableData) => {
  // 修改代理名称
  if (editType === 'name') {
    row.showEditName = false
    return
  }
  // 修改标签
  if (!row.tag) {
    row.showEditTags = false
    return
  }
  row.tags.push(row.tag)
  row.tag = ''
  row.showEditTags = false
}

const setTagsRef = ref()
const deleteProxyRef = ref()

/**
 * 显示设置标签弹窗
 */
const showSetTag = () => {
  setTagsRef.value.openDialog()
}

/**
 * 显示删除代理弹窗
 * @param { TableData } row - 行数据
 */
const showDeleteProxy = (row?: TableData) => {
  currentTableRow.value = row || selection.value
  deleteProxyRef.value.openDialog()
}

/**
 * 前往代理续费
 */
const goBuyProxy = () => {
  router.push('/proxy-renewal/step-1')
}

/**
 * 确认删除代理
 */
async function handleConfirmDel() {
  try {
    let params = !Array.isArray(currentTableRow.value)
        ? { device_ids: [currentTableRow.value?.id] }
        : { status: 1, device_ids: selection.value.map(item => item.id) };
    const res = await api.batchDelPlatformProxy(params)
    if (res.code !== 200) return ElMessage.error(res.message || '删除失败')
    ElMessage.success('删除成功')
    await getProxyList()
  } catch (e) {
    ElMessage.error('服务异常')
  }
}

onMounted(() => {
  getProxyList()
  getSummary()

  const filterFormElHeight = document.querySelector('.filter')?.clientHeight
  style.value = {
    height: `calc(100% - ${filterFormElHeight}px)`,
  }
})
</script>

<template>
  <div class="plat-proxy">
    <MountedTeleport to="#HeaderMain">
      <div class="header-tips">
        <TipsIcon />
        <span>代理过期后将自动注销且不支持找回!为避免麻烦请在代理过期前完成续费～</span>
      </div>
    </MountedTeleport>
    <!-- 按钮操作及搜索 -->
    <div class="filter">
      <el-button style="font-size: 14px" type="primary">购买代理</el-button>
      <el-button :type="selection.length ? 'primary' : ''" @click="dialogVisible = true">
        <i class="iconfont icon-a-feiyong"></i>
        自动续费
      </el-button>
      <el-button :type="selection.length ? 'primary' : ''" @click="showSetTag">
        <i class="iconfont icon-a-biaoqian"></i>
        设置标签
      </el-button>
      <el-button :type="selection.length ? 'primary' : ''" style="margin-right: 20px" @click="showDeleteProxy()">
        <i class="iconfont icon-shanchu"></i>
        删除代理
      </el-button>
      <el-select v-model="searchState.proxyType" placeholder="代理类型" size="large" suffix-icon="CaretBottom">
        <el-option :value="1" label="正常"></el-option>
        <el-option :value="2" label="失效"></el-option>
      </el-select>
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="searchState.keyword" placeholder="搜索或新建搜索条件" size="large" />
        <i class="iconfont icon-a-23"></i>
      </div>
      <ul class="device-count">
        <li class="count all">
          <span class="label">全部设备</span>
          <span class="num fill">
            <span>{{ summaryData.all }}</span>
          </span>
        </li>
        <li class="count expiring">
          <span class="label">即将到期</span>
          <span class="num">
            <span>{{ summaryData.due_soon }}</span>
          </span>
        </li>
        <li class="count expired">
          <span class="label">已经过期</span>
          <span class="num">
            <span>{{ summaryData.expired }}</span>
          </span>
        </li>
        <li class="count auto-renew">
          <span class="label">自动续费中</span>
          <span class="num">
            <span>{{ summaryData.auto_renew }}</span>
          </span>
        </li>
        <li class="count fail">
          <span class="label">续费失败</span>
          <span class="num">
            <span>{{ 0 }}</span>
          </span>
        </li>
        <li class="count auto-renew-close">
          <span class="label">未开启自动续费</span>
          <span class="num">
            <span>{{ summaryData.no_auto_renew }}</span>
          </span>
        </li>
        <li class="count no-bind">
          <span class="label">未绑定</span>
          <span class="num">
            <span>{{ summaryData.no_bind }}</span>
          </span>
        </li>
      </ul>
    </div>
    <div :style="style" class="page-content">
      <!-- table数据 -->
      <div v-loading="loading" class="table-wrapper">
        <el-table
          ref="tableRef"
          :data="tableData"
          :expand-row-keys="expands"
          height="100%"
          row-key="id"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          @row-click="handleRowClick"
        >
          <el-table-column fixed type="selection" width="56" />
          <el-table-column type="expand">
            <template #default="">
              <div class="operate-logs">
                <h3 class="title">设备操作日志</h3>
                <div class="expand-content">
                  <div class="line"></div>
                  <div class="log-list">
                    <div v-for="(item, index) in 10" :key="item" class="log-item">
                      <div class="time-line">
                        <div :style="{ background: colors[index % colors.length] }" class="ball"></div>
                        <div class="time">2022-01-20 <br />16:50:36</div>
                      </div>
                      <div class="card">
                        <div :style="{ background: colors[index % colors.length] }" class="card-header">
                          <OperationLog v-if="item === 1 || item === 5 || item === 9" />
                          <AccessLog v-if="item === 2 || item === 6 || item === 10" />
                          <BindDeviceLog v-if="item === 3 || item === 7" />
                          <AccountLog v-if="item === 4 || item === 8" />
                          <span v-if="item === 1 || item === 5 || item === 9">操作日志</span>
                          <span v-if="item === 2 || item === 6 || item === 10">访问日志</span>
                          <span v-if="item === 3 || item === 7">设备绑定日志</span>
                          <span v-if="item === 4 || item === 8">账户动态记录日志</span>
                        </div>
                        <div class="card-body">
                          <span>这是操作内容，用户启动了服务器。</span>
                          <div class="user-info">
                            <img
                              alt=""
                              src="https://thirdqq.qlogo.cn/g?b=oidb&k=6wyVYyLyPC3L8Nr9SUJeibQ&s=100&t=1623998943"
                            />
                            <span>梁予安</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="代理名称" width="210">
            <template #default="{ row }">
              <template v-if="!row.showEditName">
                <span>{{ row.device_name }}</span>
                <i class="iconfont icon-edit" @click.stop="handleShowEdit('name', row)"></i>
              </template>
              <template v-else>
                <el-input
                  ref="inputRef"
                  v-model="row.device_name"
                  placeholder="代理名称"
                  @blur="handleEdit('name', row)"
                  @click.stop
                  @keyup.enter="handleEdit('name', row)"
                />
              </template>
            </template>
          </el-table-column>
          <el-table-column label="代理信息" width="160">
            <template #default="{ row }">
              <p style="margin-bottom: 5px">
                <i class="iconfont icon-dizhi"></i>
                {{ row.ip_address || '-' }}
              </p>
              <p style="font-size: 12px; color: #999999">{{ row.region_text + '-' + row.vtype_text }}</p>
            </template>
          </el-table-column>
          <el-table-column label="绑定账号">
            <template #default="{ row }">
              <div v-if="!row.account.length" class="bind-account">
                <PlusRound />
                <span>绑定账号</span>
              </div>
              <div v-else>
                <div class="account-info">
                  <img alt="" src="https://thirdqq.qlogo.cn/g?b=oidb&k=6wyVYyLyPC3L8Nr9SUJeibQ&s=100&t=1623998943" />
                  <span v-for="acc in row.account" :key="acc.id">{{ acc.nick_name }}</span>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="代理机型">
            <template #default="">
              <span>标准型</span>
            </template>
          </el-table-column>
          <el-table-column label="标签">
            <template #default="{ row }">
              <div class="tags">
                <el-tag v-for="(item, index) in row.tags" :key="item" :type="randomTagType(index)">{{
                  item ? item : '-'
                }}</el-tag>
                <i v-if="!row.showEditTags" class="iconfont icon-edit" @click.stop="handleShowEdit('tag', row)"></i>
                <template v-else>
                  <el-input
                    ref="inputRef"
                    v-model="row.tag"
                    class="edit-input"
                    placeholder="请输入"
                    @blur="handleEdit('tag', row)"
                    @click.stop
                    @keyup.enter="handleEdit('tag', row)"
                  />
                </template>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="代理状态">
            <template #default="{ row }">
              <span v-if="row.status_text === '运行中'" style="color: #62d65e">运行中</span>
              <span v-else-if="row.status_text === '创建失败'" style="color: #ff0000">创建失败</span>
              <span v-else-if="row.status_text === '创建中'" style="color: #f29e38">创建中</span>
              <span v-else-if="row.status_text === '已停止'" style="color: #ff0000">已停止</span>
              <span v-else>-</span>
            </template>
          </el-table-column>
          <el-table-column label="自动续费">
            <template #default="{ row }">
              <el-switch
                v-model="row.auto_renew"
                style="--el-switch-on-color: #13ce66; --el-switch-off-color: #cccccc"
                :inactive-value="0"
                :active-value="1"
                @click.stop
              />
            </template>
          </el-table-column>
          <el-table-column label="到期时间" width="160">
            <template #default="{ row }">
              <span :class="row.time_day_num < 1 ? 'custom-time expired' : 'custom-time'">{{ row.expired_time }}</span>
              <div :class="[row.time_day_num < 1 ? 'expired' : row.time_day_num === 1 ? 'less-one' : 'normal']">
                {{
                  row.time_day_num < 1 ? '已过期' : row.time_day_num === 1 ? '剩余不足1天' : `剩余${row.time_day_num}天`
                }}
              </div>
            </template>
          </el-table-column>
          <el-table-column label="最后登录时间" prop="lastLoginTime" width="160">
            <template #default="{ row }">
              <span class="custom-time">{{ row.last_login_at || '-' }}</span>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template #default="{ row }">
              <el-button type="primary" @click.stop="">查看</el-button>
              <el-popover
                :popper-options="{
                  modifiers: [
                    {
                      name: 'offset',
                      options: { offset: [10, 10] },
                    },
                  ],
                }"
                :width="110"
                placement="bottom-start"
                popper-class="action-popover"
                trigger="hover"
              >
                <div class="opt" @click="goBuyProxy">
                  <i class="iconfont icon-a-feiyong"></i>
                  <span class="text">续费</span>
                </div>
                <div class="opt" @click="showDeleteProxy(row)">
                  <i class="iconfont icon-shanchu"></i>
                  <span class="text">删除</span>
                </div>
                <div class="opt mb0">
                  <i class="iconfont icon-a-biaoqian"></i>
                  <span class="text">设置标签</span>
                </div>
                <template #reference>
                  <i class="iconfont icon-more1" @click.stop></i>
                </template>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <!-- 分页 -->
      <div class="pagination-wrapper">
        <el-pagination
          v-model:current-page="pagination.currentPage"
          v-model:page-size="pagination.pageSize"
          :background="false"
          :layout="pagination.layout"
          :page-sizes="pagination.pageSizes"
          :total="pagination.total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <!-- 自动续费 --->
    <el-dialog v-model="dialogVisible" :title="null" class="auto-renew-dialog" width="800">
      <template #header>
        <div class="title">自动续费</div>
      </template>
      <template #default>
        <div class="statement">
          <p>自动续费声明：</p>
          <p>1. 设备到期前1日执行自动续费，届时续费金额将从账户余额中扣除，请保证您的账户余额充足；</p>
          <p>2. 若余额不足导致续费失败，未续费的设备到期后将永久注销，不支持找回。</p>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <el-button plain @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </div>
      </template>
    </el-dialog>
    <!-- 设置标签 -->
    <SetTagDialog ref="setTagsRef" />
    <!-- 删除代理 -->
    <DeleteDialog ref="deleteProxyRef" :row="currentTableRow" @confirm="handleConfirmDel" />
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>

<style lang="less">
@import 'src/views/ownProxy/resetTable';
@import 'src/views/ownProxy/popover';
</style>
