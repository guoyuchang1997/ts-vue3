<script lang="ts" setup>
import { onMounted, ref } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <Teleport v-if="isMounted" v-bind="$attrs">
    <slot></slot>
  </Teleport>
</template>

<style lang="less" scoped></style>
