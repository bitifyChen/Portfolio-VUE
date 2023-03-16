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

let aboutText = "設計師Design 前端工程師Front-end engineer 攝影師Photographer";
aboutText = aboutText + aboutText + aboutText + aboutText;
let i = 0;
const aboutWriter = () => {
  const bannerAboutP = document.querySelector("#about .bgc p");
  const bannerAbout = document.querySelector("#about");
  bannerAbout.classList.add("active");
  if (i < aboutText.length) {
    let textMap = "設計前端攝影";
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
        <p>
          位於台中 /<br>
          致力把更多美麗的事物 /<br>
          呈現在大眾眼前。
        </p>
      </div>
      <div class="pic">
        <img src="https://via.placeholder.com/400x600" alt="" />
      </div>
      <div class="text">
        <h2>Chen Pin Hung<span>陳品宏</span></h2>
      </div>
    </div>
    <div class="btn">
      <a href="about.html" class="link">
        關於我們<i class="fa-solid fa-circle-right"></i>
      </a>
    </div>
  </div>
</template>