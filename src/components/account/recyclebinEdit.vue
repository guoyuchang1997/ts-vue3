<template>
  <Popup v-model:isShow="getIsShow" :title="title" :divider="true" verify="保存" width="615px" @sbmit="sbmit">
    <template #main>
      <div class="main"
        ><el-icon><WarningFilled /></el-icon>
        <span v-if="editInfo.type === 3">确认恢复回收站中的所有环境吗？</span>
        <span v-if="editInfo.type === 1">确认恢复“{{ editInfo.name }}”吗？</span>
        <span v-if="editInfo.type === 2"> 清空后环境将不可恢复，确认要删除“{{ editInfo.name }}”吗？</span>
        <span v-if="editInfo.type === 4">清空后环境将不可恢复，确认要删除吗？</span>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed, ref } from 'vue'

type editType = {
  id: number
  name: string
  type: number
}
interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
  title: string
  editInfo: editType // 1恢复 2删除 3全部恢复 4清空回收站
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
</script>

<style scoped lang="less">
.main {
  background: rgba(255, 153, 0, 0.05);
  border-radius: 8px 8px 8px 8px;
  border: 1px solid #ff9900;
  padding: 23px 20px;
  color: #ff9900;
  line-height: 24px;
  font-size: 14px;
  margin-top: -10px;
  text-align: center;
  .el-icon {
    vertical-align: text-bottom;
    margin-right: 10px;
  }
}
</style>
