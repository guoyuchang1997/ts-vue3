<template>
  <div class="problem-qa">
    <h1><img src="@/assets/img/extend/icon-help.webp" /> 常见问题</h1>
    <ul>
      <li v-for="(item, index) in newList" :key="index">
        <h2>{{ item.title }}</h2>
        <p v-html="item.content"></p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const newList = ref([
  {
    title: '1.奖励规则',
    content:
      '<p>每一位通过邀请链接或邀请码邀请的好友在云登浏览器成功消费，你可以获得用户消费的15%提成奖励。（不限时间，永久返佣）如在奖励期内您的用户取消购买或产生退款，对应的邀请奖励也随即退回。活动最终解释权归云登浏览器所有</p>',
  },
  {
    title: '2.推广数量有限吗？',
    content: '<p>推荐数量没有上限！您可以随时分享邀请码和邀请链接，只要您的朋友是云登的全新用户</p>',
  },
  {
    title: '3.佣金如何提现',
    content: '<p>在「邀请返佣」页面可查看到「可提现金额」按钮，就可以提现到支付宝或是充值换算成云币使用</p>',
  },
  {
    title: '4.佣金如何提现',
    content: '<p>在「邀请返佣」页面可查看到「可提现金额」按钮，就可以提现到支付宝或是充值换算成云币使用</p>',
  },
  {
    title: '5.佣金需要多久才会到账？',
    content: '<p>佣金将在您的好友付款成功并无退款后尽快返给您，具体可以联系客服了解最新进度</p>',
  },
])
</script>

<style lang="less" scoped>
.problem-qa {
  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: #333333;
    margin-bottom: 10px;
    img {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  ul {
    li {
      h2 {
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        color: #333333;
        margin-bottom: 10px;
      }
      P {
        max-width: 800px;
        font-size: 14px;
        line-height: 24px;
        color: #999999;
      }
      margin-bottom: 20px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
