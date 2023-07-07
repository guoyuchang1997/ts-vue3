<template>
  <Popup v-model:isShow="getIsShow" title="设置分组" :divider="true" verify="保存" width="800px" @sbmit="sbmit">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="t"> 序号/名称 : </div>
          <div class="r" id="closesele">
            <span style="margin-right: 30px">01/名称</span>
            <span>04/名称</span>
          </div>
        </div>
        <div class="top flex footer">

          <div class="t">分组 : </div>
          <div class="r">
            <el-select v-model="group" class="m-2" size="default">

              <div class="btn">
                <div class="seatch flex"><el-input v-model="seacth" placeholder="" />
                  <div class="text fs-sm pointer">添加</div>
                </div>
                <div class="conten text fs-sm pointer" @click="visiblechange">默认分组</div>
              </div>
              <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
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
const group = ref()
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
const seacth = ref()
/**
 * 关闭下拉框
 */
const visiblechange = () => {
  group.value = '默认分组'

}
</script>

<style scoped lang="less">
.main {
  margin-top: 40px;
}

:deep(.el-select-dropdown__item) {
  padding-left: 45px;
}

.btn {
  width: 100%;

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
    margin-top: 25px;
    margin-bottom: 40px;
  }
}
</style>
