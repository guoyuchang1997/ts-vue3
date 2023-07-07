<template>
  <Popup v-model:isShow="getIsShow" width="594px" verify="保存" :divider="true" @sbmit="sbmit" title="账号编辑">
    <template #title>
      <div class="image"> <i class="iconfont icon-a-gantanhao1"></i><span class="titletext fs-xxl">提示</span> </div>
    </template>
    <template #main>
      <div class="main fs-lg">您确定关闭【1.10.35】云登浏览器，关闭前请注意保存！ </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed } from 'vue'

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
 * tijiao
 */
const sbmit = () => { }
</script>

<style scoped lang="less">
.main {
  margin-top: 40px;
  margin-bottom: 40px;
  color: #333;
}

.icon-a-gantanhao1 {
  color: #efb141;
  font-size: 35px;
  margin-right: 15px;
}

.titletext {
  font-weight: 500;
}

.image {
  display: flex;
  align-items: center;
  line-height: 1;
}</style>
