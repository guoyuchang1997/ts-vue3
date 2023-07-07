<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import { usePluginAuthStore, usePluginDistributeStore } from '@/store/plugins.ts'
import searchResult from './searchResult.vue';
import AuthModal from './components/PluginAuthDialog.vue'
import DistributeAccount from "./components/DistributeAccount.vue";
import CategorizedList from "./components/CategorizedList.vue";

const router = useRouter()
const pluginsStore = usePluginAuthStore()
const distributeStore = usePluginDistributeStore()

const hotSearchWords = ref(['亚马逊', '卖家精灵', '翻译', '免费分析']) // 热门搜索词
const keyword = ref('') // 搜索关键词
const showResult = ref(false) // 是否显示搜索结果

/**
 * @description 搜索
 */
const handleSearch = () => {
  showResult.value = true
}
/**
 * @description 关闭搜索结果
 */
const handleSearchResBack = () => {
  showResult.value = false
}
/**
 * @description 查看更多
 */
const handleSeeMore = () => {
  router.push('/all-sort')
}
/**
 * @description 跳转详情
 */
const handleGoDetail = () => {
  router.push('/plugin-detail')
}
/**
 * @description 显示弹窗
 * @param {object} plugin 插件信息
 */
const showModal = (plugin: any) => {
  console.log(plugin)
  // TODO 判断插件是否添加
  distributeStore.setVisible(true)

  // pluginsStore.setPluginInfo(plugin)
  // pluginsStore.setModalVisible(true)
}
</script>

<template>
  <div class="plugins-center">
    <!-- 搜索 -->
    <div class="search-wrapper">
      <div class="search-container">
        <div class="hot-search">
          <div class="label">热门搜索：</div>
          <ul>
            <li v-for="hot in hotSearchWords" :key="hot">{{ hot }}</li>
          </ul>
        </div>
        <div class="search-input">
          <input v-model="keyword" placeholder="请输入你想搜索的插件名称"/>
          <div class="search-btn" @click="handleSearch">
            <i class="iconfont icon-sousuo"></i>
            搜索
          </div>
        </div>
      </div>
    </div>
    <!-- 页面内容 -->
    <div v-if="!showResult" class="page-container">
      <!-- 分类 -->
      <CategorizedList :positionStyle="{
        position: 'sticky',
        top: '0',
        left: '0'
      }"/>
      <!-- 插件列表 -->
      <div class="plugins-wrapper">
        <!-- 分类列表 -->
        <div class="all-plugin-list">
          <!-- 热门推荐 -->
          <div id="hot" class="plugins">
            <h1 class="title">
              热门推荐
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item" @click="handleGoDetail">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add" @click.stop="showModal(item)">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 选品专区 -->
          <div id="selection" class="plugins">
            <h1 class="title">
              选品专区
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 运营工具 -->
          <div id="operation" class="plugins">
            <h1 class="title">
              运营工具
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 店铺运营 -->
          <div id="shop" class="plugins">
            <h1 class="title">
              店铺运营
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 推广营销 -->
          <div id="promotion" class="plugins">
            <h1 class="title">
              推广营销
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 其他工具 -->
          <div id="tool" class="plugins">
            <h1 class="title">
              其他工具
              <span class="see-more" @click="handleSeeMore">
                查看更多
                <i class="iconfont icon-you"></i>
              </span>
            </h1>
            <ul>
              <li v-for="item in 6" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="plugin-info">
                  <div class="top">
                    <div class="name">
                      <h3>Shopee Fans - 虾皮卖家助手</h3>
                      <div class="provider">
                        <p>提供方：Translate.google.com</p>
                        <div class="heat">
                          <i class="iconfont icon-redu"></i>
                          <span>100万</span>
                        </div>
                      </div>
                    </div>
                    <button class="btn add">添加</button>
                  </div>
                  <div class="desc">
                    百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="ranking-list">
          <h1 class="title">排行榜</h1>
          <ul>
            <li v-for="item in 10" :key="item">
              <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
              <div class="rank-plugin-info">
                <div class="top">
                  <div class="name">Shopee Fans - 虾皮卖家助手</div>
                  <button class="btn add">添加</button>
                </div>
                <div class="desc">
                  shopeefans.com - 虾皮卖家助手手，一键铺货，高效运营，帮助卖...
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 搜索结果 -->
    <searchResult v-if="showResult" @back="handleSearchResBack"/>
    <!-- 插件授权 -->
    <AuthModal v-if="pluginsStore.pluginAuthModal.visible"/>
    <!-- 分配账号 -->
    <DistributeAccount v-if="distributeStore.visible"/>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
<style lang="less">
.el-dialog {
  .el-dialog__header {
    margin-top: 0;
  }

  // 关闭按钮样式
  .el-select-dropdown__item.selected {
    font-weight: 350;
  }

  .el-dialog__headerbtn .el-dialog__close {
    color: #333;
    font-weight: bold;
  }

  .el-dialog__headerbtn {
    font-size: 20px;
  }
}

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
    color: #F29E38;

    p {
      margin-left: 5px;
    }
  }
}
</style>