<template>
  <div class="btn">
    less
    <div class="color fs-xs">我是红色</div>
    <router-link to="login">点击去登录</router-link>
  </div>
</template>

<script setup lang="ts" name="home">
const api = inject<any>("$api");
/**
 *  数量
 */
const num = ref(123);
console.log(num.value, "这是ref");

onMounted(async () => {
  const res = await api.getPlatform();
  console.log(res);
});
</script>

<style scoped lang="less">
.btn {
  color: pink;
  .color {
    color: @van-gray-5;
  }
}
</style>
