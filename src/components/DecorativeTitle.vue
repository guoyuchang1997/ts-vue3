<template>
  <!-- 带有装饰的标题 -->
  <div class="decorative-title">
    <h1>{{ props.msg }}</h1>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  msg: {
    type: String,
    default: '组件标题',
  },
  avaColor: {
    type: String,
    default: '#242af3',
  },
  fontSize: {
    type: String,
    default: '18px',
  },
  fontWeight: {
    type: String,
    default: '600',
  },
  avaWidth: {
    type: String,
    default: '5px',
  },
  avaHeight: {
    type: String,
    default: '15px',
  },
})
</script>

<style scoped lang="less">
.decorative-title {
  h1 {
    display: flex;
    align-items: center;
    font-size: v-bind(fontSize);
    font-weight: v-bind(fontWeight);
    color: #333;
    // line-height: 26px;
    &::before {
      content: '';
      display: inline-block;
      width: v-bind(avaWidth);
      height: v-bind(avaHeight);
      margin-right: 5px;
      border-radius: 10px;
      background-color: v-bind(avaColor);
    }
  }
}
</style>
