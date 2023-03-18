import { ref, reactive, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useAboutStore = defineStore("about", {
  state: () => ({
    data: {},
  }),
  getters: {},
  actions: {},
});
