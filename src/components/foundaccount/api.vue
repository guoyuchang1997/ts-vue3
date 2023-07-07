<template>
  <div class="api">
    <div class="title">
      <span>设置</span>
    </div>
    <div class="state flex">
      接口状态:
      <!-- <div class="success fs-base flex pointer"
        ><i class="iconfont icon-chenggong fs-base"></i>成功
        <span class="input">
          <i>12</i>
          <i> 参数形式</i>
        </span>
        <i class="iconfont icon-a-renwu1 fs-xl"></i>
      </div> -->
      <div class="success error fs-base flex pointer"
        ><i class="iconfont icon-chenggong fs-base red"></i>失败
        <span class="input">
          <i>12</i>
          <i> 参数形式</i>
        </span>
        <i class="iconfont icon-a-renwu1 red fs-xl"></i>
      </div>
    </div>
    <el-divider></el-divider>
    <div class="title">
      <span>使用须知</span>
    </div>
    <div class="state">
      <div class="texta flex">
        <div class="le">1.使用前准备&nbsp;:</div>
        <div class="ri">-检查接口状态是否正常。</div>
      </div>
      <div class="texta flex">
        <div class="le">2.参数说明&nbsp;:</div>
        <div class="ri">
          <p>-API的参数均为字符串类型</p>
          <p>-POST的内容均为SON格式</p>
          <p>-非必填参数均为可选参数，可以不传递</p>
        </div>
      </div>
      <div class="texta flex">
        <div class="le">1.接口上线&nbsp;:</div>
        <div class="ri">-检查接口状态是否正常。</div>
      </div>
    </div>
    <Apisummarize />
  </div>
</template>

<script setup lang="ts">
import Apisummarize from './apisummarize.vue'
</script>

<style scoped lang="less">
.title {
  margin: 0 20px 12px 0;
  height: 40px;
  line-height: 40px;
  background: #f7f7f7;
  border-radius: 4px 4px 4px 4px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 10px;
  justify-content: space-between;
  padding-right: 10px;
}
.state {
  padding-left: 10px;
  .texta {
    margin-bottom: 20px;
    align-items: baseline;
    .le {
      font-size: 14px;
      font-weight: 600;
    }
    .ri {
      padding-left: 8px;
      font-size: 14px;
      font-weight: 400;
      color: #666666;
      > p {
        margin-bottom: 5px;
      }
    }
  }
}
.icon-a-renwu1 {
  display: inline-block;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border: #00b9a0 1px solid;
  border-radius: 4px;
  padding-right: unset !important;
  &.red {
    border: solid 1px red;
  }
}

.iconfont {
  padding-right: 5px;
}
.icon-chenggong {
  color: #00b9a0;
  &.red {
    color: red;
  }
}
.success {
  margin-left: 10px;
  .input {
    display: inline-block;
    width: 400px;
    height: 32px;
    background: rgba(0, 185, 160, 0.05);
    border-radius: 4px 4px 4px 4px;
    opacity: 1;
    border: 1px solid #00b9a0;
    margin-right: 10px;
    margin-left: 10px;
    line-height: 32px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  color: #00b9a0;
}
.error {
  color: red;
  .input {
    border: 1px solid red;
    background: rgba(255, 52, 52, 0.051);
  }
}
.api {
  padding-left: 16px;
}
</style>
