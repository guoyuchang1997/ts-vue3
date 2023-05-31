<template>
    <div ref="home" class="home" :class="{ istoggle: shrink }">
      <transition name="fade">
        
        <Switchingmax  @changelistwidht="changelistwidht" v-if="!shrink">
      </Switchingmax> 
      </transition>
      <transition name="fade">
        <Switchingmin @changelistwidht="changelistwidht" v-if="shrink">
        </Switchingmin> 
      </transition>
    </div>
</template>

<script setup lang="ts" name="home">
import Switchingmax from '~/home/switchingmaxlist.vue'
import Switchingmin from '~/home/switchingminlist.vue'
/**
 *  宽度切换
 */
let shrink = ref<Boolean>(false);
const changelistwidht = () => {
  shrink.value = !shrink.value;
};
</script>

<style scoped lang="less">
.home {
  transition: width  0.5s;
  width: 250px;
  height: calc(100vh - 10px);
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  margin: 10px 10px 0 0;

  
  
}
.istoggle {
  width: 70px;
  transition: width 0.5s;
}



.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
