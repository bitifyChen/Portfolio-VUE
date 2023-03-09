import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", () => {
  //儲存作品列表
  const list = reactive([]);

  return { list };
});
