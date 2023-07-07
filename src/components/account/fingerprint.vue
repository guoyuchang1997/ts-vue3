<template>
  <Popup v-model:isShow="getIsShow" :divider="true" title="修改指纹" verify="确定" width="850px" @sbmit="sbmit">
    <template #main>
      <div class="main">
        <!-- <slot> -->
        <Expert class="Expro">
          <template #account>
            <div class="accname flex"><span class="texts text">名称</span><span>
                <el-tag v-for="(tag, index) in newAccount" :key="tag" class="mx-1 fs-base"
                  style="margin-right: 10px; width: 120px; height: 32px" closable :disable-transitions="false" type=""
                  @close="deleclase(index)">
                  22 <i class="iconfont icon-chrome"></i> {{ tag }}
                </el-tag></span>
            </div>
          </template>
        </Expert>
        <!-- </slot> -->
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed } from 'vue'
import Expert from '~/foundaccount/expert.vue'

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
const newAccount = ref(['账号', '账号222'])
/**
 * 点击删除
 * @param index 索引
 */
const deleclase = (index: number) => {
  newAccount.value.splice(index, 1)
}
</script>

<style scoped lang="less">
// :slotted(.Expert) {
//   width: unset !important;
// }
.Expro {
  width: unset !important;
}

.main {
  margin-top: -30px;
  max-height: 850px;
  overflow-y: auto;
}

.accname {
  margin-bottom: 20px;



  .texts {
    width: 130px;
    text-align: end;
    padding-right: 10px;
  }
}
</style>
