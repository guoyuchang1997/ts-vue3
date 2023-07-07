<template>
  <Popup v-model:isShow="getIsShow" title="RPA" width="800px" :divider="true" verify="确定" @sbmit="sbmit">
    <template #main>
      <div class="titleinfo fs-base"
        ><i class="iconfont icon-a-gantanhao1"></i>
        本地设备执行，需软件启动并登录，产生的数据只存储在本地，不会跨设备同步
      </div>
      
      <div class="accname flex"
        ><span class="texts text">名称 : </span
        ><span>
          <el-tag
            v-for="(tag, index) in newAccount"
            :key="tag"
            class="mx-1 fs-base"
            style="margin-right: 10px; width: 120px; height: 32px"
            closable
            :disable-transitions="false"
            type=""
            @close="deleclase(index)"
          >
            22 <i class="iconfont icon-chrome"></i> {{ tag }}
          </el-tag></span
        >
      </div>
      <div class="accname flex"
        ><span class="text">全部分组 : </span>
        <div class="ri">
          <el-select v-model="group" class="m-2" placeholder="选择分组" style="width: 120px; margin-right: 10px">
            <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
          <el-select v-model="group" class="m-2" placeholder="选择RPA模板" style="width: 180px; margin-right: 10px">
            <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
          </el-select>
        </div>
      </div>
      <Quest />
    </template>
  </Popup>
</template>

<script setup lang="ts" name="successor">
import { computed, ref } from 'vue'
import Popup from '~/Popuplayer/index.vue'
import Quest from '~/rpa/Quest.vue'

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
const sbmit = () => {}
const newAccount = ref(['账号', '账号222'])
/**
 * 点击删除
 * @param index 索引
 */
const deleclase = index => {
  newAccount.value.splice(index, 1)
}
const group = ref()
const grouplist = ref([
  {
    value: 'Option1',
    label: '周一',
  },
  {
    value: 'Option2',
    label: '还是周一',
  },
  {
    value: 'Option3',
    label: '周一一',
  },
  {
    value: 'Option4',
    label: '周一',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
</script>

<style scoped lang="less">
.main {
  margin-top: 20px;
  display: flex;
  margin-bottom: 40px;
  height: 424px;
  .titleinfo {
    margin-top: -10px;
    color: #2b53e5;
    margin-bottom: 25px;
  }
  .accname {
    margin-bottom: 30px;
    .text {
      margin-right: 10px;
    }
    .texts {
      width: 64px;
      text-align: end;
    }
  }
}
</style>
