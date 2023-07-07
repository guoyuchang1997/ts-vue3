<template>
  <el-form ref="queryFormRef" label-position="top" label-width="700px" :model="queryForm" :rules="rules">
    <div class="max-height">
      <div class="item">
        <el-form-item label="角色名称" prop="name">
          <el-input v-model="queryForm.name" placeholder="请输入角色名称" />
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="queryForm.name" type="textarea" placeholder="请输入角色描述" show-password />
        </el-form-item>
      </div>
      <div class="item" v-for="(item, index) in selection" :key="index">
        <authority
          :list="item?.list"
          :title="item?.name"
          v-model="item.check"
          @changeCheck="val => changeCheck(val, index)"
        />
      </div>
    </div>
    <el-form-item>
      <div class="post-btn-box">
        <el-button class="cancel" @click="reset(ruleFormRef)">取消</el-button>
        <el-button class="preserve" type="primary" @click="onSubmit(ruleFormRef)">确认添加</el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { ref, reactive, unref, watch } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import authority from './authority.vue'

interface ListItem {
  id: number
  name: string
}

const props = defineProps({
  // 选中项
  usersId: {
    type: String,
    default: '',
  },
  // 选项---最好通过pinia获取数据
  list: {
    type: Array as () => ListItem[],
    default: () => [] as ListItem[],
  },
})

/**
 * @description 监听
 */
watch(
  () => props.usersId,
  (newValue, oldValue) => {
    // 处理 usersId 变化的逻辑
    console.log('usersId changed:', newValue, oldValue)
    // 处理选中项、分为多层数据
  }
)
/**
 * @description 角色弹窗数据
 */
const selection = ref<any[]>([
  {
    name: '账号权限',
    check: [],
    list: [
      {
        id: 1,
        right_slug: 'account_viewAccountList',
        right_name: '查看账号列表',
        right_router: 'account',
        type: 0,
        sort: 1,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 2,
        right_slug: 'account_activateAccount',
        right_name: '分配/解绑账号',
        right_router: 'account',
        type: 0,
        sort: 2,
        flag_id: 1,
        role_type: 1,
      },
      {
        id: 4,
        right_slug: 'account_add/Edit/ImportAccount',
        right_name: '添加/编辑/导入账号',
        right_router: 'account',
        type: 0,
        sort: 4,
        flag_id: 1,
        role_type: 1,
      },
      {
        id: 7,
        right_slug: 'account_authorizedMember',
        right_name: '授权成员',
        right_router: 'account',
        type: 0,
        sort: 7,
        flag_id: 1,
        role_type: 1,
      },
      {
        id: 8,
        right_slug: 'account_startAccount',
        right_name: '启动账号',
        right_router: 'account',
        type: 0,
        sort: 8,
        flag_id: 1,
        role_type: 1,
      },
      {
        id: 9,
        right_slug: 'account_deleteAccount',
        right_name: '删除账号',
        right_router: 'account',
        type: 0,
        sort: 9,
        flag_id: 1,
        role_type: 1,
      },
    ],
  },
  {
    name: '设备权限',
    check: [],
    list: [
      {
        id: 10,
        right_slug: 'device_viewDeviceList',
        right_name: '查看设备列表',
        right_router: 'device',
        type: 1,
        sort: 10,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 11,
        right_slug: 'device_add/ImportDevice',
        right_name: '添加/编辑/导入设备',
        right_router: 'device',
        type: 1,
        sort: 11,
        flag_id: 9,
        role_type: 1,
      },
      {
        id: 13,
        right_slug: 'device_purchase/RenewEquipment',
        right_name: '购买/续费设备',
        right_router: 'device',
        type: 1,
        sort: 13,
        flag_id: 9,
        role_type: 1,
      },
      {
        id: 14,
        right_slug: 'device_assignAccount',
        right_name: '分配账号',
        right_router: 'device',
        type: 1,
        sort: 14,
        flag_id: 9,
        role_type: 1,
      },
      {
        id: 15,
        right_slug: 'device_deleteDevice',
        right_name: '删除设备',
        right_router: 'device',
        type: 1,
        sort: 15,
        flag_id: 9,
        role_type: 1,
      },
    ],
  },
  {
    name: '费用权限',
    check: [],
    list: [
      {
        id: 16,
        right_slug: 'payment_balanceRecharge',
        right_name: '余额充值',
        right_router: 'payment',
        type: 2,
        sort: 16,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 17,
        right_slug: 'payment_buyPackage',
        right_name: '购买套餐',
        right_router: 'payment',
        type: 2,
        sort: 17,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 18,
        right_slug: 'payment_viewBalanceDetails',
        right_name: '查看余额明细',
        right_router: 'payment',
        type: 2,
        sort: 18,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 20,
        right_slug: 'payment_viewOrderDetails',
        right_name: '查看订单明细',
        right_router: 'payment',
        type: 2,
        sort: 20,
        flag_id: 0,
        role_type: 1,
      },
    ],
  },
  {
    name: '团队权限',
    check: [],
    list: [
      {
        id: 24,
        right_slug: 'managements_viewTheListOfDepartmentMembers',
        right_name: '查看部门成员列表',
        right_router: 'managements',
        type: 3,
        sort: 24,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 25,
        right_slug: 'managements_add/Edit/invite/importMembers',
        right_name: '添加/编辑/邀请/导入成员',
        right_router: 'managements',
        type: 3,
        sort: 25,
        flag_id: 23,
        role_type: 1,
      },
      {
        id: 26,
        right_slug: 'managements_disable/enable/removeMember',
        right_name: '禁用/启用/删除成员',
        right_router: 'managements',
        type: 3,
        sort: 26,
        flag_id: 23,
        role_type: 1,
      },
      {
        id: 27,
        right_slug: 'managements_accountAuthorization',
        right_name: '账号授权',
        right_router: 'managements',
        type: 3,
        sort: 27,
        flag_id: 23,
        role_type: 1,
      },
      {
        id: 28,
        right_slug: 'managements_approvalApplication',
        right_name: '审批申请',
        right_router: 'managements',
        type: 3,
        sort: 28,
        flag_id: 23,
        role_type: 1,
      },
      {
        id: 30,
        right_slug: 'managements_transferMember',
        right_name: '转移成员',
        right_router: 'managements',
        type: 3,
        sort: 30,
        flag_id: 28,
        role_type: 1,
      },
      {
        id: 31,
        right_slug: 'managements_new/EditDepartment',
        right_name: '新建/编辑部门',
        right_router: 'managements',
        type: 3,
        sort: 31,
        flag_id: 28,
        role_type: 1,
      },
      {
        id: 32,
        right_slug: 'managements_deleteDepartment',
        right_name: '删除部门',
        right_router: 'managements',
        type: 3,
        sort: 32,
        flag_id: 28,
        role_type: 1,
      },
      {
        id: 33,
        right_slug: 'SafetyManagement_roleControl',
        right_name: '角色管理',
        right_router: 'managements',
        type: 3,
        sort: 33,
        flag_id: 0,
        role_type: 1,
      },
    ],
  },
  {
    name: '安全权限',
    check: [],
    list: [
      {
        id: 42,
        right_slug: 'rebate_seeTheListOfRebates',
        right_name: '查看反佣列表',
        right_router: 'rebate',
        type: 5,
        sort: 42,
        flag_id: 0,
        role_type: 1,
      },
      {
        id: 43,
        right_slug: 'rebate_applicationForWithdrawal',
        right_name: '申请提现',
        right_router: 'rebate',
        type: 5,
        sort: 43,
        flag_id: 41,
        role_type: 1,
      },
    ],
  },
])
/**
 * @description 角色编辑
 * @params 行数据
 */
const ruleFormRef = ref<FormInstance>()
/**
 * 表单内容
 */
interface RuleForm {
  name: string
  type: string
}

const queryForm = reactive<RuleForm>({
  name: '',
  type: '',
})

/**
 * 表单验证码
 */
const rules = reactive<FormRules>({
  name: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
  type: [{ message: '请输入角色描述', trigger: 'change' }],
})
const emit = defineEmits(['close'])
/**
 * 重置表单
 * @param  formData 表单数据节点
 * @returns {void}
 */
const reset = (formData: FormInstance | undefined) => {
  unref(formData)?.clearValidate()
  selection.value.forEach(item => {
    item.check = []
  })
  emit('close')
}

/**
 * 表单验证
 * @param fromData 表单ref
 */
const onSubmit = (fromData: FormInstance | undefined) => {
  if (fromData) {
    fromData.validate(valid => {
      if (valid) {
        console.log('SubmitForm', queryForm)
      }
    })
  }
}

/**
 * 权限改变
 * @param data 权限数据
 * @param index 权限索引
 */
const changeCheck = (data: any, index: number) => {
  selection.value[index].check = data
}
</script>

<style scoped lang="less">
@import '../index.less';
</style>

<style lang="less" scoped>
.checkbox-all {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 17px;
  padding-bottom: 7px;
  .el-checkbox {
    position: relative;
    &::after {
      position: absolute;
      content: '';
      border-bottom: 2px solid #2b53e5;
      width: 100%;
      left: 0;
      bottom: -7px;
    }
  }
}
//编辑
.max-height {
  max-height: 50vh;
  overflow-y: auto;
  margin-top: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  .item {
    padding: 9px 30px 17px;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 8px 8px 8px 8px;
    width: 740px;
    margin: 15px auto 0;
    &:first-child {
      margin-top: 0;
      padding: 20px 30px;
    }
    :deep(.el-checkbox-group) {
      display: flex;
      flex-wrap: wrap;
      .el-checkbox {
        margin-right: 0;
        width: 50%;
        padding-left: 24px;
      }
    }
  }
  :deep(.el-textarea) {
    .el-textarea__inner {
      min-height: 160px !important;
    }
  }
}
.post-btn-box .el-button--primary {
  width: 100px !important;
}
</style>
