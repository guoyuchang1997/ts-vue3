<script lang="ts" setup>
import { storeToRefs } from "pinia";
import useDetailStore from '../detailStore';

const detailStore = useDetailStore()

const { visible } = storeToRefs(detailStore)

</script>

<template>
  <el-dialog
    v-model="visible"
    :show-close="false"
    :title="null"
    class="rpa-detail-dialog"
    width="800"
  >
    <template #header>
      <div class="header">
        <h1>RPA服务详情</h1>
        <i class="iconfont icon-close2"></i>
      </div>
    </template>
    <template #default>
      <div class="content">
        <div class="base-info">
          <div class="left">
            <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
            <div class="info">
              <h2>TikTok养号--点赞关注与AI智能评论广告分析必备</h2>
              <ul>
                <li>
                  <span class="label">出品方：</span>
                  <span class="value">云登浏览器</span>
                </li>
                <li>
                  <span class="label">最新版本：</span>
                  <span class="value">1.9.50</span>
                </li>
                <li>
                  <span class="label">更新日期：</span>
                  <span class="value">2023-06-28</span>
                </li>
              </ul>
            </div>
          </div>
          <el-button type="primary">立即获取</el-button>
        </div>
        <div class="introduction mb15">
          <h3>内容简介</h3>
          <p class="text">本流程以浏览TikTok短视频为例，根据用户指定的概率以决定是否对正在浏览的视频进行点赞、关注与评论，当需要评论时，通过云登RPA将视频的名称、
            指定数量的评论内容“喂给” ChatGPT，并要求 ChatGPT 生成相应的的评论；从第三方角度来看，
            本流程可以完全模拟真实人类行为，并能够同时操作多个TikTok账号，既可用作TikTok养号的目的，也可用来给指定视频进行加人气的用途...</p>
        </div>
        <div class="introduction">
          <h3>步骤简介</h3>
          <div style="margin-bottom: 10px;">
            <p class="text">1、本流程以浏览TikTok短视频为例，根据用户指定的概率以决定是否对正在浏览的视频进行点赞、关注与评论，当需要评论时，通过云登RPA将视频的名称、
              指定数量的评论内容“喂给” ChatGPT，并要求 ChatGPT 生成...</p>
            <img alt="" src="https://yuanki-1256318267.cos.ap-shanghai.myqcloud.com/album/07150045.jpg">
          </div>
          <div>
            <p class="text">2、本流程以浏览TikTok短视频为例，根据用户指定的概率以决定是否对正在浏览的视频进行点赞、关注与评论，当需要评论时，通过云登浏览器RPA将视频的名称、
              指定数量的评论内容“喂给” ChatGPT，并要求 ChatGPT
              生成根据用户指定的概率以决定是否对正在浏览的视频进行点赞、关注与评论，当需要评论时...</p>
          </div>
        </div>
      </div>
    </template>
    <template #footer></template>
  </el-dialog>
</template>

<style lang="less" scoped>
.rpa-detail-dialog {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 14px;
    margin-bottom: 15px;

    h1 {
      font-size: 20px;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
      color: #333333;
      line-height: 29px;
    }

    .iconfont.icon-close2 {
      color: #333333;
      font-weight: bold;
    }
  }

  .content {
    .base-info {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #EEEEEE;
      padding-bottom: 15px;
      margin-bottom: 15px;

      .left {
        display: flex;

        img {
          width: 55px;
          height: 55px;
          border-radius: 10px;
          margin-right: 15px;
          flex-shrink: 0;
        }

        .info {
          h2 {
            margin-bottom: 5px;
            font-size: 16px;
            font-family: Source Han Sans CN-Medium, Source Han Sans CN;
            font-weight: 500;
            color: #333333;
          }

          ul {
            display: flex;
            gap: 0 30px;

            li {
              font-size: 12px;
              font-family: Source Han Sans CN-Regular, Source Han Sans CN;
              font-weight: 400;

              .label {
                color: #999999;

              }

              .value {
                color: @fontactive;
              }
            }
          }
        }
      }

      .el-button {
        width: 90px;
        height: 30px;
        border-radius: 100px 100px 100px 100px;
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
      }
    }

    .introduction {
      &.mb15 {
        margin-bottom: 15px;
      }

      h3 {
        font-size: 16px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #333333;
        margin-bottom: 10px;
        line-height: 24px;
      }

      .text {
        font-size: 12px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #666666;
        line-height: 18px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>