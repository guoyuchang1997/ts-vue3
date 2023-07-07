<script lang="ts" setup>
const noResult = ref(false) // 是否显示无结果

const emit = defineEmits(['back'])

const back = () => {
  emit('back')
}
</script>

<template>
  <div class="search-result">
    <div class="container">
      <template v-if="!noResult">
        <div class="title">
          <div class="text">搜索结果:</div>
          <div class="back" @click="back">
            <i class="iconfont icon-xiangzuojiantou"></i>
            返回
          </div>
        </div>
        <ul class="search-list">
          <li v-for="item in 6" :key="item">
            <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
            <div class="plugin-info">
              <div class="top">
                <div class="name">
                  <h3>Shopee Fans - 虾皮卖家助手</h3>
                  <div class="provider">
                    <p>提供方：Translate.google.com</p>
                    <div class="heat">
                      <i class="iconfont icon-redu"></i>
                      <span>100万</span>
                    </div>
                  </div>
                </div>
                <button class="btn add">添加</button>
              </div>
              <div class="desc">
                百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
              </div>
            </div>
          </li>
        </ul>
      </template>
      <div v-else class="no-data">
        <img alt="" src="@/assets/img/plugin/no_data.png">
        <div class="text">暂无搜索结果～</div>
        <div class="back" @click="back">
          返回插件市场
          <div><i class="iconfont icon-xialajiantou2"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-result {
  height: 100%;
  background: linear-gradient(180deg, rgba(226, 239, 255, 0.94) 0%, #FBFDFF 95%);

  .container {
    width: 1076px;
    height: 100%;
    margin: 0 auto;
    padding-top: 60px;

    .title {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .text {
        font-size: 18px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: 700;
        color: #333333;
      }

      .back {
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #3053E4;
        cursor: pointer;

        .iconfont {
          font-size: 14px;
        }
      }
    }

    .search-list {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;

      li {
        width: 528px;
        height: 162px;
        background: @cbcolor;
        border-radius: 4px 4px 4px 4px;
        padding: 20px;
        display: flex;
        gap: 0 20px;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        .btn {
          width: 80px;
          height: 36px;
          border-radius: 4px 4px 4px 4px;
          cursor: pointer;
          border: 1px solid;
          font-size: 16px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;

          &.add {
            border-color: #3053E4;
            background: transparent;
            color: #3053E4;
          }

          &.distribution {
            color: @cbcolor;
            background-color: @fontactive;
            border-color: @fontactive;
          }
        }

        &:hover {
          box-shadow: 0 4px 20px 4px rgba(0, 31, 143, .08);
          border-color: #2b53e5;
          //transform: scale(1.02);
          transform: translateY(-2px);
        }

        img {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
          border-radius: 10px;
        }

        .plugin-info {
          flex-grow: 1;

          .top {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;

            .name {
              h3 {
                font-size: 16px;
                font-family: Source Han Sans CN-Medium, Source Han Sans CN;
                font-weight: 500;
                color: #333333;
                line-height: 23px;
                margin-bottom: 5px;
              }

              .provider {
                font-size: 12px;
                font-family: Source Han Sans CN-Normal, Source Han Sans CN;
                font-weight: 350;
                color: #999999;
                line-height: 17px;
                display: flex;

                p {
                  max-width: 180px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  white-space: nowrap;
                  margin-right: 20px;
                }

                .heat {
                  .icon-redu {
                    margin-right: 5px;
                  }
                }
              }
            }
          }

          .desc {
            font-size: 12px;
            font-family: Source Han Sans CN-Normal, Source Han Sans CN;
            font-weight: 350;
            color: #666666;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
          }
        }
      }
    }

    .no-data {
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 238px;
        height: 244px;
        margin-bottom: 16px;
      }

      .text {
        font-size: 18px;
        color: #333333;
        line-height: 26px;
        margin-bottom: 10px;
      }

      .back {
        cursor: pointer;
        font-size: 14px;
        color: #3053E4;
        line-height: 20px;
        display: flex;
        align-items: center;

        div {
          transform: rotate(-90deg);
        }
      }
    }
  }
}
</style>