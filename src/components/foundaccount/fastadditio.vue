<template>
  <div class="company-cert">
    <div class="left">
      <div class="title">环境设置</div>
      <div class="input">
        <div class="conten">
          <div class="name namebotton">
            <div class="le">
              <span class="width">名称</span>
              <el-input v-model="from.name" placeholder="请输入内容"></el-input>
            </div>
            <div class="ri">
              <span class="width">分组</span>
              <el-select v-model="from.group" placeholder="请选择">
                <el-option
                  v-for="item in group"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </div>
            <div></div>
          </div>
          <div class="name namemar">
            <div class="le fs-xs">
              <span class="width"></span>
              如手动输入，名称=输入名称+序号组成
            </div>
            <div class="ri"> </div>
            <div></div>
          </div>
          <div class="name">
            <div class="le">
              <span class="width">标签</span>
              <el-select v-model="from.group" placeholder="请选择">
                <el-option
                  v-for="item in group"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled"
                >
                </el-option>
              </el-select>
            </div>
            <div class="ri">
              <span class="width">添加数量</span>
              <el-input v-model="from.name" placeholder="请输入内容"></el-input>
            </div>
            <div></div>
          </div>

          <div class="beizhu">
            <span class="width">打开网站</span>
            <div class="uriright">
              <div class="maxhei">
                <div class="uriribot" v-for="(item, index) in Urllist" :key="index">
                  <el-input v-model="item.url" placeholder="请输入内容"></el-input>
                  <span @click="Urllist.splice(index, 1)"><i class="iconfont icon-shanchu fs-xxl"></i></span>
                </div>
              </div>
              <div @click="Urllist.push({ url: '' })" class="openurl">+打开网址</div>
            </div>
          </div>
          <div class="beizhu">
            <span class="width">环境参数</span>
            <div class="righttext"
              ><i class="iconfont icon-windows1"></i>系统：Windows&nbsp; &nbsp; &nbsp; &nbsp;
              <i class="iconfont icon-chrome"></i> 浏览器：Chrome &nbsp; &nbsp; &nbsp; &nbsp;<i
                class="iconfont icon-yuyan"
              ></i
              >语言：基于IP生成</div
            >
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span class="pointer" style="color: #2d5aff" @click="isshwo = !isshwo"> 高级设置</span>
            <i
              class="iconfont icon-jiantou fs-xs"
              style="color: #2d5aff"
              :class="{ xialajiantou: isshwo, xialajiantous: !isshwo }"
            ></i>
          </div>
          <Expert v-if="isshwo" />
        </div>
      </div>
      <el-divider></el-divider>
      <div class="title">代理配置</div>
      <div class="flex">
        <div @click="numtype = 1" class="text flex pointer">
          <div class="checker"> <span :class="{ active: numtype === 1 }"></span> </div>&nbsp;&nbsp;自定义
        </div>
        <div @click="numtype = 2" class="text flex pointer">
          <div class="checker"> <span :class="{ active: numtype === 2 }"></span> </div>&nbsp;&nbsp;API提取
        </div>
      </div>
      <Localant :loaclne="numtype" />
      <el-divider></el-divider>
      <div class="title flex"
        ><div> 添加账号 <span class="text fs-sm">添加后可无需告知运营者账密，通过自动填充登录账号</span> </div>
        <el-switch v-model="addAccount" class="ml-2" style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ccc"
      /></div>
      <Platform v-if="addAccount" />
    </div>
    <div class="right">
      <Allocation />
    </div>
  </div>
  <div class="footer">
    <el-button type="primary">确定</el-button>
    <el-button>取消</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import Expert from '~/foundaccount/expert.vue'
import Localant from '~/foundaccount/Localnetwork.vue'
import Platform from '~/foundaccount/platform.vue'
import Allocation from '~/foundaccount/Allocation.vue'

const isshwo = ref(false)
const from = reactive({
  name: '',
  group: '',
  remark: '',
  Cookie: '',
})

const group = reactive([
  {
    value: '选项1',
    label: '黄金糕',
    disabled: false,
  },
  {
    value: '选项2',
    label: '吃枣',
    disabled: true,
  },
])
const Urllist = ref([])
const numtype = ref(1)
const addAccount = ref(false)
</script>

<style lang="less" scoped>
.xialajiantou {
  transform: rotate(0deg);
  transition: transform 0.3s;
}
.xialajiantous {
  transform: rotate(-90deg);
  transition: transform 0.3s;
}
.iconfont {
  margin-right: 5px;
}
.company-cert {
  display: flex;
  height: calc(100vh - 229px);
  overflow-y: auto;
  margin-bottom: 80px;
  :deep(.input) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    min-width: 1400px;
    .width {
      display: inline-block;
      width: 120px;
      padding-right: 10px;
      text-align: end;
    }

    .el-textarea {
      width: 918px;
    }
    .beizhu {
      display: flex;
      margin-bottom: 15px;
      position: relative;
      align-items: center;
      .maxhei {
        max-height: 150px;
        overflow: auto;
      }
      .icon-shanchu {
        color: red;
      }
      .righttext {
        color: #999;
      }
      .shezhi {
        padding-left: 15px;
        color: #2d5aff;
        cursor: pointer;
      }
      .openurl {
        width: 400px;
        height: 32px;
        background: #ffffff;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        border: 1px solid #2d5aff;
        text-align: center;
        line-height: 32px;
        color: #2d5aff;
        cursor: pointer;
      }
      .uriribot {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
      }
      .floatright {
        padding-left: 5px;
        cursor: pointer;
        // position: absolute;
        // top: 15px;
        // right: -120px;
        // &.el-icon-circle-plus-outline {
        //   color: #2d5aff;
        // }
      }
      .floatrights {
        right: -25px;
      }
      .floatright:hover {
        color: @fontactive;
      }
      .el-textarea .el-textarea__inner {
        height: 52px;
        resize: none;
      }
    }
    .Cookieheight {
      max-height: 156px;
      overflow-y: auto;
    }
    .name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;
      .el-input {
        width: 400px;
      }
      .el-input__icon {
        margin-top: 9px;
        height: unset;
        line-height: unset;
      }
      .el-input__inner {
        height: 32px;
        line-height: 32px;
      }
      .le {
        display: flex;
        align-items: center;
      }
      .ri {
        margin-right: 42px;
      }
    }
  }
  .right {
    width: 450px;
    // height: 774px;

    margin-bottom: 20px;
    margin-right: 15px;
  }
  .left {
    flex: 1;
    width: 0;
    .conten {
      margin-right: 168px;
      .namemar {
        color: #666666;
        margin-bottom: 5px;
      }
      .namebotton {
        margin-bottom: 5px;
      }
    }
  }
  .el-divider--horizontal {
    width: 95%;
    margin: 10px auto 20px;
  }
  .title {
    margin: 0 20px 12px 15px;
    height: 40px;
    line-height: 40px;
    background: #f7f7f7;
    border-radius: 4px 4px 4px 4px;
    font-size: 16px;
    font-weight: 600;
    color: #333333;
    padding-left: 10px;
    justify-content: space-between;
    padding-right: 10px;
    .text {
      color: #999;
    }
  }
}
.footer {
  position: absolute;
  bottom: 0;
  right: 0;
  height: 60px;
  line-height: 60px;
  width: 100%;
  background: #ffffff;
  box-shadow: 0px -2px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 0px 0px;
  z-index: 2008;
  padding-left: 20px;
  :deep(.el-button) {
    width: 160px;
    height: 40px;
    border: 1px solid #2d5aff;
    border-radius: 8px 8px 8px 8px;
  }
  :deep(.el-button--primary) {
    background: #2d5aff;
  }
}

.flex {
  margin-bottom: 13px;
  .text:nth-child(1) {
    margin-left: 25px;
  }
  .text:nth-child(2) {
    margin-left: 50px;
  }
}
</style>
