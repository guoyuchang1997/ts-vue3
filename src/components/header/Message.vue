<template>
  <!-- 消息面板 -->
  <div class="message">
    <div class="content">
      <!-- 筛选 -->
      <ul class="switch-tab">
        <li class="active"> 全部 </li>
        <li> 未读 </li>
        <li> 全部已读 </li>
      </ul>
      <!-- 消息列表 -->
      <ul class="message-list">
        <li v-for="item in messageList" :key="item.id">
          <div class="message-item-left">
            <img src="@/assets/img/c-header/icon-message.webp" alt="消息icon" />
          </div>
          <div class="message-item-right">
            <!-- 消息标题 -->
            <div class="message-item-right-top">
              <div class="message-item-right-top-left">
                <span>{{ item.title }}</span>
              </div>
              <div class="message-item-right-top-right">
                <span>06/01 10:38</span>
              </div>
            </div>
            <!-- 消息详情 -->
            <div class="message-item-right-bottom">
              <p>{{ item.content }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const messageList = reactive([
  {
    id: 0,
    title: '账单通知',
    content: '【5月账单】您的5月份账单已生成，请注意您的5月份账单已生成，请注意您的5月份账单已生成，请注意',
  },
  {
    id: 2,
    title: '通知',
    content: '测试通知',
  },
])
</script>

<style lang="less" scoped>
.message {
  position: absolute;
  top: 20px;
  left: -80px;
  width: 372px;
  padding-top: 30px;
  z-index: 1000;
  .content {
    background: @cbcolor;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    .switch-tab {
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      width: 332px;
      align-items: center;
      border-bottom: 1px solid #eeeeee;
      padding-top: 33px;
      background: @cbcolor;
      border-radius: 10px 10px 0 0;
      li {
        display: flex;
        justify-content: center;
        width: 64px;
        height: 39px;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
          color: #2d5aff;
          transition: all 0.3s;
        }
        &.active {
          color: #2d5aff;
          border-bottom: 2px solid #2d5aff;
        }
      }
    }

    .message-list {
      max-height: 558px;
      background: @cbcolor;
      border-radius: 10px;
      padding: 0 20px;
      overflow-y: auto;
      // 纤细淡色滚动条
      &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: #ccd6f8;
      }
      &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: #f0f2fc;
      }

      li {
        display: flex;
        justify-content: space-between;
        padding: 20px 0;
        border-bottom: 1px solid #eeeeee;
        &:first-child {
          border-top: none;
        }
        &:last-child {
          border-bottom: none;
        }
        .message-item-left {
          img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .message-item-right {
          width: 280px;
          .message-item-right-top {
            display: flex;
            justify-content: space-between;
            line-height: 24px;
            .message-item-right-top-left {
              font-size: 16px;
              font-weight: 600;
              // TODO:cssVolume 消息类型颜色
              color: #333333;
            }
            .message-item-right-top-right {
              font-size: 12px;
              // TODO:cssVolume 时间颜色
              color: #999999;
            }
          }
          .message-item-right-bottom {
            p {
              // TODO:cssVolume 消息详情颜色
              color: #999999;
              line-height: 24px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }
    }
  }
}
</style>
