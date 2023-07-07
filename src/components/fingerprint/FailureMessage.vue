<template>
  <!-- 指纹页-错误信息 -->
  <div class="failure-message">
    <div class="tag">
      <img src="@/assets/img/fingerprint/icon-mistake.webp" alt="" />
      <span>代理获取失败，请检查代理IP是否可用。建议完成一下设置后在打开新标签页开始访问。</span>
    </div>
    <div class="input-box">
      <div class="l">
        <el-form label-position="right" label-width="90px" :model="findQuery">
          <el-form-item label="代理方式：" placeholder="请填写您认为安全的IP地址">
            <el-input v-model="findQuery.tgentMode"></el-input>
          </el-form-item>
          <el-form-item label="国家地区：" placeholder="请选择国家地区">
            <el-input v-model="findQuery.district"></el-input>
          </el-form-item>
          <p class="info">会根据设置的结果获取环境时区、语言等参数</p>
        </el-form>
        <div class="buttons">
          <button class="resetting-btn">确认</button>
          <button class="resetting-btn">直接打开</button>
        </div>
      </div>
      <div class="r">
        <ul>
          <li
            >检查代理成功，打开浏览器代理失败，如果本地网络为中国大陆地区，请在非中国大陆地区的VPS环境操作打开浏览器</li
          >
          <li>检查代理失败，请联系供应商确认代理问题</li>
          <li>如果查完以上可能原因都无法解决问题，可随时联系我们的客服进行咨询</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const findQuery = reactive({
  tgentMode: '',
  district: '',
})
</script>

<style scoped lang="less">
.failure-message {
  margin-top: 15px;
  padding: 20px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  .tag {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
    border: 1px solid #ff0000;
    border-radius: 30px;
    padding: 10px 15px;
    font-size: 14px;
    color: #ff0000;
    background: rgba(255, 0, 0, 0.05);
    img {
      width: 16px;
      height: 16px;
      margin-right: 10px;
    }
  }
  .input-box {
    display: flex;
    justify-content: space-between;
    .l {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 560px;
      :deep(.el-form) {
        width: 100%;
        .el-form-item {
          margin-bottom: 10px;
        }
        .info {
          padding-left: 90px;
          font-size: 14px;
          font-weight: 350;
          color: #999999;
        }
      }
      .buttons {
        display: flex;
        justify-content: center;
        gap: 0 20px;
        // 选择第一个button
        button:first-child {
          padding: 6px 27px;
          border-radius: 8px;
          background: #2b53e5;
          color: #fff;
        }
        //选择最后一个button
        button:last-child {
          padding: 6px 23px;
          border-radius: 8px;
          border: 1px solid #ff6200;
          background: #fff;
          color: #ff6200;
        }
      }
    }
    .r {
      border-radius: 10px;
      padding: 20px 20px 20px 40px;
      background: #f6faff;
      ul {
        display: flex;
        flex-direction: column;
        gap: 20px 0;
        list-style: disc;
        color: #999999;
        li {
          width: 320px;
          font-size: 14px;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
