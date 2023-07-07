<template>
  <div class="main">
    <Hmoe></Hmoe>
    <div class="left" :class="{ active: useLeftList.name === 'Quickstart' }"><Leftside @close="close" /> </div>
    <div class="rgmain">
      <Header />
      <div class="content">
        <el-config-provider :locale="zhCn">
          <router-view v-slot="{ Component, route }">
            <!-- <transition mode="out-in" name="fade-transform"> -->
            <component :is="Component" :key="route.path" />
            <!-- </transition> -->
          </router-view>
        </el-config-provider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index'
import Hmoe from '~/home/index.vue'
import Header from '~/home/Header.vue'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Leftside from '~/account/Leftside.vue'
import useStore from '@/store/index'

/**
 * 点击状态
 */
const { useLeftList } = useStore()

/**
 * 关闭
 */
const close = () => {
  const previousRoute = router.currentRoute.value
  const mate = previousRoute.meta?.menu
  useLeftList.changemate(mate)
}
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: @mlcolor;
  display: flex;
  .rgmain {
    margin: 10px 15px 0 0;
    flex: 1;
    width: 0;
    overflow-y: auto;
  }
  .content {
    background-color: @tcolor;
    margin-top: 10px;
    height: calc(100vh - 80px);
    overflow: hidden;
    border-radius: 8px;
    // min-width: 1729px;
  }
  .left {
    background-color: @tcolor;
    width: 0;
    margin-top: 10px;
    height: calc(100vh - 10px);
    margin-right: 0;
    transition: width 0.3s;
    overflow: hidden;
    &.active {
      width: 360px;
      transition: width 0.3s;
      margin-right: 10px;
    }
  }
}
</style>
