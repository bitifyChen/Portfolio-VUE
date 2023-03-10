<script setup>
import { ref, watch } from "vue";

import IndexDesign from "@/components/index/IndexDesign.vue";
import IndexWeb from "@/components/index/IndexWeb.vue";
import IndexAbout from "@/components/index/IndexAbout.vue";

import { useIndexStore } from "@/stores/index";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css/bundle";

const index = useIndexStore();

watch(
  () => index.swiper,
  (order) => {
    console.log(order);
  }
);
</script>
<template>
  <div class="main-block">
    <div class="banners">
      <Swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <SwiperSlide>
          <IndexDesign />
        </SwiperSlide>
        <swiper-slide>
          <IndexWeb />
        </swiper-slide>
        <swiper-slide v-slot="{ isActive }">
          <IndexAbout :active="isActive" />
        </swiper-slide>
      </Swiper>
    </div>
  </div>
</template>
<style scope>
.swiper {
  height: 100%;
  width: 100%;
  position: relative;
  display: flex !important;
}
</style>