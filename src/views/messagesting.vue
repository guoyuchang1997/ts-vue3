<template>
  <div class="seting fs-lg">
    <div class="main">
      <p>设备到期提醒</p>
      <div class="conten fs-base">
        <div class="item flex">
          <div class="le">消息中心推送</div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">短信推送: 156416546 <span class="text pointer">变更手机号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">公众号推送 <span class="text pointer">关注公众号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">邮件发送: 156465416514@156 <span class="text pointer">变更邮箱</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
      </div>
    </div>
    <div class="main">
      <p>余额不足提醒</p>
      <div class="conten fs-base">
        <div class="item flex">
          <div class="le">消息中心推送</div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">短信推送: <span class="text pointer">设置手机号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">公众号推送 <span class="text pointer">关注公众号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">邮件发送: <span class="text pointer">设置邮箱</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
      </div>
    </div>
    <div class="main">
      <p>套餐提醒</p>
      <div class="conten fs-base">
        <div class="item flex">
          <div class="le">消息中心推送</div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">短信推送: 156416546 <span class="text pointer">变更手机号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">公众号推送 <span class="text pointer">关注公众号</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
        <div class="item flex">
          <div class="le">邮件发送: 156465416514@156 <span class="text pointer">变更邮箱</span></div>
          <div class="ri"> <el-switch v-model="message" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const message = ref(false)
</script>

<style scoped lang="less">
.seting {
  padding: 0 20px 20px;
  .main {
    padding-top: 20px;
    > p {
      margin-bottom: 10px;
      font-weight: 600;
    }
    .conten {
      padding: 20px 30px;
      width: 80%;
      background: #ffffff;
      box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
      border-radius: 8px 8px 8px 8px;
      color: #3d3d3d;
      .item {
        justify-content: space-between;
        padding-bottom: 20px;
        border-bottom: solid 1px #d8d8d8;
        margin-bottom: 20px;
        .text {
          color: #2b53e5;
          margin-left: 15px;
        }
      }
      .item:last-child {
        margin-bottom: unset;
        padding-bottom: unset;
        border-bottom: unset;
      }
    }
  }
}
</style>
