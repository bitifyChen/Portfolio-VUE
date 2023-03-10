<script setup>
import { useRoute } from "vue-router";
import { useIndexStore } from "@/stores/index";
const route = useRoute();
const index = useIndexStore();

</script>

<template>
  <div class="bottom-block">
    <template v-if="route.name === 'index'">
      <div class="banner-type">
        <div class="type" :class="{active : index.swiper === 1}" @click="index.swiper = 1">
          設計<br />Design {{ index.swiper }}
        </div>
        <div class="type" :class="{active : index.swiper === 2}" @click="index.swiper = 2">網站<br />Website</div>
        <div class="type" :class="{active : index.swiper === 3}" @click="index.swiper = 3">關於<br />About</div>
      </div>
    </template>

    <template v-else>
      <a class="link" @click="$router.go(-1)">
        <span></span>
        Back
      </a>
    </template>
    
    <p class="name">ChenChen</p>
  </div>
</template>

