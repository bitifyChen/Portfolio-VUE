<script setup>
import { watch } from "vue";
import { useIndexStore } from "@/stores/index";
const index = useIndexStore();

watch(
  () => index.swiper,
  (order) => {
    if (order == 2) {
      aboutWriter();
    }
  }
);

let aboutText = index.about.bgc.word;
aboutText = aboutText + aboutText + aboutText + aboutText;
let i = 0;
const aboutWriter = () => {
  const bannerAboutP = document.querySelector("#about .bgc p");
  const bannerAbout = document.querySelector("#about");
  bannerAbout.classList.add("active");
  if (i < aboutText.length) {
    let textMap = index.about.bgc.word_mark;
    let text = aboutText[i];
    if (textMap.includes(text)) {
      bannerAboutP.innerHTML += `<span>${text}</span>`;
    } else {
      bannerAboutP.innerHTML += `${text}`;
    }
    i++;
    setTimeout(aboutWriter, 50);
  }
};
</script>


<template>
  <div class="banner" id="about">
    <div class="bgc">
      <p></p>
    </div>
    <div class="main">
      <div class="more">
        <p v-html="index.about.motto">
        </p>
      </div>
      <div class="pic">
        <img :src="index.about.info.photo" alt="" />
      </div>
      <div class="text">
        <h2>
          {{ index.about.info.name_en }}<span>{{ index.about.info.name }}</span>
        </h2>
      </div>
    </div>
    <div class="btn">
      <RouterLink to="/about" class="link">
        關於我們<i class="fa-solid fa-circle-right"></i>
      </RouterLink>
    </div>
  </div>
</template>

<style scope>
.pic {
  background-color: rgba(0,0,0,.5);
}
</style>