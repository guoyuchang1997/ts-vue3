<template>
  <Popup v-model:isShow="getIsShow" width="615px" verify="删除" :divider="true" @sbmit="sbmit" title="删除">
    <template #main>
      <div class="main"><i class="iconfont icon-a-gantanhao1"></i> 删除账号后可在30天内去“回收站”恢复，确认删除“123456”吗？</div>
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
  text-align: center;
  margin-top: 20px;
  color: #efb141;
  width: 554px;
  height: 70px;
  line-height: 70px;
  background: rgba(255, 153, 0, 0.05);
  border-radius: 8px 8px 8px 8px;
  opacity: 1;
  border: 1px solid #FF9900;

  .text {
    color: #2b53e5;
  }
}

.icon-a-gantanhao1 {
  color: #efb141;
  font-size: 14px;
  margin-right: 10px;
}

.titletext {
  font-weight: 500;
}

.image {
  display: flex;
  align-items: center;
  line-height: 1;
}
</style>
