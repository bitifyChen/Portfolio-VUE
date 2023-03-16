<script setup>
import Header from "./components/base/Header.vue";
import BgcBlock from "./components/base/BgcBlock.vue";
import TopBlock from "./components/base/TopBlock.vue";
import BottomBlock from "./components/base/BottomBlock.vue";
import { useRoute } from "vue-router";
const route = useRoute();
</script>


<template>
  <Header />
  <main :class="route.name">
    <BgcBlock />
    <TopBlock />
    <RouterView  data-aos="zoom-out-right" data-aos-offset="0" data-aos-duration="500" data-aos-delay="100" />
    <BottomBlock />
  </main>
</template>

<style>
img[lazy="loading"] {
  animation: imgLoading 4s infinite;
}
@keyframes imgLoading {
    0%,100% {
      background-color:rgba(0, 0, 0, .5);
    }
    50% {
      background-color:rgba(0, 0, 0, .2);
    }
    100% {
      background-color:rgba(0, 0, 0, .5);
    }
  }
</style>