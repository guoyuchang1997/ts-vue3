<template>
  <Popup v-model:isShow="getIsShow" :divider="true" title="设置标签" verify="保存" width="800px" @sbmit="sbmit">
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
          <div class="r">
            <!-- <el-input v-model="text" type="text">
              <template #suffix><span class="pointer fs-xm" style="color: #2b53e5">创建</span></template>
            </el-input> -->
            <el-select v-model="text" multiple class="m-2" size="default">


              <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
              <div class="btn">
                <div class="seatch flex"><el-input v-model="seacth" placeholder="" />
                  <div class="text fs-sm pointer">添加</div>
                </div>
              </div>
            </el-select>
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
const text = ref()
const seacth = ref()
const grouplist = ref([
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
])
</script>

<style scoped lang="less">
.main {
  margin-top: 40px;
}

.btn {
  width: 100%;
  margin-top: 10px;

  .text {
    margin-left: 5px;
    color: #2b53e5;
  }

  .conten {
    margin: 10px 0;
    margin-left: 20px;
  }


  :deep(.el-input) {
    width: 85%;
    margin-left: 5px;
  }
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

    >span {
      margin-right: 30px;
    }
  }

  &.footer {
    margin-top: 25px;
    margin-bottom: 40px;
  }
}
</style>
