<template>
  <div class="mains">
    <div class="top">
      <div class="le">
        <i class="iconfont icon-detection"></i>
      </div>
      <div class="ri">
        <i class="iconfont icon-close2 fs-xl" @click="emit('close')"></i>
      </div>
    </div>
    <div class="xuanze">
      <el-input v-model="seatch" type="text" class="fs-xs" placeholder="搜索对应分组序号">
        <template #suffix>
          <div class="btn pointer">
            <i class="iconfont icon-sousuo fs-sm"></i>
          </div>
        </template>
      </el-input>
    </div>
    <div class="selectBox">
      <ul>
        <li :class="{ select: selectIndex === 0 }" @click="changeSelect(0)">最近打开</li>
        <li :class="{ select: selectIndex === 1 }" @click="changeSelect(1)">星标账号</li>
        <li :class="{ select: selectIndex === 2 }" @click="changeSelect(2)">全部账号</li>
      </ul>
    </div>
    <div class="card">
      <div class="conten" v-for="item in devlist" :key="item.name">
        <div class="platformName">
          <img :src="item.iamge" alt="" />
          <span>平台名字</span>
        </div>
        <div class="accountName">
          <p>{{ item.dependency }}</p>
        </div>
        <div class="operationButton">
          <span class="ipInfo">设备Ip地址:{{ item.ip }}</span>
          <div class="switchBtn">
            <el-switch v-model="Sliding" width="80" inline-prompt active-text="切换" inactive-text="打开" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import image from '@/assets/img/c-header/avatar-header.png'

const emit = defineEmits(['close'])
const selectIndex = ref(0)
/**
 * 切换
 * @param v  数字
 */
const changeSelect = v => {
  selectIndex.value = v
}
const seatch = ref()
/**
 * 滑块
 */
const Sliding = ref(false)
/**
 * 平台数据
 */
const devlist = reactive([
  {
    iamge: image,
    name: '平台名字',
    dependency: '亚马逊',
    ip: '192.168.175.104',
  },
  {
    iamge: image,
    name: '平台名字',
    dependency: '亚马逊',
    ip: '192.168.175.104',
  }
])
</script>

<style scoped lang="less">
.icon-close2 {
  color: #333;
}

.xuanze {
  margin: 0 20px;
  margin-top: 15px;

  :deep(.el-input) {
    // width: 213px;

    height: 32px;
    display: flex;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.2);
    border-radius: 16px;

    .el-input__wrapper {
      border-radius: 16px;
      padding-right: unset;
    }
  }

  .btn {
    width: 48px;
    height: 32px;
    background: #2b53e5;
    border-radius: 16px;

    .icon-sousuo {
      color: #fff;
    }
  }
}

.mains {
  .top {
    display: flex;
    justify-content: space-between;
    padding: 14px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    .icon-detection:hover {
      color: @fontactive;
    }

    .icon-a-tianjia19:hover {
      color: red;
    }
  }

  .selectBox {
    width: 80%;
    margin: 20px auto 15px;
    background: rgba(43, 83, 229, 0.1);
    border-radius: 16px;

    ul {
      display: flex;
      justify-content: space-between;
      height: 32px;

      .select {
        background: #2b53e5;
        color: #fff;
        border-radius: 16px;
      }

      li {
        cursor: pointer;
        color: #3d3d3d;
        text-align: center;
        line-height: 32px;
        padding: 0 16px;
        font-size: 12px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .card {
    height: calc(100vh - 193px);
    overflow-y: auto;
    padding-top: 5px;

    .conten {
      width: 320px;
      height: 99px;
      background: #ffffff;
      box-shadow: 0px 0px 5px 0px rgba(43, 83, 229, 0.3);
      border-radius: 8px 8px 8px 8px;
      margin: 0 auto 10px;
      padding: 10px;
    }

    .platformName {
      display: flex;
      align-items: center;
      margin-bottom: 10px;

      img {
        margin-right: 5px;
        width: 20px;
        height: 20px;
      }

      span {
        font-size: 14px;
        color: #999;
      }
    }

    .accountName {
      margin-top: 10px;
      color: #333;
      font-size: 14px;

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }

    .operationButton {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .ipInfo {
        color: #999;
        font-size: 12px;
      }

      // .switchBtn {
      //   margin-top: 5px;
      // }
      :deep(.switchBtn) {
        .el-switch__core {
          height: 24px;
          border-radius: 20px 20px 20px 20px;

          .el-switch__action {
            width: 32px;
            height: 20px;
            background: url('@/assets/img/account/huojian.webp') no-repeat center / cover, white;
            background-size: 14px;
            border-radius: 20px;
          }
        }

        .is-checked {
          .el-switch__action {
            left: calc(100% - 32px);
          }
        }

        .el-switch__core .el-switch__inner {
          padding: 0 4px 0 calc(16px + 15px);
        }

        .el-switch.is-checked .el-switch__core .el-switch__inner {
          padding: 0 calc(16px + 12px) 0 4px;
        }
      }
    }
  }
}
</style>
