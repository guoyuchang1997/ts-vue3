<template>
  <div class="main">
    <div class="inf">
      <div v-for="i in 20" :key="i" class="message flex pointer">
        <div class="le">
          <div class="image">
            <img src="@/assets/img/c-header/avater-noQuest.webp" alt="" />
          </div>
        </div>
        <div class="ri">
          <div class="infotitle flex">
            <div class="titlele">账单通知</div>
            <div class="titleri">06/01 10:22</div>
          </div>
          <div class="info titleri ellipsis">【5月账单】您法国很过分很反感的5月份账单已生成，请注意... </div>
        </div>
      </div>
    </div>
    <div class="goseting" @click="gomessage">消息设置</div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/index'
import useStore from '@/store/index'
import { inject } from 'vue'

const { useLeftList } = useStore()
const drawershow = inject('drawershow')
/**
 * 打开消息
 */
const gomessage = () => {
  router.push('/messagesting')
  useLeftList.changemate('')
  useLeftList.changeCurrentname('消息设置')
  drawershow()
}
</script>

<style scoped lang="less">
.main {
  margin-bottom: 80px;
}
.inf {
  height: calc(100vh - 165px);
  overflow-y: auto;
  padding-right: 10px;
}
.message {
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  padding-top: 15px;
  padding-bottom: 20px;
  .le {
    width: 40px;
    .image {
      width: 100%;
    }
  }
  .ri {
    flex: 1;
    width: 0;
    padding-left: 5px;
  }
  .infotitle {
    justify-content: space-between;
  }
  .titleri {
    font-size: 14px;
    color: #999;
  }
  .info {
    margin-top: 7px;
  }
}
.goseting {
  position: absolute;
  bottom: 20px;
  left: 30px;
  width: 280px;
  height: 40px;
  background: #2b53e5;
  border-radius: 4px 4px 4px 4px;
  color: #fff;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
}
</style>
