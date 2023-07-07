<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { WarningFilled } from '@element-plus/icons-vue'
import UploadPlugin from './UploadPlugin.vue'

const route = useRoute()
const router = useRouter()

const uploadPluginRef = ref(null)
const classifications = ref([
  {
    value: 1,
    icon: 'iconfont icon-hot',
    anchorPoint: '#hot',
    name: '热门推荐',
  },
  {
    value: 2,
    icon: 'iconfont icon-xuanpin',
    anchorPoint: '#selection',
    name: '选品专区',
  },
  {
    value: 3,
    icon: 'iconfont icon-yunying',
    anchorPoint: '#operation',
    name: '运营工具',
  },
  {
    value: 4,
    icon: 'iconfont icon-dianpu',
    anchorPoint: '#shop',
    name: '店铺运营',
  },
  {
    value: 5,
    icon: 'iconfont icon-tuiguang1',
    anchorPoint: '#promotion',
    name: '推广营销',
  },
  {
    value: 6,
    icon: 'iconfont icon-gongju',
    anchorPoint: '#tool',
    name: '其他工具',
  },
]) // 分类列表
const currentClassification = ref() // 当前分类
const routeHash = ref(route.hash)
currentClassification.value = classifications.value.find(item => item.anchorPoint === routeHash.value)?.value || 1

defineProps({
  positionStyle: {
    type: Object,
    default: () => ({}),
  },

  tab: {
    type: String,
    default: '',
  },
})

/**
 * 切换分类
 * @param {number} value - 当前分类
 */
const handleSwitchClass = (value: number) => {
  if (route.path !== 'plugin-center') {
    const hash = classifications.value.find(item => item.value === value)?.anchorPoint
    if (hash) {
      router.push(`/plugin-center${hash}`)
    } else {
      router.push('/plugin-center')
    }
  }
  currentClassification.value = value
}

/**
 * 显示上传插件弹窗
 */
const showAddApplicationModal = () => {
  // @ts-ignore
  uploadPluginRef.value.showModal()
}

/**
 * 跳转到我的插件
 * @param {string} type - 1: 上传的插件 2: 添加的插件
 */
const jumpToMyPlugin = (type: string) => {
  router.push(`/my-plugin?tab=${type}`)
}
</script>

<template>
  <div :style="positionStyle" class="left-classification">
    <el-popover
      :popper-options="{
        modifiers: [
          {
            name: 'offset',
            options: { offset: [0, 10] },
          },
        ],
      }"
      placement="top-start"
      trigger="hover"
      width="180"
    >
      <div class="popover-content">
        <el-icon color="#F29E38">
          <WarningFilled />
        </el-icon>
        <p>上传的插件由第三方提供， 最终解释权归第三方所有</p>
      </div>
      <template #reference>
        <div class="add-application" @click="showAddApplicationModal">
          <i class="iconfont icon-yuanquanjiahao fs-xl"></i>
          <span>上传插件</span>
        </div>
      </template>
    </el-popover>
    <ul style="margin-bottom: 10px">
      <li
        v-for="item in classifications"
        :key="item.value"
        :class="currentClassification === item.value ? 'active' : ''"
        @click="handleSwitchClass(item.value)"
      >
        <a :href="item.anchorPoint">
          <i :class="item.icon"></i>
          {{ item.name }}
        </a>
      </li>
    </ul>
    <ul>
      <li :class="tab === '1' ? 'active' : ''" @click="jumpToMyPlugin('1')">
        <a href="javascript:">
          <i class="iconfont icon-shangchuan"></i>
          <span>上传的插件</span>
        </a>
      </li>
      <li :class="tab === '2' ? 'active' : ''" @click="jumpToMyPlugin('2')">
        <a href="javascript:">
          <i class="iconfont icon-chajian1"></i>
          <span>添加的插件</span>
        </a>
      </li>
    </ul>
    <!-- 上传插件 -->
    <UploadPlugin ref="uploadPluginRef" />
  </div>
</template>

<style lang="less">
.el-popover.el-popper {
  border-radius: 8px;
  padding-right: 0;
}

.el-popper {
  .popover-content {
    display: flex;
    font-size: 12px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #f29e38;

    p {
      margin-left: 5px;
    }
  }
}
</style>

<style lang="less" scoped>
.left-classification {
  .add-application {
    width: 150px;
    height: 45px;
    background: #2b53e5;
    border-radius: 6px 6px 6px 6px;
    border: 1px solid #2b53e5;
    color: @cbcolor;
    font-size: 16px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 13px;
    cursor: pointer;

    .icon-yuanquanjiahao {
      font-weight: bold;
      margin-right: 10px;
    }
  }

  ul {
    width: 150px;

    li {
      width: 100%;
      height: 52px;
      background-color: @cbcolor;
      transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

      a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-left: 27px;

        &:hover {
          color: @fontactive;
        }
      }

      .iconfont {
        margin-right: 12px;
      }

      &:first-child {
        border-radius: 6px 6px 0px 0px;
      }

      &:last-child {
        border-radius: 0px 0px 6px 6px;
      }

      &.active {
        background-color: #dbe1ff;

        a {
          color: @fontactive;
        }

        .iconfont {
          color: @fontactive;
        }
      }
    }
  }
}
</style>
