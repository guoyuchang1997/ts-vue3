<template>
  <Popup v-model:isShow="getIsShow" :divider="true" title="名称" verify="保存" width="800px" @sbmit="sbmit">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="t"> 序号/名称 : </div>
          <div class="r">
            <span style="margin-right: 30px">01/名称</span>
            <span>04/名称</span>
          </div>
        </div>
        <div class="top flex footer">
          <div class="t">分组 : </div>
          <div class="r"> <el-input v-model="text" maxlength="100" show-word-limit type="text" /></div>
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
 * 提交
 */
const sbmit = () => {}
const text = ref()
</script>

<style scoped lang="less">
.main {
  margin-top: 40px;
}

.top {
  margin-top: 10px;
  align-items: baseline;
  .t {
    width: 80px;
    text-align: end;
  }
  .r {
    margin-left: 10px;
    flex: 1;
    :deep(.el-input) {
      width: 320px;
    }
    > span {
      margin-right: 30px;
    }
  }
  &.footer {
    margin-top: 25px;
    margin-bottom: 40px;
  }
}
</style>
