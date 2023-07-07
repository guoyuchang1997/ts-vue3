<template>
  <!-- 费用管理 -->
  <div class="expense">
    <!-- 布局容器 -->
    <div class="layout-box">
      <!-- 左侧切换导航 -->
      <div class="layout-box-left">
        <!-- 导航列表 -->
        <ul>
          <!-- 云币充值 -->
          <li :class="{ active: activeIndex === 1 }" @click="changeNav(1)">
            <div>
              <img alt="云币充值icon" src="@/assets/img/c-header/icon-cloudCoin.webp" />
              <span>云币充值</span>
            </div>
            <i class="iconfont">&#xe642;</i>
          </li>
          <!-- 购买代理 -->
          <li :class="{ active: activeIndex === 2 || activeIndex === 5 }" @click="changeNav(2)">
            <div>
              <img alt="购买代理icon" src="@/assets/img/expense/icon-manage.webp" />
              <span>购买代理</span>
            </div>
            <i class="iconfont">&#xe642;</i>
          </li>
          <!-- 购买套餐 -->
          <li :class="{ active: activeIndex === 3 }" @click="changeNav(3)">
            <div>
              <img alt="购买套餐icon" src="@/assets/img/expense/icon-setMeal.webp" />
              <span>购买套餐</span>
            </div>
            <i class="iconfont">&#xe642;</i>
          </li>
          <!-- 订单管理 -->
          <li :class="{ active: activeIndex === 4 }" @click="changeNav(4)">
            <div>
              <img alt="订单管理icon" src="@/assets/img/expense/icon-agency.webp" />
              <span>订单管理</span>
            </div>
            <i class="iconfont">&#xe642;</i>
          </li>
        </ul>
      </div>
      <!-- 右侧容器 -->
      <div :class="{ 'layout-box-right-padding': activeIndex !== 3 }" class="layout-box-right">
        <!-- 云币充值 -->
        <CloudCoinRecharge v-if="activeIndex === 1" />
        <!-- 购买代理 -->
        <PurchaseAgent v-if="activeIndex === 2" @change="nextStep" />
        <!-- 购买套餐 -->
        <PurchasePackage v-if="activeIndex === 3" />
        <!-- 订单管理 -->
        <OrderManagement v-if="activeIndex === 4" />
        <!-- 订单信息 -->
        <OrderInfo v-if="activeIndex === 5" @change="recharge" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CloudCoinRecharge from '@/components/expense/view/CloudCoinRecharge.vue'
import PurchaseAgent from '@/components/expense/view/PurchaseAgent.vue'
import PurchasePackage from '@/components/expense/view/PurchasePackage.vue'
import OrderManagement from '@/components/expense/view/OrderManagement.vue'
import { useRoute } from 'vue-router'
import OrderInfo from '@/components/expense/view/OrderInfo.vue'

const route = useRoute()

const activeIndex = ref(1)
/**
 * 切换导航
 * @param index 索引
 */
const changeNav = (index: number) => {
  // TODO：后续可以优化成事件代理
  activeIndex.value = index
}

/**
 * 购买代理下一步
 */
const nextStep = () => {
  changeNav(5)
}
/**
 * 充值
 */
const recharge = () => {
  changeNav(1)
}

onMounted(() => {
  // 初始化时检查是否携带路由参数跳转对应的页面 1：云币充值 2：购买代理 3：购买套餐 4：订单管理
  if (route.query.type) {
    activeIndex.value = Number(route.query.type)
  }
})
</script>

<style lang="less" scoped>
@import './index.less';
</style>
