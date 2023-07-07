<template>
  <!-- 拒绝授权模态 -->
  <div class="refusal-auth">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 横线 -->
    <div class="line"></div>
    <div class="info">
      <span class="iconfont">&#xe672; </span>
      <p>此操作将阻止申请用户登录,请谨慎操作。</p>
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
</script>

<style scoped lang="less">
.refusal-auth {
  padding: 0 10px 10px;
  .line {
    width: 100%;
    height: 1px;
    margin-top: 14px;
    background-color: #eeeeee;
  }
  .info {
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 70px;
    color: #ff9900;
    border: 1px solid #ff9900;
    border-radius: 8px;
    background: rgba(255, 153, 0, 0.05);
    .iconfont {
      margin-left: 98px;
      margin-right: 10px;
      color: #ff9900;
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
}
</style>
