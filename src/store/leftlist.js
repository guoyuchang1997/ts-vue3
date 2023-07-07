import { defineStore } from 'pinia'
import {ref} from 'vue'
const useUserStore = defineStore('leftlist', {
  state: () => {
    return {
      name: sessionStorage.getItem('userStoreName') || 'accoun',
      Currentname: sessionStorage.getItem('userStoreCurrentname') || '账号管理',
    }
  },
  actions: {
    /**
     *  当前点击元素
     * @param {*} val 传递过来的mate
     */
    changemate(val) {
      this.name = val
      sessionStorage.setItem('userStoreName', val)
    },
    /**
     * 标题
     * @param val 传递
     */
    changeCurrentname(val) {
      this.Currentname = val
      sessionStorage.setItem('userStoreCurrentname', val)
    },
  },
})

export default useUserStore
