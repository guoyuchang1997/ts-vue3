<template>
  <div class="fingerpr-intInfo">
    <h1>指纹信息</h1>
    <ul class="fingerpr-intInfo-list">
      <li>
        <span>内核版本</span>
        <span>108</span>
      </li>
      <li>
        <span>操作系统</span>
        <span>Win32</span>
      </li>
      <li>
        <span>User Agent</span>
        <span>Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/110.0.5481.77Sa</span>
      </li>
      <li>
        <span>语言</span>
        <span>zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7</span>
      </li>
      <li>
        <span>邮政编码</span>
        <span>310005</span>
      </li>
      <li>
        <span>时区</span>
        <span>Asia/Shanghai（格林尼治标准时间）当地时间：2023-06-2915:19:07</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.fingerpr-intInfo {
  margin-top: 15px;
  padding: 20px;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  h1 {
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
    line-height: 24px;
  }
  .fingerpr-intInfo-list {
    padding: 20px;
    background: #f6faff;
    li {
      display: flex;
      align-items: center;
      gap: 0 30px;
      margin-bottom: 20px;
      // 选择最后一个li
      &:last-child {
        margin-bottom: 0;
      }
      span {
        display: inline-block;
      }
      span:first-child {
        width: 80px;
        white-space: nowrap;
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        text-align: right;
      }
      span:last-child {
        font-size: 14px;
        font-weight: 400;
        color: #333333;
        line-height: 20px;
      }
    }
  }
}
</style>
