<template>
  <el-button :type="type" :size="btnSize" :disabled="disabled" @click="btnClick">
    <i class="icon iconfont" v-if="iconfont" v-html="iconfont"></i>
    <el-tooltip
      :disabled="textContent.length < 5"
      class="box-item"
      effect="dark"
      :content="textContent"
      placement="top"
    >
      <span>{{ textContent }}</span>
    </el-tooltip>
  </el-button>
 
</template>

<script setup lang="ts">
// ts 泛型形式定义
interface Props {
  /**
   * 按钮类型
   */
  type?: string
  /**
   * 图标
   */
  iconfont?: string
  /**
   * 按钮文字
   */
  textContent: string

  /**
   * 按钮大小
   * 宽度：large是108 默认是88
   */
  btnSize?: 'default' | 'large' | 'small' //
  /**
   * 是否禁用
   */
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  type: 'primary',
  btnSize: 'default', //  default: 'default',//'large'| 'default'| 'small'
  disabled: false,
})

//按钮点击事件
const emit = defineEmits<{
  (e: 'btnClick'): void
}>()
const btnClick = () => {
  emit('btnClick')
}
</script>

<style lang="less" scoped></style>
