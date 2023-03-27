import { ref, reactive, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useWebStore = defineStore("web", {
  state: () => ({
    loading: false,
  }),
  getters: {},
  actions: {},
});
