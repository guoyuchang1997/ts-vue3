<template>
  <div class="agency">
    <transition>
      <div v-if="data === 'selfowned'" class="ziyou"> <Table /></div>
    </transition>
    <transition>
      <div v-if="data === 'platform' && !numtype" class="ziyou"> <Table /></div>
    </transition>
    <transition>
      <div v-if="data === 'zm'" class="ziyou">
        <div>
          <div class="top flex">
            <div class="l"> 代理方式 : </div>
            <div class="r">
              <el-radio-group v-model="Setmeal" class="ml-4">
                <el-radio label="1" size="large">05分钟至25分钟套餐包（0.048元/ip）</el-radio>
                <el-radio label="2" size="large">25分钟至03小时套餐包（0.12元/ip）</el-radio>
                <el-radio label="3" size="large">25分钟至03小时套餐包（0.12元/ip）</el-radio>
              </el-radio-group>
            </div>
          </div>
          <div class="top flex">
            <div class="l"> 地区选择 : </div>
            <div class="ri">
              <el-radio-group v-model="operator" class="ml-4">
                <el-radio label="1" size="large">指定城市</el-radio>
                <el-radio label="2" size="large">省份混拨（注：未勾选默认全国混拨）</el-radio>
              </el-radio-group>
              <br />
              <el-select v-model="operationslist" placeholder="选择省份">
                <el-option v-for="item in citylist" :key="item.id" :label="item.name" :value="item.id"> </el-option>
              </el-select>
              <el-select v-model="operations" class="city" placeholder="选择城市">
                <el-option v-for="item in operation" :key="item" :label="item.name" :value="item.id"> </el-option>
              </el-select>
            </div>
          </div>
          <div class="top flex">
            <div class="l"> 地区选择 : </div>
            <div class="ri">
              <el-radio-group v-model="city" class="ml-4">
                <el-radio label="1" size="large">不限</el-radio>
                <el-radio label="2" size="large">联通</el-radio>
                <el-radio label="3" size="large">电信</el-radio>
              </el-radio-group>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <transition>
      <div v-if="data === 'Socks5'" class="ziyou">
        <div class="top flex">
          <div class="l"> 主机 端口 : </div>
          <div class="right">
            <el-input v-model="prot" class="w-50 m-2" placeholder="请输入主机端口">
              <template #suffix>
                <div class="fs-xs">端口 <i class="iconfont icon-a-gantanhao1 fs-xs"></i></div>
              </template>
            </el-input>
            <el-button :class="{ active: btnisshow }">检查代理</el-button>
          </div>
        </div>
        <div class="top flex marbu">
          <div class="l"> 代理账号 : </div>
          <div class="r input">
            <el-input v-model="username" placeholder="请输入账号（选填）" />
          </div>
        </div>
        <div class="top flex marbu">
          <div class="l"> 代理密码 : </div>
          <div class="r input">
            <el-input v-model="username" placeholder="请输入密码（选填）" />
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import Table from './table.vue'

interface Props {
  /**
   * 组件显示
   */
  data: string
  /**
   * 平台设备显示
   */
  numtype: boolean
}
withDefaults(defineProps<Props>(), {
  data: 'false',
  numtype: false,
})
// 端口
const prot = ref()
// 套餐
const Setmeal = ref()
// 城市
const city = ref()
// 运营商
const operator = ref()
// 省份
const operationslist = ref()
const citylist = reactive([
  {
    id: 321200,
    name: '江苏省泰州市',
  },
  {
    id: 321000,
    name: '江苏省扬州市',
  },
  {
    id: 321100,
    name: '江苏省镇江市',
  },
])
const operations = ref()
const operation = reactive([
  {
    id: 321200,
    name: '江苏省泰州市',
  },
  {
    id: 321000,
    name: '江苏省扬州市',
  },
  {
    id: 321100,
    name: '江苏省镇江市',
  },
])
const btnisshow = ref(false)
// 账号名字
const username = ref()
</script>

<style scoped lang="less">
.agency {
  margin-bottom: 20px;
  .top {
    align-items: baseline;
    .l {
      margin-right: 10px;
    }
    .r {
      :deep(.el-radio-group) {
        display: flex;
        flex-direction: column;
        .el-radio:nth-child(1) {
          margin-left: 7px;
        }
      }
      :deep(.el-radio) {
        margin-right: unset;
      }
      &.input {
        :deep(.el-input__wrapper) {
          width: 327px;
        }
      }
    }
    :deep(.ri) {
      .el-select {
        margin-bottom: 10px;
        .el-input__wrapper {
          width: 100px;
          margin-right: 20px;
        }
      }
      .city {
        .el-input__wrapper {
          width: 255px;
          margin-right: 20px;
        }
      }
    }
    .right {
      display: flex;
      :deep(.el-input__wrapper) {
        width: 236px;
      }
      :deep(.el-button) {
        margin-left: 5px;
        height: 34px;
        width: 80px;
        background: #ffffff;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        border: 1px solid #dddddd;
        color: #999;
        &.active {
          color: #fff;
          background: #2b53e5;
        }
      }
    }
  }
  .marbu {
    margin-top: 20px;
  }
}
</style>
