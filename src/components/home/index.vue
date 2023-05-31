<template>
  <div class="btn">
    <div class="color fs-xs">我是红色</div>
    <el-button round>Round</el-button>
    <el-button type="primary" round>Primary</el-button>
    <el-button type="success" round>Success</el-button>
    <el-button type="info" round>Info</el-button>
    <el-button type="warning" round>Warning</el-button>
    <el-button type="danger" round>Danger</el-button>
    <router-link to="login">点击去登录</router-link>
  </div>
</template>

<script setup lang="ts" name="home">
</script>

<style scoped lang="less">
.btn {
  color: pink;
  .color {
    color: @van-gray-5;
  }
}
</style>
