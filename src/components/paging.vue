<template>
  <div>
    <el-pagination
      :layout="layout"
      :page-size="page_size"
      :background="false"
      :page-sizes="pageSizes"
      :current-page="currentPage"
      :total="total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script setup lang="ts">
type Props = {
  /**
   * 配置项
   */
  layout?: string
  /**
   * 当前第几页
   */
  currentPage?: number
  /**
   * 每页展示多少数组
   */
  pageSizes?: number[]
  /**
   * 总数
   */
  total?: number
  /**
   * 每页显示条数
   */
  page_size?: number
  /**
   * 字体大小
   */
  fontsize?: string
}
withDefaults(defineProps<Props>(), {
  layout: 'total, sizes, prev, pager, next, jumper',
  currentPage: 1,
  pageSizes: () => [5, 10, 20, 30, 40],
  total: 0,
  page_size: 10,
  fontsize: '16px',
})

const emit = defineEmits(['currentChange', 'handleSizeChange'])
/**
 * 当前页传递出去
 *@param {number} val - 当前页码的值
 */
const handleCurrentChange = (val: number) => {
  emit('currentChange', val)
}
/**
 * 当前页显示多少
 * @param {number} pageSize - 当前页码的值
 */
const handleSizeChange = (pageSize: number) => {
  emit('handleSizeChange', pageSize)
}
</script>

<style scoped lang="less">
:deep(.el-pagination) {
  font-size: @font-size-lg;
  .el-pagination__total {
    font-size: v-bind(fontsize);
    font-weight: 400;
    color: #333333;
  }
  .number {
    font-size: v-bind(fontsize);
  }
}
</style>
