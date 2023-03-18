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

const bannerIndex = ref(0);

const bannerChange = () => {
  setInterval(() => {
    bannerIndex.value++;
    while (bannerIndex.value == index.website.item_list.length) {
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
          :key="banner.id"
          v-lazy="banner.bannerL"
          alt=""
          v-for="(banner, index) in index.website.item_list"
        />
      </div>
    </div>
    <div class="info">
      <ul class="tags">
        <li v-for="work in index.website.work_list" :key="work.id">{{ work.name_en }}<span>{{ work.name }}</span></li>
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