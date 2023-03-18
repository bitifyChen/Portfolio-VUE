import { ref, reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useIndexStore = defineStore("index", {
  state: () => ({
    //Swiper
    swiper: 0,
    //Index Design
    design: {},
    //Index Website
    website: {},
    //Index About
    about: {},
    //Web Base
    base: {},
  }),
  getters: {
    //Page-Index
    poster_line_r:(state)=> { 
      return state.design.item_list.slice(0, 5);
    },
    poster_line_l:(state)=> { 
      return state.design.item_list.slice(-5);
    },
    //Page-About
    email_display: (state) => {
      let email = state.base.email;
      return `${email.split("@")[0]}<br>@${email.split("@")[1]}`;
    },
  },
  actions: {},
});
