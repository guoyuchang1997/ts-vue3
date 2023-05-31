<template>
  <transition name="fade">
    <div ref="home" class="home" :class="{ istoggle: shrink }">
      <el-button class="fs-lg"><i class="iconfont icon-yuanquanjiahao"></i> 新建浏览器</el-button>
      <div class="toggle">
        <i class="iconfont icon-shouhui fs-sm pointer" @click="toggle"></i>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts" name="home">
/**
 *  宽度切换
 */
let shrink = ref<Boolean>(false);
const toggle = () => {
  shrink.value = !shrink.value;
};
</script>

<style scoped lang="less">
.home {
  width: 250px;
  height: calc(100vh - 10px);
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  margin: 10px 10px 0 0;
  :deep(.el-button) {
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
  .toggle {
    text-align: end;
    padding-right: 12px;
  }
}
.istoggle {
  width: 70px;
}
</style>
