<template>
  <!-- 授权账号弹窗 -->
  <el-dialog v-model="authAccountDialog" :show-close="false" :title="null" class="auth-account-dialog" width="800">
    <template #header>
      <div class="dialog-header">
        <div class="title">授权账号</div>
        <div class="close" @click="authAccountDialog = false">
          <CloseIcon />
        </div>
      </div>
    </template>
    <template #default>
      <div class="dialog-body">
        <div class="select-info">
          <div class="item">已选成员：{{ rowData.true_name }}</div>
          <div class="line"></div>
          <div class="item">{{ rowData.name }}</div>
          <div class="line"></div>
          <div class="item">{{ rowData.dept?.department_name }}</div>
        </div>
        <div class="account-wrapper">
          <h3>选择需要授权的账号</h3>
          <div class="filter">
            <el-select v-model="group" style="width: 200px" suffix-icon="CaretBottom">
              <el-option :value="0" label="默认分组" />
              <el-option :value="1" label="分组一" />
              <el-option :value="2" label="分组二" />
              <el-option :value="3" label="分组三" />
            </el-select>
            <div class="search">
              <input v-model="nickName" placeholder="搜索账号名称" type="text" />
              <button class="search-btn">
                <i class="iconfont icon-sousuo"></i>
              </button>
            </div>
          </div>
          <div class="account-list">
            <el-table
              ref="multipleTableRef"
              :data="accountList"
              height="100%"
              row-key="id"
              style="width: 100%"
              @selection-change="selectChangeAccount"
            >
              <el-table-column type="selection" width="35" />
              <el-table-column label="序号" width="70">
                <template #default="{ $index }">
                  <span>{{ $index + 1 }}</span>
                </template>
              </el-table-column>
              <el-table-column label="id" prop="id"> </el-table-column>
              <el-table-column label="名称">
                <template #default="{ row }">
                  <div class="name-info">
                    <!-- <img :src="row.avatar" alt="" /> -->
                    <span>{{ row.nick_name }}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="分组" prop="zanwu">
                <template #default="{ row }">
                  <span>{{ row.zanwu || '暂无' }}</span>
                </template>
              </el-table-column>
              <el-table-column label="备注" prop="remark" show-overflow-tooltip />
            </el-table>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <button class="btn default" @click="authAccountDialog = false">取消</button>
      <button class="btn primary" @click="memberadds">确认授权</button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import CloseIcon from '@/assets/svg/team/close.svg'
import { ref, onMounted, computed, nextTick, watch } from 'vue'
import { ElTable } from 'element-plus'
import { accountData, TableData } from '../typing'
import { ElMessage } from 'element-plus'

const emits = defineEmits(['update:dialog-visible', 'handleSearch'])

const accountList = ref<accountData[]>([]) // 账号列表
const nickName = ref('') // 搜索关键字
const group = ref(0) // 分组

const api = inject<any>('$api')
/**
 * 选中数据
 */
const selectData = ref<accountData[]>([])
/**
 * 选择账号
 * @param selection - 选中的数据
 */
const selectChangeAccount = selection => {
  selectData.value = selection
}
// 接受参数
const props = defineProps({
  // 是否打开弹窗
  dialogVisible: {
    type: Boolean,
    default: false,
  },
  // 选中行数据
  rowData: {
    type: Object as () => TableData,
    default: () => ({} as TableData),
  },
})
/**
 * 表格ref
 */
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
// 通过props接受参数
/**
 * 显示隐藏
 */

// const authAccountDialog = ref(false)

const authAccountDialog = computed({
  get: () => props.dialogVisible,
  set: val => {
    emits('update:dialog-visible', val)
  },
})
watch(
  () => props.dialogVisible,
  val => {
    // console.log('dialogVisible 变化:', val)
    authAccountDialog.value = val
    if (!val) {
      selectData.value = []
      nickName.value = ''
    } else {
      nextTick(() => {
        // console.log('DOM 已更新----', props.rowData.account_ids)
        if (props.rowData.account_ids) {
          const accid = props.rowData.account_ids.split(',')
          const ids = accid.map(item => accountList.value.findIndex(obj => obj.id == item))
          ids.forEach(v => {
            if (v !== -1) {
              multipleTableRef.value!.toggleRowSelection(accountList.value[v], true)
            }
          })
        }
      })
    }
  }
)

/**
 * 获取授权使用的账户列表
 */
const getAccountList = () => {
  const params: { limit: number; nick_name?: string } = {
    limit: 888,
  }
  if (nickName.value) {
    params.nick_name = nickName.value
  }
  api.accountList(params).then((res: any) => {
    if (res.code === 200) {
      // console.log('获取授权使用的账户列表', res)
      accountList.value = res.data.data
      nextTick(() => {
        // console.log('DOM 已更新', props.rowData.account_ids)
        if (props.rowData.account_ids) {
          const accid = props.rowData.account_ids.split(',')
          const ids = accid.map(item => accountList.value.findIndex(obj => obj.id == item))
          ids.forEach(v => {
            // multipleTableRef.value!.toggleRowSelection(accountList.value[v], undefined)
            console.log('选中的行', v)
            v !== -1 && multipleTableRef.value!.toggleRowSelection(accountList.value[v], true)
          })
        }
      })
    }
  })
}

/**
 * 确认授权
 */
const memberadds = () => {
  const params: { uid: number; account_ids: (string | number)[] } = {
    uid: props.rowData.id,
    account_ids: [''],
  }
  // 循环获取id
  selectData.value.forEach(item => {
    params.account_ids.push(item.id)
  })
  api.memberadds(params).then((res: any) => {
    if (res.code === 200) {
      console.log('确认授权', res)
      ElMessage({
        message: '操作成功',
        type: 'success',
      })
      authAccountDialog.value = false
      emits('handleSearch')
      //  `${selectData.value.length > 0 ? '添加' : '清空'}成功`
      // this.$emit("changlist");
    }
  })
}
onMounted(() => {
  getAccountList()
})
</script>

<style lang="less">
@import '../index';
.el-popover.member-add-popper {
  min-width: 100px;
  .line {
    text-align: center;
    cursor: pointer;
    font-size: 12px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #333333;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      fill: #333;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }

    &:hover {
      color: #2d5aff;
      svg {
        fill: #2d5aff;
      }
    }
    & + .line {
      margin-top: 1px;
    }
  }
}
</style>
