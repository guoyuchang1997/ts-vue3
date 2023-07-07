<template>
  <div class="Localne">
    <div v-if="loaclne === 1" class="loca">
      <span> 代理类型</span>
      <el-select v-model="Localnetwork" class="m-2" placeholder="请选择">
        <el-option v-for="item in Localnetworklist" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
      <el-button>检查网络</el-button>
    </div>
    <span v-if="loaclne === 1" class="fs-sm benji">将使用本机IP，更换上网地点或电脑时IP将变化</span>
    <div v-if="loaclne === 2" class="api">
      <div class="contetop">
        <span class="text"><i class="red">*</i>服务商</span>
        <el-select v-model="Serviceprovider" class="m-2" placeholder="请选择">
          <el-option v-for="item in Serviceproviderlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <span class="text textmar"><i class="red">*</i>代理类型</span>
        <el-select v-model="Serviceprovider" class="m-2" placeholder="请选择">
          <el-option v-for="item in Serviceproviderlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="contenmain fs-xs">
        <span class="pointer"><i class="iconfont icon-a-shezhi1 fs-base"></i> 芝麻HTTP代理介绍</span>
        <span class="pointer"><i class="iconfont icon-a-shezhi1 fs-base"></i>购买芝麻HTTP代理服务</span>
      </div>
      <div class="contetop">
        <span class="text"><i class="red">*</i>提取方式</span>
        <el-select v-model="Serviceprovider" class="m-2" placeholder="请选择">
          <el-option v-for="item in Serviceproviderlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
        <span class="text textmar"><i class="red">*</i>提取链接</span>
        <el-select v-model="Serviceprovider" class="m-2" placeholder="请选择">
          <el-option v-for="item in Serviceproviderlist" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="btn">
        <el-button class="fs-xs">测试提取</el-button>
      </div>
      <div class="title fs-xm">
        注意：大部分代理1P平台，需将本机IP加入其白名单才可提取连接，如若异常，请自行添加白名单！
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  /**
   * 显示
   */
  loaclne: number
}
withDefaults(defineProps<Props>(), {
  loaclne: 1,
})
/**
 * 代理类型
 */
const Localnetwork = ref()
const Localnetworklist = [
  {
    value: '0',
    label: '本地网络',
  },
  {
    value: '1',
    label: '平台代理',
  },
  {
    value: '2',
    label: '自有代理',
  },
  {
    value: '3',
    label: '芝麻HTTP(动态代理)',
  },
  {
    value: '4',
    label: 'Socks5',
  },
]
/**
 * 服务商
 */
const Serviceprovider = ref()
const Serviceproviderlist = [
  {
    value: '0',
    label: '芝麻HTTP',
  },
  {
    value: '1',
    label: '不知道',
  },
]
</script>

<style scoped lang="less">
.Localne {
  margin-left: 25px;
  margin-bottom: 20px;
  .loca {
    margin-bottom: 10px;

    :deep(.el-button) {
      margin-left: 10px;
      width: 80px;
      height: 32px;
      line-height: 32px;
      border-radius: 4px 4px 4px 4px;
      opacity: 1;
      border: 1px solid #2d5aff;
    }
    > span {
      padding-right: 7px;
    }
  }
}
:deep(.el-input__wrapper) {
  width: 400px;
}

.benji {
  margin-left: 72px;
  color: #999;
}
.api {
  .title {
    color: #ff0000;
    padding-left: 15px;
  }
  .btn {
    margin-top: 20px;
    margin-left: 85px;
    margin-bottom: 20px;
    :deep(.el-button) {
      width: 68px;
      height: 32px;
      background: rgba(45, 90, 255, 0.08);
      border-radius: 4px 4px 4px 4px;
      color: #2d5aff;
    }
  }
  .text {
    display: inline-block;
    margin-right: 10px;
    width: 79px;
    text-align: end;
  }
  .textmar {
    margin-left: 46px;
  }
  .contenmain {
    margin-top: 5px;
    margin-bottom: 10px;
    color: #4285f4;
    padding-left: 88px;
    .iconfont {
      margin-right: 5px;
    }
    > span:nth-child(2) {
      padding-left: 40px;
    }
  }
}
.red {
  color: red;
}
</style>
