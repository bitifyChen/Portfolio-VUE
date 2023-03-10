import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectDetailStore = defineStore("projectDetail", () => {
  //儲存作品資料
  const data = reactive({});
  return { data };
});
