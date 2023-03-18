<script setup>
import { useIndexStore } from "@/stores/index";
const index = useIndexStore()
</script>


<template>
  <div class="banner" id="design">
    <div class="warp">
      <div class="mask"></div>
      <div class="posters">
        <div class="poster-line r">
          <img :src="poster.banner" v-for="poster in index.poster_line_r" :key="poster.id"/>
        </div>
        <div class="poster-line l">
          <img :src="poster.banner" v-for="poster in index.poster_line_l" :key="poster.id"/>
        </div>
      </div>
    </div>
    <div class="info">
      <ul class="tags">
        <li v-for="work in index.design.work_list" :key="work.id">{{ work.name_en }}<span>{{ work.name }}</span></li>
      </ul>
    </div>
  </div>
</template>
