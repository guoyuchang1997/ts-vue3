import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

/**
 * 弹窗操作
 * @returns useDialog
 */
export const useDialog = () => {
  const dialogVisible = ref<boolean>(false) // 弹窗显示隐藏
  const currentTab = ref<number>(1) // 1: 自有代理 2: 自有设备
  const addType = ref<number>(1) // 1: 单个添加 2: 批量添加
  const ruleFormRef = ref<FormInstance>()
  // 单个添加表单
  const ruleForm = reactive({
    name: '',
    device: '',
    port: '',
    proxyType: '',
    account: '',
    password: '',
  })
  // 批量添加表单
  const batchForm = reactive({
    proxyType: '',
    proxyInfoList: '',
  })
  // 查看帮助弹窗visible
  const helpDialogVisible = ref(false)
  // 添加结果弹窗visible
  const resultDialogVisible = ref(false)
  // 编辑代理
  const editDialog = reactive({
    visible: false,
    form: {
      proxyType: 1,
      device: '192.168.0.1:8080；username；password；设备名称',
    },
  })

  const rules = reactive<FormRules>({
    name: [{ required: true, message: '请输入代理名称', trigger: 'blur' }],
    device: [{ required: true, message: '请输入设备地址或域名', trigger: 'blur' }],
    port: [{ required: true, message: '请输入端口号', trigger: 'blur' }],
    proxyType: [{ required: true, message: '请选择代理类型', trigger: 'change' }],
  })

  /**
   * 打开弹窗
   */
  const handleOpenDialog = () => {
    dialogVisible.value = true
  }

  /**
   * 关闭弹窗
   */
  const handleCloseDialog = () => {
    dialogVisible.value = false
  }

  /**
   * 确认弹窗
   */
  const handleConfirmDialog = () => {
    resultDialogVisible.value = true
  }

  /**
   * 切换代理类型
   * @param { number } type - 代理类型
   */
  const handleToggleProxyType = (type: number) => {
    currentTab.value = type
  }

  return {
    dialogVisible,
    currentTab,
    addType,
    ruleForm,
    ruleFormRef,
    rules,
    batchForm,
    helpDialogVisible,
    resultDialogVisible,
    editDialog,
    handleOpenDialog,
    handleCloseDialog,
    handleConfirmDialog,
    handleToggleProxyType,
  }
}
