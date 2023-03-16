<script setup>
import { watch } from 'vue';
import { useIndexStore } from "@/stores/index";
const index = useIndexStore()

watch(
  () => index.swiper,
  (order) => {
    if (order == 0) { 
      //Do some...
    }
  }
);


</script>


<template>
  <div class="banner" id="design">
    <div class="warp">
      <div class="mask"></div>
      <div class="posters">
        <div class="poster-line r">
          <img src="@/assets/img/index/ir.png" alt="" />
          <img src="@/assets/img/index/rocling2022.png" alt="" />
          <img src="@/assets/img/index/APSEC.png" alt="" />
          <img src="@/assets/img/index/老喜滷味.png" alt="" />
          <img src="@/assets/img/index/pa.png" alt="" />
        </div>
        <div class="poster-line l">
          <img src="@/assets/img/index/2020coding.png" alt="" />
          <img src="@/assets/img/index/2021coding.png" alt="" />
          <img src="@/assets/img/index/2022coding.png" alt="" />
          <img src="@/assets/img/index/吳班長.png" alt="" />
          <img src="@/assets/img/index/want.png" alt="" />
        </div>
      </div>
    </div>
    <div class="info">
      <ul class="tags">
        <li>Poster <span>海報</span></li>
        <li>Logo <span>商標</span></li>
        <li>Key Vision <span>主視覺</span></li>
        <li>Business Card <span>名片</span></li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
</style>