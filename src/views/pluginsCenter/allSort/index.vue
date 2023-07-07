<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentFunc = ref(0) // 当前功能分类
const currentPlatform = ref(0) // 当前平台分类
const expand = ref(false) // 是否展开
const filter = ref({
  showOnlyAdded: false, // 只显示已添加
  type: 1
})

const funcList = ref([
  {
    id: 0,
    name: '全部',
  }, {
    id: 1,
    name: '选品专区',
  }, {
    id: 2,
    name: '运营工具',
  }, {
    id: 3,
    name: '店铺运营',
  }, {
    id: 4,
    name: '推广营销',
  }, {
    id: 5,
    name: '其他工具',
  }
]) // 功能分类
const platformList = ref([
  {
    title: "全部",
    sort: "0",
    type: 2,
    id: 0
  },
  {
    "title": "亚马逊",
    "sort": "1",
    "type": 2,
    "id": 26
  },
  {
    "title": "Tokopedia",
    "sort": "10",
    "type": 2,
    "id": 43
  },
  {
    "title": "沃尔玛",
    "sort": "11",
    "type": 2,
    "id": 44
  },
  {
    "title": "Newegg",
    "sort": "12",
    "type": 2,
    "id": 45
  },
  {
    "title": "Daraz",
    "sort": "13",
    "type": 2,
    "id": 46
  },
  {
    "title": "Jumia",
    "sort": "14",
    "type": 2,
    "id": 47
  },
  {
    "title": "Boloo",
    "sort": "15",
    "type": 2,
    "id": 48
  },
  {
    "title": "Wish",
    "sort": "16",
    "type": 2,
    "id": 49
  },
  {
    "title": "乐天",
    "sort": "17",
    "type": 2,
    "id": 50
  },
  {
    "title": "敦煌",
    "sort": "18",
    "type": 2,
    "id": 51
  },
  {
    "title": "阿里巴巴国际站",
    "sort": "19",
    "type": 2,
    "id": 52
  },
  {
    "title": "速卖通",
    "sort": "2",
    "type": 2,
    "id": 35
  },
  {
    "title": "拼多多",
    "sort": "20",
    "type": 2,
    "id": 53
  },
  {
    "title": "1688",
    "sort": "21",
    "type": 2,
    "id": 54
  },
  {
    "title": "淘宝",
    "sort": "22",
    "type": 2,
    "id": 55
  },
  {
    "title": "天猫",
    "sort": "23",
    "type": 2,
    "id": 56
  },
  {
    "title": "京东",
    "sort": "24",
    "type": 2,
    "id": 57
  },
  {
    "title": "趣天",
    "sort": "25",
    "type": 2,
    "id": 58
  },
  {
    "title": "其他",
    "sort": "26",
    "type": 2,
    "id": 59
  },
  {
    "title": "Cdiscount",
    "sort": "27",
    "type": 2,
    "id": 60
  },
  {
    "title": "rakuten",
    "sort": "28",
    "type": 2,
    "id": 61
  },
  {
    "title": "allegro",
    "sort": "29",
    "type": 2,
    "id": 62
  },
  {
    "title": "eBay",
    "sort": "3",
    "type": 2,
    "id": 36
  },
  {
    "title": "coupang",
    "sort": "30",
    "type": 2,
    "id": 63
  },
  {
    "title": "fanno",
    "sort": "31",
    "type": 2,
    "id": 64
  },
  {
    "title": "MANOMANO",
    "sort": "32",
    "type": 2,
    "id": 65
  },
  {
    "title": "dhgate",
    "sort": "33",
    "type": 2,
    "id": 66
  },
  {
    "title": "美客多",
    "sort": "34",
    "type": 2,
    "id": 67
  },
  {
    "title": "etsy",
    "sort": "4",
    "type": 2,
    "id": 37
  },
  {
    "title": "Shopee",
    "sort": "5",
    "type": 2,
    "id": 38
  },
  {
    "title": "Shopify",
    "sort": "6",
    "type": 2,
    "id": 39
  },
  {
    "title": "Lazada",
    "sort": "7",
    "type": 2,
    "id": 40
  },
  {
    "title": "Yahoo!",
    "sort": "8",
    "type": 2,
    "id": 41
  },
  {
    "title": "Bukalapak",
    "sort": "9",
    "type": 2,
    "id": 42
  }
]) // 平台分类

/**
 * @description 切换分类
 * @param {string} type 分类类型
 * @param {number} id 分类id
 */
const handleSwitchClassify = (type: string, id: number) => {
  if (type === 'func') {
    currentFunc.value = id
  } else {
    currentPlatform.value = id
  }
}

/**
 * @description 展开分类
 */
const handleExpandClassify = () => {
  expand.value = !expand.value
}

// 返回上一页
const handleBack = () => {
  router.back()
}
</script>

<template>
  <div class="all-sort">
    <div class="container">
      <div class="top">
        <div class="menu">
          <div class="back" @click="handleBack">
            <i class="iconfont icon-xiangzuojiantou"></i>
            返回
          </div>
          <div class="bread-crumbs">
            <span class="before">插件中心</span>
            <i class="iconfont icon-you"></i>
            <span class="current">插件分类</span>
          </div>
        </div>
        <div class="classify-wrapper">
          <div class="classify-box">
            <div class="list func">
              <h4>功能分类：</h4>
              <ul>
                <li
                  v-for="item in funcList"
                  :key="item.id"
                  :class="currentFunc === item.id ? 'active' : ''"
                  @click="handleSwitchClassify('func', item.id)"
                >
                  {{ item.name }}
                </li>
              </ul>
            </div>
            <div class="list platform">
              <h4>支持平台：</h4>
              <ul :style="{height: expand ? 'auto' : '24px'}">
                <li
                  v-for="item in platformList"
                  :key="item.id"
                  :class="currentPlatform === item.id ? 'active' : ''"
                  @click="handleSwitchClassify('platform', item.id)"
                >
                  {{ item.title }}
                </li>
              </ul>
              <div class="more" @click="handleExpandClassify">
                更多
                <i class="iconfont icon-you"></i>
              </div>
            </div>
          </div>
          <div class="filter-wrapper">
            <el-checkbox v-model="filter.showOnlyAdded">只显示已添加</el-checkbox>
            <el-radio-group v-model="filter.type" size="small">
              <el-radio-button :label="1">最热</el-radio-button>
              <el-radio-button :label="2">最新</el-radio-button>
            </el-radio-group>
          </div>
        </div>
      </div>

      <div class="plugins-wrapper">
        <div v-for="item in 30" :key="item" class="plugin-box">
          <div class="content">
            <div class="name-info">
              <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
              <span>百度翻译：网页翻译、海淘神器</span>
            </div>
            <div class="descriptions">
              百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译。
            </div>
            <div class="time-hot">
              <span>更新：2020-05-22</span>
              <span>
                <i class="iconfont icon-redu"></i>
                100万
              </span>
            </div>
          </div>
          <button class="btn add">添加</button>
        </div>
      </div>
      <div class="see-more">
        查看更多
        <i class="iconfont icon-you"></i>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>