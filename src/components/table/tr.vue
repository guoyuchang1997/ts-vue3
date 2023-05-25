<template>
  <div class="main-tr">
    <div class="con" v-for="(item, index) in title" :key="index">
      <Td
        class="tr_td ellipsis"
        v-for="(va, index) in devlist"
        :key="index"
        :data="item"
        :code="va.code"
        :dpl="va.tpl"
        :style="{ width: va.width }"
      
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import Td from "~/table/td.vue";
const title = inject("title");
const devlist = inject("devlist");
const omwlist = inject("omwlist");
console.log(title);
</script>

<style lang="less" scoped>
.main-tr {
  width: 100%;
  .con {
    width: 100%;
    display: table;
    table-layout: fixed;
    .tr_td {
      display: table-cell;
    }
  }
}
</style>
