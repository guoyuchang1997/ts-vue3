import { defineStore } from 'pinia'
import ls from '@/hooks/storege'
const useUserStore = defineStore('user', {
  state: () => {
    return {
      token:ls.get('Authorization')
    }
  },
})

export default useUserStore