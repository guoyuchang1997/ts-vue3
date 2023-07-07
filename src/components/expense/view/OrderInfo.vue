<script lang="ts" setup>
import { ref } from 'vue'

const emits = defineEmits(['change'])

const coupon = ref(1) // 优惠券
const payway = ref(1) // 支付方式
const visible = ref(false) // 优惠券弹窗
const paySuccessVisible = ref(false) // 支付成功

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
const handleClickRecharge = () => {
  emits('change')
}
</script>

<template>
  <div class="order-info">
    <div class="title block ml15 mb20">订单信息</div>
    <div class="step">
      <span>购买代理<i class="iconfont icon-you"></i></span>
      <span>订单信息</span>
    </div>
    <!-- 设备信息 -->
    <div class="device-table">
      <div class="table-header">
        <el-row>
          <el-col :span="2">序号</el-col>
          <el-col :span="10">配置详情</el-col>
          <el-col :span="2">数量</el-col>
          <el-col :span="2">时长</el-col>
          <el-col :span="2">单价</el-col>
          <el-col :span="2">总价</el-col>
          <el-col :span="4">优惠券</el-col>
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
          <el-col :span="2" class="custom-col total-price">￥1000</el-col>
          <el-col :span="4" class="custom-col">
            <el-select v-model="coupon" class="m-2" placeholder="请选择" size="small" suffix-icon="CaretBottom">
              <el-option :value="1" label="满200减20"/>
              <el-option :value="2" label="满300减30"/>
              <el-option :value="3" label="满400减40"/>
              <el-option :value="4" label="满500减50"/>
            </el-select>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 优惠券列表 -->
    <div class="coupon-wrapper">
      <div class="title">优惠券<span>共<i>2</i>张</span></div>
      <ul class="list">
        <li class="item">
          <div class="heade">
            <span>¥20</span>
            优惠券名称
          </div>
          <div class="desc"> 限新购数量为1个、时长为1个月的任意设备 使用；不与其它优惠券叠加使用；可...</div>
          <div class="validity-period">有效期至：2022-12-30 09:45:00</div>
        </li>
        <li class="item">
          <div class="heade">
            <span>¥20</span>
            优惠券名称
          </div>
          <div class="desc"> 限新购数量为1个、时长为1个月的任意设备 使用；不与其它优惠券叠加使用；可...</div>
          <div class="validity-period">有效期至：2022-12-30 09:45:00</div>
        </li>
      </ul>
      <div class="use-guide">
        <p>优惠券请在使用期限内使用，过期删除后不可恢复。</p>
        <p>若订单使用了优惠券，但未支付成功，系统会将此券退还。</p>
        <p>优惠券使用最终解释权归云登录浏览器所有。</p>
      </div>
    </div>
    <!-- 支付方式 -->
    <div class="pay-way-wrapper">
      <div class="title">支付方式</div>
      <div class="opt">
        <div class="label-wrapper">应付金额：</div>
        <div class="amount"> ¥ 58<span>（订单总额：¥78.00 已优惠：-¥20.00）</span></div>
      </div>
      <div class="line"></div>
      <div class="opt" style="margin-bottom: 30px">
        <div class="label-wrapper">支付方式：</div>
        <div class="pay-way-list">
          <!-- 支付宝 -->
          <div :class="['pay', payway === 1 ? 'is-select' : '']" @click="handChangePayway(1)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png"/>
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/alipay.png"/>
            <div class="name">
              <p>支付宝</p>
              <p>ALIPAY</p>
            </div>
          </div>
          <!-- 微信 -->
          <div :class="['pay', payway === 2 ? 'is-select' : '']" @click="handChangePayway(2)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png"/>
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/weixin.png"/>
            <div class="name">
              <p>微信支付</p>
              <p>WeChat Pay</p>
            </div>
          </div>
          <!-- 数字货币 -->
          <div :class="['pay', payway === 3 ? 'is-select' : '']" @click="handChangePayway(3)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png"/>
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/shuzihuobi.png"/>
            <div class="name">
              <p>数字货币</p>
              <p>Digital currency</p>
            </div>
          </div>
          <!-- 对公转账 -->
          <div :class="['pay', payway === 4 ? 'is-select' : '']" @click="handChangePayway(4)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png"/>
            </div>
            <img alt="" class="logo" src="@/assets/img/expense/duigong.png"/>
            <div class="name">
              <p>对公转账</p>
              <p>Public transfer</p>
            </div>
          </div>
          <!-- 云币支付 -->
          <div :class="['pay', payway === 5 ? 'is-select' : '']" @click="handChangePayway(5)">
            <div class="radio-wrapper">
              <div class="radio"></div>
              <img alt="" class="selected" src="@/assets/img/expense/xuanzhong.png"/>
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
      <button class="submit-btn" @click="paySuccessVisible = true">支付订单</button>
    </div>
    <!-- 支付弹窗 -->
    <el-dialog v-model="visible" :show-close="false" :title="null" class="pay-dialog" width="652">
      <template #header>
        <div class="d-title">支付订单</div>
        <div class="close" @click="visible = false">
          <!-- <i class="iconfont icon-close2"></i>-->
          <span class="cancel-text">取消订单</span>
        </div>
      </template>
      <template #default>
        <div class="auto-cancel">
          <i class="iconfont icon-a-gantanhao1"></i>
          <p>
            订单将在<span>30:25</span>后订单将自动取消，请在订单取消完成前完成支付！<br/>
            <p style="margin-top: 10px">若订单中使用了优惠券，订单取消后会原路返回您的账户中。</p>
          </p>
        </div>
        <div class="pay-info">
          <p class="need-text">需支付金额</p>
          <p class="need-price">￥58.00</p>
          <div class="QR-code"></div>
          <p class="scan-text">请打开支付宝扫一扫</p>
        </div>
      </template>
    </el-dialog>
    <!-- 支付成功 -->
    <el-dialog
      v-model="paySuccessVisible"
      :title="null"
      class="pay-success-dialog"
      width="652"
    >
      <div class="top">
        <img alt="" src="@/assets/img/expense/chengong.png" srcset="">
        <p>支付成功</p>
      </div>
      <div class="info-wrapper">
        <div class="railing"></div>
        <div class="info-box">
          <div class="content">
            <div class="item">
              <i class="iconfont icon-a-1"></i>
              <p>支付金额：<span>¥58.00</span></p>
            </div>
            <div class="item">
              <i class="iconfont icon-a-2"></i>
              <p>交易单号：23423446765623456</p>
            </div>
            <div class="item">
              <i class="iconfont icon-a-3"></i>
              <p>支付时间：2023-05-23 21:45:43</p>
            </div>
            <div class="item">
              <i class="iconfont icon-a-4"></i>
              <p>支付方式：<img alt="" src="@/assets/img/expense/alipay.png"/>支付宝</p>
            </div>
          </div>
        </div>
        <div class="footer">
          <button class="i-know" @click="paySuccessVisible = false">我知道了</button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="less" scoped>
.order-info {
  height: 100%;

  .title {
    font-size: 18px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 500;
    color: #333333;
    margin-bottom: 15px;
    position: relative;

    &.block::before {
      content: '';
      display: block;
      width: 5px;
      height: 15px;
      border-radius: 100px;
      background-color: #242af3;
      position: absolute;
      top: 50%;
      left: -15px;
      transform: translateY(-50%);
    }

    &.ml15 {
      margin-left: 15px;
    }

    &.mb20 {
      margin-bottom: 20px;
    }

    span {
      font-size: 14px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #999999;
      margin-left: 10px;

      i {
        color: #ff6a01;
      }
    }
  }

  .step {
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #999999;
    line-height: 24px;
    margin-bottom: 15px;

    span:last-child {
      color: #3d3d3d;
    }

    .iconfont {
      font-size: 12px;
      margin: 0 5px;
    }
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

  .coupon-wrapper {
    .list {
      display: flex;
      gap: 0 20px;
      margin-bottom: 15px;

      .item {
        width: 260px;
        height: 126px;
        background-image: url('@/assets/img/expense/coupon_bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 3px 10px 5px 20px;
        color: #ffffff;

        .heade {
          font-size: 16px;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: 700;
          line-height: 23px;
          display: flex;
          align-items: center;

          span {
            font-size: 32px;
            font-family: DIN Black-Regular, DIN Black;
            font-weight: 900;
            line-height: 39px;
            margin-right: 10px;
          }
        }

        .desc {
          font-size: 12px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          line-height: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          margin-bottom: 10px;
        }

        .validity-period {
          font-size: 12px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #ffffff;
          line-height: 21px;
          border-top: 1px dashed #ffffff;
          padding-top: 6px;
        }
      }
    }

    .use-guide {
      margin-bottom: 20px;

      p {
        position: relative;
        margin-left: 10px;
        font-size: 14px;
        font-family: Source Han Sans CN-Regular, Source Han Sans CN;
        font-weight: 400;
        color: #666666;
        line-height: 21px;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }

        &::before {
          content: '';
          width: 5px;
          height: 6px;
          border-radius: 50%;
          position: absolute;
          left: -10px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #2b53e5;
        }
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

    .line {
      width: 100%;
      height: 1px;
      background-color: #eeeeee;
      margin: 20px 0;
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

  :deep(.el-dialog) {
    .el-dialog__header {
      display: flex;
      justify-content: space-between;

      .d-title {
        font-size: 24px;
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: 700;
        color: #3d3d3d;
        margin-bottom: 25px;
      }

      .icon-close2 {
        font-size: 20px;
        font-weight: bold;
      }

      .cancel-text {
        font-size: 18px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #3053e4;
        cursor: pointer;
      }

      .el-dialog__headerbtn {
        font-size: 20px;
        font-weight: bold;

        .el-dialog__close {
          color: #333333;
        }
      }
    }

    .el-dialog__body {
      .auto-cancel {
        //height: 80px;
        background: #fff7ed;
        border-radius: 4px 4px 4px 4px;
        border: 1px solid #ffcc8e;
        padding: 15px;
        display: flex;
        margin-bottom: 24px;

        .icon-a-gantanhao1 {
          color: #f29e38;
          margin-right: 10px;
        }

        p {
          font-size: 16px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          line-height: 20px;

          span {
            color: #f29e38;
          }
        }
      }

      .pay-info {
        text-align: center;

        .need-text {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #999999;
          line-height: 20px;
          margin-bottom: 10px;
        }

        .need-price {
          font-size: 30px;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: 700;
          color: #F29E38;
          line-height: 27px;
          margin-bottom: 20px;
        }

        .QR-code {
          width: 200px;
          height: 200px;
          margin: 0 auto 20px;
          background-color: #00b9a0;
        }

        .scan-text {
          font-size: 14px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #333333;
          line-height: 18px;
        }
      }
    }

    &.pay-success-dialog {
      padding: 0 !important;

      .top {
        height: 200px;
        background: linear-gradient(180deg, #D3EAFD 0%, #FFFFFF 100%);
        border-radius: 16px;
        display: flex;
        gap: 0 28px;
        justify-content: center;
        align-items: center;

        img {
          width: 170px;
          height: 116px;
        }

        p {
          font-size: 36px;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: 700;
          color: #3D67FF;
          line-height: 36px;
        }
      }

      .info-wrapper {
        padding-top: 20px;

        .railing {
          width: 540px;
          height: 12px;
          margin: 0 auto;
          background: #6082FF;
          border-radius: 6px;
          position: relative;

          &::before {
            content: '';
            width: 520px;
            height: 5px;
            background: #3D67FF;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 5px;
          }
        }

        .info-box {
          width: 510px;
          height: 224px;
          margin: 0 auto 56px;
          background: #FFFFFF;
          box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.2);
          border-radius: 0px 0px 0px 0px;
          margin-top: -6px;
          position: relative;
          padding: 40px 20px 0 20px;

          .content {
            width: 100%;
            border-top: 1px dashed #dddddd;
            padding-top: 19px;
            padding-left: 5px;

            .item {
              display: flex;
              align-items: center;
              margin-bottom: 16px;

              .iconfont {
                margin-right: 8px;
              }

              .icon-a-1 {
                color: #FF9900;
              }

              .icon-a-2 {
                color: #85B7FF;
              }

              .icon-a-3 {
                color: #02BDF1;
              }

              .icon-a-4 {
                color: #21C161;
              }

              p {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular, Source Han Sans CN;
                font-weight: 400;
                color: #333333;

                span {
                  font-size: 16px;
                  font-family: Source Han Sans CN-Medium, Source Han Sans CN;
                  font-weight: 500;
                  color: #E70000;
                }

                img {
                  width: 16px;
                  height: 16px;
                  margin-right: 6px;
                }
              }
            }
          }
        }

        .footer {
          text-align: right;

          .i-know {
            border: 0;
            outline: none;
            width: 100px;
            height: 40px;
            background: #2B53E5;
            border-radius: 8px 8px 8px 8px;
            font-size: 16px;
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            margin-right: 20px;
            margin-bottom: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
