<template>
  <div>
    {{ data[code] }}
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
  code: String,
});
</script>

<style lang="scss" scoped></style>
