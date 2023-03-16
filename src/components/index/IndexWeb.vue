<script setup>
import { ref, computed, watch } from "vue";
import { useIndexStore } from "@/stores/index";

const index = useIndexStore();

watch(
  () => index.swiper,
  (order) => {
    if (order == 1) {
      bannerChange();
    }
  }
);

const bannerList = [
  "https://portfolio.njlab.website/media/img/project/module/project_1/Top_View_Grid.webp",
  "https://portfolio.njlab.website/media/img/project/module/project_18/Top_View_Grid.webp",
  "https://portfolio.njlab.website/media/img/project/module/project_17/Top_View_Grid.webp",
];
const bannerIndex = ref(0);

const bannerChange = () => {
  setInterval(() => {
    bannerIndex.value++;
    while (bannerIndex.value == bannerList.length) {
      bannerIndex.value = 0;
    }
  }, 4000);
};
</script>


<template>
  <div class="banner" id="website">
    <div class="webs">
      <div class="web-bgcs">
        <div class="mask"></div>
        <img
          :class="[index == bannerIndex ? 'active' : 'leave']"
          :key="banner"
          v-lazy="banner"
          alt=""
          v-for="(banner, index) in bannerList"
        />
      </div>
    </div>
    <div class="info">
      <ul class="tags">
        <li>One-Page <span>一頁式</span></li>
        <li>CMS <span>管理系統</span></li>
        <li>Personal <span>個人形象</span></li>
        <li>Corporate <span>企業形象</span></li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
img {
  position: absolute;
  transition: all 2s linear;
}
img.leave {
  opacity: 0;
}
img.active {
  opacity: 1;
}
</style>