<template>
  <div class="device-info">
    <h3>续费设备信息</h3>
    <div class="device-table">
      <div class="table-header">
        <el-row>
          <el-col :span="2">序号</el-col>
          <el-col :span="10">配置详情</el-col>
          <el-col :span="2">数量</el-col>
          <el-col :span="2">时长</el-col>
          <el-col :span="2">单价</el-col>
          <el-col :span="6">总价</el-col>
        </el-row>
      </div>
      <div class="table-body">
        <el-row class="custom-row">
          <el-col :span="2" class="custom-col">1</el-col>
          <el-col :span="10" class="custom-col">
            <div class="config-det">
              <el-row>
                <el-col :span="12">
                  <div class="info-item"><span>网络类型：</span>云平台</div>
                </el-col>
                <el-col :span="12">
                  <div class="info-item"><span>网络属性：</span>静态</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <div class="info-item"><span>机型：</span>云主机-标准型</div>
                </el-col>
                <el-col :span="12">
                  <div class="info-item"><span>地域：</span>港澳台，中国香港</div>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
                  <div class="info-item"><span>可否远程：</span>不可远程</div>
                </el-col>
                <el-col :span="12">
                  <div class="info-item"><span>套餐：</span>阿里云</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="2" class="custom-col">1</el-col>
          <el-col :span="2" class="custom-col">1年</el-col>
          <el-col :span="2" class="custom-col">￥1000</el-col>
          <el-col :span="6" class="custom-col total-price">￥1000</el-col>
        </el-row>
      </div>
    </div>
    <div class="will-expire-text">
      续费后到期时间：
      <span>2025年10月12日</span>
    </div>
  </div>
  <div class="payway">
    <div class="amount">
      应付金额：
      <span>¥78.00</span>
    </div>
    <div class="pay-way-wrapper">
      <div class="opt" style="margin-bottom: 30px">
        <div class="label-wrapper">支付方式：</div>
        <div class="pay-way-list">
          <!-- 支付宝 -->
          <div :class="['pay', payway === 1 ? 'is-select' : '']" @click="handChangePayway(1)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png" />
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/alipay.png" />
            <div class="name">
              <p>支付宝</p>
              <p>ALIPAY</p>
            </div>
          </div>
          <!-- 微信 -->
          <div :class="['pay', payway === 2 ? 'is-select' : '']" @click="handChangePayway(2)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png" />
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/weixin.png" />
            <div class="name">
              <p>微信支付</p>
              <p>WeChat Pay</p>
            </div>
          </div>
          <!-- 数字货币 -->
          <div :class="['pay', payway === 3 ? 'is-select' : '']" @click="handChangePayway(3)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png" />
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/shuzihuobi.png" />
            <div class="name">
              <p>数字货币</p>
              <p>Digital currency</p>
            </div>
          </div>
          <!-- 对公转账 -->
          <div :class="['pay', payway === 4 ? 'is-select' : '']" @click="handChangePayway(4)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png" />
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/duigong.png" />
            <div class="name">
              <p>对公转账</p>
              <p>Public transfer</p>
            </div>
          </div>
          <!-- 云币支付 -->
          <div :class="['pay', payway === 5 ? 'is-select' : '']" @click="handChangePayway(5)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png" />
            </div>
            <div class="name">
              <p style="margin-left: 10px">云币支付<span>（我的云币：300）</span></p>
            </div>
            <button class="btn" @click.stop="handleClickRecharge">充值</button>
          </div>
        </div>
      </div>
      <div class="opt" style="align-items: flex-start">
        <div class="label-wrapper">自动续费：</div>
        <div>
          <el-checkbox>设备到期自动续费（请确认扣款账户余额充足）</el-checkbox>
          <p class="tips">
            自动续费可手动取消，进入云登录浏览器客户端 - 设备管理 - <i class="iconfont icon-shezhi"></i> - 取消续费
          </p>
        </div>
      </div>
    </div>
    <!-- 提交按钮 -->
    <div class="submit">
      <button class="submit-btn">支付订单</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const payway = ref(1) // 支付方式

/**
 * 选择支付方式
 * @param {number} val 支付方式
 */
const handChangePayway = (val: number) => {
  payway.value = val
}

/**
 * 充值
 */
const handleClickRecharge = () => { }
</script>

<style scoped lang="less">
.device-info {
  padding: 20px;
  background-color: #ffffff;
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 700;
    color: #3D3D3D;
    margin-bottom: 10px;
  }

  .device-table {
    margin-bottom: 20px;

    .table-header {
      .el-row {
        .el-col {
          line-height: 31px;
          background: #f4f6fd;
          padding-left: 15px;
          font-size: 12px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #666666;
        }
      }
    }

    .table-body {
      border-bottom: 1px solid #eeeeee;
      padding: 20px 0;

      .custom-row {
        align-items: center;

        .custom-col {
          padding-left: 15px;

          &.total-price {
            font-size: 16px;
            font-family: Source Han Sans CN-Bold, Source Han Sans CN;
            font-weight: 700;
            color: #ff6a01;
          }

          .config-det {
            display: flex;
            flex-wrap: wrap;
            gap: 15px 0;

            .el-row {
              width: 100%;
            }

            .info-item {
              font-size: 14px;
              font-family: Source Han Sans CN-Regular, Source Han Sans CN;
              font-weight: 400;
              color: #333333;

              span {
                color: #9ba0b4;
              }
            }
          }

          :deep(.el-select) {
            width: 120px;
            border-radius: 12px;

            .el-input__wrapper {
              border-radius: 12px;
              box-shadow: 0 0 0 1px rgba(43, 83, 229, 0.5) inset;

              .el-input__inner {
                font-size: 12px;
                font-family: Source Han Sans CN-Regular, Source Han Sans CN;
                font-weight: 400;
                color: #333333;
              }
            }
          }
        }
      }
    }
  }

  .will-expire-text {
    font-size: 14px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #333333;

    span {
      color: #2B53E5;
    }
  }
}

.payway {
  padding: 20px;
  background-color: #ffffff;

  .amount {
    font-size: 16px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #333333;
    line-height: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid #eeeeee;

    span {
      color: #FF6A01;
    }
  }
}

.pay-way-wrapper {
  .opt {
    display: flex;
    align-items: center;

    .label-wrapper {
      font-size: 16px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #333333;
    }

    .amount {
      font-size: 20px;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: 700;
      color: #ff6a01;

      span {
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #999999;
      }
    }

    .pay-way-list {
      display: flex;
      gap: 0 20px;

      .pay {
        min-width: 180px;
        height: 57px;
        background: #ffffff;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid rgba(43, 83, 229, 0.3);
        padding-left: 15px;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

        &.is-select {
          border-color: #2b53e5;

          .selected {
            display: block !important;
          }

          .radio {
            display: none !important;
          }
        }

        .radio-wrapper {
          .radio {
            width: 16px;
            height: 17px;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid rgba(43, 83, 229, 0.3);
            cursor: pointer;
          }

          .selected {
            width: 16px;
            height: 17px;
            cursor: pointer;
            display: none;
          }
        }

        .logo {
          width: 30px;
          height: 30px;
          margin: 0 10px;
        }

        .name {
          p {
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;

            span {
              font-size: 14px;
              font-family: Source Han Sans CN-Regular, Source Han Sans CN;
              font-weight: 400;
              color: #999999;
            }
          }

          p:nth-child(1) {
            font-size: 14px;
            color: #333333;
          }

          p:nth-child(2) {
            font-size: 12px;
            color: #666666;
          }
        }

        .btn {
          width: 48px;
          height: 31px;
          background: rgba(43, 83, 229, 0.102);
          border-radius: 4px 4px 4px 4px;
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #2b53e5;
          border: 0;
          outline: none;
          margin-left: 10px;
          margin-right: 15px;
          cursor: pointer;
        }
      }
    }

    .el-checkbox {
      --el-checkbox-input-width: 16px;
      --el-checkbox-input-height: 16px;
      --el-checkbox-border-radius: 4px;
      --el-checkbox-input-border: 1px solid rgba(43, 83, 229, 0.3);
      height: 24px;
    }

    :deep(.el-checkbox__inner::after) {
      top: 2px;
      left: 5px;
    }

    .tips {
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      line-height: 18px;
      margin-left: 26px;
    }
  }
}

.submit {
  padding-top: 30px;

  .submit-btn {
    border: 0;
    outline: 0;
    width: 180px;
    height: 48px;
    background: #2d5aff;
    border-radius: 6px 6px 6px 6px;
    font-size: 16px;
    font-family: var(--font-family-Normal);
    font-weight: 350;
    color: #ffffff;
    cursor: pointer;
  }
}
</style>
