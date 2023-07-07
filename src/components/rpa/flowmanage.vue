<template>
  <div class="flowmange">
    <div class="top">
      <div class="le">
        <div class="Select flex pointer fs-base" @click="Select = !Select">
          <div class="checker"> <span :class="{ active: Select }"></span> </div>&nbsp;&nbsp;全选
        </div>
      </div>
      <div class="ri fs-base"> 创建流程数 : <span class="nuber">3000</span></div>
    </div>
    <div class="main">
      <div v-if="rpa" class="lenth">
        <div v-for="i in 100" :key="i" class="conten">
          <div class="t">
            <div class="l"> <el-checkbox v-model="checked1" label="Amazon评论爬取" size="large" /></div>
            <div class="r">
              <i class="iconfont icon-caozuorizhi"></i>
              <i class="iconfont icon-fenxiang"></i>
              <el-popover :width="80" placement="bottom-start" popper-class="action-popover" trigger="click">
                <div id="opts" class="opts pointer" v-for="(item, index) in sorts" :key="index">
                  <i class="iconfont" :class="item.icon"></i>
                  <span class="text">{{ item.text }}</span>
                </div>

                <template #reference>
                  <div class="dele pointer"><i class="iconfont icon-vg pointer"></i></div>
                </template>
              </el-popover>
            </div>
          </div>
          <div class="miaoshu fs-base"> 描述描述 描述描述 描述描述 描述描述 描述描述 描述描述 描述描述 </div>
          <div class="footer flex fs-base">
            <div class="foole pointer">分组</div>
            <div class="foori pointer" @click="activaterpashow = true">启动</div>
          </div>
        </div></div
      >
      <div v-else class="ling">
        <div class="image">
          <img src="@/assets/img/rpa/chahua.webp" alt="" />
        </div>
        <div class="text fs-base">暂无数据 ~~</div>
        <el-button @click="rpa = true" class="fs-lg"
          ><div class="flex"
            ><i class="iconfont icon-yuanquanjiahao fs-xl"></i><span class="fs-sm">创建任务流程</span></div
          ></el-button
        >
      </div>
    </div>
    <Activaterpa v-if="activaterpashow" v-model:is-show="activaterpashow" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Activaterpa from './activaterpa.vue'

const Select = ref<boolean>(false)
const checked1 = ref<boolean>(false)

const sorts = ref([
  {
    icon: 'icon-a-renwu11',
    text: '复制模板',
  },
  {
    icon: 'icon-xuhao2',
    text: '置顶',
  },
  {
    icon: 'icon-shanchu',
    text: '删除',
  },
])
const rpa = ref(false)
const activaterpashow = ref<boolean>(false)
</script>

<style scoped lang="less">
.iconfont {
  margin-right: 5px;
}
:deep(.el-popover.el-popper) {
  // width: 87px;
  // height: 106px;
  // box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  // border-radius: 8px 8px 8px 8px;
  // border: 1px solid #2b53e5;
}
.opts {
  padding-bottom: 15px;
}
.opts:nth-child(3) {
  padding-bottom: 5px;
}
.opts:hover {
  color: #2b53e5;
}
.flowmange {
  padding: 20px;

  .top {
    display: flex;
    justify-content: space-between;
    .nuber {
      color: #2b53e5;
    }
  }
  .lenth {
    margin-top: 18px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    height: calc(100vh - 190px);
    overflow-y: auto;
    padding-bottom: 10px;
  }
  .conten {
    width: 280px;
    height: 155px;
    padding: 15px;
    background: #f9f9f9;
    border-radius: 8px 8px 8px 8px;
    .el-checkbox.el-checkbox--large {
      height: unset;
    }
    .t {
      display: flex;
      justify-content: space-between;
      .iconfont {
        color: #999;
      }
      .dele {
        display: inline-block;
      }
    }
    .miaoshu {
      height: calc(155px - 85px);
      margin-top: 10px;
      color: #999;
    }
    .footer {
      justify-content: space-between;
      margin-bottom: 10px;
      .foole,
      .foori {
        width: 56px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 4px;
        background: #2b53e5;
        color: #fff;
      }
      .foole {
        color: #2b53e5;
        background: #e8edff;
      }
    }
  }
}
.ling {
  margin-top: 18px;
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 0px 0px 0px 0px;
  text-align: center;
  border: 1px dashed #ccc;
  .image {
    margin-top: 140px;
    display: inline-block;
    height: 126px;
  }
  .text {
    margin: 10px 0 20px;
    color: #666;
  }
  :deep(.el-button) {
    background: #2d5aff;
    color: #fff;
    height: 40px;
    margin-bottom: 140px;
    .iconfont {
      margin-top: -4px;
    }
  }
}
</style>
