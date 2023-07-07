<template>
  <!-- page:角色管理 -->
  <div class="role">
    <!-- page-header:页面搜索区域 -->
    <div class="page-header">
      <div class="left">
        <el-button type="primary">添加角色</el-button>
        <div class="company-name">杭州辰链信息科技有限公司（145）</div>
      </div>
      <div class="search-box">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="searchValue" placeholder="请输入关键字搜索" />
        <i class="iconfont icon-a-23"></i>
      </div>
    </div>
    <!-- page-content:页面表格 -->
    <div class="page-content">
      <el-table :data="tableData" width="100%" height="calc(100vh - 245px)">
        <el-table-column prop="role_slug" label="角色" width="180" />
        <el-table-column prop="users_name" label="角色成员" show-overflow-tooltip>
          <template #default="{ row }">
            <span class="ellipsis">{{ row.users_name }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="role_desc" label="描述" show-overflow-tooltip>
          <template #default="{ row }">
            <span class="ellipsis">{{ row.role_desc }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="330">
          <template #default="{ row }">
            <div class="edit-btn">
              <el-button type="text" @click="editMember(row)">编辑</el-button>
              <el-button type="text" @click="membersDialog = true">配置成员</el-button>
              <el-button type="text" class="delete-btn" @click="deleteItem(row)">删除角色</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
    <!-- page:编辑权限 -->
    <el-dialog v-model="editDialog" width="800px" destroy-on-close align-center :show-close="false" :top="0">
      <div>
        <DialogTitle :title="editDialogTitle" @close="editDialog = false" />
        <edit @close="editDialog = false" :usersId="editInfo.users_id" />
      </div>
    </el-dialog>
    <!-- page:编辑成员 -->
    <el-dialog v-model="membersDialog" width="800px" destroy-on-close align-center :show-close="false" :top="0">
      <div>
        <DialogTitle :title="membersDialogTitle" @close="membersDialog = false" />
        <members @close="membersDialog = false" />
      </div>
    </el-dialog>
    <!-- page:删除角色--没有成员 -->
    <el-dialog v-model="delDialog" width="800px" destroy-on-close align-center :show-close="false" :top="0">
      <div class="del-dialog">
        <DialogTitle title="删除角色" @close="delDialog = false" />
        <div v-if="!editInfo.users_id" class="del-area">
          <p class="tips">
            <el-icon><Delete /></el-icon>确定删除<span class="red">“人事专员”</span>吗？
          </p>
          <div class="post-btn-box">
            <el-button class="cancel" @click="delDialog = false">取消</el-button>
            <el-button class="red" type="primary" @click="delDialog = false">确认添加</el-button>
          </div>
        </div>
        <div v-else class="prohibit-deletion">
          <div class="tips">
            <p class="yellow">
              <el-icon><WarningFilled /></el-icon><span>不能删除</span>
            </p>
            <p>删除后将导致角色下成员无法正常访问云登录浏览器</p>
          </div>
          <p class="guidance"
            >您可以执行以下操作：<span>调整角色下成员角色后，再执行删除角色</span
            ><span>将角色下成员删除后，再执行删除角色</span></p
          >
          <div class="post-btn-box">
            <el-button type="primary" @click="delDialog = false">我知道了</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import DialogTitle from '@/components/DialogTitle.vue'
import { ref } from 'vue'
import edit from './components/edit.vue'
import members from './components/members.vue'
/**
 * @description 搜索字段.
 */
const searchValue = ref('')
/**
 * @description 表格数据
 */
const tableData = ref([
  {
    id: 60,
    company_id: 134,
    role_slug: '技术',
    role_desc: null,
    users_name:
      '李四(李五),123456(12212),测试2(测试2),dj(栋杰),运营2号(张三),兵伟(李兵伟),张五五(张祥),香蕉(香蕉1),1212(1212),用户名112(1212),张六(张祥)',
    users_id: '185,187,206,223,242,479,487,601,614,615,791',
  },
  {
    id: 61,
    company_id: 134,
    role_slug: 'UI',
    role_desc: null,
    users_name: '李四(李五),123456(12212),李五五(李武武),测试001(测试001)',
    users_id: '185,187,737,789',
  },

  { id: 97, company_id: 134, role_slug: '采购', users_name: 'dj(栋杰),李四我去(李四123)', users_id: '223,484' },
  {
    id: 99,
    company_id: 134,
    role_slug: '运营',
    role_desc: '运营店铺的人员运营店铺的人员运营店铺的人员运营店铺的人员运营店铺的人员运营店铺的人员',
    users_name: '',
    users_id: '',
  },
])
/**
 * @description 分页数据
 */
const pagination = ref({
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev,pager, next, jumper',
  total: 100,
})

/**
 * 分页pageSize change
 * @param {number} val pageSize.
 */
const handleSizeChange = (val: number) => {
  console.log('pageSize', val)
}

/**
 * 分页current change
 * @param {number} val currentPage.
 */
const handleCurrentChange = (val: number) => {
  console.log('currentPage', val)
}
/**
 * 编辑角色弹窗
 */
const editDialog = ref(false)

/**
 * @description 编辑角色弹窗数据.
 * @param {object } editInfo 编辑角色弹窗.
 */
const editInfo = ref({
  id: '',
  company_id: '',
  role_slug: '',
  role_desc: '',
  users_name: '',
  users_id: '123',
})
/**
 * 编辑角色
 * @param {object} row 当前行.
 */
const editMember = (row: any) => {
  console.log('编辑角色', row)
  editInfo.value = row
  editDialog.value = true
}

/**
 * 编辑角色弹窗title
 */
const editDialogTitle = ref('编辑角色')

/**
 * 成员弹窗
 */
const membersDialog = ref(false)
const membersDialogTitle = ref('配置成员')

/**
 * 删除角色弹窗
 */
const delDialog = ref(false)
/**
 * 删除角色
 * @param {object} row 当前行.
 */
const deleteItem = (row: any) => {
  console.log('删除角色', row)
  editInfo.value = row
  delDialog.value = true
}
</script>

<style lang="less">
@import 'src/views/ownProxy/resetTable.less';
</style>

<style scoped lang="less">
@import '@/assets/style/elDialogForm.less';
@import './index.less';
</style>
