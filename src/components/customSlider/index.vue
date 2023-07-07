<template>
  <div class="purchase-meal">
    <a-slider
      v-model="value"
      :tooltip-visible="tooltip"
      :tip-formatter="formatter"
      :marks="marks"
      :step="step"
      :default-value="0"
      :getTooltipPopupContainer="getTooltipPopupContainer"
    />
    <p v-if="expireText" class="expire-time">
      <span class="tips-expire" :style="`left:${value}%`">{{ expireText }}到期</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, createVNode, VNode, watch } from 'vue'

const emit = defineEmits(['change'])
interface ListItem {
  num: number
  price?: number
  expire?: string
  discount?: number
}

/**
 * props
 */
const props = defineProps({
  /**
   * 数量
   */
  numberResult: {
    type: Number,
    default: 0,
  },
  /**
   * 价格
   */
  price: {
    type: Number,
    default: 0,
  },
  /**
   * 单位
   */
  unit: {
    type: String,
    default: '',
  },
  /**
   * 名称
   */
  keyName: {
    type: String,
    default: '',
  },

  /**
   * x轴刻度标记
   */
  list: {
    type: Array as () => ListItem[],
    default: () => [] as ListItem[],
  },
  /**
   * 是否向上取整
   */
  roundUp: {
    type: Boolean,
    default: false,
  },

  /**
   * tooltip
   */
  tooltip: {
    type: Boolean,
    default: true,
  },
})

const value = ref(0)
const expireText = ref('')

/**
 * 格式化金额
 * @param {number} val 金额
 * @returns {string} 格式化后的金额
 */
const formatMoney = (val: string) => {
  try {
    return parseFloat(val).toFixed(2)
  } catch (error) {
    return val
  }
}

/*
 * 最大值
 */
const max = computed(() => {
  if (props.list.length === 0) {
    return 0
  }
  return props.list[props.list.length - 1].num
})
/*
 *最小值
 */
const min = computed(() => {
  if (props.list.length === 0) {
    return 0
  }
  return props.list[0].num
})

/**
 * 滑块提示
 * @param {number} scale 滑块位置
 * @returns {string} 提示内容
 */
const formatter = (scale: number) => {
  let quantity = scale * 1000 * (max.value - min.value)
  quantity = quantity / 100000 + min.value
  quantity = Math.round(quantity)
  emit('change', {
    numberResult: quantity,
    key: props.keyName,
    scale,
  })
  if (props.keyName === 'effective') {
    expireText.value = ''
    for (let i = 0; i < props.list.length; i += 1) {
      if (props.list[i].num === props.numberResult && props.numberResult) {
        expireText.value = props.list[i].expire || ''
        break
      }
    }
  }
  return `￥${formatMoney(String(props.price))}`
}

/**
 * 获取步长
 */
const step = computed(() => {
  return props.roundUp ? null : 0.01
})

/**
 * 获取刻度标记
 */
const marks = computed(() => {
  if (props.list.length === 0) {
    return {}
  }
  const interval = 100 / (max.value - min.value)
  const obj: MyObject = {}
  for (let i = 0; i < props.list.length; i += 1) {
    const item = props.list[i]
    const roundedUp = Math.ceil(item.num - min.value) * interval || 0
    if (props.keyName === 'effective') {
      if (item.discount && item.discount < 100) {
        obj[roundedUp] = {
          label: createVNode('div', null, [
            String(item.num),
            createVNode('p', { class: 'tips-discount' }, `${item.discount / 10}折`),
          ]),
        }
      } else {
        obj[roundedUp] = {
          label: createVNode('div', {}, `${item.num}`),
        }
      }
    } else {
      obj[roundedUp] = {
        label: createVNode('span', {}, `${item.num}`),
      }
    }
  }
  return obj
})
// watch
watch(
  () => props.numberResult,
  val => {
    if (val) {
      const interval = 100 / (max.value - min.value)
      const roundedUp = Math.ceil(val - min.value) * interval || 0
      value.value = roundedUp
    }
  },
  {
    immediate: true,
  }
)
/**
 * getTooltipPopupContainer
 * @param {VNode} node 节点
 * @returns {HTMLElement} node.parentNode
 */
const getTooltipPopupContainer = (node: VNode) => {
  return node.parentNode
}
</script>

<style scoped lang="less">
.purchase-meal {
  padding: 14px 6px 1px;

  :deep(.ant-tooltip) {
    font-size: 12px;
    padding: 0;
    z-index: 1;

    .ant-tooltip-inner {
      padding: 0;
      min-height: 12px;
      background-color: rgba(0, 0, 0, 0);
      color: #2d5aff;
      box-shadow: none;
    }

    .ant-tooltip-arrow {
      display: none;
    }
  }

  :deep(.ant-slider-with-marks) {
    margin-bottom: 20px;
  }

  :deep(.ant-slider) {
    // 轨道
    .ant-slider-rail {
      background-color: #dde4ff;
      height: 6px;
      border-radius: 3px;
    }

    //活动轨道
    .ant-slider-track {
      background-color: #2d5aff;
      height: 6px;
    }

    // 点
    .ant-slider-dot {
      background-color: #dde4ff;
      border: none;
      width: 14px;
      height: 14px;
      margin-top: -2px;
    }

    .ant-slider-dot-active {
      background-color: #2d5aff;
    }

    //当前点
    .ant-slider-handle.ant-tooltip-open,
    .ant-slider-handle {
      width: 20px;
      height: 20px;
      background: #ffffff;
      border: 4px solid #2d5aff !important;
      margin-top: -7px;
    }

    .ant-slider-handle:focus {
      box-shadow: none;
    }

    //文案
    .ant-slider-mark-text {
      font-size: 12px;
      padding-top: 5px;
      color: #666666;
      padding-left: 5px;

      .tips-discount {
        position: absolute;
        top: -38px;
        left: 0;
        background: #ec5b56;
        border-radius: 8px 8px 8px 0px;
        padding: 0 4px;
        color: #fff;
      }

      .tips-expire {
        font-size: 12px;
        color: #2d5aff;
        position: absolute;
      }
    }
  }
}

.expire-time {
  position: relative;
  width: calc(100% - 10px);

  .tips-expire {
    position: absolute;
    left: 0;
    top: 0;
    line-height: 17px;
    font-size: 12px;
    color: #2b53e5;
    width: 90px;
  }
}
</style>
