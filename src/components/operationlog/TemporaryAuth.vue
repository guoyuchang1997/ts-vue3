<template>
  <!-- 临时授权模态 -->
  <div class="temporary-auth">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 横线 -->
    <div class="line"></div>
    <div class="box flex">
      <div>授权临时使用时长：</div>
      <el-select v-model="value" style="height: 32px;" class="m-2" placeholder="Select" size="large">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <!-- 保存&取消 -->
    <div class="buttons">
      <button @click="emit('close')">取消</button>
      <button>保存</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['close'])
const value = ref('1') // 临时授权时长
const options = ref([
  { value: '1', label: '1小时' },
  { value: '2', label: '2小时' },
  { value: '3', label: '3小时' },
  { value: '4', label: '4小时' },
  { value: '5', label: '5小时' },
])
</script>

<style lang="less" scoped>
.temporary-auth {
  padding: 0 10px 10px;

  .line {
    width: 100%;
    height: 1px;
    margin-top: 14px;
    background-color: #eeeeee;
  }

  .box {
    margin-top: 25px;

    :deep(.el-input) {
      height: 32px;
    }
  }

  .buttons {
    display: flex;
    justify-content: end;
    margin-top: 40px;

    button {
      width: 80px;
      height: 40px;
      border-radius: 8px;
      border: none;
      cursor: pointer;
    }

    button:first-child {
      background-color: #ffffff;
      border: 1px solid #cccccc;
      color: #333333;
    }

    button:last-child {
      margin-left: 10px;
      background-color: #2b53e5;
      color: #ffffff;
    }
  }
}</style>
