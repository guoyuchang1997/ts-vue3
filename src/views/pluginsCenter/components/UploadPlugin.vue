<script lang="ts" setup>
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import type { FormInstance, UploadInstance, UploadProps, UploadRawFile, UploadUserFile } from 'element-plus'
import { ElMessage, genFileId } from 'element-plus'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { editorConfig, toolbarConfig } from '../editorConfig.ts'

const addFormRef = ref<FormInstance>() // 添加应用表单实例
const addApplicationModal = ref({
  visible: false,
  formState: {
    name: '',
    package: '',
    icon: '',
    desc: '',
    banner: '',
  },
  formRules: {
    name: [{ required: true, message: '请输入应用名称', trigger: 'blur' }],
    package: [{ required: true, message: '请上传应用安装包', trigger: 'blur' }],
    icon: [{ required: true, message: '请上传应用图标', trigger: 'blur' }],
    desc: [{ required: true, message: '请输入应用描述', trigger: 'blur' }],
    banner: [{ required: true, message: '请上传应用banner', trigger: 'blur' }],
  },
}) // 添加应用弹窗配置
const uploadPackageInstance = ref<UploadInstance>() // 上传应用实例
const uploadIconInstance = ref<UploadInstance>() // 上传icon实例
const editorRef = shallowRef() // 编辑器实例，必须用 shallowRef
const fileList = ref<UploadUserFile[]>([]) // 上传文件列表

onBeforeUnmount(() => {
  // 组件销毁时，也及时销毁编辑器
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
/**
 * @description 编辑器创建成功时的钩子
 * @param {object} editor 编辑器实例
 */
const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}
// 打开弹窗
const showModal = () => {
  addApplicationModal.value.visible = true
}
/**
 * @description 关闭弹窗
 */
const closeAddApplication = () => {
  addApplicationModal.value.visible = false
  addApplicationModal.value.formState = {
    name: '',
    package: '',
    icon: '',
    desc: '',
    banner: '',
  }
  fileList.value = []
  if (!addFormRef.value) return
  addFormRef.value.resetFields()
}
/**
 * @description 超出文件个数限制时的钩子
 * @param {object} files 超出限制的文件列表，格式为数组，每项为一个 File 对象
 */
const handlePackageExceed: UploadProps['onExceed'] = files => {
  uploadPackageInstance.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  uploadPackageInstance.value!.handleStart(file)
}
/**
 * @description 上传成功时的钩子
 * @param {object} response 服务端响应内容
 * @param {object} uploadFile 上传的文件信息
 */
const handleIconSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  console.log(response)
  addApplicationModal.value.formState.icon = URL.createObjectURL(uploadFile.raw!)
}
/**
 * @description 上传 icon 之前的钩子，参数为上传的文件， 若返回false或者返回 Promise 且被 reject，则停止上传。
 * @param {object} rawFile 上传的文件
 * @returns {boolean | Promise} 是否继续上传
 */
const beforeIconUpload: UploadProps['beforeUpload'] = rawFile => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  }
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
/**
 * @description 删除已上传的 banner 图片
 * @param {object} uploadFile 上传的文件信息
 * @param {object} uploadFiles 上传的文件列表
 */
const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}
/**
 * @description 保存应用
 */
const saveApplication = async () => {
  if (!addFormRef.value) return
  await addFormRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

defineExpose({
  showModal,
})
</script>

<template>
  <el-dialog
    v-model="addApplicationModal.visible"
    :title="null"
    :width="820"
    append-to-body
    class="add-app"
    @close="closeAddApplication"
  >
    <template #header>
      <div class="custom-title">上传插件</div>
    </template>
    <template #default>
      <el-form
        ref="addFormRef"
        :model="addApplicationModal.formState"
        :rules="addApplicationModal.formRules"
        class="app-info-form"
        label-width="100px"
      >
        <el-form-item label="应用名称：" prop="name">
          <el-input v-model="addApplicationModal.formState.name" placeholder="请输入应用名称" />
        </el-form-item>
        <el-form-item label="安装包：" prop="package">
          <el-upload
            ref="uploadPackageInstance"
            :auto-upload="false"
            :limit="1"
            :on-exceed="handlePackageExceed"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            class="upload-package"
          >
            <template #trigger>
              <el-button class="upload-btn">
                <img alt="" src="@/assets/img/plugin/upload.png" />
                <span>上传应用</span>
              </el-button>
            </template>
            <template #tip>
              <div class="el-upload__tip">支持Crx格式，限制30M</div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="图标：" prop="icon">
          <el-upload
            ref="uploadIconInstance"
            :before-upload="beforeIconUpload"
            :on-success="handleIconSuccess"
            :show-file-list="false"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            class="icon-upload"
            drag
          >
            <template #default>
              <img
                v-if="addApplicationModal.formState.icon"
                :src="addApplicationModal.formState.icon"
                alt=""
                class="icon"
              />
              <div v-else class="up-slot">
                <img alt="" class="upload-icon" src="@/assets/img/plugin/upload.png" />
                <div class="text">点击上传或将图片拖拽到此处</div>
              </div>
            </template>
            <template #tip>
              <div class="el-upload__tip">比例1:1，至少60*60像素，支持jpg/jpeg/png格式，限制1M</div>
            </template>
          </el-upload>
        </el-form-item>
        <el-form-item label="简介：" prop="desc">
          <div style="border: 1px solid #ccc">
            <Toolbar
              :default-config="toolbarConfig"
              :editor="editorRef"
              mode="default"
              style="border-bottom: 1px solid #ccc"
            />
            <Editor
              v-model="addApplicationModal.formState.desc"
              :default-config="editorConfig"
              mode="simple"
              style="height: 500px; overflow-y: hidden"
              @onCreated="handleCreated"
            />
          </div>
        </el-form-item>
        <el-form-item label="轮播图：" prop="banner">
          <el-upload
            v-model:file-list="fileList"
            :on-remove="handleRemove"
            action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
            class="icon-upload"
            list-type="picture-card"
          >
            <template #default>
              <div class="up-slot">
                <img alt="" class="upload-icon-plus" src="@/assets/img/plugin/plus.png" />
                <div class="text">点击上传图片</div>
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </el-form>
    </template>
    <template #footer>
      <div class="footer">
        <el-button plain @click="closeAddApplication">取消</el-button>
        <el-button type="primary" @click="saveApplication">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style lang="less" scoped>
.add-app {
  .custom-title {
    font-size: 20px;
    font-family: Source Han Sans CN-Medium, Source Han Sans CN;
    font-weight: 500;
    color: #333333;
    line-height: 29px;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 14px;
    margin-bottom: 15px;
  }

  .app-info-form {
    .upload-package,
    .icon-upload {
      .el-upload__tip {
        font-size: 12px;
        font-family: Source Han Sans CN-Normal, Source Han Sans CN;
        font-weight: 350;
        color: #999999;
        line-height: 18px;
      }
    }

    .upload-package {
      .upload-btn {
        width: 105px;
        height: 32px;
        background: transparent;
        border-radius: 4px 4px 4px 4px;
        border: 1px dashed #dde3fd;
        cursor: pointer;

        img {
          width: 14px;
          height: 14px;
          margin-right: 5px;
        }

        span {
          font-size: 14px;
          font-family: Source Han Sans CN-Normal, Source Han Sans CN;
          font-weight: 350;
          color: #333333;
          vertical-align: middle;
        }
      }
    }

    .icon-upload {
      line-height: 1.5;

      :deep(.el-upload) {
        width: 100px;
        height: 100px;
      }

      :deep(.el-upload-dragger) {
        width: 100px;
        padding: 0;
        border: 0;
        border-radius: 0;
      }

      :deep(.el-upload--picture-card) {
        border: 0;
        background-color: transparent;
      }

      .icon {
        width: 100%;
        height: 100%;
      }

      .up-slot {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 100px;
        height: 100px;
        border: 1px dashed #dde3fd;
        padding: 0 5px;
        border-radius: 4px;

        .upload-icon {
          width: 28px;
          height: 28px;
          margin-bottom: 5px;
        }

        .upload-icon-plus {
          width: 40px;
          height: 40px;
        }

        .text {
          font-size: 12px;
          font-family: Source Han Sans CN-Normal, Source Han Sans CN;
          font-weight: 350;
          color: #999999;
          text-align: center;
        }
      }
    }
  }

  .footer {
    :deep(.el-button) {
      width: 80px;
      height: 40px;
      border-radius: 8px;

      &.is-plain {
        border-color: #333333;

        span {
          color: #333333;
        }
      }

      &:hover {
        &.is-plain {
          border-color: var(--el-color-primary);

          span {
            color: var(--el-color-primary);
          }
        }
      }
    }
  }
}
</style>
