<template>
  <div class="platform">
    <div class="conmain">
      <div class="le select">
        <span class="text fs-sm">账号平台</span>
        <el-select v-model="platform" class="m-2" placeholder="请选择">
          <el-option v-for="item in platformlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="le"> </div>
    </div>
    <div class="conmain password">
      <div class="le flex">
        <span class="text fs-sm">账号</span>
        <el-input v-model="from.name" placeholder="请输入内容"></el-input>
      </div>
      <div class="le flex">
        <span class="text fs-sm">密码</span>
        <el-input v-model="from.password" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="conmain">
      <div class="le select flex">
        <span class="text fs-sm">账号平台</span>
        :&nbsp;
        <div class="flex pointer" @click="numtype = !numtype">
          <div class="checker"> <span :class="{ active: numtype }"></span> </div>&nbsp;&nbsp;<span class="fs-sm">
            锁定账号</span
          ><span class="fs-sm font-hs">（勾选后自动填入电商网站的账号密码将不允许修改）</span>
        </div>
      </div>
      <div class="le"> </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const platform = ref()
const platformlist = ref([
  {
    value: '0',
    label: '自定义平台',
  },
  {
    value: '1',
    label: '亚马逊',
  },
  {
    value: '2',
    label: 'bilibili',
  },
  {
    value: '3',
    label: '抖音',
  },
  {
    value: '4',
    label: '百度',
  },
])
const from = ref({
  name: '',
  password: '',
})
const numtype = ref(false)
</script>

<style scoped lang="less">
.platform {
  .conmain {
    display: flex;
    margin-bottom: 10px;
    .text {
      display: inline-block;
      width: 130px;
      text-align: end;
      padding-right: 10px;
    }
    .select {
      :deep(.el-input__inner) {
        width: 400px;
      }
    }
  }
  .password {
    :deep(.el-input) {
      width: 443px;
    }
  }
}

</style>
