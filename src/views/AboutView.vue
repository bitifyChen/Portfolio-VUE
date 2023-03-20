<script setup>
import { ref, onMounted, computed } from "vue";
import { useIndexStore } from "@/stores/index";
import { useAboutStore } from "@/stores/about";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/bundle";
const modules = ref([Navigation, FreeMode]);
const index = useIndexStore();
const { data } = useAboutStore();

onMounted(() => {
  fetch("https://chenchenworkshop.com/api/info")
    .then((response) => response.json())
    .then((data) => {
      index.base = ref(data.data);
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>


<template>
  <div class="main-block">
    <swiper
      :slidesPerView="'auto'"
      :navigation="true"
      :spaceBetween="0"
      :freeMode="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="box info">
          <h3>{{ index.base.name }}</h3>
          <ul>
            <li v-if="index.base.email">
              <span><i class="fa-regular fa-paper-plane"></i></span>
              <p v-html="index.email_display"></p>
            </li>
            <li v-if="index.base.line">
              <span><i class="fa-brands fa-line"></i></span>
              <p>{{ index.base.line }}</p>
            </li>
          </ul>
          <img :src="index.base.photo" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box base edu" v-if="data.education">
          <h3 class="en">Education</h3>
          <ul class="timeline">
            <li v-for="item in data.education" :key="item.id">
              <p class="item">{{ item.name }}</p>
              <p class="time">{{ item.start_date }}-{{ item.end_date }}</p>
              <p class="sub-item">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box base work" v-if="data.work">
          <h3 class="en">Work</h3>
          <ul class="timeline">
            <li v-for="item in data.work" :key="item.id">
              <p class="item">{{ item.name }}</p>
              <p class="time">{{ item.start_date }}-{{ item.end_date }}</p>
              <p class="sub-item">{{ item.description }}</p>
            </li>
          </ul>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="box base" v-if="data.experience">
          <h3 class="en">Experience</h3>
        </div>
      </swiper-slide>
      <swiper-slide v-for="item in data.experience" :key="item.id">
        <div class="box project">
          <p class="title">{{ item.name }}</p>
          <p class="time">{{ item.start_date }}-{{ item.end_date }}</p>
          <p class="position"><span>擔任-</span>{{ item.description }}</p>
          <p class="content" v-html="item.content"></p>
          <div class="pic" v-if="item.banner">
            <img :src="item.banner" alt="" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>


<style scoped>
.swiper-slide {
  width: auto;
}
.swiper {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex !important;
}
</style>