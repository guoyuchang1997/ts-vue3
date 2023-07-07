import { defineStore } from "pinia";
import { ref } from "vue";

const useDetailStore = defineStore('detailStore', () => {
  const visible = ref(false);

  function setVisible(v: boolean) {
    visible.value = v
  }

  return {
    visible,
    setVisible
  }
});

export default useDetailStore;