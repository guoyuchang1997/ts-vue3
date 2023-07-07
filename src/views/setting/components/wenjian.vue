<template>
  <div>
    <div class="item">
      <p class="title">文件位置\缓存管理</p>
      <div class="region">
        <div class="line between">
          <span class="label">定期清理缓存文件，有效节省硬盘空间</span>
          <el-button class="tacitly-btn">立即清理</el-button>
        </div>
        <div class="line">
          <span class="label">临时缓存文件保存路径</span>
          <el-input v-model="url" class="max-width"></el-input>
          <span class="text-btn">修改路径</span>
        </div>
        <div class="line">
          <span class="label">清理缓存自动提醒</span>
        </div>
        <div class="line">
          <el-checkbox v-model="checked2"></el-checkbox>
          <span style="margin-left: 10px">当个人文件大小超过</span>
          <el-input v-model="size" class="min-width"></el-input>
          <span>MB，提示我清理</span>
        </div>
      </div>
    </div>
    <!-- 清理缓存 -->
    <el-dialog
      v-model="showTopup"
      class="account-dialog"
      title="个人缓存文件清理"
      width="809px"
      destroy-on-close
      center
      align-center
      :show-close="false"
    >
      <template #header>
        <div class="dialog-header">
          <div class="title"><img src="@/assets/img/setting/huancun.png" width="20" height="20" />个人缓存文件清理</div>
          <div class="close" @click="showTopup = false">
            <CloseIcon />
          </div>
        </div>
      </template>
      <div class="content wenjian-content">
        <div v-if="step" class="first-step">
          <p class="line">您的个人文件夹占用<span>117MB</span>，快去清理一下吧</p>
          <div class="tips">
            <p>清理过程中将自动关闭所有账号浏览器，请确认后操作。</p>
            <p>清理缓存数据文件，不会影响到个人下载的文件内容，只清理用户在浏览网页时所产生的缓存数据。</p>
          </div>
        </div>
        <div v-else class="second-step"
          ><el-icon><WarningFilled /></el-icon>清理缓存清理缓存前将关闭浏览器，是否关闭？</div
        >
      </div>
      <template #footer>
        <el-button v-if="step" plain type="primary" @click="step = !step">立即清理</el-button>
        <div v-else>
          <el-button plain @click="showTopup = false">取消</el-button>
          <el-button plain type="primary" @click="showTopup = false">确定删除</el-button>
        </div>
      </template>
    </el-dialog>
    <el-dialog
      v-model="downloadLocation"
      class="account-dialog"
      title="个人缓存文件清理"
      width="809px"
      destroy-on-close
      center
      align-center
      :show-close="false"
    >
      <template #header>
        <div class="dialog-header">
          <div class="title">修改临时文件缓存位置</div>
          <div class="close" @click="downloadLocation = false">
            <CloseIcon />
          </div>
        </div>
      </template>
      <div class="content download">
        <p class="line">
          <el-icon><WarningFilled /></el-icon>更改缓存目录，将自动清空现有缓存并关闭浏览器
        </p>
        <el-input v-model="text" placeholder=""></el-input>
        <p class="line warn"
          ><el-icon><WarningFilled /></el-icon>选择文件夹异常，请重新选项</p
        >
        <p class="notes">变更后，原来文件将移到新的位置下。</p>
      </div>
      <template #footer>
        <el-button plain @click="downloadLocation = false">取消</el-button>
        <el-button plain type="primary" @click="downloadLocation = false">确定</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CloseIcon from '@/assets/svg/team/close.svg'
/**
 * 语言选择
 */
const url = ref('C:/Users/Administrator/AppData/Roaming/kuajingvs')
const checked2 = ref(false)
const size = ref(100)
const showTopup = ref(false)
const step = ref(false)
const downloadLocation = ref(false)
const text = ref('C:/Users/Administrator/AppData/Roaming/kuajingvs')
</script>

<style lang="less" scoped>
@import './item.less';
</style>
