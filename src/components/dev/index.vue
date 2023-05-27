<template>
    <div>
       {{ num }}
       <button @click="chang()">点击</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
type CuseType = (number | string | Object)[]
let num = ref<CuseType>()
num.value = ['22', 2323, {}]
type Coblack = (item?:number) =>void
const chang:Coblack = (item) => {
    console.log('dianji ',item);
    
}
</script> 

<style scoped>

</style>