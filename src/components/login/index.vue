<template>
  <div class="btn">
    <!-- less
    {{ user.name }}
    <div class="color fs-xs">我是红色</div>
    {{ counter.count }}

    <div>路由二页面</div>
    <router-link to="/">点击去首页</router-link> -->
  </div>
</template>

<script setup lang="ts" name="home">
// import { storeToRefs } from 'pinia'
// const { count, double } = storeToRefs(counter)
const { counter, user } = useStore()
import useStore from '@/store/index.js'
const api = inject<any>('$api')
/**
 *  数量
 */
const num = ref(123)

onMounted(async () => {
  const res = await api.getPlatform()
})
</script>

<style scoped lang="less">
.btn {
  color: pink;
  .color {
    // color: @van-gray-5;
  }
}
</style>
