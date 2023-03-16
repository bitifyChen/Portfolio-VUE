import { ref, reactive, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    list: [],
    typeList: ["全部分類", "網站建置", "網頁切版", "平面設計", "攝影相關"],
    type: "全部分類",
    sortList: ["新->舊", "舊->新"],
    sort: "新->舊",
  }),
  getters: {
    filterList: (state) => {
      let list = state.list;
      if (state.sort == "新->舊") {
        list.sort((a, b) => new Date(b.date) - new Date(a.date));
      } else if (state.sort == "舊->新") {
        list.sort((a, b) => new Date(a.date) - new Date(b.date));;
      }
      if (state.type == "全部分類") {
        return list;
      }
      return list.filter((item) => item.type == state.type);
    },
  },
  actions: {},
});
