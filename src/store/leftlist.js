import { defineStore } from 'pinia'

const useUserStore = defineStore('leftlist', {
  state: () => {
    return {
      name: 'Account',
    }
    },
    actions: {
        changemate(val) {
            this.name = val
        }
    }
})

export default useUserStore