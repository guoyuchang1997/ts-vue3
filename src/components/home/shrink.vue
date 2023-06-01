<template>
  <div class="shrink">
    <div class="title fs-xs pointer" @click="openlist">
      <i class="iconfont icon-CHANGYONG fs-xs"></i>
      <div class="text">常用</div>
      <i
        class="iconfont icon-jiantou fs-xs test"
        :class="{ xialajiantou: rotate, xialajiantous: !rotate }"
      ></i>
    </div>
    <div class="shrinklist pointer">
      <div class="item" v-for="(item, index) in titlelist" :key="index">
        <i class="iconfont fs-xxl" :class="item.icon"></i>
        <div class="text fs-xs">{{ item.title }}</div>
      </div>
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
    title: "账号",
  },
  {
    icon: "icon-a-ixintucom1",
    title: "启动",
  },
  {
    icon: "icon-a-huishou1",
    title: "回收",
  },
];
</script>

<style scoped lang="less">
.title {
  display: flex;
  margin-left: 8px;
  margin-top: 22px;
  .text {
    margin-left: 4px;
    margin-right: 2px;
  }
  .test {
    transform: scale(0.7);
  }
  .xialajiantou {
    transform: rotate(180deg);
    transition: transform 0.5s;
  }
  .xialajiantous {
    transform: rotate(0deg);
    transition: transform 0.5s;
  }
}
.shrinklist {
  text-align: center;
  width: 50px;
  height: 50px;
  margin: 20px auto;

  border-radius: 8px 8px 8px 8px;
  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  .item:hover {
    background: #e9edfc;
    color: #2b53e5;
    transition: all 0.3s;
    border-radius: 8px 8px 8px 8px;
  }
}
</style>
