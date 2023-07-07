<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from "vue";
import CategorizedList from "../components/CategorizedList.vue";

const route = useRoute()
const router = useRouter()

const currentTab = ref(route.query.tab as string)
const popperStyle = {
  'min-width': '88px',
  'border': '1px solid #2B53E5',
  'padding': '8px 10px',
}
const deleteConfirm = ref(false)
watch(() => route.fullPath, () => {
  currentTab.value = route.query.tab as string
})

const handleTabChange = (currentTab: string) => {
  router.push({
    path: '/my-plugin',
    query: {
      tab: currentTab
    }
  })
}

const showDeleteConfirm = (info: any) => {
  console.log(info)
  deleteConfirm.value = true
}

const confirm = () => {

}
</script>

<template>
  <div class="my-plugin">
    <div class="container">
      <!-- 分类 -->
      <CategorizedList :positionStyle="{
      position: 'absolute',
      top: '55px',
      left: '0',
    }" :tab="currentTab"/>
      <div class="content">
        <div class="back">
          <i class="iconfont icon-xiangzuojiantou"></i>
          返回
        </div>
        <!-- tab切换 -->
        <div class="tabs">
          <div :class="currentTab === '1'?'tab active':'tab'" @click="handleTabChange('1')">上传的插件</div>
          <div :class="currentTab === '2'?'tab active':'tab'" @click="handleTabChange('2')">添加的插件</div>
        </div>
        <!-- 上传的插件 -->
        <div v-if="currentTab === '1'" class="upload-plugin-list">
          <div v-for="i in 5" :key="i" class="plugin">
            <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
            <div class="base-info">
              <div class="name">
                <span>AmzTrends亚马逊品牌分析</span>
                <!-- class: distribution -->
                <button class="btn add">添加</button>
              </div>
              <div class="desc">
                百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，浏览外文网页时可一键网页翻支持27种语言的翻译...
              </div>
              <div class="action">
                <el-popover
                  :popper-style="popperStyle"
                  :show-arrow="false"
                  :width="87"
                  placement="bottom-start"
                  popper-class="plugin-popover"
                  trigger="hover"
                >
                  <div class="opt">
                    <i class="iconfont icon-bj"></i>
                    <span>编辑</span>
                  </div>
                  <div class="opt" @click="showDeleteConfirm(i)">
                    <i class="iconfont icon-shanchu"></i>
                    <span>删除</span>
                  </div>
                  <template #reference>
                    <i class="iconfont icon-vg"></i>
                  </template>
                </el-popover>
              </div>
            </div>
          </div>
        </div>
        <!-- 添加的插件 -->
        <div v-if="currentTab === '2'" class="add-plugin-list">
          <div v-for="info in 10" :key="info" class="plugin">
            <img alt="" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
            <div class="right-info">
              <div class="base-info">
                <div class="name">
                  <span>百度翻译：网页翻译、海淘神器</span>
                  <span>版本号：3.3.5</span>
                </div>
                <p class="desc">
                  百度翻译官方出品，支持27种语言的翻译，浏览外文网页时可一键网页翻译，的积分双语时支持27种语言的翻译，的积分双语时支持27种语言的翻译浏览外文网页时可一键网页翻支持27种语言的翻译...</p>
                <div class="detail-info-text">详细信息</div>
              </div>
              <div class="btns">
                <el-button type="primary">分配账号</el-button>
                <el-button plain type="primary" @click="showDeleteConfirm(info)">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- delete confirm -->
    <el-dialog v-model="deleteConfirm" :show-close="false" :title="null" class="delete-confirm" width="300">
      <p class="confirm-text">确认删除该插件吗？</p>
      <div class="btns">
        <el-button type="primary" @click="confirm">确认</el-button>
        <el-button plain type="primary" @click="deleteConfirm=false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.my-plugin {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #E2EFFF 0%, #FFFFFF 100%);

  .container {
    width: 1246px;
    height: 100%;
    margin: 0 auto;
    position: relative;
    padding-top: 55px;
    padding-left: 170px;

    .content {
      height: 100%;
      position: relative;

      .back {
        position: absolute;
        top: 0;
        right: 0;
        font-size: 18px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #3053E4;
        display: flex;
        align-items: center;
        cursor: pointer;

        .iconfont {
          font-size: 12px;
          margin-right: 5px;
        }
      }

      .tabs {
        font-size: 18px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #333333;
        line-height: 26px;
        display: flex;
        gap: 0 20px;
        margin-bottom: 24px;

        .tab {
          cursor: pointer;

          &:after {
            content: '';
            display: block;
            width: 100%;
            height: 2px;
            background: @fontactive;
            position: absolute;
            bottom: -2px;
            left: 0;
            transform: scale(0);
            transition: transform .3s ease-in-out;
          }

          &.active {
            color: @fontactive;
            position: relative;

            &:after {
              transform: scale(1);
            }
          }
        }
      }

      .upload-plugin-list {
        max-height: calc(100% - 50px);
        overflow-y: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 20px;

        &::-webkit-scrollbar {
          display: none;
        }

        .plugin {
          width: 528px;
          height: 162px;
          background: @cbcolor;
          border-radius: 4px 4px 4px 4px;
          padding: 20px;
          display: flex;
          position: relative;
          cursor: pointer;

          img {
            width: 80px;
            height: 80px;
            border-radius: 10px;
            margin-right: 20px;
            flex-shrink: 0;
          }

          .base-info {
            flex-grow: 1;

            .name {
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-bottom: 10px;

              span {
                font-size: 16px;
                font-family: Source Han Sans CN-Medium, Source Han Sans CN;
                font-weight: 500;
                color: #333333;
              }

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
              -webkit-line-clamp: 3;
              -webkit-box-orient: vertical;
            }

            .action {
              position: absolute;
              right: 20px;
              bottom: 15px;
              cursor: pointer;

              .icon-vg {
                &:hover {
                  color: @fontactive;
                }
              }
            }
          }
        }
      }

      .add-plugin-list {
        height: calc(100% - 50px);
        overflow-y: auto;

        &::-webkit-scrollbar {
          display: none;
        }

        .plugin {
          display: flex;
          width: 100%;
          height: 160px;
          background: #FFFFFF;
          border-radius: 8px 8px 8px 8px;
          margin-bottom: 20px;
          padding: 20px;

          img {
            width: 60px;
            height: 60px;
            border-radius: 10px;
            margin-right: 20px;
            flex-shrink: 0;
          }

          .right-info {
            display: flex;
            align-items: center;
            flex-grow: 1;

            .base-info {
              margin-right: 40px;

              .name {
                margin-bottom: 10px;

                span:first-child {
                  font-size: 16px;
                  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
                  font-weight: 500;
                  color: #333333;
                  line-height: 23px;
                  margin-right: 30px;
                }

                span:last-child {
                  font-size: 12px;
                  font-family: Source Han Sans CN-Normal, Source Han Sans CN;
                  font-weight: 350;
                  color: #999999;
                  line-height: 23px;
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
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom: 30px;
              }

              .detail-info-text {
                font-size: 12px;
                font-family: Source Han Sans CN-Normal, Source Han Sans CN;
                font-weight: 350;
                color: #2B53E5;
                line-height: 17px;
                text-decoration: underline;
                cursor: pointer;
              }
            }

            .btns {
              :deep(.el-button) {
                display: block;
                width: 120px;
                height: 36px;
                border-radius: 4px 4px 4px 4px;
                margin: 0 0 10px 0;
                font-size: 14px;
                font-family: Source Han Sans CN-Regular, Source Han Sans CN;
                font-weight: 400;

                &.el-button--primary {
                  &.is-plain {
                    color: @fontactive;
                    border-color: @fontactive;
                    background-color: transparent;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .delete-confirm {
    .confirm-text {
      font-size: 16px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #333333;
      line-height: 24px;
      margin-bottom: 30px;
      text-align: center;
    }

    .btns {
      text-align: center;

      .el-button {
        width: 80px;
        height: 40px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;

        &.el-button--primary.is-plain {
          background-color: transparent;
          border-color: @fontactive;
          color: @fontactive;
        }
      }
    }
  }
}

.plugin-popover {
  .opt {
    cursor: pointer;

    &:hover {
      color: @fontactive;
    }

    &:first-child {
      margin-bottom: 10px;
    }

    .iconfont {
      margin-right: 5px;
    }

    span {
      font-size: 12px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      line-height: 18px;
    }
  }
}
</style>