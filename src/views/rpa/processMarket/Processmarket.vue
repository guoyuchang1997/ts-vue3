<script lang="ts" setup>
import { ref } from 'vue'
import { storeToRefs } from "pinia";
import Tab from './components/Tab.vue'
import ProcessDetail from './components/ProcessDetail.vue'
import useDetailStore from "./detailStore";

const detailStore = useDetailStore()

const { setVisible } = detailStore
const { visible } = storeToRefs(detailStore)

const handleTabChange = (val: number) => {
  console.log(val)
}

const showDetail = () => {
  setVisible(true)
}
</script>

<template>
  <div class="process-market">
    <!-- tab 切换 -->
    <Tab @change="handleTabChange"/>
    <!-- 流程列表 -->
    <div class="process-list">
      <div v-for="item in 10" :key="item" class="process">
        <div class="base">
          <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
          <p>TikTok养号--点赞关注与AI智能评论广告分析必备</p>
        </div>
        <div class="description">
          本流程以浏览TikTok短视频为例，根据用户指定的概率以决定是否对正在浏览的视频进行点赞、关注与评论，当需要评论时，通过花漾RPA将视频的名称、
          指定数量的评论内容“喂给” ChatGPT，并要求 ChatGPT 生成相应的的评论；从第三方角度来看， 本流程...
        </div>
        <div class="provider">
          提供方：
          <span>云登浏览器</span>
        </div>
        <el-button type="primary" @click="showDetail">查看详情</el-button>
      </div>
    </div>
    <!-- 流程详情 -->
    <ProcessDetail v-if="visible"/>
  </div>
</template>

<style lang="less" scoped>
@import "./index.less";
</style>
