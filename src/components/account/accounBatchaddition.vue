<template>
  <Popup v-model:isShow="getIsShow" title="批量导入" verify="导入" width="800px" @sbmit="sbmit">
    <template #main>
      <div class="unlode">
        <div class="unl">
          <el-upload class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            multiple>
            <!-- <el-icon class="el-icon--upload"><upload-filled /></el-icon> -->
            <img class="image" src="@/assets/img/account/wenjianjia.png" alt="" />
            <div class="el-upload__text fs-xxl"> 将文件拖到此处，或<em>点击上传</em> </div>
            <!-- <template #tip>
          <div class="el-upload__tip"> jpg/png files with a size less than 500kb </div>
        </template> -->
          </el-upload>
          <div class="text fs-sm">
            <p>请下载账号<span class="color pointer">账号导入模版（xlsx）</span>, 并按照模版里的要求填写后再上传</p>
            <p>仅支持后缀名为xls、xlsx、csv的Excel文件，文件大小限10M以内，每次导入条数<span class="color pointer">不超过300条</span></p>
          </div>
        </div>
      </div>
    </template>
  </Popup>
</template>

<script setup lang="ts">
import Popup from '~/Popuplayer/index.vue'
import { computed, ref } from 'vue'

interface Props {
  /**
   * 组件显示
   */
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isShow: false,
})
const emits = defineEmits(['update:isShow'])
/**
 * 显示隐藏
 */
const getIsShow = computed({
  get: () => props.isShow,
  set: val => {
    emits('update:isShow', val)
  },
})
/**
 * 提交
 */
const sbmit = () => { }

</script>

<style scoped lang="less">
.unlode {
  width: 100%;
  margin-top: 30px;
  background:  rgba(43,83,229,0.05);
  border-radius: 8px 8px 8px 8px;
  overflow: hidden;
  margin-bottom: -20px;
}


.unl {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 10px 10px 10px 10px;
  opacity: 1;

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
  padding: 100px 0 80px;

  .el-upload__text {
    margin-top: 30px;
  }
}

.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #333;

  >p {
    margin-bottom: 10px;
  }

  >p::before {
    display: inline-block;
    width: 6px;
    height: 6px;
    content: '';
    background: rgba(43,83,229,0.1);
    border-radius: 10px 10px 10px 10px;
    margin-bottom: 3px;
    margin-right: 5px;
  }
  P:last-child{
    margin-bottom: 80px;
  }
}

.color {
  color: #FF9900;
}

</style>
