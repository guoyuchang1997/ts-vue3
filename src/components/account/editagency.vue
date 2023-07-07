<template>
  <Popup v-model:isShow="getIsShow" width="800px" :divider="true" @sbmit="sbmit" title="修改代理">
    <template #main>
      <div class="main">
        <div class="top flex">
          <div class="le">代理方式:</div>
          <div class="ri">
            <span style="margin-right: 30px">01/名称</span>
            <span>08/名称</span>
          </div>
        </div>
        <div class="top flex footer " :class="{ footernum: agency === 'platform' || agency === 'selfowned' }">
          <div class="le">代理方式:</div>
          <div class="ri">
            <el-select v-model="agency" class="m-2" placeholder="选择代理">
              <el-option v-for="item in agencylist" :key="item.value" :label="item.label" :value="item.value" />
            </el-select><br />
            <div v-if="agency === 'platform'" class="te flex pointer" @click="numtype = !numtype">
              <div class="checker"> <span :class="{ active: numtype }"></span></div>&nbsp;随机选择没有绑定账号的代理
            </div>
            <div v-if="agency === 'platform' && !numtype" class="price flex">
              <div class="l">购买</div>
              <div class="r">刷新</div>
            </div>
          </div>
        </div>
        <Agenty :data="agency" :numtype="numtype" />
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed, ref, reactive } from 'vue'
import Agenty from './agency.vue'

interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})
const emits = defineEmits(['update:isShow'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})
/**
 * 提交表单
 */
const sbmit = () => { }
// 代理
const agency = ref()
const agencylist = reactive([
  {
    value: '0',
    label: '本地网络',
  },
  {
    value: 'selfowned',
    label: '自有代理',
  },
  {
    value: 'platform',
    label: '平台代理',
  },
  {
    value: 'zm',
    label: '芝麻代理（动态代理）',
  },
  {
    value: 'Socks5',
    label: 'Socks5',
  },
])
const numtype = ref(false)
</script>

<style scoped lang="less">
.main {
  .top {
    margin-bottom: 25px;

    >.le {
      margin-right: 17px;
    }

    :deep(.el-input__wrapper) {
      width: 320px;
    }
  }

  .select {}

  .footer {
    margin-bottom: 20px;
    align-items: baseline;
  }

  .footernum {
    margin-bottom: unset;
  }
}

.ri {
  .te {
    margin-top: 10px;
    margin-bottom: 18px;
  }
}

.price {

  .l,
  .r {
    cursor: pointer;
    width: 68px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    color: #fff;
    background: #2b53e5;
    box-shadow: 0px 0px 20px 0px rgba(43, 83, 229, 0.2);
    border-radius: 4px 4px 4px 4px;
  }

  .r {
    color: #2b53e5;
    background: #fff;
    box-shadow: unset;
  }
}
</style>
