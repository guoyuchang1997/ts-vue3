<script lang="ts" setup>
import { ref } from 'vue'

const keyword = ref('')
const helpList = ref([
  {
    id: 1,
    title: '快速入门',
    icon: 'icon-book',
    children: [
      {
        id: 11,
        title: '如何导入账号',
      },
      {
        id: 12,
        title: '入门常见问题',
      },
      {
        id: 13,
        title: '快速参与云登推广返现',
      },
    ],
  },
  {
    id: 2,
    title: '代理网络设置',
    icon: 'icon-proxy',
    children: [
      {
        id: 21,
        title: '代理网络服务资源',
      },
      {
        id: 22,
        title: 'Noproxy直连模式',
      },
      {
        id: 23,
        title: '代理配置',
      },
      {
        id: 24,
        title: 'HTTP/HTTPS/SOCKS5代理配置',
      },
      {
        id: 25,
        title: 'IPIDEA代理配置',
      },
    ],
  },
  {
    id: 3,
    title: '账号管理',
    icon: 'icon-zh',
    children: [
      {
        id: 31,
        title: '账号管理',
      },
      {
        id: 32,
        title: '新建浏览器',
      },
      {
        id: 33,
        title: '批量导入',
      },
    ],
  },
  {
    id: 4,
    title: ' 应用中心',
    icon: 'icon-yingyong1',
    children: [
      {
        id: 41,
        title: '应用中心',
      },
      {
        id: 42,
        title: '数据报表',
      },
      {
        id: 43,
        title: '插件上次应用中心',
      },
      {
        id: 43,
        title: '第三方插件',
      },
    ],
  },
  {
    id: 5,
    title: ' 自动化',
    icon: 'icon-zgh',
    children: [
      {
        id: 51,
        title: '自动化',
      },
      {
        id: 52,
        title: 'RPA',
      },
      {
        id: 53,
        title: 'API',
      },
      {
        id: 54,
        title: ' 任务管理',
      },
      {
        id: 55,
        title: ' 素材管理',
      },
    ],
  },
  {
    id: 6,
    title: '模板下载',
    icon: 'icon-mb',
    children: [
      {
        id: 61,
        title: '模板下载',
      },
      {
        id: 62,
        title: '批量导入',
      },
      {
        id: 63,
        title: 'BM地址导入模板',
      },
    ],
  },
  {
    id: 7,
    title: ' 常见问题',
    icon: 'icon-wenti',
    children: [
      {
        id: 71,
        title: '常见问题',
      },
      {
        id: 72,
        title: '什么是指纹浏览器？',
      },
      {
        id: 73,
        title: '如何检查本地网络环境？',
      },
      {
        id: 73,
        title: '如何修改浏览器版本？',
      },
    ],
  },
])

// eslint-disable-next-line require-jsdoc
const handleSearch = () => {
  console.log(keyword.value)
}
</script>

<template>
  <div class="help-center">
    <div class="search-wrapper">
      <p class="help-text">嗨！有什么需要帮忙的吗？</p>
      <div class="input-wrapper">
        <i class="iconfont icon-sousuo"></i>
        <el-input v-model="keyword" placeholder="请输入你想搜索的问题" size="large" @keyup.enter="handleSearch" />
        <button class="search-btn" @click="handleSearch">搜索</button>
      </div>
    </div>
    <div class="help-list">
      <div v-for="item in helpList" :key="item.id" class="box">
        <div class="header">
          <i :class="['iconfont', item.icon]"></i>
          <span>{{ item.title }}</span>
        </div>
        <div class="content">
          <div v-for="child in item.children" :key="child.id" class="item">
            <i class="point"></i>
            <span>{{ child.title }}</span>
          </div>
        </div>
        <button class="see-more-btn">
          查看更多
          <i class="iconfont icon-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import 'index';
</style>
