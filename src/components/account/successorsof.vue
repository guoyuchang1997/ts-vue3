<template>
  <div class="success">
    <div class="seaceh flex">
      <el-input v-model="text" type="text" placeholder="搜索成员">
        <template #suffix>
          <div class="btn pointer">
            <i class="iconfont icon-sousuo fs-sm"></i>
          </div>
        </template>
      </el-input>
      <div class="chect flex pointer" @click="toggleAll">
        <div class="checker"> <span :class="{ active: all }"></span> </div>&nbsp;全选
      </div>
    </div>
    <div class="main"> <slot name="main"></slot> </div>
  </div>
</template>

<script setup lang="ts">
const text = ref()
const all = ref(false)
const emits = defineEmits(['update:all', 'change'])

/**
 * 状态传递给父组件
 */
const toggleAll = () => {
  all.value = !all.value
  // 触发自定义事件，将all的值传递给父组件
  emits('update:all', all.value)
  emits('change')
}
</script>

<style scoped lang="less">
.seaceh {
  :deep(.el-input) {
    width: 213px;
    height: 32px;
    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 16px;
    .el-input__wrapper {
      border-radius: 16px;
      padding-right: unset;
    }
  }
  .btn {
    width: 48px;
    height: 32px;
    background: #2b53e5;
    border-radius: 16px;
    .icon-sousuo {
      color: #fff;
    }
  }
}
.chect {
  margin-left: 10px;
}
.main {
  margin-top: 10px;
  width: 280px;
  height: 300px;
  background: rgba(43, 83, 229, 0.05);
  border-radius: 8px 8px 8px 8px;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-left: 10px;
}
</style>
