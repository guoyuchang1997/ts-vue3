<template>
  <div class="seeting-auto">
    <div class="seeting">
      <div class="left">
        <p class="title"><img src="@/assets/img/setting/sheizhi.png" class="icon" alt="" srcset="" />普通设置</p>
        <a v-for="item in list" :key="item.href" :href="item.href">
          <img :src="item.icon" alt="" srcset="" class="icon" />{{ item.text }}
        </a>
        <p class="line"></p>
        <a> <img src="@/assets/img/setting/fuwu.png" alt="" srcset="" class="icon" />服务协议 </a>
      </div>
      <div class="right">
        <div>
          <section id="yuyan"><yuyan></yuyan></section>
          <section id="wenjian"><wenjian></wenjian></section>
          <section id="shebei"><shebei></shebei></section>
          <section id="jiance"><jiance></jiance></section>
          <section id="kaiji"><kaiji></kaiji></section>
          <section id="fuwu"><fuwu></fuwu></section>
          <section id="pianhao"><pianhao></pianhao></section>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import yuyanIcon from '@/assets/img/setting/yuyan.png'
import wenjianIcon from '@/assets/img/setting/wenjian.png'
import huancunIcon from '@/assets/img/setting/huancun.png'
import shebeiIcon from '@/assets/img/setting/shebei.png'
import jianceIcon from '@/assets/img/setting/jiance.png'
import kaijiIcon from '@/assets/img/setting/kaiji.png'
import pianhaoIcon from '@/assets/img/setting/pianhao.png'
import yuyan from './components/yuyan.vue'
import wenjian from './components/wenjian.vue'
import shebei from './components/shebei.vue'
import jiance from './components/jiance.vue'
import kaiji from './components/kaiji.vue'
import fuwu from './components/fuwu.vue'
import pianhao from './components/pianhao.vue'

const list = ref([
  {
    icon: yuyanIcon,
    text: '语言',
    href: '#yuyan',
  },
  {
    icon: wenjianIcon,
    text: '文件保存位置',
    href: '#wenjian',
  },
  {
    icon: huancunIcon,
    text: '清理缓存',
    href: '#huancun',
  },
  {
    icon: shebeiIcon,
    text: '设备信息',
    href: '#shebei',
  },
  {
    icon: jianceIcon,
    text: '检测版本',
    href: '#jiance',
  },
  {
    icon: kaijiIcon,
    text: '开机启动',
    href: '#kaiji',
  },
  {
    icon: pianhaoIcon,
    text: '偏好设置',
    href: '#pianhao',
  },
])
</script>

<style lang="less" scoped>
.seeting-auto {
  overflow: auto;
  height: calc(100vh - 90px);

  // min-height: 100%;
}
.seeting {
  background: #f6f6f6;
  display: flex;
  height: 100%;
  overflow-x: auto;
  min-width: 1200px;
  .left {
    width: 250px;
    background: #fff;
    margin-right: 10px;
    overflow: auto;
    padding: 10px;
    img.icon {
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
    .title {
      height: 60px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eeeeee;
      margin-bottom: 8px;
      padding-left: 20px;
    }
    a {
      display: flex;
      align-items: center;
      height: 40px;
      padding: 0 20px;
      margin-bottom: 6px;
      border-radius: 8px;
      &:hover {
        background: rgba(43, 83, 229, 0.05);
        color: #2b53e5;
      }
    }
    .line {
      margin-top: 14px;
      margin-bottom: 9px;
      height: 1px;
      background-color: #d8d8d8;
    }
  }
  .right {
    flex: 1;
    background: #fff;
    overflow: auto;
    padding: 30px;
    section {
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
