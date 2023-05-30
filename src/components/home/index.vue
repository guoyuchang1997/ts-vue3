<template>
  <div class="btn">
    less
    <div class="color">我是红色</div>
    <router-link to="login">点击去登录</router-link>
  </div>
</template>

<script setup lang="ts" name="home">
/**
 *  数量
 */
const num = ref(123);
console.log(num.value, "这是ref");

onMounted(() => {
  console.log(123);
});
</script>

<style scoped lang="less">
.btn {
  color: pink;
  .color {
    color: red;
  }
}
</style>
