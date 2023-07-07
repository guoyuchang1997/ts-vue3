<script lang="ts" setup>
import { reactive, ref } from 'vue'

interface MenuItem {
  label: string
  value: number
  isdomestic: number // 1 国内 2 海外
  type: number // 1 动静态 2 动态 3 静态
  proxyTypeText?: string
  proxyTypeIcon?: string
}

const activeMenu = ref<number>(1)
const menuList = ref<MenuItem[]>([
  {
    label: '芝麻HTTP',
    value: 1,
    isdomestic: 1,
    type: 1,
    proxyTypeText: '国内动态·静态',
  },
  {
    label: 'ipidea',
    value: 2,
    isdomestic: 2,
    type: 1,
    proxyTypeText: '海外动态·静态',
  },
  {
    label: '922S5Proxy',
    value: 3,
    isdomestic: 2,
    type: 2,
    proxyTypeText: '海外动态',
  },
  {
    label: 'Oxylabs',
    value: 4,
    isdomestic: 2,
    type: 3,
    proxyTypeText: '海外静态',
  },
  {
    label: 'Lumauto',
    value: 5,
    isdomestic: 2,
    type: 1,
    proxyTypeText: '海外动态·静态',
  },
])
const formState = reactive({
  name: '',
  duration: 1,
  area: 1,
  province: '浙江省',
  city: '杭州市',
  operator: 1,
})
const tableData = ref([
  {
    id: 1,
    name: '芝麻HTTP',
    duration: '05分钟至25分钟套餐包',
    area: '浙江省，杭州市',
    operator: '电信',
  },
  {
    id: 2,
    name: '芝麻HTTP',
    duration: '05分钟至25分钟套餐包',
    area: '浙江省，杭州市',
    operator: '电信',
  },
  {
    id: 3,
    name: '芝麻HTTP',
    duration: '05分钟至25分钟套餐包',
    area: '浙江省，杭州市',
    operator: '电信',
  },
])
const pagination = ref({
  currentPage: 1,
  pageSize: 10,
  pageSizes: [10, 20, 30, 40, 50],
  layout: 'total, sizes, prev, pager, next, jumper',
  total: 100,
})

/**
 * 切换代理类型
 * @param {number} value - 当前代理类型值
 */
const handleMenuClick = (value: number) => {
  activeMenu.value = value
}

/**
 * 每页条数改变时触发
 * @param { number } val - 每页条数
 */
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}

/**
 * 当前页改变时触发
 * @param { number } val - 当前页
 */
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}

/**
 * 代理类型样式
 * @param {number} isdomestic - 是否国内
 * @param {number} type - 代理类型
 * @returns {string} - 样式类名
 */
const typeClass = (isdomestic: number, type: number) => {
  interface TypeMap {
    [key: string]: {
      [key: string]: string
      default: string
    }
  }

  const typeMap: TypeMap = {
    '1': {
      '1': 'complex-1',
      '2': 'dynamic-1',
      'default': 'static-1',
    },
    '2': {
      '1': 'complex-2',
      '2': 'dynamic-2',
      'default': 'static-2',
    },
  }

  const typeKey = String(isdomestic)
  const subTypeKey = String(type)

  if (typeMap[typeKey] && typeMap[typeKey][subTypeKey]) {
    return typeMap[typeKey][subTypeKey]
  }

  return typeMap[typeKey].default
}
</script>

<template>
  <div class="third-party-proxy">
    <ul class="proxy-type">
      <li
        v-for="label in menuList"
        :key="label.value"
        :class="['proxy-item', { active: label.value === activeMenu }]"
        @click="handleMenuClick(label.value)"
      >
        <div class="label">
          <span class="text">{{ label.label }}</span>
          <div v-if="label.value === 1" class="hot">
            <span>HOT</span>
          </div>
        </div>
        <div :class="typeClass(label.isdomestic, label.type)" class="type">
          <span>{{ label.proxyTypeText }}</span>
        </div>
      </li>
    </ul>
    <div class="proxy-content">
      <div class="product-des">
        <div class="zhima">
          <div class="logo-wrapper">
            <img alt="" class="logo" src="@/assets/img/proxy/zhima_logo.png" />
            <div class="banlace">账户余额：100.00</div>
          </div>
          <div class="account-info">
            <p class="text">自动为您注册的芝麻HTTP平台账号密码如下：</p>
            <div class="info">
              <span>账号：12345678</span>
              <span>密码：123456</span>
              <div class="goto">
                <i class="iconfont icon-wangye"></i>
                前往芝麻HTTP购买
              </div>
            </div>
          </div>
        </div>
        <div class="combo">
          <div class="form">
            <div class="form-item">
              <div class="label">名称：</div>
              <div class="form-item-wrapper">
                <el-input v-model="formState.name" placeholder="请输入名称" style="width: 400px; height: 36px" />
              </div>
            </div>
            <div class="form-item">
              <div class="label">使用时长：</div>
              <div class="form-item-wrapper">
                <el-radio-group v-model="formState.duration">
                  <el-radio :label="1" style="margin-right: 60px">05分钟至25分钟套餐包（0.048元/IP）</el-radio>
                  <el-radio :label="2" style="margin-right: 60px">03小时至06小时套餐包（0.24元/IP）</el-radio>
                  <el-radio :label="3">25分钟至03小时套餐包（0.12元/IP）</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="form-item">
              <div class="label">地区选择：</div>
              <div class="form-item-wrapper">
                <div class="radio" style="margin-bottom: 10px">
                  <el-radio-group v-model="formState.area">
                    <el-radio :label="1" style="margin-right: 60px">指定城市</el-radio>
                    <el-radio :label="2">
                      省份混拨
                      <span style="color: #ff0000">（注：未勾选默认全国混拨）</span>
                    </el-radio>
                  </el-radio-group>
                </div>
                <div class="select">
                  <el-select
                    v-model="formState.province"
                    placeholder="请选择"
                    style="width: 160px"
                    suffix-icon="CaretBottom"
                  >
                    <el-option label="浙江省" value="浙江省" />
                    <el-option label="江苏省" value="江苏省" />
                    <el-option label="上海市" value="上海市" />
                  </el-select>
                  <el-select
                    v-model="formState.city"
                    placeholder="请选择"
                    style="width: 160px"
                    suffix-icon="CaretBottom"
                  >
                    <el-option label="杭州市" value="杭州市" />
                    <el-option label="宁波市" value="宁波市" />
                    <el-option label="台州市" value="台州市" />
                  </el-select>
                </div>
              </div>
            </div>
            <div class="form-item" style="margin-bottom: 32px">
              <div class="label">运营商：</div>
              <div class="form-item-wrapper">
                <el-radio-group v-model="formState.operator">
                  <el-radio :label="1" style="margin-right: 88px">不限</el-radio>
                  <el-radio :label="2" style="margin-right: 88px">联通</el-radio>
                  <el-radio :label="3">电信</el-radio>
                </el-radio-group>
              </div>
            </div>
            <div class="form-item">
              <el-button type="primary">保存</el-button>
            </div>
          </div>
        </div>
      </div>
      <div class="use-list">
        <div class="table-wrapper">
          <el-table :data="tableData" row-key="id" style="width: 100%" height="100%">
            <el-table-column label="名称" prop="name" />
            <el-table-column label="使用时长" prop="duration" />
            <el-table-column label="地区选择" prop="area" />
            <el-table-column label="运营商" prop="operator" />
            <el-table-column fixed="right" label="操作" width="180">
              <template #default="">
                <el-button size="small" type="primary">编辑</el-button>
                <i class="iconfont icon-shanchu"></i>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination-wrapper">
          <el-pagination
            v-model:current-page="pagination.currentPage"
            v-model:page-size="pagination.pageSize"
            :background="false"
            :layout="pagination.layout"
            :page-sizes="pagination.pageSizes"
            :total="pagination.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.third-party-proxy {
  display: flex;
  gap: 0 10px;
  height: 100%;
  background-color: @mlcolor;

  .proxy-type {
    min-width: 200px;
    height: 100%;
    background-color: @cbcolor;
    flex-shrink: 0;
    padding-top: 20px;

    .proxy-item {
      width: 100%;
      height: 45px;
      font-size: 14px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #333333;
      cursor: pointer;
      margin-bottom: 20px;
      padding-left: 18px;
      position: relative;

      &::before {
        content: '';
        display: block;
        width: 3px;
        height: 100%;
        background-color: #2b53e5;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 100px;
        transform: scale(0);
        transition: all 0.3s ease-in-out;
      }

      &.active {
        &:before {
          transform: scale(1);
        }

        .label {
          .text {
            color: @fontactive;
            font-weight: 500;
          }
        }
      }

      .label {
        margin-bottom: 7px;
        display: flex;
        align-items: center;
        text-align: center;

        .text {
          margin-right: 15px;
        }

        .hot {
          width: 25px;
          height: 15px;
          background-color: #e80000;
          display: flex;
          align-items: center;
          text-align: center;
          justify-content: center;
          position: relative;

          span {
            color: #ffffff;
            font-size: 12px;
            transform: scale(0.833333);
          }

          // 左箭头
          &::after {
            content: '';
            display: block;
            width: 0;
            height: 0;
            border-top: 7.5px solid transparent;
            border-bottom: 7.5px solid transparent;
            border-right: 7.5px solid #e80000;
            position: absolute;
            left: -7.5px;
            top: 0;
          }
        }
      }

      .type {
        padding: 2px 5px;
        width: fit-content;
        background: #f5f5f5;
        border-radius: 4px 4px 4px 4px;

        &.complex-1,
        &.dynamic-1 {
          color: #ff9900;
        }

        &.complex-2,
        &.dynamic-2 {
          color: #00b9a0;
        }

        &.static-1 {
          color: #ce5600;
        }

        &.static-2 {
          color: #007eb0;
        }

        span {
          display: block;
          font-size: 12px;
          transform: scale(0.833333);
        }
      }
    }
  }

  .proxy-content {
    flex: 1;
    height: 100%;

    .product-des {
      padding: 10px;
      background-color: @cbcolor;
      margin-bottom: 15px;

      .zhima {
        width: 1000px;
        height: 126px;
        background-image: url('@/assets/img/proxy/zhima_bg.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 15px;
        margin-bottom: 30px;

        .logo-wrapper {
          display: flex;
          margin-bottom: 20px;

          .logo {
            width: 128px;
            margin-right: 20px;
          }

          .banlace {
            padding: 0 15px;
            line-height: 30px;
            background: #f7e9dd;
            border-radius: 20px;
            font-size: 12px;
            font-family: Source Han Sans CN-Regular, Source Han Sans CN;
            font-weight: 400;
            color: #7e6242;
          }
        }

        .account-info {
          font-size: 12px;
          font-family: Source Han Sans CN-Normal, Source Han Sans CN;
          font-weight: 350;
          color: #333333;

          .text {
            margin-bottom: 10px;
          }

          .info {
            display: flex;
            gap: 0 40px;

            .goto {
              color: #2b53e5;

              .icon-wangye {
                margin-right: 5px;
                vertical-align: middle;
              }
            }
          }
        }
      }

      .combo {
        .form {
          .form-item {
            display: flex;
            //align-items: center;
            margin-bottom: 16px;

            .label {
              font-size: 14px;
              font-family: Source Han Sans CN-Medium, Source Han Sans CN;
              font-weight: 500;
              color: #333333;
              margin-right: 10px;
              line-height: 36px;
              width: 70px;
              text-align: right;
            }

            .form-item-wrapper {
              :deep(.el-radio__label) {
                font-size: 14px;
                font-family: Source Han Sans CN-Regular, Source Han Sans CN;
                font-weight: 400;
              }

              :deep(.el-select) {
                line-height: 36px;
                margin-right: 10px;

                .el-input {
                  height: 36px;
                }
              }

              :deep(.el-radio) {
                height: 36px;

                .el-radio__inner {
                  border-radius: 4px;
                }

                .el-radio__input.is-checked .el-radio__inner {
                  background: #ffffff;

                  &::after {
                    width: 9px;
                    height: 9px;
                    border-radius: 2px;
                    background: var(--el-color-primary);
                  }
                }
              }
            }

            :deep(.el-button--primary) {
              margin-left: 70px;
              width: 160px;
              height: 40px;
              border-radius: 8px;
              font-size: 16px;
              font-family: Source Han Sans CN-Normal, Source Han Sans CN;
              font-weight: 350;
            }
          }
        }
      }
    }

    .use-list {
      height: calc(100% - 512px);
      padding: 15px;
      background-color: @cbcolor;

      .table-wrapper {
        height: calc(100% - 78px);

        :deep(.el-button) {
          height: 28px;
          border-radius: 6px;

          & > span {
            justify-content: center;
          }
        }

        .icon-shanchu {
          margin-left: 34px;
        }

        :deep(.el-table__body-wrapper) {
          .el-table__row {
            height: 68px;
          }
        }

        :deep(.el-button.el-button--small) {
          width: 88px;
        }
      }

      .pagination-wrapper {
        height: 78px;
        background-color: @tcolor;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        :deep(.el-pagination) {
          .el-select {
            .el-input {
              width: 104px;
            }
          }
        }
      }
    }
  }
}
</style>

<style lang="less">
@import '@/views/ownProxy/resetTable.less';
</style>
