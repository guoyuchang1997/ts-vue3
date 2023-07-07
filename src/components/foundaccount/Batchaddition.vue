<template>
  <div class="unlode" v-if="upload">
    <div class="unl" :class="{ unlshow: upload }">
      <el-upload
        class="upload-demo"
        drag
        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
        multiple
      >
        <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
        <img class="image" src="@/assets/img/account/wenjianjia.png" alt="" />
        <div class="el-upload__text fs-xxl"> 将文件拖到此处，或<em>点击上传</em> </div>
        <!-- <template #tip>
          <div class="el-upload__tip"> jpg/png files with a size less than 500kb </div>
        </template> -->
      </el-upload>
      <div class="text fs-sm">
        <p>请下载账号<span class="color pointer">导入模版（.xlsx）</span>并按照模版里的要求填写后再上传</p>
        <p>仅支持后缀名为xls、xlsx、csv的Excel文件，文件大小限10M以内，每次导入条数不超过300条</p>
      </div>
      <div class="btn" :class="{ active: upload }">
        <el-button @click="upload = !upload">确认添加</el-button>
      </div>
    </div>
  </div>
  <Table class="unlodes" v-else @close="upload = true" />
</template>

<script setup lang="ts">
import Table from './table.vue'

const upload = ref(true)
</script>

<style scoped lang="less">
.unlode,
.unlodes {
  width: 100%;
  margin-left: 10px;
  margin-right: 10px;
  height: calc(100vh - 150px);
  background: rgba(43, 83, 229, 0.05);
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;
}
.unlodes {
  background: unset;
}
.unl {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 480px;
  margin: 0 auto;

  border-radius: 10px 10px 10px 10px;
  opacity: 1;

  margin-top: 100px;
  &.unlshow {
    background: #ffffff;
    border: 1px dashed #2d5aff;
  }
}
.image {
  width: 100px;
}
:deep(.el-upload-dragger) {
  background-color: unset;
  border: unset;
  .el-upload__text {
    margin-top: 30px;
  }
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;
  > p {
    margin-bottom: 10px;
  }
  > p::before {
    display: inline-block;
    width: 6px;
    height: 6px;
    content: '';
    background: #f1840d;
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 3px;
    margin-right: 5px;
  }
}
.color {
  color: #2b53e5;
}
.btn {
  margin-top: 30px;
  :deep(.el-button) {
    width: 160px;
    height: 40px;
    line-height: 40px;
    background: #bbbbbb;
    border-radius: 8px 8px 8px 8px;
    color: #fff;
    border: #fff;
  }
  &.active {
    :deep(.el-button) {
      background: #2d5aff;
    }
  }
}
</style>
