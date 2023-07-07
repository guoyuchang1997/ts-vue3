<template>
  <div class="rpa">
    <div class="top flex">
      <el-button class="fs-lg"
        ><div class="flex"
          ><i class="iconfont icon-yuanquanjiahao"></i><span class="fs-sm">创建任务流程</span></div
        ></el-button
      >
      <el-button class="fs-lg zoom"><span class="fs-sm">RPA流程市场</span></el-button>
      <div class="fenzu">
        <el-select v-model="group" class="m-2 fs-xs" placeholder="全部分组" size="large">
          <el-option v-for="item in grouplist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="seacth">
        <Inputsea
          v-model="search"
          :iconright="'icon-sousuo'"
          :placeholder="'搜索我的任务流程'"
          :width="'410px'"
          :height="'40px'"
          @enter="enter"
        />
      </div>
    </div>
  </div>
  <div class="addrpa"><Flowmange /></div>
</template>

<script setup lang="ts">
import Inputsea from '~/Searchbox/Search.vue'
import Flowmange from '~/rpa/flowmanage.vue'

const group = ref()
const grouplist = ref([
  {
    value: '属性',
    label: '全部分组',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
])
const search = ref()

/**
 * 搜索回车
 */
const enter = () => {}
</script>

<style scoped lang="less">
.iconfont {
  margin-right: 5px;
}
.rpa {
  .top {
    align-items: flex-start;
    height: 50px;
    background-color: #f6f6f6;
    :deep(.el-button) {
      background: #2d5aff;
      color: #fff;
      height: 40px;
      .iconfont {
        margin-top: -4px;
      }
    }
    .zoom {
      background: #fabf19;
    }
    .zoom {
      &.el-button:active {
        border-color: unset;
      }
    }
    .fenzu {
      display: inline-block;
      margin-left: 10px;
      :deep(.el-input) {
        width: 132px;
        height: 40px;
        border-radius: 8px 8px 8px 8px;
        opacity: 1;
        :-ms-input-placeholder {
          color: red;
        }
        .el-input__wrapper {
          box-shadow: unset;
          border: 1px solid #2d5aff;
          // &:focus-visible {
          //   outline: none;
          // }
        }
      }
      :deep(.el-select) {
        --el-select-input-focus-border-color: unset;
      }
    }
    .seacth {
      margin-left: 10px;
    }
  }
}
</style>
