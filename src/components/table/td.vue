<template>
  <div :class="[dpl]">
    {{ data[code] }}
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  code: String,
  dpl: String,
});
</script>

<style lang="less" scoped>
.device_name{
  color: red;
}
</style>
