import { defineStore } from 'pinia'
import { ref } from "vue";

// 插件授权
export const usePluginAuthStore = defineStore('pluginAuth', () => {
  const pluginAuthModal = ref({
    visible: false,
    isReadAuth: true,
    isReadPrivacy: true,
  }) // 插件授权弹窗
  const pluginInfo = ref() // 插件信息

  // 打开、关闭插件授权弹窗
  function setModalVisible(visible: boolean) {
    pluginAuthModal.value.visible = visible
  }

  // 设置插件信息
  function setPluginInfo(info: any) {
    pluginInfo.value = info
  }

  return {
    pluginAuthModal,
    setModalVisible,
    setPluginInfo
  }
})

// 分配账号
export const usePluginDistributeStore = defineStore('pluginDistribute', () => {
  const visible = ref<boolean>(false)
  const keyword = ref<string>('') // 搜索关键词
  const isSelectAll = ref<boolean>(false) // 是否全选
  const pluginInfo = ref<Record<any, any>>() // 插件信息
  const accountList = ref<any[]>([
    {
      id: 1,
      name: '亚马逊',
      expand: false,
      children: [
        {
          id: 11,
          name: '亚马逊1',
          selected: false
        }
      ]
    }
  ]) // 账号列表
  const selectedAccountList = ref<any[]>([]) // 已选账号列表

  // 设置弹窗是否显示
  function setVisible(v: boolean) {
    visible.value = v
  }

  // 设置搜索关键词
  function setKeyword(k: string) {
    keyword.value = k
  }

  // 确定搜索
  function onSearch() {
    console.log(keyword.value)
  }

  return {
    visible,
    keyword,
    isSelectAll,
    pluginInfo,
    accountList,
    selectedAccountList,
    setVisible,
    setKeyword,
    onSearch
  }
})