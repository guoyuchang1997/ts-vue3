<template>
  <div class="Allocation">
    <div class="alltop">
      <div class="letitle fs-lg">指纹信息</div>
      <div class="rititle fs-xs pointer flex"><i class="iconfont icon-suiji"></i>随机生成指纹</div>
    </div>
    <div class="alltop">
      <div class="letitle fs-lg"></div>
      <div class="ri">
        <span class="doths">建议不修改</span>
        <span class="dotls">可修改</span>
        <span class="dotred">慎重修改</span>
      </div>
    </div>
    <div v-for="item in fingerprint" :key="item.name" class="conmain flex">
      <div class="le fs-lg">
        <span :class="item.class">{{ item.name }}</span>
      </div>
      <div class="ri">
        <span>{{ item.content }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface fing {
  /**
   * 属性名
   */
  name: string
  /**
   * 属性值
   */
  content: string
  /**
   * 显示的颜色
   */
  class?: string
}
const fingerprint = reactive<fing[]>([
  {
    name: '浏览器内核',
    content: 'Yunlogin',
    class: 'dotred',
  },
  {
    name: 'User-Agent',
    content: 'Mozilla/5.0(WindowsNT10.0;Win64;x64)AppleWebKit/537.36(KHTML,likeGecko)Chrome/111.0.5563.65Safari/537.36',
    class: 'dotred',
  },
  {
    name: '时区',
    content: '基于ip匹配',
    class: 'dotred',
  },
  {
    name: 'WebRTC',
    content: '禁用',
    class: 'dotred',
  },
  {
    name: '地理位置',
    content: '[询问]基于IP匹配',
    class: 'dotred',
  },
  {
    name: '语言',
    content: '基于IP匹配',
    class: 'dotred',
  },
  {
    name: '分辨率',
    content: '默认',
    class: 'dotls',
  },
  {
    name: '字体',
    content: '默认',
    class: 'dotls',
  },
  {
    name: 'Canvas',
    content: '噪音',
    class: 'dotls',
  },
  {
    name: 'WebGl图像',
    content: '噪音',
    class: 'dotred',
  },
  {
    name: 'WebGL元数据',
    content: '噪音',
    class: 'dotred',
  },
  {
    name: 'AudioContext',
    content: 'GoogleInc.(NVIDIA)ANGLE(NVIDIA,NVIDIAGeForceGTX10603GBDirect3D11vs_5_0ps_5_0,D3D11)',
    class: 'dotred',
  },
  {
    name: '媒体设备',
    content: '噪音',
    class: 'doths',
  },
  {
    name: 'ClientRects',
    content: '噪音',
    class: 'doths',
  },
  {
    name: 'SpeechVoices',
    content: '噪音',
    class: 'doths',
  },
  {
    name: '硬件并发数',
    content: '8核',
    class: 'doths',
  },
  {
    name: '设备内',
    content: '8GB',
    class: 'doths',
  },
])
</script>

<style scoped lang="less">
.Allocation {
  padding: 15px;
  background: #f2f4f4;
  border-radius: 8px 8px 8px 8px;
}
.iconfont {
  padding-right: 5px;
}
.alltop {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  .letitle {
    font-weight: 600;
    color: #333333;
  }
  .rititle {
    width: 126px;
    height: 24px;
    border-radius: 4px 4px 4px 4px;
    border: 1px solid #00a3f4;
    justify-content: center;
    color: #00a3f4;
  }
  .ri {
    font-size: 14px;
    color: #333;
    > span {
      margin-right: 20px;
    }
  }
}
.conmain {
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
  align-items: baseline;
  .le {
    color: #666;
  }
  .ri {
    color: #333;
    max-width: 50%;
    word-wrap: break-word;
    line-height: 1.3;
  }
}
.doths::before {
  display: inline-block;
  width: 6px;
  height: 6px;
  content: '';
  background: #f1840d;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 3px;
  margin-right: 5px;
}
.dotls::before {
  display: inline-block;
  width: 6px;
  height: 6px;
  content: '';
  background: #2d5aff;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 3px;
  margin-right: 5px;
}
.dotred::before {
  display: inline-block;
  width: 6px;
  height: 6px;
  content: '';
  background: #c50303;
  border-radius: 10px 10px 10px 10px;
  margin-bottom: 3px;
  margin-right: 5px;
}
</style>
