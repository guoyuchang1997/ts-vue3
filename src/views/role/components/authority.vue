<template>
  <div>
    <p class="checkbox-all">
      <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">{{
        propos.title
      }}</el-checkbox>
    </p>
    <el-checkbox-group v-model="checkedItem" @change="handleCheckedItemChange">
      <el-checkbox v-for="item in list" :key="item.id" :label="item.id">{{ item.right_name }}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

interface ListItem {
  id: number
  right_name: string
}
const propos = defineProps({
  // 标题
  title: {
    type: String,
    default: '',
  },
  // 显示的数值
  value: {
    type: Array,
    default: () => [] as number[],
  },
  // 选项
  list: {
    type: Array as () => ListItem[],
    default: () => [] as ListItem[],
  },
})
const checkAll = ref(false)
const isIndeterminate = ref(false)
const checkedItem = ref(propos.value)
/**
 * 监听选中值变化
 */
const emits = defineEmits(['changeCheck'])
watch(checkedItem, newValue => {
  // 在这里处理 checkedItem 变化的逻辑
  console.log('checkedItem changed:', newValue)
  emits('changeCheck', newValue)
})
/**
 * 全选
 * @param val 是否选中
 */
const handleCheckAllChange = (val: boolean) => {
  if (val) {
    checkedItem.value = propos.list.map((item: any) => item.id)
  } else {
    checkedItem.value = []
  }
  isIndeterminate.value = false
}
/**
 * change事件
 * @param value 返回的值
 */
const handleCheckedItemChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === propos.list.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < propos.list.length
}
</script>

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
</style>
