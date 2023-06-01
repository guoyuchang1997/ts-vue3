<template>
  <div class="down pointer" @click="openlist">
    <i class="iconfont icon-CHANGYONG1 fs-xss"></i>
    <div class="text fs-sm">常用</div>
    <i
      class="iconfont icon-xialajiantou"
      :class="{ xialajiantou: rotate, xialajiantous: !rotate }"
    ></i>
  </div>
  <div :class="{conten:rotate}">
    <div class="downlist pointer" v-for="(item, index) in titlelist" :key="index">
      <i class="iconfont fs-lg" :class="item.icon"></i>
      <div class="text fs-sm">{{ item.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Title } from "~/home/title";
/**
 *  箭头翻转
 */
let rotate = ref<boolean>(false);
const openlist = () => {
  rotate.value = !rotate.value;
};

/**
 * 下拉列表
 */
const titlelist = ref<Title[]>([]);
titlelist.value = [
  {
    icon: "icon-zhanghao",
    title: "账号管理",
  },
  {
    icon: "icon-a-ixintucom1",
    title: "快速启动",
  },
  {
    icon: "icon-a-huishou1",
    title: "回收站",
  },
];
</script>

<style scoped lang="less">
.conten{
  height: 0;
  overflow: hidden;
  transition: all 0.3s;
}
.down {
  width: 100%;
  display: flex;
  height: 45px;
  align-items: center;
  padding-left: 10px;
  padding-right: 20px;
  .text {
    width: 80%;
  }
  i:first-child {
    padding-right: 10px;
  }
}
.down:hover {
  color: #2b53e5;
}
.xialajiantou {
  transform: rotate(180deg);
  transition: transform 0.5s;
}
.xialajiantous {
  transform: rotate(0deg);
  transition: transform 0.5s;
}
.downlist {
  display: flex;
  padding-left: 50px;
  height: 45px;
  align-items: center;
  .text {
    margin: 0 14px;
  }
}
.downlist:hover {
  width: 220px;
  height: 45px;
  background: #e9edfc;
  border-radius: 8px 8px 8px 8px;
  color: #2b53e5;
  transition: all 0.2s;
}
</style>
