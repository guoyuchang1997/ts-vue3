<script lang="ts" setup>
import { ref } from 'vue'

const emit = defineEmits(['change'])
const tabs = [
  {
    label: '全部',
    value: 0
  },
  {
    label: '电商平台',
    value: 1
  },
  {
    label: '社交媒体',
    value: 2
  },
  {
    label: '支付平台',
    value: 3
  },
  {
    label: 'TikTok店铺',
    value: 4
  },
  {
    label: '其他类别',
    value: 5
  }
]
const currentTab = ref<number>(0)

const handleTabChange = (value: number) => {
  currentTab.value = value
  emit('change', value)
}
</script>

<template>
  <div class="top-menu">
    <div class="back">
      <i class="iconfont icon-xiangzuojiantou"></i>
      返回
    </div>
    <div class="tabs">
      <div
        v-for="tab in tabs"
        :key="tab.value"
        :class="['tab', currentTab===tab.value?'active':'']"
        @click="handleTabChange(tab.value)"
      >
        {{ tab.label }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.top-menu {
  font-size: 14px;
  height: var(--top-menu-height);
  font-family: Source Han Sans CN-Regular, Source Han Sans CN, serif;
  font-weight: 400;
  color: #333333;
  display: flex;
  align-items: center;
  gap: 0 35px;
  padding-left: 15px;

  .back {
    cursor: pointer;
    color: @fontactive;

    .iconfont {
      font-size: 12px;
    }
  }

  .tabs {
    display: flex;
    gap: 0 30px;

    .tab {
      padding: 5px 10px;
      border-radius: 100px;
      cursor: pointer;
      transition: all 0.3s ease;

      &.active {
        color: @fontactive;
        background-color: #EAF0FF;
      }
    }
  }
}
</style>