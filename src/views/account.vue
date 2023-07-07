<template>
  <div class="conten" v-loading="loading">
    <div class="right">
      <div class="top">
        <Accounthead @openoff="openoff" />
      </div>
      <div class="main">
        <Accmain @openoff="openoff" :changePage="changePage" :accountlist="accountlist"
          @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"
          @multipleSelectionlist="multipleSelectionlist" />
      </div>
    </div>
    <!-- 转移 -->
    <Transfer v-if="Transfershow" v-model:is-show="Transfershow" />
    <!-- 分组 -->
    <Group v-if="groupshow" v-model:is-show="groupshow" />
    <!-- 标签 -->
    <tagpop v-if="tagishow" v-model:is-show="tagishow" />
    <!-- 备注 -->
    <remark v-if="remarks" v-model:is-show="remarks" />
    <!-- 授权成员 -->
    <successor v-if="successors" v-model:is-show="successors" />
    <!-- RPA -->
    <RPApop v-if="RPApopshow" v-model:is-show="RPApopshow" />
    <!-- 批量导入 -->
    <accounBatchaddition v-if="accounBatchadditionshow" v-model:is-show="accounBatchadditionshow" />
    <!-- 关闭 -->
    <closeaccountdele v-if="closeaccountdeleshow" v-model:is-show="closeaccountdeleshow" />
    <!-- 修改代理 -->
    <Editagency v-if="Modificationagent" v-model:is-show="Modificationagent" />
    <!-- 删除 -->
    <accountdele v-if="accountdeles" v-model:is-show="accountdeles" />
    <!-- 导出 -->
    <derive v-if="deriveshow" v-model:is-show="deriveshow" />
    <!-- 名称编辑 -->
    <tableusername v-if="tableusernameshow" v-model:is-show="tableusernameshow" />
    <!-- 编辑账号 -->
    <Accountediting v-if="Accounteditings" v-model:is-show="Accounteditings" />
    <!-- 单个账号删除 -->
    <deleaccounts v-if="deleaccountshow" v-model:is-show="deleaccountshow" />
    <!-- 指纹项 -->
    <fingerprint v-if="fingerprintshow" v-model:is-show="fingerprintshow" />
    <!-- 标签 -->
    <Edittagpops v-if="Edittagpopshow" v-model:is-show="Edittagpopshow" />
  </div>
</template>

<script setup lang="ts">
import Accounthead from '~/account/accounthead.vue'
import Accmain from '~/account/accmain.vue'
import Transfer from '~/account/Transfer.vue'
import Group from '~/account/group.vue'
import tagpop from '~/account/tagpop.vue'
import remark from '~/account/remark.vue'
import successor from '~/account/successor.vue'
import router from '@/router/index'
import RPApop from '~/account/RPApop.vue'
import accounBatchaddition from '~/account/accounBatchaddition.vue'
import closeaccountdele from '~/account/closeaccountdele.vue'
import Editagency from '~/account/editagency.vue'
import accountdele from '~/account/accountdele.vue'
import derive from '~/account/derive.vue'
import { ElMessage } from 'element-plus'
import tableusername from '~/account/tableusername.vue'
import Accountediting from '~/account/Accountediting.vue'
import deleaccounts from '~/account/deleaccount.vue'
import fingerprint from '~/account/fingerprint.vue'
import Edittagpops from '~/account/Edittagpop.vue'
import { User } from '@/hooks/regular'
import useDebounce from '@/hooks/useDebounce'

const api = inject<any>('$api')
const loading = ref(false)
const createToggleFunction = (refValue: any) => () => {
  refValue.value = true;
};

const fingerprintshow = ref(false);
const fingerprints = createToggleFunction(fingerprintshow);

const deleaccountshow = ref();
const deleaccount = createToggleFunction(deleaccountshow);

const tableusernameshow = ref(false);
const opennamepop = createToggleFunction(tableusernameshow);

const accountdeles = ref(false);
const accountdelechange = createToggleFunction(accountdeles);

const deriveshow = ref(false);
const deriveshowchange = createToggleFunction(deriveshow);

const Modificationagent = ref(false);
const editagency = createToggleFunction(Modificationagent);

const accounBatchadditionshow = ref(false);
const accountchange = createToggleFunction(accounBatchadditionshow);

const closeaccountdeleshow = ref(false);
const closeaccount = createToggleFunction(closeaccountdeleshow);

const Transfershow = ref(false);
const Transferchange = createToggleFunction(Transfershow);

const groupshow = ref(false);
const groupisopen = createToggleFunction(groupshow);

const tagishow = ref(false);
const tagchange = createToggleFunction(tagishow);

const successors = ref(false);
const successorchange = createToggleFunction(successors);

const remarks = ref(false);
const remarkchange = createToggleFunction(remarks);

const RPApopshow = ref(false);
const changeRPApopshow = createToggleFunction(RPApopshow);

const Edittagpopshow = ref(false);
const Edittagpop = createToggleFunction(Edittagpopshow);


const Accounteditings = ref(false);
const Accounteditingishow = createToggleFunction(Accounteditings);
const showSuccessMessage = (message: string, type: 'success' | 'error' | 'warning') => {
  ElMessage({
    type,
    message: message,
  });
};
// 自组建选择的账号
let multipleSelection = ref<User[]>([])
const multipleSelectionlist = (val: User[]) => {
  multipleSelection.value = val
}
// 设置星标
const Startargetxing = async () => {
  if (multipleSelection.value.length === 0) return showSuccessMessage('请选择账号', 'warning')
  const ids = multipleSelection.value.map(v => v.id)
  try {
    let obj = {
      account_ids: ids,
      status: 6
    };
    const res = await api.CancelStartargets(obj);
    if (res.code === 200) {
      showSuccessMessage('设置成功', 'success')
      getaccount()
    } else {
      showSuccessMessage(res.message, 'warning')
    }
  } catch (error) {
    showSuccessMessage('服务器错误', 'error')
  }
}


const changePage = ref({
  currentPage: 1,
  total: 0,
  page_size: 10,
})
// 分页
const handleCurrentChange = (page: number) => {
  changePage.value.currentPage = page
  getaccount()
}
// 每页参数
const handleSizeChange = (size: number) => {
  changePage.value.page_size = size
  changePage.value.currentPage = 1
  getaccount()
}
// 平台列表
const accountlist = ref({})
const getaccount = async () => {
  try {
    loading.value = true;
    const res = await api.getaccountlist({
      page: changePage.value.currentPage,
      limit: changePage.value.page_size,
    });
    if (res.code === 200) {
      accountlist.value = res.data
      const { current_page, total, per_page } = res.data
      changePage.value.currentPage = Number(current_page)
      changePage.value.total = Number(total)
      changePage.value.page_size = Number(per_page)
    } else {
      showSuccessMessage(res.message, 'warning')
    }
  } catch (error) {
    showSuccessMessage('服务器错误', 'error')
  } finally {
    loading.value = false;
  }
};

onMounted(async () => {
  getaccount()
})

const changegetaccount = () => {
  getaccount()
  showSuccessMessage('刷新成功', 'success')
}
const actions: { [key: string]: () => void } = {
  Transfer: Transferchange,
  group: groupisopen,
  opentag: tagchange,
  remark: remarkchange,
  successor: successorchange,
  RPA: changeRPApopshow,
  account: accountchange,
  zw: () => router.push('zw'),
  close: closeaccount,
  editagency: editagency,
  accountdeles: accountdelechange,
  Startarget: Startargetxing,
  copy: () => showSuccessMessage('复制成功', 'success'),
  derive: deriveshowchange,
  Accountediting: Accounteditingishow,
  accountdele: accountdelechange,
  opennamepop: opennamepop,
  deleaccount: deleaccount,
  fingerprints: fingerprints,
  Refresh: changegetaccount,
  Edittagpop: Edittagpop
};
const openoff = (data: string) => {
  if (actions[data]) {
    useDebounce(actions[data], 200)
  }
};
</script>

<style scoped lang="less">
.conten {
  display: flex;
  background-color: @mlcolor;
}

.left {
  background-color: @tcolor;
  width: 0;
  margin-top: 10px;
  height: calc(100vh - 80px);
  margin-right: 0;
  transition: width 0.3s;
  overflow: hidden;

  &.active {
    width: 360px;
    transition: width 0.3s;
    margin-right: 10px;
  }
}

.top {
  overflow: hidden;
}

.right {
  flex: 1;
  width: 0;
  background-color: @tcolor;
}
</style>
