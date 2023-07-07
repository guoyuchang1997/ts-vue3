<template>
  <!-- 续费须知 -->
  <div class="purchase-notes-wrapper">
    <p class="notes">
      <span class="notes-text">代理购买须知</span>
      （请认真阅读设备购买须知，云登浏览器专业版提供的设备皆受国家网络监管，请合法合规使用）
    </p>
    <p style="font-size: 12px">
      1、云登浏览器专业版提供的国内/外设备，均受中国网络部门监管，您在使用过程中应遵守中国大陆地区的相关法律法规，不得访问国家明令禁止登录的敏感网站，我们不提供一切翻墙服务。<br />
      2、设备购买/续费后无法退换，请根据实际需求场景进行选择。
    </p>
    <div class="see-more-notes">查看完整版购买须知 >></div>
  </div>
  <!-- 续费设备信息 -->
  <div class="device-info">
    <h3>续费设备信息</h3>
    <div class="content">
      <div class="info">
        <el-row style="margin-bottom: 15px">
          <el-col :span="8">
            <span class="label">设备名称：</span>
            <span class="value">29421721-1</span>
          </el-col>
          <el-col :span="8">
            <span class="label">网络类型：</span>
            <span class="value">云平台</span>
          </el-col>
          <el-col :span="8">
            <span class="label">套餐类别：</span>
            <span class="value">阿里云</span>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <span class="label">设备信息：</span>
            <span class="value">192.168.0.1</span>
          </el-col>
          <el-col :span="8">
            <span class="label">归属地域：</span>
            <span class="value">中国北京</span>
          </el-col>
          <el-col :span="8">
            <span class="label">绑定账号：</span>
            <span class="value">亚马逊1；亚马逊2；亚马逊3</span>
          </el-col>
        </el-row>
      </div>
      <div class="price">
        单价：
        <span>¥78.00</span>
      </div>
    </div>
  </div>
  <!-- 时长选择及价格计算 -->
  <div class="footer">
    <div class="duration">
      <span>续费时长：</span>
      <ul>
        <li
          v-for="item in durationList"
          :key="item.val"
          :class="[currentDuration === item.val ? 'active' : '']"
          @click="handleChangeDuration(item.val)">
          {{ item.label }}
        </li>
      </ul>
    </div>
    <div class="estimated-price">
      <span>预计价格：</span>
      <span class="price">¥{{ currentDuration * 78 }}</span>
    </div>
    <el-button type="primary">支付订单</el-button>
    <div class="argeen">
      <el-checkbox v-model="argeen"></el-checkbox>
      <p class="label">
        我同意云登浏览器
        <a href="javascript:;">设备购买须知、</a>
        <a href="javascript:;">技术服务协议</a>
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const durationList = ref([
  {
    val: 1,
    label: '一个月',
  },
  {
    val: 3,
    label: '三个月',
  },
  {
    val: 6,
    label: '六个月',
  },
  {
    val: 12,
    label: '十二个月',
  },
])
const currentDuration = ref(1)
const argeen = ref(false)

/**
 * 选择时长
 * @param {number} val 时长
 */
const handleChangeDuration = (val: number) => {
  currentDuration.value = val
}
</script>

<style lang="less" scoped>
.purchase-notes-wrapper {
  background: #fbfbff;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #2b53e5;
  padding: 20px;
  margin-bottom: 10px;

  .notes {
    font-size: 14px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #666666;
    line-height: 20px;

    .notes-text {
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
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

.device-info {
  padding: 20px;
  background: #ffffff;
  margin-bottom: 10px;

  h3 {
    font-size: 16px;
    font-family: Source Han Sans CN-Bold, Source Han Sans CN;
    font-weight: 700;
    color: #3d3d3d;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .info {
    width: 72%;
    border-right: 1px solid #eeeeee;

    .label,
    .value {
      font-size: 14px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #9ba0b4;
    }

    .value {
      color: #333333;
    }
  }

  .price {
    font-size: 14px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    font-weight: 350;
    color: #333333;
    line-height: 18px;
    padding-left: 50px;

    span {
      font-size: 20px;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: 700;
      color: #ff6a01;
      line-height: 30px;
    }
  }
}

.footer {
  padding: 20px;
  background: #FFFFFF;

  .duration {
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    span {
      font-size: 14px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #333333;
      line-height: 20px;
    }

    ul {
      display: flex;
      gap: 0 20px;

      li {
        width: 80px;
        line-height: 30px;
        text-align: center;
        background: #ffffff;
        border-radius: 16px 16px 16px 16px;
        border: 1px solid rgba(43, 83, 229, 0.1);
        font-size: 12px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #333333;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

        &.active {
          background: #2b53e5;
          border: 1px solid #2b53e5;
          color: #ffffff;
        }
      }
    }
  }

  .estimated-price {
    margin-bottom: 40px;

    span {
      font-size: 16px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #333333;
      line-height: 24px;
    }

    .price {
      font-size: 20px;
      font-family: Source Han Sans CN-Bold, Source Han Sans CN;
      font-weight: 700;
      color: #FF6A01;
      line-height: 30px;
    }
  }

  .el-button {
    width: 160px;
    height: 48px;
    border-radius: 8px 8px 8px 8px;
    font-size: 16px;
    font-family: Source Han Sans CN-Normal, Source Han Sans CN;
    margin-bottom: 20px;
  }

  .argeen {
    display: flex;
    align-items: center;

    :deep(.el-checkbox__inner) {
      border: 1px solid rgba(43, 83, 229, 0.3);
      border-radius: 4px;
    }

    .label {
      margin-left: 10px;
      font-size: 12px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      line-height: 18px;

      a {
        color: #2B53E5;
      }
    }
  }
}
</style>
