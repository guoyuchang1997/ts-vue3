<template>
  <div class="header">
    <!-- header左侧标题 -->
    <div class="header-left flex">
      <!-- TODO:这里最好设计成插槽 -->
      <span>{{ useLeftList.Currentname }}</span>
      <div id="HeaderMain"></div>
    </div>
    <!-- header 右侧按钮 -->
    <div class="header-right">
      <!-- 广告 -->
      <div class="header-right-ad">
        <img alt="促销广告" src="@/assets/img/c-header/ad-promotion.webp" />
      </div>
      <!-- 版本 消息 任务 -->
      <div class="header-right-btn">
        <!-- 版本 -->
        <div class="header-right-btn-item" @mouseleave="isShowRenewal = false" @mouseover="isShowRenewal = true">
          <i class="iconfont">&#xe632;</i>
          <Renewal v-show="isShowRenewal" />
        </div>
        <div class="line"></div>
        <!-- 消息 -->
        <div class="header-right-btn-item" @mouseleave="isShowMessage = false" @mouseover="isShowMessage = true">
          <i class="iconfont">&#xe62d;</i>
          <Message v-show="isShowMessage" />
        </div>
        <div class="line"></div>
        <!-- 任务 -->
        <div class="header-right-btn-item" @mouseleave="isShowQuest = false" @mouseover="isShowQuest = true">
          <i class="iconfont">&#xe636;</i>
          <Quest v-if="isShowQuest" />
        </div>
      </div>
      <!-- 用户信息 -->
      <div class="header-right-user pointer" @mouseleave="isShowUserInfo = false" @mouseover="isShowUserInfo = true">
        <!-- 用户头像 -->
        <div class="header-right-user-header">
          <img alt="用户头像" src="@/assets/img/c-header/avatar-header.png" />
        </div>
        <!-- 用户名称 -->
        <div class="header-right-user-name">
          <span title="12387581@qq.com">{{ userName.truncatedText.value }}</span>
          <UserInfo v-if="isShowUserInfo" />
        </div>
        <!-- 下拉Icon -->
        <div class="header-right-user-icon">
          <i class="iconfont">&#xe622;</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Renewal from '@/components/header/Renewal.vue'
import Message from '@/components/header/Message.vue'
import Quest from '@/components/header/Quest.vue'
import UserInfo from '@/components/header/UserInfo.vue'
import { useTextEllipsis } from '@/hooks/useTextEllipsis.ts'
import useStore from '@/store/index'

const { useLeftList } = useStore()
const userName = useTextEllipsis('12387581@qq.com', 11)

const isShowRenewal = ref(false)
const isShowMessage = ref(false)
const isShowQuest = ref(false)
const isShowUserInfo = ref(false)
</script>

<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 10px 21px 10px 15px;
  background-color: @cbcolor;
  // overflow: auto;
  .header-left {
    span {
      white-space: nowrap;
      display: block;
      // width: 64px;
      font-size: @font-size-lg;
      font-weight: 700;
      line-height: 21px;
      // TODO:cssVolume 左侧标题文本颜色
      color: #333;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .header-right-ad {
      width: 312px;
      height: 40px;
      object-fit: contain;
    }
    .header-right-btn {
      display: flex;
      justify-content: space-between;
      width: 151px;
      height: 22px;
      margin-left: 25px;
      .header-right-btn-item {
        position: relative;
        display: flex;
        align-items: center;
        width: auto;
        height: auto;
        i {
          font-size: 22px;
        }
      }
      .line {
        width: 1px;
        height: 20px;
        background-color: #eae9e9;
      }
    }
    .header-right-user {
      display: flex;
      align-items: center;
      margin-left: 30px;
      .header-right-user-header {
        position: relative;
        width: 26px;
        height: 26px;
        img {
          border-radius: 50%;
          object-fit: contain;
        }
        .user-type {
          width: 10px;
          height: 10px;
        }
      }
      .header-right-user-name {
        display: flex;
        position: relative;
        margin-left: 8px;
        font-size: 14px;
        // TODO:cssVolume 用户名文本颜色
        color: #666;
        span {
          display: inline-block;
        }
        .avatar-img {
          width: 24px;
          height: 14px;
        }
      }
      .header-right-user-icon {
        margin-left: 12px;
        i {
          font-size: 16px;
          // TODO:cssVolume 下拉icon文本颜色
          color: #666;
        }
      }
    }
  }
}
</style>
