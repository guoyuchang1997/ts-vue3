<template>
  <div class="item">
    <p class="title">个人偏好设置</p>
    <div class="region pianhao">
      <p class="row sort padding-18">个人偏好设置</p>
      <div class="row">
        <span class="label right" style="width: 98px">启动环境时</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">仅检测页</span>
            <span class="radio">打开上次</span>
          </div>
          <span class="note">启动环境时打开检测页（含指定网址）</span>
        </div>
      </div>
      <div class="row line-20">
        <span class="label right" style="width: 98px">环境角标</span>
        <div class="content">
          <el-checkbox-group v-model="checkList" class="checkbox-box">
            <el-checkbox :label="1" class="tacitly-check">不展示角标</el-checkbox>
            <el-checkbox :label="2" class="tacitly-check">展示序号</el-checkbox>
            <el-checkbox :label="3" class="tacitly-check">展示名称</el-checkbox>
          </el-checkbox-group>
          <span class="note width-100">用于设置环境内的标识，环境在任务栏标识默认截取序号后5位</span>
        </div>
      </div>
      <div class="row">
        <span class="label right" style="width: 98px">导入书签</span>
        <div class="content">
          <el-button type="" class="plain-button">选择书签文件</el-button>
          <span class="note line-20">
            <el-tooltip class="box-item" effect="dark" placement="top-start">
              <template #content>
                <p style="width: 220px"
                  >请选择从浏览器导出的书签文件Chrome浏览器导出路径：“chrome右上角--书签管理--书签管理器--导出书签”</p
                >
              </template>
              <span style="padding-left: 10px; margin-left: -10px; margin-right: 7px; margin-bottom: 2px">
                <img src="@/assets/img/setting/help.png" width="16" height="16" alt="" srcset="" />
              </span>
            </el-tooltip>
            设置后，新建及导入环境时将带有此处的书签</span
          >
        </div>
      </div>
      <p class="row border-line"></p>
      <p class="title padding-18">全局设置<span>新的团队</span></p>
      <div class="row padding-18">
        <span class="label" style="width: 66px; font-weight: 400">环境设置</span>
        <div class="content">
          <span class="note">用于设置环境内的标识，环境在任务栏标识默认截取序号后5位</span>
        </div>
      </div>

      <div class="row">
        <span class="label right" style="width: 126px">环境多开</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">开启</span>
            <span class="radio">关闭</span>
          </div>
          <span class="note">禁止本团队内多人同时打开相同环境</span>
        </div>
      </div>

      <div class="row">
        <span class="label right" style="width: 126px">禁止加载图片</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">开启</span>
            <span class="radio">关闭</span>
          </div>
          <span class="note">自定义浏览器加载图片的最大尺寸，节省流量</span>
        </div>
      </div>
      <div class="row">
        <span class="label right" style="width: 126px">禁止加载视频</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">开启</span>
            <span class="radio">关闭</span>
          </div>
          <span class="note">关闭后，浏览器正常加载视频</span>
        </div>
      </div>
      <div class="row">
        <span class="label right" style="width: 126px">禁止播放声音</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">开启</span>
            <span class="radio">关闭</span>
          </div>
          <span class="note">关闭后，音视频默认正常播放</span>
        </div>
      </div>
      <div class="row">
        <span class="label right" style="width: 126px">上传/下载风控</span>
        <div class="content">
          <div class="radio-box">
            <span class="radio active">开启</span>
            <span class="radio">关闭</span>
          </div>
          <span class="note">使用非指定文件夹上传/下载时不提示风险</span>
        </div>
      </div>
      <div class="row">
        <span class="label right" style="width: 126px">仿真输入延迟</span>
        <div class="content">
          <!-- <el-button type="" class="plain-button">仿真输入延迟</el-button> -->
          <el-input-number
            class="input-box"
            style="width: 120px"
            v-model="valueInput"
            :min="1"
            controls-position="right"
            @change="handleChange"
          />
          <span class="note line-20">
            <el-tooltip class="box-item" effect="dark" placement="top-start">
              <template #content>
                <p style="width: 220px"
                  >温馨提示：此处输入值为毫秒，1000毫秒=1秒模拟仿真输入延迟毫秒数，输入值越
                  大，延迟就越大。整条信息输入完需要时间越久，建议设置不超过500毫秒。<br />
                  使用方法：在网页的输入框中，按快捷键 CTRL+shift+Y，将会吧剪切板中的内容逐
                  个按照您设定的延迟速度输入进去。</p
                >
              </template>
              <span style="padding-left: 10px; margin-right: 7px; margin-bottom: 2px">
                <img src="@/assets/img/setting/help.png" width="16" height="16" alt="" srcset="" />
              </span> </el-tooltip
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
/**
 * 版本提醒
 */
const value = ref(true)
const checkList = ref([1])
const checked2 = ref(true)
const valueInput = ref(123)
/**
 * 事件
 * @param val 值
 */
const handleChange = (val: any) => {
  console.log(val)
}
</script>

<style lang="less" scoped>
@import './item.less';
</style>
