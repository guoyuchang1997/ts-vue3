<template>
  <Popup v-model:isShow="getIsShow" width="600px" verify="保存" :divider="true" @sbmit="sbmit" title="导出">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="le">环境:</div>
          <div class="ri">
            最近200个环境
          </div>
        </div>
        <div class="top flex">
          <div class="le">文件类型:</div>
          <div class="ri">
            Excel文件（.xlsx）
          </div>
        </div>
        <div class="top flex footer">
          <div class="le">导出内容:</div>
          <div class="ri">
            <div class="select">
              <el-checkbox v-model="checked1" label="浏览器信息" size="large" />
              <el-checkbox v-model="checked2" label="账号信息" size="large" />
              <el-checkbox v-model="checked3" label="代理信息" size="large" />
              <el-checkbox v-model="checked4" label="指纹信息" size="large" />
            </div>
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
/**
 * 提交表单
 */
const sbmit = () => { }
const checked1 = ref()
const checked2 = ref()
const checked3 = ref()
const checked4 = ref()
</script>

<style scoped lang="less">
.main {
  color: #333;

  .top {
    margin-bottom: 25px;
    align-items: flex-start;

    .le {}

    .ri {
      padding-left: 15px;


      .select {
        margin-left: 20px;
        display: flex;
        flex-direction: column;

      }
    }

    .footer {
      margin-bottom: 98px;
    }
  }
}
</style>
