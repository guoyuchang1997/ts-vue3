import { defineStore } from 'pinia'
// 参数1：store的唯一表示
// 参数2：对象，可以提供state actions getters
const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      count: 0,
    }
  },
  getters: {
   
  },
  actions: {
    
  },
})

export default useCounterStore