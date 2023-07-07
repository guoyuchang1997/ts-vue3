<script lang="ts" setup>
import { reactive, ref } from 'vue'

const emits = defineEmits(['change'])

const mockList = ref([
  {
    type: 1,
    name: '类型',
    children: [
      {
        value: 1,
        label: '云平台',
      },
      {
        value: 2,
        label: '小众',
      },
      {
        value: 3,
        label: '宽带',
      },
      {
        value: 4,
        label: '外地',
      },
    ],
  },
  {
    type: 2,
    name: '地址',
    children: [
      {
        value: 1,
        label: '港澳台',
        tag: 'hot',
      },
      {
        value: 2,
        label: '美国',
      },
      {
        value: 3,
        label: '中国大陆',
        tag: 'new',
      },
      {
        value: 4,
        label: '欧洲',
      },
      {
        value: 5,
        label: '亚洲',
        tag: 'hot',
      },
      {
        value: 6,
        label: '加拿大',
        tag: 'new',
      },
      {
        value: 7,
        label: '新加坡',
      },
    ],
  },
  {
    type: 3,
    name: '地区',
    children: [
      {
        value: 1,
        label: '北京',
        tag: 'new',
      },
      {
        value: 2,
        label: '上海',
        tag: 'new',
      },
      {
        value: 3,
        label: '深圳',
        tag: 'hot',
      },
      {
        value: 4,
        label: '广州',
        tag: 'hot',
      },
      {
        value: 5,
        label: '杭州',
        tag: 'new',
      },
      {
        value: 6,
        label: '成都',
        tag: 'hot',
      },
      {
        value: 7,
        label: '武汉',
      },
      {
        value: 8,
        label: '西安',
        tag: 'new',
      },
      {
        value: 9,
        label: '南京',
        tag: 'hot',
      },
      {
        value: 10,
        label: '天津',
      },
      {
        value: 11,
        label: '苏州',
        tag: 'hot',
      },
      {
        value: 12,
        label: '重庆',
      },
      {
        value: 13,
        label: '郑州',
        tag: 'new',
      },
      {
        value: 14,
        label: '长沙',
      },
      {
        value: 15,
        label: '青岛',
        tag: 'hot',
      },
      {
        value: 16,
        label: '沈阳',
      },
      {
        value: 17,
        label: '大连',
      },
      {
        value: 18,
        label: '厦门',
        tag: 'new',
      },
      {
        value: 19,
        label: '福州',
      },
      {
        value: 20,
        label: '无锡',
      },
      {
        value: 21,
        label: '合肥',
        tag: 'hot',
      },
      {
        value: 22,
        label: '济南',
      },
      {
        value: 23,
        label: '佛山',
      },
      {
        value: 24,
        label: '东莞',
      },
      {
        value: 25,
        label: '宁波',
        tag: 'hot',
      },
      {
        value: 26,
        label: '常州',
      },
      {
        value: 27,
        label: '南昌',
      },
      {
        value: 28,
        label: '温州',
        tag: 'new',
      },
      {
        value: 29,
        label: '石家庄',
      },
      {
        value: 30,
        label: '昆明',
        tag: 'new',
      },
      {
        value: 31,
        label: '南宁',
      },
      {
        value: 32,
        label: '哈尔滨',
        tag: 'hot',
      },
    ],
  },
]) // 代理区域
const packageList = ref([
  {
    val: 1,
    name: '阿里云',
    price: 79,
    oldPrice: 99,
    className: 'ali',
  },
  {
    val: 2,
    name: '腾讯云',
    price: 79,
    oldPrice: 99,
    className: 'tencent',
  },
  {
    val: 3,
    name: '亚马逊云',
    price: 79,
    oldPrice: 99,
    className: 'amazon',
  },
  {
    val: 4,
    name: '华为云',
    price: 79,
    oldPrice: 99,
    className: 'huawei',
  },
]) // 套餐
const durationList = ref([
  {
    val: 1,
    name: '一个月',
  },
  {
    val: 2,
    name: '三个月',
  },
  {
    val: 3,
    name: '六个月',
  },
  {
    val: 4,
    name: '十二个月',
  },
])
const currentHotProxy = ref<number>(1) // 当前热门代理
// 代理区域状态
const proxyAreaState = reactive({
  type: 1,
  city: 3,
  area: 1,
})
// 代理信息状态
const proxyInfoState = reactive({
  isRemote: 1,
  package: 1,
})
const durationState = ref(1) // 时长
const counterState = ref(1) // 数量
/**
 * 热门代理切换
 * @param {number} current 当前代理
 */
const handleHotProxyChange = (current: number) => {
  currentHotProxy.value = current
}

/**
 * 代理区域切换
 * @param {number} parent 当前代理类型
 * @param {number} current 当前代理值
 */
const handleProxyAreaChange = (parent: number, current: number) => {
  switch (parent) {
    case 1:
      proxyAreaState.type = current
      break
    case 2:
      proxyAreaState.city = current
      break
    default:
      proxyAreaState.area = current
      break
  }
}

/**
 * 代理信息切换
 * @param {number} remote 当前远程信息
 */
const handleProxyInfoChange = (remote: number) => {
  proxyInfoState.isRemote = remote
}

/**
 * 套餐切换
 * @param {number} val 当前套餐
 */
const handlePackageChange = (val: number) => {
  proxyInfoState.package = val
}

/**
 * 时长切换
 * @param {number} val 当前时长
 */
const handleDurationChange = (val: number) => {
  durationState.value = val
}

/**
 * 数量操作
 * @param {number} type 操作类型
 */
const handleCounterChange = (type: string) => {
  switch (type) {
    case 'add':
      if (counterState.value >= 10) return
      counterState.value += 1
      break
    case 'minus':
      if (counterState.value > 1) {
        counterState.value -= 1
      }
      break
    default:
      counterState.value = 1
      break
  }
}
/**
 * 数量输入
 */
const handleCounterInput = () => {
  counterState.value = counterState.value.replace(/[^\d]/g, '')
  if (counterState.value > 10) {
    counterState.value = 10
  }
}

/**
 * 提交订单
 */
const submitOrder = () => {
  emits('change')
}
</script>

<template>
  <div class="buy-proxy">
    <!-- 购买代理 -->
    <div class="proxy-box">
      <div class="title block gap">购买代理</div>
      <div class="purchase-notes-wrapper">
        <p class="notes">
          <span class="notes-text">设备购买须知</span>
          （请认真阅读设备购买须知，云登浏览器专业版提供的设备皆受国家网络监管，请合法合规使用）
        </p>
        <p style="font-size: 12px">
          1、云登浏览器专业版提供的国内/外设备，均受中国网络部门监管，您在使用过程中应遵守中国大陆地区的相关法律法规，不得访问国家明令禁止登录的敏感网站，我们不提供一切翻墙服务。<br />
          2、设备购买/续费后无法退换，请根据实际需求场景进行选择。
        </p>
        <div class="see-more-notes">查看完整版购买须知 >></div>
      </div>
    </div>
    <!-- 热门代理 -->
    <div class="proxy-box">
      <div class="title">
        <img alt="" class="icon" src="@/assets/img/expense/hot.png" />
        热门代理
      </div>
      <ul class="proxy-list">
        <li :class="['item', currentHotProxy === 1 ? 'is-active' : '']" @click="handleHotProxyChange(1)">
          <i class="iconfont icon-gou1"></i>
          <div class="proxy-info">
            <div class="base-info">
              <img alt="" src="@/assets/img/expense/shebei1.png" />
              <div class="name">
                <p>云平台-阿里云</p>
                <p>港澳台-中国香港</p>
              </div>
            </div>
            <div class="price"><span>￥</span>79.00</div>
          </div>
          <div class="desc">支持视频功能，为每一个账号提供独一无二的网络环境，已安全守护222万跨境账号</div>
        </li>
        <li :class="['item', currentHotProxy === 2 ? 'is-active' : '']" @click="handleHotProxyChange(2)">
          <i class="iconfont icon-gou1"></i>
          <div class="proxy-info">
            <div class="base-info">
              <img alt="" src="@/assets/img/expense/shebei1.png" />
              <div class="name">
                <p>云平台-阿里云</p>
                <p>港澳台-中国香港</p>
              </div>
            </div>
            <div class="price"><span>￥</span>79.00</div>
          </div>
          <div class="desc">支持视频功能，为每一个账号提供独一无二的网络环境，已安全守护222万跨境账号</div>
        </li>
        <li :class="['item', currentHotProxy === 3 ? 'is-active' : '']" @click="handleHotProxyChange(3)">
          <i class="iconfont icon-gou1"></i>
          <div class="proxy-info">
            <div class="base-info">
              <img alt="" src="@/assets/img/expense/shebei1.png" />
              <div class="name">
                <p>云平台-阿里云</p>
                <p>港澳台-中国香港</p>
              </div>
            </div>
            <div class="price"><span>￥</span>79.00</div>
          </div>
          <div class="desc">支持视频功能，为每一个账号提供独一无二的网络环境，已安全守护222万跨境账号</div>
        </li>
      </ul>
    </div>
    <!-- 代理区域 -->
    <div class="proxy-box">
      <div class="title">
        <img alt="" class="icon" src="@/assets/img/expense/quyu.png" />
        代理区域
      </div>
      <ul class="area-list">
        <!-- 类型 -->
        <li class="area-item">
          <div class="label-wrapper">类型：</div>
          <div class="content-wrapper">
            <button
              v-for="child in mockList[0].children"
              :key="child.value"
              :class="['radio', proxyAreaState.type === child.value ? 'is-active' : '']"
              @click="handleProxyAreaChange(1, child.value)"
            >
              {{ child.label }}
            </button>
          </div>
        </li>
        <!-- 地址 -->
        <li class="area-item">
          <div class="label-wrapper">地址：</div>
          <div class="content-wrapper">
            <button
              v-for="child in mockList[1].children"
              :key="child.value"
              :class="[
                'radio',
                proxyAreaState.city === child.value ? 'is-active' : '',
                child.tag === 'hot' ? 'tag is-hot' : child.tag === 'new' ? 'tag is-new' : '',
              ]"
              @click="handleProxyAreaChange(2, child.value)"
            >
              {{ child.label }}
            </button>
          </div>
        </li>
        <!-- 地区 -->
        <li class="area-item">
          <div class="label-wrapper">地区：</div>
          <div class="content-wrapper">
            <button
              v-for="child in mockList[2].children"
              :key="child.value"
              :class="[
                'radio',
                proxyAreaState.area === child.value ? 'is-active' : '',
                child.tag === 'hot' ? 'tag is-hot' : child.tag === 'new' ? 'tag is-new' : '',
              ]"
              @click="handleProxyAreaChange(3, child.value)"
            >
              {{ child.label }}
            </button>
          </div>
        </li>
      </ul>
    </div>
    <!-- 代理信息 -->
    <div class="proxy-box">
      <div class="title">
        <img alt="" class="icon" src="@/assets/img/expense/shebei.png" />
        代理信息
      </div>
      <ul class="area-list">
        <li class="area-item">
          <div class="label-wrapper">远程：</div>
          <div class="content-wrapper">
            <button
              :class="['radio', proxyInfoState.isRemote === 1 ? 'is-active' : '']"
              @click="handleProxyInfoChange(1)"
            >
              不可远程
            </button>
            <button
              :class="['radio', proxyInfoState.isRemote === 2 ? 'is-active' : '']"
              @click="handleProxyInfoChange(2)"
            >
              可远程
            </button>
          </div>
        </li>
        <li class="area-item">
          <div class="label-wrapper no-height">机型：</div>
          <div class="content-wrapper">
            <div class="device">
              <div class="device-icon">
                <img alt="" src="@/assets/img/expense/shebei1.png" />
              </div>
              <div class="info">
                <div class="name">云主机-标准型</div>
                <div class="desc">
                  <span>专业跨境电商配置集成环境</span>
                </div>
              </div>
            </div>
          </div>
        </li>
        <li class="area-item">
          <div class="label-wrapper no-height">套餐：</div>
          <div class="content-wrapper">
            <div class="package-clouds">
              <div
                v-for="pack in packageList"
                :key="pack.val"
                :class="['package', pack.className, proxyInfoState.package === pack.val ? 'is-active' : '']"
                @click="handlePackageChange(pack.val)"
              >
                <div class="header">阿里云</div>
                <div class="price">￥79.00/月</div>
                <div class="old-price">￥59.00/月</div>
                <img alt="" src="@/assets/img/expense/select.png" />
              </div>
            </div>
            <div class="tips">
              <p class="not-support">
                不适用平台：etsy、Lazada、joom、FNAC、mercari、noon、沃尔玛、CD平台、OZON、shopee本土、pingpong、1688、daraz
              </p>
              <p class="special-note">
                特别提示：平台适配率在95%～99%，适配与否取决于第三方平台。eBay平台的店铺，近期请不要选择该区域的设备。拼多多用户建议优先选择中国设备。
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 购买数量 -->
    <div class="proxy-box">
      <div class="title">
        <img alt="" class="icon" src="@/assets/img/expense/shebei.png" />
        购买数量
      </div>
      <ul class="area-list">
        <li class="area-item">
          <div class="label-wrapper">购买时长：</div>
          <div class="content-wrapper">
            <button
              v-for="item in durationList"
              :key="item.val"
              :class="['radio', durationState === item.val ? 'is-active' : '']"
              @click="handleDurationChange(item.val)"
            >
              {{ item.name }}
            </button>
          </div>
        </li>
        <li class="area-item">
          <div class="label-wrapper" style="line-height: 36px">购买数量：</div>
          <div class="content-wrapper">
            <div class="counter-wrapper">
              <div class="counter">
                <button class="minus" @click="handleCounterChange('minus')">
                  <i class="iconfont icon-jian"></i>
                </button>
                <input v-model="counterState" class="input" type="text" @input="handleCounterInput" />
                <button class="add" @click="handleCounterChange('add')">
                  <i class="iconfont icon-jia"></i>
                </button>
              </div>
              <div class="more">最多可购买<span class="max">10</span>台</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <!-- 提交 -->
    <div class="submit">
      <button class="submit-btn" @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.buy-proxy {
  --font-family-Medium: Source Han Sans CN-Medium, Source Han Sans CN;
  --font-family-Bold: Source Han Sans CN-Bold, Source Han Sans CN;
  --font-family-Regular: Source Han Sans CN-Regular, Source Han Sans CN;
  --font-family-Normal: Source Han Sans CN-Normal, Source Han Sans CN;
  height: 100%;
  overflow: auto;

  .proxy-box {
    margin-bottom: 20px;

    .title {
      font-size: 18px;
      font-family: var(--font-family-Medium);
      font-weight: 500;
      color: #333333;
      line-height: 26px;
      margin-bottom: 15px;
      position: relative;

      &.gap {
        margin-left: 15px;
      }

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

      .icon {
        width: 26px;
        height: 26px;
        margin-right: 10px;
      }
    }

    .purchase-notes-wrapper {
      width: 1084px;
      background: #f1f6fe;
      border-radius: 4px 4px 4px 4px;
      border: 1px solid #c1d7ff;
      padding: 10px;

      .notes {
        font-size: 14px;

        .notes-text {
          font-family: var(--font-family-Bold);
          font-weight: 700;
          color: #333333;
        }
      }

      p {
        margin-bottom: 10px;
        font-size: 12px;
        font-family: var(--font-family-Regular);
        font-weight: 400;
        color: #999999;
        line-height: 20px;
      }

      .see-more-notes {
        font-size: 12px;
        font-family: var(--font-family-Regular);
        font-weight: 400;
        color: #2b53e5;
      }
    }

    .proxy-list {
      display: flex;
      gap: 0 20px;

      .item {
        width: 348px;
        height: 134px;
        padding: 20px;
        background-color: @cbcolor;
        border: 1px solid transparent;
        box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        .iconfont {
          opacity: 0;
          color: #ffffff;
          transition: opacity 0.3s ease-in-out;
          position: absolute;
          bottom: -2px;
          right: 2px;
          z-index: 2;
          font-weight: bold;
        }

        &.is-active {
          background: #f1f6fe;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
          border-color: #5290ff;
          position: relative;

          .iconfont {
            opacity: 1;
          }

          &::after {
            position: absolute;
            bottom: -1px;
            right: -1px;
            content: '';
            border-bottom: 40px solid #96bbff;
            border-left: 40px solid transparent;
            border-radius: 0 0 4px 0;
            z-index: 1;
          }
        }

        &:hover {
          background: #f1f6fe;
          box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
          border-color: #5290ff;
        }

        .proxy-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;

          .base-info {
            display: flex;

            img {
              width: 48px;
              height: 48px;
              margin-right: 15px;
              flex-shrink: 0;
            }

            .name {
              p:first-child {
                font-size: 18px;
                font-family: var(--font-family-Medium);
                font-weight: 500;
                color: #333333;
              }

              p:last-child {
                font-size: 12px;
                font-family: var(--font-family-Regular);
                font-weight: 400;
                color: #333333;
              }
            }
          }

          .price {
            font-size: 24px;
            font-weight: 900;
            color: #ff9359;
            position: relative;
            display: flex;
            align-items: center;

            span {
              font-size: 12px;
              font-weight: 400;
              margin-right: 5px;
            }
          }
        }

        .desc {
          font-size: 12px;
          font-family: var(--font-family-Normal);
          font-weight: 350;
          color: #333333;
          line-height: 18px;
        }
      }
    }

    .area-list {
      font-size: 14px;
      font-family: var(--font-family-Regular);
      font-weight: 400;
      color: #333333;

      .area-item {
        display: flex;
        margin-bottom: 15px;

        .label-wrapper {
          flex-shrink: 0;
          line-height: 40px;

          &.no-height {
            line-height: 20px;
          }
        }

        .content-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 15px 20px;

          .radio {
            width: 100px;
            height: 40px;
            background: #f7f7f7;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid rgba(43, 83, 229, 0.1);
            outline: 0;
            cursor: pointer;
            position: relative;
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

            &.is-active {
              background-color: #2d5aff;
              border-color: #2d5aff;
              color: #ffffff;
            }

            &.tag::before {
              content: '';
              display: block;
              width: 32px;
              line-height: 16px;
              font-size: 12px;
              color: #ffffff;
              position: absolute;
              top: 0;
              right: -1px;
              transform: translateY(-50%);
            }

            &.is-new::before {
              background: #28c445;
              content: '上新';
            }

            &.is-hot::before {
              background: #de0000;
              content: '热门';
            }
          }

          .device {
            width: 200px;
            height: 74px;
            background: #f1f6fe;
            border-radius: 4px 4px 4px 4px;
            border: 1px solid #c1d7ff;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;

            .device-icon {
              width: 48px;
              height: 48px;
              background: #e4edfd;
              margin-right: 10px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;

              img {
                width: 32px;
                height: 32px;
              }
            }

            .info {
              flex-grow: 1;

              .name {
                font-size: 14px;
                font-family: var(--font-family-Medium);
                font-weight: 500;
                color: #333333;
                line-height: 27px;
              }

              .desc {
                font-family: var(--font-family-Regular);
                font-weight: 400;
                color: #333333;
                line-height: 18px;
                width: 120px;
                text-align: left;

                span {
                  display: inline-block;
                  font-size: 10px;
                  transform: scale(0.8333);
                  white-space: nowrap;
                  margin-left: -10px;
                }
              }
            }
          }

          .package-clouds {
            --ali-border-color: #ff7e31;
            --ali-bg-color: #fff0e7;
            --tencent-border-color: #c1d7ff;
            --tencent-bg-color: #eaf3ff;
            --amazon-border-color: #ffe0a1;
            --amazon-bg-color: #fff8ea;
            --huawei-border-color: #ffc8cf;
            --huawei-bg-color: #ffeff1;
            display: flex;
            gap: 0 20px;

            .package {
              width: 140px;
              height: 80px;
              border: 1px solid;
              border-radius: 8px;
              position: relative;
              cursor: pointer;

              .header {
                line-height: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
                font-size: 14px;
                font-family: var(--font-family-Regular);
                font-weight: 400;
                color: #333333;
              }

              img {
                width: 20px;
                height: 20px;
                position: absolute;
                bottom: -1px;
                right: -1px;
                opacity: 0;
                transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
              }

              &.ali {
                border-color: var(--ali-border-color);

                .header {
                  background: var(--ali-bg-color);
                }
              }

              &.tencent {
                border-color: var(--tencent-border-color);

                .header {
                  background: var(--tencent-bg-color);
                }
              }

              &.amazon {
                border-color: var(--amazon-border-color);

                .header {
                  background: var(--amazon-bg-color);
                }
              }

              &.huawei {
                border-color: var(--huawei-border-color);

                .header {
                  background: var(--huawei-bg-color);
                }
              }

              .price {
                font-size: 16px;
                font-family: var(--font-family-Medium);
                font-weight: 500;
                color: #ff6a01;
                text-align: center;
              }

              .old-price {
                font-size: 12px;
                font-family: var(--font-family-Regular);
                font-weight: 400;
                color: #999999;
                text-decoration: line-through;
                text-align: center;
              }

              &.is-active {
                img {
                  opacity: 1;
                }
              }
            }
          }

          p {
            font-family: var(--font-family-Regular);
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
          }

          p.not-support {
            color: #999999;
            margin-bottom: 5px;
          }

          p.special-note {
            color: #333333;
          }
        }

        .counter-wrapper {
          display: flex;
          align-items: center;
          gap: 0 5px;

          .counter {
            width: 120px;
            height: 36px;
            background: #ffffff;
            border-radius: 100px;
            border: 1px solid rgba(43, 83, 229, 0.1);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 2px;

            button {
              border: 0;
              outline: 0;
              line-height: 30px;
              text-align: center;
              width: 30px;
              border-radius: 50%;
              flex-shrink: 0;
              color: #ffffff;
              cursor: pointer;

              .iconfont {
                font-size: 12px;
              }

              &.minus {
                background: #e1e7ff;
              }

              &.add {
                background: #2b53e5;
              }
            }

            .input {
              width: 52px;
              text-align: center;
            }
          }

          .more {
            font-size: 12px;
            font-family: var(--font-family-Regular);
            font-weight: 400;
            color: #999999;
          }
        }
      }
    }
  }

  .submit {
    padding-top: 15px;

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
}
</style>
