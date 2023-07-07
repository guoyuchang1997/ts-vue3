<!-- eslint-disable require-jsdoc -->
<template>
  <div class="visual-area">
    <div class="purchase">
      <div class="manager">
        <p class="title">大客户经理</p>
        <div class="content">
          <img src="@/assets/img/qr.png" class="qr" alt="" srcset="" />
          <p>扫微信客服咨询产品</p>
          <p>电话：19106778023（微信同号）</p>
        </div>
      </div>
      <div class="card">
        <img src="@/assets/img/expense/purchase/card_bg.png" class="card_bg" alt="" srcset="" />
        <div class="list">
          <p v-for="(item, index) in cardlist" :key="index">
            <span v-for="child in item" :key="child">{{ child }}</span>
          </p>
        </div>
      </div>
      <div class="max-height">
        <div class="item">
          <div class="item-num item-num-env">
            环境数量：<el-select
              v-model="environmentNum"
              filterable
              placeholder="请选择"
              style="width: 90px"
              class="slider-select"
              size="large"
            >
              <el-option v-for="item in envList" :key="item.num" :value="item.num"
                >{{ item.num }}
              </el-option> </el-select
            >&nbsp;&nbsp;个<span class="blue">约1.25元/窗口</span>
          </div>
          <customSlider
            :list="envList"
            :price="environmentPrice"
            key-name="ecosystem"
            :round-up="true"
            :number-result="environmentSlider"
            @change="sliderChange"
          ></customSlider>
        </div>
        <div class="item">
          <div class="item-num">
            额外成员数：<el-select
              v-model="memberNum"
              filterable
              placeholder="请选择"
              style="width: 90px"
              class="slider-select"
              size="large"
            >
              <el-option v-for="item in memberList" :key="item.num" :value="item.num"
                >{{ item.num }}
              </el-option> </el-select
            >&nbsp;&nbsp;人
            <span class="blue">+￥{{ memberUnit }}/人</span>
            <span class="red">
              <el-icon> <WarningFilled /> </el-icon>已使用的总用户数已超过你选的套餐成员数，请慎重下单
            </span>
          </div>
          <customSlider
            :list="memberList"
            :price="memberPrice"
            key-name="member"
            :number-result="memberNum"
            @change="sliderChange"
          ></customSlider>
        </div>
        <div class="item">
          <div class="item-num">
            时间：<el-select
              v-model="effectiveNum"
              filterable
              placeholder="请选择"
              style="width: 90px"
              class="slider-select"
              size="large"
            >
              <el-option v-for="item in effectiveList" :key="item.num" :value="item.num"
                >{{ item.num }}
              </el-option> </el-select
            >&nbsp;&nbsp;天
            <p v-if="newPrice !== originalPrice" class="limited-discount">
              <span class="tag">限时折扣</span>
              <span class="after">折后：￥{{ formatMoney(newPrice, 2) }}</span>
              <span class="original">原价：￥{{ formatMoney(originalPrice, 2) }}</span>
            </p>
          </div>
          <customSlider
            :list="effectiveList"
            key-name="effective"
            :round-up="true"
            :price="0"
            :tooltip="false"
            :number-result="effectiveNum"
            @change="sliderChange"
          ></customSlider>
        </div>
      </div>
      <div class="footer">
        <div v-if="userMeal.validityPeriod !== -404 && userMeal.validityPeriod !== -1" class="num_info">
          <span class="title"> 原套餐信息：</span>
          <div class="right">
            <div class="text">浏览器环境数：{{ userMeal.environment_number }}</div>
            <div class="text"
              >额外成员数：{{ userMeal.member_number ? userMeal.member_number - 1 : userMeal.member_number }}
            </div>
            <div class="text">套餐价格：¥{{ formatMoney(userMeal.payable_amount, 2) }}</div>
            <div class="text">
              到期时间：{{ userMeal.end_time }}
              <span v-if="userMeal.validityPeriod === 0" class="timi">(不足一天)</span>
              <span v-else-if="userMeal.validityPeriod === -1" class="timi">已过期</span>
              <span v-else class="timi">(剩余{{ userMeal.validityPeriod }}天)</span>
            </div>
            <p class="text old-price">原套餐抵扣金额：¥{{ formatMoney(oldPrice, 2) }}（套餐总价/总天数*剩余天数）</p>
            <p class="text renew" @click="renewDialog = true">去续费</p>
          </div>
        </div>
        <!--付款-->
        <div class="topay">
          <!-- 支付方式 -->
          <div class="settlement-bottom">
            <span class="title">支付方式：</span>
            <ul>
              <li class="active" @click="changePayment(1)">
                <div class="item-l">
                  <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
                  <div class="notSelect"></div>
                </div>
                <div class="item-r">
                  <img src="@/assets/img/payType/icon-alipay.webp" />
                  <div>
                    <p class="text1">支付宝</p>
                    <p class="text2">ALIPAY</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-l">
                  <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
                  <div class="notSelect"></div>
                </div>
                <div class="item-r">
                  <img src="@/assets/img/payType/icon-weChatPay.webp" />
                  <div>
                    <p class="text1">微信</p>
                    <p class="text2">WeChatPay</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="item-l">
                  <img class="select" src="@/assets/img/c-payment/icon-select.webp" />
                  <div class="notSelect"></div>
                </div>
                <div class="item-r">
                  <span class="text1">账号云币支付</span>
                  <span class="num">（我的云币：3000.00）</span>
                  <el-icon>
                    <Refresh />
                  </el-icon>
                  <el-button type="info" @click="openTopup">充值</el-button>
                </div>
              </li>
            </ul>
          </div>
          <!--付款-->
          <div class="pay-num">
            <span class="label">应付金额：</span>
            <span class="red">¥{{ formatMoney(totalPrice, 2) }}</span>
            <span class="effective">/{{ effectiveNum }}天</span>
            <el-tooltip class="box-item" popper-class="meal-popper-class" effect="dark" placement="top-end">
              <template #content>
                <p class="line"
                  >新套餐金额<span>￥{{ formatMoney(newPrice, 2) }}</span></p
                >
                <p class="line"
                  >原套餐抵扣金额<span>-￥{{ formatMoney(oldPrice, 2) }}</span></p
                >
                <p class="line"
                  >小计<span>￥{{ formatMoney(totalPrice, 2) }}</span></p
                >
                <p class="line">
                  <el-icon>
                    <WarningFilled />
                  </el-icon>
                  减配套餐系统不会退费请慎重操作
                </p>
              </template>
              <el-button class="pay-btn" @click="tierDown = true">提交支付</el-button>
            </el-tooltip>
          </div>
        </div>
        <p class="automatic-renew" @click="isRenew = !isRenew">
          <img v-if="isRenew" class="select" src="@/assets/img/c-payment/icon-select.webp" />
          <span v-else class="notSelect"></span><span>到期自动续费（请确认扣款账户余额充足）</span>
        </p>
      </div>
    </div>
    <!-- 充值模态 -->
    <el-dialog v-model="showTopup" title="充值" width="905px" destroy-on-close center align-center>
      <Payment @submit-payment="submitPayment" />
    </el-dialog>
    <!--续费-->
    <el-dialog v-model="renewDialog" title="续费套餐" width="905px" destroy-on-close center align-center>
      <mealRenew
        :user-meal="userMeal"
        :effective-list="effectiveList"
        @submit-payment="renewPayment"
        @open-topup="openTopup"
      />
    </el-dialog>
    <!--降级提示-->
    <!-- el-dialog-center -->
    <el-dialog v-model="tierDown" title="你确定要更改套餐吗？" width="450px" destroy-on-close center align-center>
      <div class="tier-down">
        <p class="text">降级后，系统不会退费，请慎重操作</p>
        <div class="btn">
          <el-button @click="tierDown = false">取消</el-button>
          <el-button type="primary" @click="tierDown = false">确定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
// import { message } from 'ant-design-vue'
import customSlider from '@/components/customSlider/index.vue'
import Payment from '@/components/Payment.vue'
import mealRenew from './mealRenew.vue'

/**
 * @description: 卡片数据
 */
const cardlist = ref([
  ['终身免费10个环境数量', '无限分享次数', '批量操作', '自有设备添加'],
  ['不限每天打开环境数量', '可设代理匹配维度', '免费RPA所有功能', '多设备同步账号数据'],
  ['不限每天导入环境数量', '恢复浏览器环境', '免费API所有功能', '支持多场景应用'],
])
/**
 * 处理按钮点击事件
 */
// const handleClick = () => {
//   // 在这里处理按钮点击事件
//   message.success('成功')
// }
/**
 * 数组字段定义
 */
interface ListItem {
  num: number
  price?: number
  expire?: string
  discount?: number
}
interface CombiningData {
  [key: number]: {
    price?: number
    discount?: number
    text?: string
  }
}
const envList: ListItem[] = [
  {
    num: 10,
    price: 0,
    expire: '',
  },
  {
    num: 50,
    price: 139,
    expire: '',
  },
  {
    num: 100,
    price: 199,
    expire: '',
  },
  {
    num: 150,
    price: 249,
    expire: '',
  },
  {
    num: 200,
    price: 299,
    expire: '',
  },
  {
    num: 300,
    price: 349,
    expire: '',
  },
  {
    num: 400,
    price: 399,
    expire: '',
  },
  {
    num: 500,
    price: 499,
    expire: '',
  },
  {
    num: 700,
    price: 549,
    expire: '',
  },
  {
    num: 800,
    price: 599,
    expire: '',
  },
  {
    num: 900,
    price: 649,
    expire: '',
  },
  {
    num: 1000,
    price: 699,
    expire: '',
  },
]
/**
 * environmentMax 环境数量最大值
 */
const environmentMax = ref(1000)
/**
 * environmentNum 环境数量
 */
const environmentNum = ref(10)
/**
 * environmentSlider 环境数量滑块
 */
const environmentSlider = ref(10)
/**
 * 环境价格
 */
const environmentPrice = ref(0)
/**
 * 环境数量活动价格
 */
const envtiveAText: CombiningData = {
  10: {
    price: 0,
  },
  50: {
    price: 139,
  },
  100: {
    price: 199,
  },
  150: {
    price: 249,
  },
  200: {
    price: 299,
  },
  300: {
    price: 349,
  },
  400: {
    price: 399,
  },
  500: {
    price: 499,
  },
  700: {
    price: 549,
  },
  800: {
    price: 599,
  },
  900: {
    price: 649,
  },
  1000: {
    price: 699,
  },
}

interface SliderValItem {
  numberResult: number
  scale: number
  key: string
}
/**
 * memberList 额外成员数量数组
 */
const memberList: ListItem[] = [
  {
    num: 10,
    expire: '',
  },
  {
    num: 250,
    expire: '',
  },
  {
    num: 500,
    expire: '',
  },

  {
    num: 750,
    expire: '',
  },
  {
    num: 1000,
    expire: '',
  },
]

/**
 * memberNum 额外成员数量
 */
const memberNum = ref(10)

/**
 * 额外成员价格
 */
const memberPrice = ref(0)

/**
 * 额外成员单价
 */
const memberUnit = ref(19)

/**
 * effectiveList 时间数量数组
 */
const effectiveList: ListItem[] = [
  { num: 30, discount: 75, expire: '2023-08-01' },
  { num: 90, discount: 70, expire: '2023-09-30' },
  { num: 180, discount: 60, expire: '2023-12-29' },
  { num: 360, discount: 50, expire: '2024-06-26' },
]

/**
 * effectiveNum 时间数量
 */
const effectiveNum = ref(30)

/**
 * 时间活动
 */
const effectiveAText: CombiningData = {
  '30': { text: '7.5折', discount: 75 },
  '90': { text: '7折', discount: 70 },
  '180': { text: '6折', discount: 60 },
  '360': { text: '5折', discount: 50 },
}

/**
 * change事件
 * @param val 回调参数
 */
const sliderChange = (val: SliderValItem) => {
  if (val.key === 'ecosystem') {
    environmentPrice.value = val.numberResult * 0.1
    if (val.scale > 100) {
      environmentNum.value = val.numberResult
      environmentSlider.value = environmentMax.value
    } else {
      environmentSlider.value = val.numberResult
      environmentNum.value = val.numberResult
    }
    environmentPrice.value = envtiveAText[val.numberResult]?.price || 0
  } else if (val.key === 'member') {
    memberNum.value = val.numberResult
    memberPrice.value = val.numberResult * memberUnit.value
  } else {
    effectiveNum.value = val.numberResult
  }
}
/**
 * 原套餐信息
 * @param end_time 套餐结束时间
 * @param free_status 不免费 1：免费
 * @param environment_number 环境数量 初始 10
 * @param effective_day 有效天数
 * @param member_number 额外成员数 初始 1
 * @param payable_amount 应付金额
 * @param validityPeriod 有效期
 */
type itemMeal = {
  end_time: string
  free_status: number
  environment_number: number
  member_number: number
  effective_day: number
  payable_amount: number
  validityPeriod: number
}
const userMeal: itemMeal = {
  free_status: 1,
  environment_number: 10,
  member_number: 5,
  effective_day: 30,
  end_time: '2023-07-31 15:36:21',
  payable_amount: 57,
  validityPeriod: 28,
}
/**
 * 格式化金额
 * @param val 金额
 * @param type 保留小数位数
 * @returns 格式化后的金额
 */
const formatMoney = (val: any, type?: number) => {
  const val1 = Number(val)
  if (typeof val1 !== 'number') {
    return val
  }
  const num = Math.floor(val * 100) / 100
  if (type) {
    return num.toFixed(type)
  }
  return num
}

/**
 * 原套餐抵扣金额
 */
const oldPrice = ref(0)

/**
 * 支付方式
 */
const paymentType = ref(0)
/**
 * 改变充值状态
 * @param item 支付方式
 */
const changePayment = (item: number) => {
  paymentType.value = item
}

/**
 * showTopup 是否显示充值弹窗
 */
const showTopup = ref(false)

/**
 * 充值弹窗回调
 */
const submitPayment = () => {
  showTopup.value = false
  //刷新云币
}
/**
 * 打开充值云币弹窗
 */
const openTopup = () => {
  console.log('打开充值云币弹窗')
  showTopup.value = true
}

/**
 * 计算总价totalPrice
 */
const totalPrice = computed(() => {
  return 123
})
/**
 * 新套餐价格
 */
const newPrice = computed(() => {
  return 120
})
/**
 * originalPrice 原价
 */
const originalPrice = computed(() => {
  return 140
})
/**
 * 自动续费
 */
const isRenew = ref(false)

/**
 * 续费
 */
const renewDialog = ref(false)
/**
 * 续费回调
 * @param val 回调参数
 */
const renewPayment = (val: boolean) => {
  renewDialog.value = false
  if (val) {
    // 刷新当前套餐信息
    //刷新云币
  }
}
/**
 * 套餐降级提示
 */
const tierDown = ref(false)
</script>

<style scoped lang="less">
.visual-area {
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 0 20px;

  .purchase {
    min-width: 1400px;
    position: relative;
    height: 100%;

    //右侧大客户经理
    .manager {
      position: absolute;
      top: 0;
      right: 0;
      width: 270px;
      background: #ffffff;
      box-shadow: 0px 0px 10px 0px rgba(165, 165, 165, 0.5);
      border-radius: 10px;
      overflow: hidden;
      z-index: 9;

      .title {
        height: 55px;
        background: #5f81ff;
        line-height: 55px;
        font-size: 20px;
        font-weight: 700;
        text-align: center;
        color: #ffffff;
      }

      .content {
        padding: 15px 0 18px;

        .qr {
          width: 130px;
          display: block;
          margin: 0 auto;
          box-shadow: 0px 0px 10px 0px rgba(165, 165, 165, 0.2);
        }

        p {
          margin-top: 9px;
          text-align: center;
          font-weight: 350;
          @include font_color();
          font-size: 14px;
        }
      }
    }

    .card {
      width: 57.6%;
      min-width: 848px;
      border-radius: 16px;
      overflow: hidden;
      display: grid;
      grid-template-rows: 1fr 1fr;
      box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);

      .card_bg {
        width: 100%;
        height: auto;
      }

      .list {
        display: grid;
        align-content: space-evenly;

        p {
          display: flex;
          width: 100%;
        }

        span {
          line-height: 18px;
          width: 25%;
          padding-left: 50px;
          font-size: 14px;
          background: url('@/assets/img/expense/purchase/xuanze.png') no-repeat 20px center;
          background-size: 18px 18px;
        }
      }
    }

    .max-height {
      margin-top: 25px;
      height: calc(100% - 460px);
      overflow-y: auto;

      .item {
        padding-bottom: 15px;
        width: 76%;

        .item-num {
          display: flex;
          align-items: center;
          margin-bottom: 8px;

          .blue {
            color: @fontcolor;
            margin: 0 20px;
          }

          .red {
            color: @cred;
            display: flex;
            align-items: center;

            .el-icon {
              margin-right: 6px;
            }
          }
          .limited-discount {
            display: flex;
            align-items: center;
            padding-left: 20px;
            font-size: 14px;

            .tag {
              height: 24px;
              line-height: 24px;
              background: linear-gradient(181deg, #f9e7c1 0%, #ceae73 100%);
              font-family: Source Han Sans CN-Medium, Source Han Sans CN;
              font-weight: 500;
              color: #7e6242;
              padding: 0 12px;
              border-radius: 4px;
            }

            .after {
              margin: 0 10px;
            }

            .original {
              color: #999999;
              font-size: 12px;
              text-decoration: line-through;
            }
          }
        }

        .item-num-env {
          margin-bottom: 25px;
          position: relative;

          &::after {
            content: '';
            width: 37px;
            height: 15px;
            background: url('@/assets/img/expense/purchase/free.png') no-repeat center;
            background-size: 100% 100%;
            position: absolute;
            left: 0;
            bottom: -22px;
          }
        }
      }
    }
  }

  .footer {
    width: calc(100% + 40px);
    position: absolute;
    bottom: 0;
    left: -20px;
    padding-bottom: 10px;

    .num_info {
      display: flex;
      background: linear-gradient(180deg, #e6d0b1 5%, #fff7ed 99%);
      border-radius: 16px 16px 0px 0px;
      font-size: 14px;

      padding: 15px 20px;

      .title {
        font-family: Source Han Sans CN-Bold, Source Han Sans CN;
        font-weight: 700;
      }

      .right {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        flex: 1;
        line-height: 20px;

        .text {
          margin-right: 30px;

          .timi {
            color: @fontcolor;
          }
        }

        .text.old-price {
          color: #666666;
          font-size: 12px;
          margin-left: 10px;
        }

        .renew {
          color: @fontcolor;
          // text-decoration: underline;
          border-bottom: 1px solid @fontcolor;
          box-sizing: border-box;
          line-height: 19px;
          cursor: pointer;
        }
      }
    }

    .topay {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .settlement-bottom {
        display: flex;
        align-items: center;
        margin-top: 10px;
        padding: 0 20px;

        .title {
          font-weight: 700;
          font-size: 14px;
        }

        span {
          font-size: 16px;
          font-weight: 400;
          color: #3d3d3d;
          line-height: 24px;
        }

        ul {
          display: flex;

          li {
            display: flex;
            min-width: 180px;
            height: 56px;
            border-radius: 8px;
            padding: 0 15px;
            background: #f8faff;
            border: 1px solid #f8faff;
            cursor: pointer;

            &.active {
              border-color: #2b53e5;

              .item-l {
                .select {
                  display: block;
                }

                .notSelect {
                  display: none;
                }
              }
            }

            .item-l {
              display: flex;
              align-items: center;
              margin-right: 10px;

              img {
                width: 16px;
                height: 16px;
              }

              .select {
                display: none;
              }

              .notSelect {
                display: block;
                width: 16px;
                height: 16px;
                border: 1px solid rgba(43, 83, 229, 0.3);
                border-radius: 4px;
              }
            }

            .item-r {
              display: flex;
              align-items: center;

              img {
                width: 30px;
                height: 30px;
                margin-right: 10px;
                object-fit: contain;
              }

              // 选择第一个p
              .text1 {
                font-size: 14px;
                font-weight: 500;
                color: #333333;
                line-height: 21px;
              }

              // 选择第二个p
              .text2 {
                font-size: 12px;
                font-weight: 400;
                color: #666666;
              }

              .num {
                font-size: 14px;
                color: #666666;
              }

              .el-icon {
                color: @fontcolor;
                margin-right: 33px;
              }

              .el-button {
                --el-button-text-color: #333333;
                --el-button-hover-text-color: #333333;
                --el-button-active-text-color: #333333;
                --el-button-bg-color: #e4edff;
                --el-button-hover-bg-color: #e4edff;
                --el-button-active-bg-color: #e4edff;
              }

              .el-button:focus,
              .el-button:hover,
              .el-button:active {
                border: none;
              }
            }

            & + li {
              margin-left: 10px;
            }
          }
        }
      }

      .pay-num {
        display: flex;
        align-items: center;
        padding-top: 10px;

        .label {
          font-size: 20px;
          font-family: Source Han Sans CN-Medium, Source Han Sans CN;
          font-weight: 500;
          color: #333333;
          line-height: 24px;
        }

        .red {
          font-size: 20px;
          font-family: Source Han Sans CN-Bold, Source Han Sans CN;
          font-weight: 700;
          color: #ff6a01;
          line-height: 30px;
        }

        .effective {
          font-size: 12px;
          font-family: Source Han Sans CN-Regular, Source Han Sans CN;
          font-weight: 400;
          color: #666666;
          line-height: 22px;
          padding-top: 4px;
          margin-right: 10px;
        }

        .pay-btn {
          width: 160px;
          height: 50px;
          background: #2b53e5;
          border-radius: 8px;
          color: #fff;
          font-size: 16px;
        }
      }
    }

    .automatic-renew {
      display: flex;
      align-items: center;
      width: 300px;
      margin-top: 10px;
      margin-left: 20px;
      cursor: pointer;

      .notSelect {
        display: block;
        width: 16px;
        height: 16px;
        border: 1px solid rgba(43, 83, 229, 0.3);
        border-radius: 4px;
        margin-right: 4px;
      }

      .select {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }
    }
  }

  .tier-down {
    .text {
      font-size: 16px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #999999;
      line-height: 23px;
      text-align: center;
      margin-top: 15px;
      margin-bottom: 30px;
    }

    .btn {
      display: flex;
      justify-content: center;
      padding-bottom: 20px;

      .el-button {
        width: 140px;
        height: 48px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid #2b53e5;
        font-size: 16px;

        &:first-of-type {
          color: #2b53e5;
        }
      }

      .el-button + .el-button {
        margin-left: 20px;
      }
    }
  }
}
</style>

<style lang="less">
.meal-popper-class {
  .el-popper__arrow {
    left: 40px !important;
  }

  .line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    font-size: 12px;
    line-height: 17px;

    + .line {
      margin-top: 10px;
    }

    &:last-of-type {
      justify-content: flex-start;

      .el-icon {
        margin-right: 5px;
        font-size: 12px;
        //旋转90度
        transform: rotate(180deg);
      }
    }
  }
}
</style>
