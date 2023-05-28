<template>
    <div>
我是子组件 {{ propst.name }}
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
interface Ipuit{
    name: string
}
const propst = withDefaults(defineProps<Ipuit>(), {
    name:'123'
})
onMounted(() => {
    console.log(propst.name);
})
</script>

<style scoped>

</style>