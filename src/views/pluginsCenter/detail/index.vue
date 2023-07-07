<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const router = useRouter();

const imgs = ref([
  {
    id: 1,
    url: 'https://yuanki-1256318267.cos.ap-shanghai.myqcloud.com/album/07150045.jpg'
  },
  {
    id: 2,
    url: 'https://yuanki-1256318267.cos.ap-shanghai.myqcloud.com/album/07150046.jpg'
  }
])

const modules = [Navigation, Pagination, Autoplay]

const handleBack = () => {
  router.back();
};

const onSwiper = (swiper: any) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log('slide change');
};
</script>

<template>
  <div class="plugin-detail">
    <div class="container">
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
      <div class="content">
        <div class="detail">
          <button class="btn add">添加</button>
          <div class="plugin-base-info">
            <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
            <div class="right">
              <div class="name">卖家精灵-亚马逊关键词优化，大数据选品专家zhuan jia</div>
              <div class="hot">
                <i class="iconfont icon-redu"></i>
                100万
              </div>
              <div class="desc">
                卖家通精灵（SerllerSprite）基于大数据和人工智能技术，为卖家提供一站式选品、关键词优化、产品监控等运营工具，帮助卖家洞察行业商机、高效选品、打造高分Listing。
              </div>
            </div>
          </div>
          <div class="plugin-banner">
            <swiper
              :autoplay="{
                delay: 3000,
                disableOnInteraction: false
              }"
              :loop="true"
              :modules="modules"
              :pagination="{ clickable: true }"
              :slides-per-view="1"
              @slideChange="onSlideChange"
              @swiper="onSwiper"
            >
              <swiper-slide v-for="item in imgs" :key="item.id">
                <img :src="item.url" alt="">
              </swiper-slide>
            </swiper>
          </div>
          <div class="detailed-introduction">
            <div class="header">详细介绍</div>
            <div class="introduction">
              浏览器插件（包含Web版80%功能）：10万+亚马逊Chrome用户的选择
              完美复刻PC端，使用更便捷。在亚马逊站内就能实现产品调研、市场分析、关键词优化。
              实时获取海量运营数据，随时掌握最新产品动态。数据获取更便捷，洞悉竞品更高效。

              核心功能如下：
              快速预览：ASIN透视，一目了然
              商品列表全方位透视：在亚马逊任一产品列表页即可轻松透视全部ASIN的详细数据。

              市场分析：一键生成，效率加倍
              关键词搜索结果页、BSR畅销榜页自定义样本，一键生成16+维度市场分析报告。

              产品探索：知己知彼，稳操胜券
              打开亚马逊产品列表页或Listing详情页，即刻查看当前页面所有产品销量趋势、评分数等全指标解析。

              关键词挖掘：核心词汇，一网打尽
              亚马逊搜索结果页打开插件即刻自动开启关键词挖掘，动态挖掘/静态挖掘自由切换。

              关键词反查：流量入口，一键Get
              Listing详情页打开插件即可一键反查目标ASIN的真实流量入口。

              Keepa插件替代
              原版复刻，提供产品近3年详细历史数据，追源溯流，洞悉同类产品Listing打造全历程。

              关键词反查：流量入口，一键Get
              Listing详情页打开插件即可一键反查目标ASIN的真实流量入口。

              Keepa插件替代
              原版复刻，提供产品近3年详细历史数据，追源溯流，洞悉同类产品Listing打造全历程。

              批量下载
              Listing主图/Reviews/Q&A/评论图片/A+图片，一键批量下载，解放运营双手。

              更多功能，登录官网 https://www.sellersprite.com 即可免费试用！
            </div>
          </div>
        </div>
        <div class="other-info">
          <div class="base-info">
            <h1>基础信息</h1>
            <div class="col">
              <div class="label">版本号：</div>
              <div class="value">3.4233（最新）</div>
            </div>
            <div class="col">
              <div class="label">所属分类：</div>
              <div class="value">选品专区</div>
            </div>
            <div class="col">
              <div class="label">更新日期：</div>
              <div class="value">2023-02-23 22:56:35:15</div>
            </div>
            <div class="col">
              <div class="label">提供方：</div>
              <div class="value">https://www.sellersprite.com</div>
            </div>
            <div class="col">
              <div class="label">相关协议：</div>
              <div class="value">
                <a href="https://yuanki.cn/" target="_blank">《免责声明》</a>
                <a href="https://yuanki.cn/" target="_blank">《隐私协议》</a>
              </div>
            </div>
          </div>
          <div class="similar">
            <h1>相似推荐</h1>
            <ul>
              <li v-for="item in 10" :key="item">
                <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
                <div class="right-info">
                  <div class="name">
                    <h3>卖家精灵-亚马逊关键词优化，大数据选品专家zhuan jia</h3>
                    <div class="hot">
                      <i class="iconfont icon-redu"></i>
                      100万
                    </div>
                  </div>
                  <button class="btn add">添加</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>