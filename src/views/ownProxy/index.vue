<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { ElTable } from 'element-plus'
import { Refresh } from '@element-plus/icons-vue'
import { useDialog } from '.'
import { SearchData, TableData } from './typing'

const style = ref({})
const searchState = reactive<SearchData>({
  proxyType: '',
  keyword: '',
})

const tableRef = ref<InstanceType<typeof ElTable>>()
const selection = ref<TableData[]>([])
const tableData = ref<TableData[]>([
  {
    id: 1,
    name: '003',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 1,
    account: '90UV9',
    state: 3,
    remark: '杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司',
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
    name: '004',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 2,
    account: '123456',
    state: 2,
    remark: '杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司',
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
    name: '005',
    ip: '192.168.172.123',
    address: 'CN-浙江杭州',
    type: 3,
    account: 'admin',
    state: 1,
    remark: '杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司杭州辰链信息科技有限公司',
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
])
const pagination = ref({
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 100,
})

/**
 * 当表格选择项发生变化时会触发该事件
 * @param { TableData[] } val - 所有选中项数据
 */
const handleSelectionChange = (val: TableData[]) => {
  selection.value = val
}

/**
 * 每页条数改变时触发
 * @param { number } val - 每页条数
 */
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

/**
 * 当前页改变时触发
 * @param { number } val - 当前页
 */
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

const {
  dialogVisible,
  currentTab,
  addType,
  ruleForm,
  ruleFormRef,
  rules,
  batchForm,
  helpDialogVisible,
  resultDialogVisible,
  editDialog,
  handleOpenDialog,
  handleConfirmDialog,
  handleToggleProxyType,
} = useDialog()

onMounted(() => {
  const filterFormElHeight = document.querySelector('.filter').clientHeight
  style.value = {
    height: `calc(100% - ${filterFormElHeight}px)`,
  }
})
</script>

<template>
  <div class="proxy-page">
    <!-- 顶部按钮及筛选 -->
    <div class="filter">
      <el-button type="primary" @click="handleOpenDialog">添加代理</el-button>
      <el-button plain type="primary">检测代理</el-button>
      <el-select v-model="searchState.proxyType" placeholder="代理类型" size="large" suffix-icon="CaretBottom">
        <el-option :value="1" label="HTTP"></el-option>
        <el-option :value="2" label="HTTPS"></el-option>
        <el-option :value="3" label="Socks5"></el-option>
      </el-select>
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="searchState.keyword" placeholder="搜索或新建搜索条件" size="large" />
        <i class="iconfont icon-a-23"></i>
      </div>
    </div>
    <!-- 内容区域 -->
    <div :style="style" class="page-content">
      <div class="table-wrapper">
        <el-table
          ref="tableRef"
          :data="tableData"
          height="100%"
          row-key="id"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column fixed type="selection" width="56" />
          <el-table-column label="代理名称">
            <template #header>
              <span style="padding-left: 40px">代理名称</span>
            </template>
            <template #default="{ row }">
              <div style="padding-left: 40px">
                <span>{{ row.name }}</span>
                <i class="iconfont icon-edit"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column label="代理信息">
            <template #default="{ row }">
              <p style="margin-bottom: 5px">
                <i class="iconfont icon-dizhi"></i>
                {{ row.ip }}
              </p>
              <p style="font-size: 12px; color: #999999">{{ row.address }}</p>
            </template>
          </el-table-column>
          <el-table-column label="代理类型">
            <template #default="{ row }">
              <span>{{ row.type === 1 ? 'HTTP' : row.type === 2 ? 'HTTPS' : 'Socks5' }}</span>
            </template>
          </el-table-column>
          <el-table-column label="绑定账号">
            <template #default="{ row }">
              <el-popover
                :effect="'dark'"
                :show-arrow="false"
                :width="180"
                placement="bottom-start"
                popper-class="account-popover"
                trigger="hover"
              >
                <div class="popover-col">所属平台：Shopee</div>
                <div class="popover-col">账号名称：{{ row.account }}</div>
                <div class="popover-col">账号：{{ row.account }}</div>
                <template #reference>
                  <div style="cursor: pointer">
                    <img alt="" class="account-img" src="https://fuck.yuanki.cn/img/amazon.png" />
                    <span>{{ row.account }}</span>
                    <i class="iconfont icon-edit"></i>
                  </div>
                </template>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column label="代理状态">
            <template #default="{ row }">
              <span v-if="row.state === 1">正常</span>
              <span v-if="row.state === 2" class="state-fail">失效</span>
              <span v-if="row.state === 3" class="state-loading">
                <el-icon style="cursor: default"><Refresh /></el-icon>
                检测中......
              </span>
            </template>
          </el-table-column>
          <el-table-column label="备注" show-overflow-tooltip>
            <template #default="{ row }">
              <p class="column-remark">{{ row.remark }}</p>
            </template>
          </el-table-column>
          <el-table-column label="标签">
            <template #default="{ row }">
              <div class="tags" style="display: flex; gap: 8px 5px; flex-wrap: wrap">
                <el-tag v-for="tag in row.tags" :key="tag" :type="tag.type">{{ tag.name }}</el-tag>
                <i class="iconfont icon-edit"></i>
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="180">
            <template #header="">
              <div class="custom-table-column">
                <span>操作</span>
                <!--<i class="iconfont icon-setting"></i>-->
              </div>
            </template>
            <template #default="">
              <el-button type="primary" @click="editDialog.visible = true">编辑</el-button>
              <el-popover
                :popper-options="{
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [10, 10],
                      },
                    },
                  ],
                }"
                :width="110"
                placement="bottom-start"
                popper-class="action-popover"
                trigger="click"
              >
                <div class="opt">
                  <i class="iconfont icon-shanchu"></i>
                  <span class="text">删除</span>
                </div>
                <div class="opt mb0">
                  <i class="iconfont icon-a-biaoqian"></i>
                  <span class="text">设置标签</span>
                </div>
                <template #reference>
                  <i class="iconfont icon-more1"></i>
                </template>
              </el-popover>
            </template>
          </el-table-column>
        </el-table>
      </div>
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
    <!-- 弹窗 -->
    <el-dialog v-model="dialogVisible" :show-close="false" :title="null" width="1000">
      <div class="dialog-wrapper">
        <div class="tabs">
          <div :class="currentTab === 1 ? 'tab active' : 'tab'" @click="handleToggleProxyType(1)">自有代理</div>
          <div :class="currentTab === 2 ? 'tab active' : 'tab'" @click="handleToggleProxyType(2)">自有设备</div>
        </div>
        <div class="content">
          <!-- 单个添加 -->
          <div class="left">
            <div class="raido">
              <el-radio-group v-model="addType">
                <el-radio :label="1">单个添加</el-radio>
              </el-radio-group>
            </div>
            <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top">
              <el-form-item v-if="currentTab === 1" label="代理名称" prop="name">
                <el-input
                  v-model="ruleForm.name"
                  placeholder="请输入"
                  style="width: 320px; height: 36px; margin-right: 10px"
                />
                <el-button type="primary">自动生成</el-button>
              </el-form-item>
              <div v-if="currentTab === 2" class="system">
                <el-select
                  placeholder="选择操作系统"
                  style="width: 166px; margin-right: 10px"
                  suffix-icon="CaretBottom"
                >
                  <el-option :value="1" label="Windows" />
                  <el-option :value="2" label="Unix" />
                  <el-option :value="3" label="Mac" />
                  <el-option :value="3" label="Linux" />
                </el-select>
                <el-select placeholder="操作系统版本" style="width: 166px" suffix-icon="CaretBottom">
                  <el-option :value="1" label="Windows 7" />
                  <el-option :value="2" label="Windows 8" />
                  <el-option :value="3" label="Windows 10" />
                  <el-option :value="3" label="Windows XP" />
                </el-select>
              </div>
              <div style="display: flex; align-items: center">
                <el-form-item label="设备地址或域名" prop="device">
                  <el-input v-model="ruleForm.device" placeholder="请输入" style="width: 306px; height: 36px" />
                  <span style="margin-left: 10px">：</span>
                </el-form-item>
                <el-form-item prop="port" style="height: 36px; margin-bottom: -10px">
                  <el-input v-model="ruleForm.port" placeholder="请输入" style="width: 90px; height: 36px" />
                </el-form-item>
              </div>
              <el-form-item v-if="currentTab === 1" label="代理类型" prop="proxyType">
                <el-select v-model="ruleForm.proxyType" placeholder="请选择" style="width: 420px">
                  <el-option :value="1" label="HTTP" />
                  <el-option :value="2" label="HTTPS" />
                  <el-option :value="3" label="Socks" />
                </el-select>
              </el-form-item>
              <el-form-item label="登录账号" prop="account">
                <el-input v-model="ruleForm.account" placeholder="请输入" style="width: 420px; height: 36px" />
              </el-form-item>
              <el-form-item class="customed-form-item" label="登录密码" prop="password">
                <el-input
                  v-model="ruleForm.password"
                  placeholder="请输入"
                  style="width: 420px; height: 36px"
                  type="password"
                />
              </el-form-item>
            </el-form>
          </div>
          <!-- 批量添加 -->
          <div class="right">
            <div class="raido">
              <el-radio-group v-model="addType">
                <el-radio :label="2">批量添加</el-radio>
              </el-radio-group>
            </div>
            <!-- 自有代理-批量添加 -->
            <template v-if="currentTab === 1">
              <div class="explanation">
                <span>说明:</span>
                <p>1. 不填写代理类型时，将默认为HTTP类型</p>
                <p>2. 仅支持HTTP、HTTPS、SOCKS5三种代理类型</p>
                <p>3. 每一行一个代理，一次最多添加100个代理</p>
              </div>
              <div class="batch-add-wrapper">
                <el-select
                  v-model="batchForm.proxyType"
                  placeholder="选择代理类型"
                  style="width: 166px; margin-bottom: 10px"
                  suffix-icon="CaretBottom"
                >
                  <el-option :value="1" label="HTTP" />
                  <el-option :value="2" label="HTTPS" />
                  <el-option :value="3" label="Socks5" />
                </el-select>
                <textarea
                  v-model="batchForm.proxyInfoList"
                  placeholder="填写格式：&#13;&#10;192.168.0.1:8000{备注}&#13;&#10;192.168.0.1:8000:代理账号:代理密码{备注}&#13;&#10;socks5://192.168.0.1:8000[刷新URL]{备注}"
                />
              </div>
            </template>
            <!-- 自有设备-批量添加 -->
            <template v-else>
              <div class="system">
                <el-select
                  placeholder="选择操作系统"
                  style="width: 166px; margin-right: 10px"
                  suffix-icon="CaretBottom"
                >
                  <el-option :value="1" label="Windows" />
                  <el-option :value="2" label="Unix" />
                  <el-option :value="3" label="Mac" />
                  <el-option :value="3" label="Linux" />
                </el-select>
                <el-select placeholder="操作系统版本" style="width: 166px" suffix-icon="CaretBottom">
                  <el-option :value="1" label="Windows 7" />
                  <el-option :value="2" label="Windows 8" />
                  <el-option :value="3" label="Windows 10" />
                  <el-option :value="3" label="Windows XP" />
                </el-select>
              </div>
              <div class="security-group">
                <el-checkbox>我的安全组已开启</el-checkbox>
                <span @click="helpDialogVisible = true">（查看帮助）</span>
              </div>
              <div class="device-ip">
                <textarea
                  placeholder="每一行一个设备，一次最多添加100个设备&#13;&#10;&#13;&#10;填写格式&#13;&#10;192.168.0.1:8000:账号:密码 {备注}"
                />
              </div>
            </template>
          </div>
        </div>
        <!-- 底部操作按钮 -->
        <div class="footer">
          <div class="detection">
            <img alt="" src="@/assets/img/proxy/ce.png" />
            测一下
          </div>
          <div class="dialog-operate">
            <button class="btn primary" @click="handleConfirmDialog">添加</button>
            <button class="btn">清空</button>
          </div>
        </div>
        <!-- 检测结果 -->
        <div class="detetion-result">
          <p class="title">检测结果</p>
          <div class="table-wrapper">
            <div class="t-header">
              <el-row>
                <el-col :span="6">设备名称</el-col>
                <el-col :span="6">设备地址或域名</el-col>
                <el-col :span="6">端口</el-col>
                <el-col :span="6">检测结果</el-col>
              </el-row>
            </div>
            <div class="t-body">
              <el-row v-for="item in 10" :key="item" :class="item % 2 ? 'fail' : ''">
                <el-col :span="6">
                  设备-20230101
                  <i class="iconfont icon-edit"></i>
                </el-col>
                <el-col :span="6">192.168.0.1</el-col>
                <el-col :span="6">8080</el-col>
                <el-col :span="6" class="result">成功</el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
      <!-- 查看帮助弹窗 -->
      <el-dialog v-model="helpDialogVisible" :modal="false" append-to-body class="help-dialog" width="800">
        <template #header>
          <div class="title">用户使用说明</div>
        </template>
        <template #default>
          <div class="tips">
            <img src="@/assets/img/proxy/tips.png" />
            <span>为了更好的用户体验，建议用户开启安全组（未开启安全组，网速可能会被受限）</span>
          </div>
          <ul class="group-list">
            <li class="item">
              <a>阿里云安全组<br />设置说明</a>
            </li>
            <li class="item">
              <a>华为云安全组<br />设置说明</a>
            </li>
            <li class="item">
              <a>腾讯云安全组<br />设置说明</a>
            </li>
            <li class="item">
              <a>亚马逊云安全组<br />设置说明</a>
            </li>
          </ul>
          <div class="tips2">
            <img alt="" src="@/assets/img/proxy/tips_2.png" />
            <span>
              为了您能在访问账号时达到更佳的效果，若您的设备地址会不定期的发生变化，建议您修改网络属性后再进行导入操作，否则，当您在使用此设备地址访问账号时，可能会因为设备地址的变化而导致您无法正常访问账号。</span
            >
          </div>
        </template>
        <template #footer>
          <el-button class="confirm-btn" type="primary" @click="helpDialogVisible = false">确定</el-button>
        </template>
      </el-dialog>
      <!-- 添加结果弹窗 -->
      <el-dialog v-model="resultDialogVisible" :modal="false" append-to-body class="add-result-dialog" width="600">
        <template #header>
          <div class="title">添加结果</div>
        </template>
        <template #default>
          <div class="result"> 添加成功 <span>5</span> 个，失败 <span>2</span> 个，重复 <span>1</span> 个 </div>
        </template>
        <template #footer></template>
      </el-dialog>
    </el-dialog>
    <!-- 编辑代理 -->
    <el-dialog v-model="editDialog.visible" :title="null" class="edit-dialog" width="800">
      <template #header>
        <div class="title">编辑代理</div>
      </template>
      <template #default>
        <div class="content">
          <el-select
            v-model="editDialog.form.proxyType"
            style="width: 166px; margin-bottom: 15px"
            suffix-icon="CaretBottom"
          >
            <el-option :value="1" label="HTTP" />
            <el-option :value="2" label="HTTPS" />
            <el-option :value="3" label="Socks5" />
          </el-select>
          <el-input v-model="editDialog.form.device" placeholder="请输入" />
        </div>
        <div class="footer">
          <div class="detection">
            <img alt="" src="@/assets/img/proxy/ce.png" />
            测一下
          </div>
          <div class="operate">
            <button class="btn clear">清空</button>
            <button class="btn submit">提交</button>
          </div>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
@import './index';
</style>

<style lang="less">
@import './resetTable';
@import './popover';

.el-select-dropdown__item.selected {
  font-weight: 350;
}

.el-dialog__headerbtn .el-dialog__close {
  color: #333;
  font-weight: bold;
}

.el-dialog__headerbtn {
  font-size: 20px;
}

.help-dialog {
  box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.3);

  .title {
    font-size: 20px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    margin-bottom: 30px;
  }

  .tips {
    height: 40px;
    padding-left: 20px;
    margin-bottom: 30px;
    background: rgba(255, 153, 0, 0.05);
    border-radius: 20px 20px 20px 20px;
    border: 1px solid #ff9900;
    display: flex;
    align-items: center;

    img {
      width: 14px;
      height: 14px;
      margin-right: 10px;
    }

    span {
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }
  }

  .group-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .item {
      width: 160px;
      height: 80px;
      border-radius: 8px 8px 8px 8px;
      border: 1px solid #2b53e5;
      background-image: url('@/assets/img/proxy/group_item_bg.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      cursor: pointer;

      a {
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #2b53e5;
      }
    }
  }

  .tips2 {
    height: 70px;
    background: #fbfbff;
    border-radius: 8px 8px 8px 8px;
    border: 1px solid #2b53e5;
    display: flex;
    padding-left: 15px;
    padding-top: 15px;
    padding-right: 15px;
    margin-bottom: 30px;

    img {
      display: block;
      width: 14px;
      height: 14px;
      margin-right: 10px;
      margin-top: 2px;
    }

    span {
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }
  }

  .confirm-btn {
    width: 88px;
    height: 40px;
  }
}

.add-result-dialog {
  box-shadow: 0px 0px 10px 0px rgba(43, 83, 229, 0.3);

  .title {
    font-size: 20px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;
    margin-bottom: 30px;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #333;
    font-weight: bold;
  }

  .el-dialog__headerbtn {
    font-size: 20px;
  }

  .result {
    width: 540px;
    height: 70px;
    background: rgba(43, 83, 229, 0.05);
    border-radius: 8px 8px 8px 8px;
    opacity: 1;
    border: 1px solid #2b53e5;
    line-height: 70px;
    text-align: center;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #333333;

    span {
      color: #2b53e5;
    }
  }
}
</style>
