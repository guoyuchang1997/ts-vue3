<template>
  <div ref="home" class="home" :class="{ istoggle: shrink }">
    <transition name="fade">
      <Switchingmax @changelistwidht="changelistwidht" v-if="!shrink"> </Switchingmax>
    </transition>
    <transition name="fade">
      <Switchingmin @changelistwidht="changelistwidht" v-if="shrink"> </Switchingmin>
    </transition>
    <el-drawer class="custom-drawer" v-model="drawer" direction="ltr" title="I am the title" :with-header="false">
      <span>
        <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
          <el-tab-pane class="fs-lg" style="flex: 1" label="全部" name="first"><Messagelist /></el-tab-pane>
          <el-tab-pane class="fs-lg" style="flex: 1" label="未读" name="second"><Messagelist /> </el-tab-pane>
          <el-tab-pane class="fs-lg" style="flex: 1" label="全部已读" name="third"><Messagelist /></el-tab-pane>
        </el-tabs>
      </span>
      <div class="posiinfo">10</div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts" name="home">
import Switchingmax from '~/home/switchingmaxlist.vue'
import Switchingmin from '~/home/switchingminlist.vue'
import type { TabsPaneContext } from 'element-plus'
import { ref, provide } from 'vue'
import router from '@/router/index'
import useStore from '@/store/index'
import Messagelist from './messagelist.vue'

const customright = ref('260px')
// 选择
const activeName = ref('first')
/**
 * 点击回调
 * @param tab 代理
 * @param event e
 */
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
/**
 * 点击状态
 */
const { useLeftList } = useStore()
const drawer = ref(false)
/**
 * 打开消息设置
 */
const drawershow = () => {
  drawer.value = !drawer.value
}
/**
 *  宽度切换
 */
const shrink = ref<boolean>(false)
/**
 * 宽度切换
 */
const changelistwidht = () => {
  shrink.value = !shrink.value
  customright.value = shrink.value ? '76px' : '260px'
}
/**
 * 点击创建新的账号
 */
const newaccount = () => {
  router.push('/foundaccount')
  useLeftList.changemate('')
  useLeftList.changeCurrentname('新建浏览器')
  sessionStorage.setItem('userStoreName', 'aa')
}
/**
 * 去帮助中心
 */
const gohelp = () => {
  router.push('/help')
  useLeftList.changemate('')
  useLeftList.changeCurrentname('帮助中心')
}
provide('newaccount', newaccount)
provide('drawershow', drawershow)
provide('gohelp', gohelp)
</script> 

<style scoped lang="less">
.home {
  transition: width 0.5s;
  width: 250px;
  height: calc(100vh - 10px);
  background: @tcolor;
  border-radius: 0px 0px 0px 0px;
  margin: 10px 10px 0 0;
  position: relative;
  overflow: hidden;
}
:deep(.el-tabs__nav) {
  width: 100%;
  .el-tabs__item {
    flex: 1;
    padding-bottom: 15px;
  }
}
.posiinfo {
  position: absolute;
  background: #ff0000;
  border-radius: 50%;
  color: #fff;
  top: 15px;
  left: 206px;
  font-size: 12px;
  padding: 2px 5px;
}

.istoggle {
  width: 70px;
  transition: width 0.5s;
}
:deep(.el-overlay) {
  margin-top: 10px;
  margin-left: v-bind(customright); /* 设置左边距为50px */
  transition: all 0.4s;
  .custom-drawer {
    width: 377px !important;
    .el-drawer__body {
      position: relative;
      padding-right: 10px;
    }
    .el-tabs__header {
      margin-bottom: unset;
    }
    .el-tabs__content {
      width: 100%;
    }
  }
}

// /* 整个滚动条 */
// ::-webkit-scrollbar {
//   /* 对应纵向滚动条的宽度 */
//   width: 8px;
//   /* 对应横向滚动条的宽度 */
//   height: 8px;
// }

// /* 滚动条上的滚动滑块 */
// ::-webkit-scrollbar-thumb {
//   background-color: rgba(43, 83, 229, 0.2);
//   border-radius: 32px;
// }

// /* 滚动条轨道 */
// ::-webkit-scrollbar-track {
//   background-color: rgba(43, 83, 228, 0.05);
//   border-radius: 32px;
// }
</style>
