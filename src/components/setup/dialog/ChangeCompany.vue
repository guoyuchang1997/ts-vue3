<template>
  <!-- 切換公司模态框 -->
  <div class="change-company">
    <!-- 插槽 -->
    <slot></slot>
    <ul>
      <li v-for="item in companiesList" :key="item.id" :class="item.id === active ? 'active' : 'noActive'">
        <div class="l">
          <div class="company-name">
            <img src="@/assets/img/setUp/icon-corporation.webp" alt="公司icon" />
            {{ item.name }}
          </div>
          <div class="company-info">{{ item.info }}</div>
        </div>
        <div class="r">
          <span>当前</span>
          <el-button class="change" type="primary" size="small" @click="changeCompany(item.id)">切换</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const companiesList = [
  {
    id: 0,
    name: '杭州辰链信息科技有限公司的团队',
    info: '切换企业团队后，将过滤出当前企业的消息',
  },
  {
    id: 1,
    name: '4456543的团队',
    info: '切换企业团队后，将过滤出当前企业的消息',
  },
  {
    id: 2,
    name: '4456543的团队',
    info: '切换企业团队后，将过滤出当前企业的消息',
  },
]
// 当前选中的公司
const active = ref(0)

/**
 * 切换公司焦点
 * @param index 当前选中的公司id
 */
const changeCompany = (index: number) => {
  active.value = index
}
</script>

<style scoped lang="less">
.change-company {
  ul {
    margin-top: 30px;
    padding-bottom: 10px;
    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 60px;
      // margin-bottom: 10px;
      padding: 10px;
      cursor: pointer;
      .l {
        .company-name {
          font-size: 14px;
          font-weight: 600;
          color: #333333;
          line-height: 20px;
          img {
            width: 24px;
            height: 24px;
          }
        }
        .company-info {
          font-size: 12px;
          color: #999999;
          line-height: 17px;
          padding-left: 30px;
        }
      }
      .r {
        display: flex;
        span {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 350;
          color: #00b899;
          line-height: 20px;
          // 向前追加圆点 垂直居中
          &::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #00b899;
            margin-right: 6px;
            vertical-align: middle;
          }
        }
      }
      &:hover {
        background: #f6f9ff;
      }
    }
    .active {
      background: #f6f9ff;
      .l {
        .company-info {
          display: block;
        }
      }
      .r {
        .change {
          display: none;
        }
      }
    }
    .noActive {
      background: #fff;
      border-bottom: 1px solid #eeeeee;
      .l {
        .company-name {
          img {
            filter: grayscale(100%) brightness(150%);
          }
        }
        .company-info {
          display: none;
        }
      }
      .r {
        span {
          display: none;
        }
      }
    }
  }
  .el-button {
    width: 48px;
    height: 30px;
    border-radius: 4px;
  }
}
</style>
