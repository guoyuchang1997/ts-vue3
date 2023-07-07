<template>
  <!-- 角标组件 -->
  <div class="badge">
    <!-- 文字 -->
    <span v-if="props.number !== ''" class="badge-nub">{{ isNumber }}</span>
    <!-- 自定义插槽 -->
    <slot v-else class="badge-slotDom"></slot>
  </div>
</template>

<script lang="ts" setup>
import { BadgeProps } from '@/components/type'

const props: BadgeProps = defineProps({
  number: {
    type: [Number, String],
    default: '',
  },
  bgColor: {
    type: String,
    default: '#FF0000',
  },
  top: {
    type: String,
    default: '0',
  },
  left: {
    type: String,
    default: '0',
  },
})
/**
 * 计算属性
 * 是否为数字 如果超过99则显示99+
 */
const isNumber = computed(() => {
  if (props.number !== '') {
    if (Number(props.number) > 99) {
      return '99+'
    }
    return props.number
  }
  return ''
})
/**
 * 计算属性 将top后面加上px
 */
const topPx = computed(() => {
  return `${props.top}px`
})
/**
 * 计算属性 将left后面加上px
 */
const leftPx = computed(() => {
  return `${props.left}px`
})
</script>

<style lang="less" scoped>
.badge {
  position: absolute;
  // 根据内容决定宽高
  display: inline-block;
  min-height: 20px;
  min-width: 20px;
  top: v-bind('topPx');
  left: v-bind('leftPx');
  z-index: 10;

  .badge-nub {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    min-height: 20px;
    padding: 0 3px;
    color: #fff;
    line-height: 0;
    background-color: v-bind('props.bgColor');
    border-radius: 100px;
  }
}
</style>
