<template>
  <div class="minlist">
    <el-button class="fs-lg zoom"><i class="iconfont icon-yuanquanjiahao fs-26"></i></el-button>
      <div class="toggle">
        <i class="iconfont icon-a-shouhui1 fs-sm pointer" @click="emit('changelistwidht')"></i>
      </div>
      <div class="down">
          <Shrink />
      </div>
  </div>
</template>

<script setup lang="ts">
import Shrink from '~/home/shrink.vue'
const emit = defineEmits<{
    (e: 'changelistwidht'): void
}>()
</script>

<style scoped lang="less">
.toggle {
    text-align: end;
    padding-right: 12px;
  }
  .zoom{
    &.el-button{
  
  margin: 18px 20px 12px 10px;
  width: 44px;
   height: 44px;
   text-align: center;
   background: linear-gradient(98deg, #3B45FC 24%, rgba(11,23,252,0.7) 69%, rgba(155,78,255,0.95) 100%);
   border-radius: 12px 12px 12px 12px;
  }
  i{
    color: #fff;
    
  }
  }
  .minlist{
    margin-bottom: 100vh;
  }
</style>