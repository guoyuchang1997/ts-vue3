<template>
  <Popup v-model:isShow="getIsShow" width="800px" verify="保存" :divider="true" @sbmit="sbmit" title="账号编辑">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="le">代理方式:</div>
          <div class="ri">
            <span style="margin-right: 30px">01/名称</span>
            <span>08/名称</span>
          </div>
        </div>
        <div class="top flex">
          <div class="le">代理方式:</div>
          <div class="ri">
            <el-select v-model="agency" class="m-2" placeholder="选择平台">
              <el-option v-for="item in agencylist" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <span class="text fs-sm pointer">指定打开URL</span>
          </div>
        </div>
        <div class="top flex">
          <div class="le">账号密码:</div>
          <div class="ri">
            <el-input v-model="accpassword" />
          </div>
        </div>
        <div class="top flex password">
          <div class="le">用户密码:</div>
          <div class="ri">
            <el-input v-model="userpassword" placeholder="请输入主机端口" />
          </div>
        </div>
        <div class="top flex footer">
          <div class="le">Cookie:</div>
          <div class="ri">
            <el-input v-model="Cookie" maxlength="500" show-word-limit type="textarea" />
          </div>
        </div>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed, ref } from 'vue'

interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})
const emits = defineEmits(['update:isShow'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})
const accpassword = ref()
const userpassword = ref()
/**
 * 提交表单
 */
const sbmit = () => {}
// 代理
const Cookie = ref()
const agency = ref()
const agencylist = ref([
  {
    value: '0',
    label: '本地网络',
  },
  {
    value: 'selfowned',
    label: '自有代理',
  },
])
</script>

<style scoped lang="less">
.password {
  :deep(.el-input) {
    width: 250px;
  }
}
.main {
  .top {
    margin-bottom: 25px;

    > .le {
      margin-right: 17px;
      width: 80px;
      text-align: end;
    }
    :deep(.el-input__wrapper) {
      width: 320px;
    }
    .ri {
      > span {
        margin-right: 20px;
      }
      .text {
        margin-left: 10px;
        color: #2b53e5;
      }
      :deep(.el-textarea__inner) {
        width: 425px;
        height: 220px;
        resize: none;
      }
    }
  }
  .footer {
    margin-bottom: 20px;
    align-items: flex-start;
  }
}
</style>
