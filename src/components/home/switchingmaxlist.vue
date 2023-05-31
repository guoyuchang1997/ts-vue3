<template>
   <div class="maxlist">
    <el-button class="fs-lg unfold"><i class="iconfont icon-yuanquanjiahao"></i> 新建浏览器</el-button>
      <div class="toggle">
        <i class="iconfont icon-shouhui fs-sm pointer" @click="emit('changelistwidht')"></i>
      </div>
   </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
    (e: 'changelistwidht'): void
}>()
</script>

<style scoped lang="less">
  .unfold{
    &.el-button{
    margin: 18px 20px 12px 10px;
    width: 220px;
    height: 54px;
    background: linear-gradient(
      98deg,
      #3b45fc 24%,
      rgba(11, 23, 252, 0.7) 69%,
      rgba(155, 78, 255, 0.95) 100%
    );
    border-radius: 12px 12px 12px 12px;
    color: #fff;
    i {
      padding-right: 5px;
      padding-bottom: 3px;
    }
    }
  }
.toggle {
    text-align: end;
    padding-right: 12px;
    
  }
  .maxlist{
    margin-bottom: 100vh;
  }
</style>