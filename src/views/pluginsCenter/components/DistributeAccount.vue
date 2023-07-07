<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { usePluginDistributeStore } from "@/store/plugins";

const pluginsStore = usePluginDistributeStore();

const { onSearch } = pluginsStore
const { visible, keyword, isSelectAll, selectedAccountList } = storeToRefs(pluginsStore)
</script>

<template>
  <el-dialog
    v-model="visible"
    :title="null"
    class="distribution-account"
    width="800px"
  >
    <template #header>
      <div class="title">
        <div class="custom-title">分配账号</div>
        <span class="tips">请选择需要分配的账号或者电商平台</span>
      </div>
    </template>
    <template #default>
      <div class="dialog-content">
        <div class="left-all-account">
          <!-- 关键词搜索 -->
          <div class="search-box">
            <el-input v-model="keyword" placeholder="搜索账号"/>
            <el-button type="primary" @click="onSearch">
              <i class="iconfont icon-sousuo"></i>
            </el-button>
          </div>
          <!-- 账号列表 -->
          <div class="account-list-wrapper">
            <div class="select-all">
              <el-checkbox v-model="isSelectAll">全选</el-checkbox>
            </div>
            <ul class="account-list">
              <li class="account">
                <div class="parent">
                  <el-checkbox>工作台</el-checkbox>
                </div>
              </li>
              <!-- class: is-expand -->
              <li v-for="i in 20" :key="i" class="account">
                <div class="parent">
                  <el-checkbox>
                    <img alt="" class="logo" src="https://file.yunlogin.com/images/20230222/cqp0m5hw8x7sz0ivrj.png">
                    亚马逊
                  </el-checkbox>
                  <i class="iconfont icon-you"></i>
                </div>
                <ul class="child-list">
                  <!-- class: is-select -->
                  <!-- <li class="child">-->
                  <!--   <span>亚马逊-01</span>-->
                  <!--   <i class="iconfont icon-gou1"></i>-->
                  <!-- </li>-->
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div class="right-selected-account">
          <div class="header">
            <div class="count">已选择账号（{{ selectedAccountList.length }}）</div>
            <el-button class="clear-btn" plain type="primary">清空已选</el-button>
          </div>
          <div class="content">
            <div v-if="selectedAccountList.length !== 0" class="no-data">
              <img alt="" src="@/assets/img/plugin/no_account.png">
              <span>暂无数据</span>
            </div>
            <div v-else class="selected-list">
              <div v-for="i in 100" :key="i" class="account">
                <span>亚马逊</span>
                <el-icon color="#2B53E5">
                  <Close/>
                </el-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <el-button plain type="primary">跳过分配</el-button>
        <el-button type="primary">确定分配</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.distribution-account {
  .title {
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 14px;
    margin-bottom: 15px;

    .custom-title {
      font-size: 18px;
      color: #3d3d3d;
      font-family: Source Han Sans CN-Medium, Source Han Sans CN;
      font-weight: 500;
    }

    span {
      font-size: 14px;
      font-weight: 400;
      color: #999;
      font-family: "Source Han Sans CN-Normal";
      margin-left: 10px;
    }
  }

  .dialog-content {
    display: flex;
    gap: 0 20px;
    margin-bottom: 10px;

    .left-all-account {
      width: 320px;
      box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
      border-radius: 8px 8px 8px 8px;
      background-color: @cbcolor;
      padding: 20px 0 20px 20px;

      .search-box {
        width: 280px;
        border: 1px solid #95A9F1;
        border-radius: 16px;
        height: 34px;
        position: relative;
        margin-bottom: 10px;

        :deep(.el-input) {
          .el-input__wrapper {
            border-radius: 16px;
            box-shadow: none;
          }
        }

        :deep(.el-button) {
          border-radius: 16px;
          width: 48px;
          border: 1px solid var(--el-color-primary);
          position: absolute;
          top: 0;
          right: -1px;
        }
      }

      .account-list-wrapper {
        padding-right: 5px;

        :deep(.el-checkbox__inner) {
          border-radius: 4px;
        }

        :deep(.el-checkbox__label) {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          display: flex;
          align-items: center;
        }

        .select-all {
          height: 40px;
          display: flex;
          align-items: center;
        }

        .account-list {
          height: 420px;
          overflow: hidden auto;

          &::-webkit-scrollbar {
            width: 4px;
          }

          &::-webkit-scrollbar-thumb {
            border-radius: 2px;
            background-color: rgba(43, 83, 229, .2);
          }

          &::-webkit-scrollbar-track {
            background: rgba(43, 83, 229, .05);
            border-radius: 2px;
          }

          .account {
            padding-right: 10px;

            &.is-expand {
              .parent {
                :deep(.el-checkbox__label) {
                  color: #2B53E5;
                }

                .icon-you {
                  transform: rotate(90deg);
                  color: #2B53E5;
                }
              }
            }

            .parent {
              height: 40px;
              display: flex;
              align-items: center;
              justify-content: space-between;

              .logo {
                width: 16px;
                height: 16px;
                margin: 0 10px 0 2px;
              }

              .icon-you {
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                transition: all 0.3s ease-in-out;
              }
            }

            .child-list {
              margin-left: 45px;

              .child {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 30px;
                padding: 0 10px;
                font-size: 12px;
                font-family: Source Han Sans CN-Regular, Source Han Sans CN;
                font-weight: 400;
                color: #333333;
                cursor: pointer;
                margin-bottom: 5px;

                .icon-gou1 {
                  font-size: 10px;
                  opacity: 0;
                  transition: all 0.3s ease-in-out;
                }

                &.is-select {
                  color: #2B53E5;
                  background: #F4F6FD;
                  border-radius: 4px 4px 4px 4px;

                  .icon-gou1 {
                    opacity: 1;
                  }
                }
              }
            }
          }
        }
      }
    }

    .right-selected-account {
      width: 420px;
      background-color: @cbcolor;
      box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
      border-radius: 8px 8px 8px 8px;
      padding: 20px;

      .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        .count {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          line-height: 30px
        }

        .clear-btn {
          width: 80px;
          height: 30px;
          background: rgba(43, 83, 229, 0.1);
          border-radius: 4px 4px 4px 4px;
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #2B53E5;
          border-color: transparent;
        }
      }

      .content {
        width: 380px;
        height: 465px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid #DDDDDD;
        padding: 20px 0 20px 20px;
        overflow: hidden auto;

        &::-webkit-scrollbar {
          width: 4px;
        }

        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          background-color: rgba(43, 83, 229, .2);
        }

        &::-webkit-scrollbar-track {
          background: rgba(43, 83, 229, .05);
          border-radius: 2px;
        }

        .no-data {
          width: 100%;
          height: 100%;
          display: flex;
          padding-top: 110px;
          flex-direction: column;
          align-items: center;


          img {
            width: 156px;
            margin-bottom: 10px;
          }

          span {
            font-size: 14px;
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
          }
        }

        .selected-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;

          .account {
            padding: 6px 10px;
            background: rgba(43, 83, 229, 0.05);
            border-radius: 4px 4px 4px 4px;
            width: fit-content;
            font-size: 12px;
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;
            color: #2B53E5;
            display: flex;
            align-items: center;

            span {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }

  .footer {
    :deep(.el-button) {
      width: 96px;
      height: 40px;
      box-shadow: 0px 0px 20px 0px rgba(43, 83, 229, 0.2);
      border-radius: 8px 8px 8px 8px;
      border: 1px solid #2B53E5;
      font-size: 16px;
      font-weight: 400;

      &.el-button--primary.is-plain {
        background: transparent;
        color: @fontactive;
      }
    }
  }
}
</style>