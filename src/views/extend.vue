<template>
  <!-- page:推广奖励 -->
  <div class="extend">
    <!-- 推广信息列表容器 -->
    <div class="info-card-list-box">
      <InfoCardList />
    </div>
    <!-- 推荐链接容器 -->
    <div class="promotion-link-box">
      <!-- 推广海报容器 -->
      <div class="promotion-link-box-left">
        <PromotionPoster />
      </div>
      <!-- 推广链接容器 -->
      <div class="promotion-link-box-right">
        <CopyInput>复制链接</CopyInput>
        <CopyInput>复制邀请码</CopyInput>
      </div>
    </div>
    <!-- 推广规则信息容器 -->
    <div class="promotion-rule-box">
      <!-- 各行各业均可成为推广者 -->
      <div class="promotion-rule-box-left">
        <Pancake />
      </div>
      <!-- 常见问题容器 -->
      <div class="promotion-rule-box-right">
        <ProblemQA />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoCardList from '@/components/extend/InfoCardList.vue'
import PromotionPoster from '@/components/extend/PromotionPoster.vue'
import CopyInput from '@/components/extend/CopyInput.vue'
import Pancake from '@/components/extend/Pancake.vue'
import ProblemQA from '@/components/extend/ProblemQA.vue'
</script>

<style lang="less" scoped>
.extend {
  height: 100%;
  background: #f6f6f6;
  overflow: auto;
  .promotion-link-box {
    display: flex;
    justify-content: space-between;
    gap: 10px 0.9rem;
    margin-top: 10px;
    .promotion-link-box-left {
      width: 50%;
      min-width: 815px;
      height: 213px;
      background: #fff;
    }
    .promotion-link-box-right {
      width: 50%;
      min-width: 815px;
      height: 213px;
      padding: 20px 20px 30px;
      background: #fff;
    }
  }
  .promotion-rule-box {
    display: flex;
    justify-content: space-between;
    gap: 0 0.9rem;
    min-width: 1635px;
    margin-top: 10px;
    padding: 20px;
    background: #fff;
    .promotion-rule-box-left {
      width: 50%;
    }
    .promotion-rule-box-right {
      width: 50%;
    }
  }
}
</style>
