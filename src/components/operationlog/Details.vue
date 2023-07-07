<template>
  <div class="details">
    <!-- 插槽 -->
    <slot></slot>
    <!-- 横线 -->
    <div class="line"></div>
    <!-- 详情信息 -->
    <ul>
      <li>
        <span class="lable">操作用户：</span>
        <span class="value">蔡徐坤（产品经理）</span>
      </li>
      <li>
        <span class="lable">操作时间：</span>
        <span class="value">2023-06-26  15:41:15</span>
      </li>
      <li>
        <span class="lable">操作内容：</span>
        <span class="value-box">将附加账号：163邮箱1授权给用户</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.details {
  padding: 0px 10px 10px;
  .line {
    width: 100%;
    height: 1px;
    margin-top: 14px;
    background: #eeeeee;
  }
  ul {
    margin-top: 30px;
    li {
      display: flex;
      margin-bottom: 20px;
      font-size: 14px;
      color: #333;
      line-height: 21px;
      .lable {
        margin-right: 10px;
      }
      .value-box {
        display: inline-block;
        width: 490px;
        height: 154px;
        padding: 10px;
        font-weight: 350;
        background: #f5f6f7;
      }
    }
  }
}
</style>
