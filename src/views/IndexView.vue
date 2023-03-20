<script setup>
import { ref, watch } from "vue";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css/bundle";

import IndexDesign from "@/components/index/IndexDesign.vue";
import IndexWeb from "@/components/index/IndexWeb.vue";
import IndexAbout from "@/components/index/IndexAbout.vue";

import { useIndexStore } from "@/stores/index";
const index = useIndexStore();
const modules = ref([Pagination, Autoplay, Navigation]);

const swiperInit = ref();
const onSwiper = (swiper) => {
  swiperInit.value = swiper;
};
const onSlideChange = (swiper) => {
  index.swiper = swiper.activeIndex;
};
watch(
  () => index.swiper,
  (order) => {
    swiperInit.value.slideTo(order);
  }
);
</script>
<template>
  <div class="main-block">
    <div class="banners">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        :modules="modules"
        :autoplay="{
          delay: 10000,
          disableOnInteraction: true,
        }"
        :navigation="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide>
          <IndexDesign />
        </SwiperSlide>
        <swiper-slide>
          <IndexWeb />
        </swiper-slide>
        <swiper-slide>
          <IndexAbout/>
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>
<style scoped>
.swiper {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex !important;
}
</style>