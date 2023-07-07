<template>
  <div class="nav" v-loading="loading">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane class="fs-lg" label="单个添加" name="first">
        <Singleadd />
      </el-tab-pane>
      <el-tab-pane class="fs-lg" label="快速添加" name="second">
        <fastadd />
      </el-tab-pane>
      <el-tab-pane label="批量导入" name="third">
        <Batchaddition />
      </el-tab-pane>
      <el-tab-pane label="一键迁移环境" name="fourth">
        <environment @opendevpop="opendevpop" />

      </el-tab-pane>
      <el-tab-pane label="API" name="api">
        <Api />
      </el-tab-pane>
    </el-tabs>
  </div>
  <platformselectpop @changezidingyiurl="changezidingyiurl" :platformlist="platformlist" :getplaturl="getplaturllist"
    v-if="Edittagpopshow" v-model:is-show="Edittagpopshow" />
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import Singleadd from '~/foundaccount/Singleaddition.vue'
import fastadd from '~/foundaccount/fastadditio.vue'
import environment from '~/foundaccount/environment.vue'
import Batchaddition from '~/foundaccount/Batchaddition.vue'
import platformselectpop from '~/foundaccount/platformselectpop.vue'
import Api from '~/foundaccount/api.vue'
import useStore from '@/store/index.js'
import { ElMessage } from 'element-plus'

const api = inject<any>('$api')
const Edittagpopshow = ref(false)
const Edittagpopshowchange = () => {
  Edittagpopshow.value = true
}
const showSuccessMessage = (message: string, type: 'success' | 'error' | 'warning') => {
  ElMessage({
    type,
    message: message,
  });
};
const activeName = ref('first')
/**
 * 点击回调
 * @param tab 代理
 * @param event e
 */
const handleClick = (tab: TabsPaneContext, event: Event) => {
  // useLeftList.changeCurrentname(activeName.value)
  // console.log(tab, event,activeName);

}
// 迁移环境
const opendevpop = (data: string) => {
  Edittagpopshowchange()

}
interface Platform {
  id: number;
  name: string;
}

interface ApiResult<T> {
  code: number;
  data: T;
}

const platformlist = ref<Platform[]>([]);
const getplaturllist = ref<string[]>([]);
const loading = ref(false);

const getPlatform = (): Promise<ApiResult<Platform[]>> => {
  return api.getplatform();
};

const getPlatUrl = (): Promise<ApiResult<string[]>> => {
  return api.getplaturl();
};

const fetchData = async <T>(apiFunction: () => Promise<ApiResult<T>>, dataVariable: { value: T }) => {
  try {
    const res = await apiFunction();
    if (res.code === 200) {
      dataVariable.value = res.data;
    }
  } catch (error) {
    showSuccessMessage('服务器错误', 'error')
  }
};
// 添加成功后刷新列表
const changezidingyiurl = () => {
  fetchData(getPlatUrl, getplaturllist)
}

// 调用所有参数
onMounted(async () => {
  try {
    loading.value = true;
    await Promise.all([
      fetchData(getPlatform, platformlist),
      fetchData(getPlatUrl, getplaturllist)
    ]);
  } catch (error) {
    showSuccessMessage('服务器错误', 'error')
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="less" scoped>
.nav {
  padding: 3px 15px 0 0;
  overflow: auto;
}

.demo-tabs>.el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

:deep(.el-tabs) {
  .el-tabs__item {
    font-size: 16px;
  }

  .el-tabs__content {
    min-width: 1614px;
  }

  .el-tabs__nav-scroll {
    padding-left: 15px;
  }
}
</style>
