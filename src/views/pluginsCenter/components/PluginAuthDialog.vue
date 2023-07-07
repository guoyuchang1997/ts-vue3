<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { usePluginAuthStore } from "@/store/plugins.ts";

const pluginsStore = usePluginAuthStore();

const { pluginAuthModal } = storeToRefs(pluginsStore)

// 关闭弹窗
const closeAuthModal = () => {
  pluginsStore.setModalVisible(false)
}

// 确定授权
const confirm = () => {

}
</script>

<template>
  <el-dialog
    v-model="pluginAuthModal.visible"
    :title="null"
    :width="480"
    class="plugin-auth"
  >
    <template #header>
      <div class="custom-title">插件授权</div>
    </template>
    <template #default>
      <div class="logos">
        <img alt="" class="logo" src="https://file.yunlogin.com/images/20230522/csskhgs9fn1xr83nbt.PNG">
        <img alt="" class="exchange" src="@/assets/img/plugin/jiaohuan.png">
        <img alt="" class="logo" src="@/assets/img/plugin/yun_logo.png">
      </div>
      <div class="tips">
        您同意
        <span>AmzTrends亚马逊品牌分析</span>
        获取以下权限
      </div>
      <div class="clause">
        <el-checkbox v-model="pluginAuthModal.isReadAuth">我已阅读并同意<a href="">《用户授权协议》</a></el-checkbox>
        <el-checkbox v-model="pluginAuthModal.isReadPrivacy">我已阅读并同意AmzTrends亚马逊品牌分析<a
          href="">《隐私协议》</a></el-checkbox>
      </div>
      <div v-if="!pluginAuthModal.isReadAuth || !pluginAuthModal.isReadPrivacy" class="error-tips">
        <img alt="" src="@/assets/img/plugin/tishi.png">
        <span>请认真阅读并勾选{{
            !pluginAuthModal.isReadAuth ? '《用户授权协议》' : !pluginAuthModal.isReadPrivacy ? '《隐私协议》' : '相关协议'
          }}</span>
      </div>
    </template>
    <template #footer>
      <div class="footer">
        <div class="btn cancel" @click="closeAuthModal">取消</div>
        <div class="btn confirm" @click="confirm">同意授权</div>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.plugin-auth {
  .custom-title {
    font-size: 18px;
    color: #3d3d3d;
    line-height: 29px;
    border-bottom: 1px solid #EEEEEE;
    padding-bottom: 14px;
    margin-bottom: 30px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
  }

  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0 15px;
    margin-bottom: 30px;

    .logo {
      width: 75px;
      height: 75px;
      border-radius: 10px;
    }

    .exchange {
      width: 30px;
      height: 30px;
    }
  }

  .tips {
    font-size: 14px;
    font-family: Source Han Sans CN-Regular, Source Han Sans CN;
    font-weight: 400;
    color: #3D3D3D;
    line-height: 20px;
    margin-bottom: 17px;

    span {
      font-weight: 800;
    }
  }

  .clause {
    :deep(.el-checkbox) {
      width: 100%;
    }

    :deep(.el-checkbox__label) {
      font-size: 12px;
      font-family: Source Han Sans CN-Regular, Source Han Sans CN;
      font-weight: 400;
      color: #3D3D3D;

      a {
        color: #2b53e5;
      }
    }
  }

  .error-tips {
    width: 387px;
    height: 26px;
    background: rgba(234, 0, 0, 0.05);
    padding-left: 5px;
    display: flex;
    align-items: center;
    margin-bottom: 18px;

    img {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }

    span {
      font-size: 12px;
      font-family: Source Han Sans CN-Normal, Source Han Sans CN;
      font-weight: 350;
      color: #EA0000;
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 30px;

    .btn {
      width: 148px;
      line-height: 38px;
      text-align: center;
      border-radius: 100px;
      border: 1px solid #2B53E5;
      cursor: pointer;

      &.cancel {
        background: transparent;
        color: #2B53E5;
      }

      &.confirm {
        background: #2B53E5;
        color: #FFFFFF;
      }
    }
  }
}
</style>