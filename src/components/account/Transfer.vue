<template>
  <Popup v-model:isShow="getIsShow" title="分享/转移" :divider="true" verify="保存" width="800px" @sbmit="sbmit">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="t"> 序号/名称 : </div>
          <div class="r">
            <span style="margin-right: 30px">01/名称</span>
            <span>04/名称</span><br />
            <el-radio-group v-model="Transfer" class="ml-4">
              <el-radio label="1" size="large">分享</el-radio>
              <el-radio label="2" size="large">转移</el-radio> </el-radio-group><br />
            <div class="text">
              可以分享账号的平台分类、账密/cookie、指纹、IP，给多个用户共同使用，分享后的账号不可撤回
            </div>
          </div>
        </div>
        <div class="top flex">
          <div class="t"> 转移对象 : </div>
          <div class="r">
            <el-checkbox v-model="checked1" label="账号信息" size="large" />
            <el-checkbox v-model="checked1" label="指纹信息" size="large" />
            <el-checkbox v-model="checked1" label="代理信息" size="large" />
            <el-checkbox v-model="checked1" label="备注信息" size="large" />
          </div>
        </div>
        <div class="top flex footer">
          <div class="t"> 分享对象 : </div>
          <div class="r">
            <el-radio-group v-model="Transfer" class="ml-4">
              <el-radio label="1" size="large">分享</el-radio>
              <el-radio label="2" size="large">转移</el-radio>
            </el-radio-group>
            <br />
            <div class="input flex"><el-input v-model="user" /> <span>多个用户或者ID用，隔开</span></div>
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
 * 提交
 */
const sbmit = () => { }
const Transfer = ref('1')
const checked1 = ref(false)
const user = ref('')
</script>

<style scoped lang="less">
:deep(.el-radio.el-radio--large) .el-radio__inner {
  width: 15px;
  height: 15px;
}

.main {
  margin-top: 40px;
}

.top {
  margin-top: 10px;
  align-items: baseline;

  .t {
    width: 80px;
  }

  .r {
    margin-left: 10px;
    flex: 1;

    >span {
      margin-right: 30px;
    }

    :deep(.el-input) {
      width: 300px;
      margin-right: 15px;
    }
  }

  &.text {
    color: #333;
  }

  &.footer {
    margin-bottom: 40px;
  }
}</style>
