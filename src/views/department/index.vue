<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { CascaderProps, FormInstance, FormRules } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { TableListItem } from './typing'

export default defineComponent({
  name: 'Department',
  components: { Plus },
  // eslint-disable-next-line require-jsdoc
  setup() {
    const searchValue = ref<string>('')
    const tableData = ref<TableListItem[]>([
      {
        id: 2,
        departmentName: '技术部',
        departmentNum: 10,
        divisionManager: '王多鱼',
        children: [
          {
            id: 10,
            departmentName: '技术部-子部门 1',
            departmentNum: 10,
            divisionManager: '王多鱼',
          },
          {
            id: 101,
            departmentName: '技术部-子部门 2',
            departmentNum: 12,
            divisionManager: '王多鱼',
          },
        ],
      },
      {
        id: 3,
        departmentName: '行政部',
        departmentNum: 15,
        divisionManager: '王多鱼',
        children: [
          {
            id: 102,
            departmentName: '行政部-子部门 1',
            departmentNum: 10,
            divisionManager: '王多鱼',
          },
          {
            id: 103,
            departmentName: '行政部-子部门 2',
            departmentNum: 12,
            divisionManager: '王多鱼',
          },
        ],
      },
      {
        id: 1,
        departmentName: '杭州辰链信息科技有限公司',
        departmentNum: 15,
        divisionManager: '王多鱼',
        children: [],
      },
    ])
    const pagination = ref({
      currentPage: 1,
      pageSize: 10,
      pageSizes: [10, 20, 30, 40, 50],
      layout: 'total, sizes, prev, pager, next, jumper',
      total: 100,
    }) // 分页配置
    const dialogConfig = ref({
      visible: false,
      title: '新建部门',
      width: 800,
      disabled: false,
    }) // 弹窗配置
    const deleteDialogConfig = ref({
      visible: false,
      title: '删除部门',
      width: 800,
      departmentName: '',
      hasMember: false, // 是否有成员
    }) // 删除弹窗配置
    const formRef = ref<FormInstance>() // 表单实例
    const formData = reactive({
      superiorDepartment: '',
      departmentName: '',
    }) // 表单数据
    const formRules = reactive<FormRules>({
      superiorDepartment: [{ required: true, message: '请选择上级部门', trigger: 'change' }],
      departmentName: [{ required: true, message: '请输入部门名称', trigger: 'blur' }],
    })
    const cascaderProps: CascaderProps = {
      expandTrigger: 'click',
      label: 'departmentName',
      value: 'id',
      children: 'children',
    } // 级联选择器配置
    const cascaderData = ref([
      {
        id: 1,
        departmentName: '杭州辰链信息科技有限公司',
        children: [
          {
            id: 2,
            pid: 1,
            departmentName: '技术部',
            children: [
              {
                id: 10,
                pid: 2,
                departmentName: '技术部-子部门 1',
              },
              {
                id: 101,
                pid: 2,
                departmentName: '技术部-子部门 2',
              },
            ],
          },
          {
            id: 3,
            pid: 1,
            departmentName: '行政部',
            children: [
              {
                id: 102,
                pid: 3,
                departmentName: '行政部-子部门 1',
              },
              {
                id: 103,
                pid: 3,
                departmentName: '行政部-子部门 2',
              },
            ],
          },
        ],
      },
    ]) // 级联选择器数据

    /**
     * 表格选择事件
     * @param { TableListItem[] } val - 选中的数据
     */
    const handleSelectionChange = (val: TableListItem[]) => {
      console.log(val)
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

    /**
     * 关闭弹窗
     */
    const closeDialog = () => {
      formRef.value?.resetFields()
      dialogConfig.value.disabled = false
    }
    /**
     * 级联选择器改变事件
     * @param { number[] } val 选中的值
     */
    const handleCascaderChange = val => {
      console.log(val)
    }
    /**
     * 打开dialog
     * @param { string } type 弹窗类型
     * @param { TableListItem } row 行数据
     */
    const showDialog = (type, row?: any) => {
      if (type === 'add') {
        dialogConfig.value.title = '新建部门'
      } else if (type === 'edit') {
        dialogConfig.value.title = '编辑部门'
        dialogConfig.value.disabled = true
        formData.superiorDepartment = row.id
      } else if (type === 'addChildren') {
        dialogConfig.value.title = '添加子部门'
        dialogConfig.value.disabled = true
        formData.superiorDepartment = row.id
      }
      dialogConfig.value.visible = true
    }
    /**
     * 打开删除弹窗
     * @param { TableListItem } row 行数据
     */
    const showDeleteDialog = row => {
      deleteDialogConfig.value.departmentName = row.departmentName
      deleteDialogConfig.value.visible = true
      // deleteDialogConfig.value.hasMember = row.departmentNum > 0
    }

    return {
      searchValue,
      tableData,
      pagination,
      dialogConfig,
      formRef,
      formData,
      formRules,
      cascaderProps,
      cascaderData,
      deleteDialogConfig,
      handleCurrentChange,
      handleSizeChange,
      handleSelectionChange,
      closeDialog,
      handleCascaderChange,
      showDialog,
      showDeleteDialog,
    }
  },
})
</script>

<template>
  <div class="department-page">
    <div class="page-header">
      <div style="display: flex; align-items: center">
        <el-button size="large" type="primary" @click="showDialog('add', {})">新建部门</el-button>
        <div class="company-name">杭州辰链信息科技有限公司（145）</div>
      </div>
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="searchValue" placeholder="请输入关键字搜索" />
        <i class="iconfont icon-a-23"></i>
      </div>
    </div>
    <div class="page-content">
      <!-- 表格 -->
      <div class="table-wrapper">
        <el-table :data="tableData" row-key="id" style="width: 100%" @selection-change="handleSelectionChange">
          <el-table-column type="selection" />
          <el-table-column label="部门名称" prop="departmentName"></el-table-column>
          <el-table-column label="部门人数" prop="departmentNum">
            <template #default="{ row }">
              <span style="color: #2b53e5">{{ row.departmentNum }}</span
              >人
            </template>
          </el-table-column>
          <el-table-column label="部门经理" prop="divisionManager" />
          <el-table-column label="操作">
            <template #default="{ row }">
              <div class="action">
                <button
                  :style="{ visibility: !row.children ? 'hidden' : 'visible' }"
                  class="add"
                  @click="showDialog('addChildren', row)"
                >
                  <i class="iconfont icon-jia"></i>
                  添加子部门
                </button>
                <button class="edit" @click="showDialog('edit', row)">编辑</button>
                <button class="delete" @click="showDeleteDialog(row)">删除部门</button>
              </div>
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
    <!-- 弹窗 -->
    <el-dialog v-model="dialogConfig.visible" :width="dialogConfig.width" class="custom-dialog" @close="closeDialog">
      <template #header>
        <div class="title">{{ dialogConfig.title }}</div>
      </template>
      <template #default>
        <div class="content">
          <el-form ref="formRef" :inline="true" :model="formData" :rules="formRules" label-position="top">
            <el-form-item label="上级部门" prop="superiorDepartment" style="margin-right: 40px">
              <el-tree-select
                v-model="formData.superiorDepartment"
                :check-strictly="true"
                :data="cascaderData"
                :disabled="dialogConfig.disabled"
                :props="cascaderProps"
                :render-after-expand="false"
                :show-all-levels="false"
                placeholder="请选择上级部门"
                style="width: 320px"
                @change="handleCascaderChange"
              />
            </el-form-item>
            <el-form-item label="部门名称" prop="departmentName" style="margin-right: 0">
              <el-input v-model="formData.departmentName" placeholder="请输入部门名称" style="width: 320px" />
            </el-form-item>
          </el-form>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <button class="default" @click="dialogConfig.visible = false">取消</button>
          <button class="primary">确认</button>
        </div>
      </template>
    </el-dialog>
    <!-- 删除弹窗 -->
    <el-dialog v-model="deleteDialogConfig.visible" :width="deleteDialogConfig.width" class="custom-dialog">
      <template #header>
        <div class="title">删除部门</div>
      </template>
      <template #default>
        <div class="warning-box">
          <i class="iconfont icon-shanchu"></i>
          <template v-if="!deleteDialogConfig.hasMember">
            确定删除 <span>“{{ deleteDialogConfig.departmentName }}”</span> 部门吗？删除后不可撤销！
          </template>
          <template v-else> 部门 <span>“运营部”</span> 还存在未转移成员，请先转移成员！</template>
        </div>
      </template>
      <template #footer>
        <div class="footer">
          <button class="default" @click="deleteDialogConfig.visible = false">取消</button>
          <button v-if="!deleteDialogConfig.hasMember" class="delete">确定删除</button>
          <button v-else class="primary">确定</button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style lang="less">
@import 'src/views/ownProxy/resetTable.less';

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
</style>

<style lang="less" scoped>
@import './index.less';

:deep(.el-table__body) {
  .el-table__cell {
    height: 68px;
  }
}
</style>
