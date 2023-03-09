<script setup>
import { watch } from "vue";

const bannerActive = defineProps(["active"]);
watch(bannerActive, (state) => {
  if (state) {
    aboutWriter();
  }
});

let aboutText = "設計師Design 前端工程師Front-end engineer 攝影師Photographer";
aboutText = aboutText + aboutText + aboutText + aboutText;
let i = 0;
function aboutWriter() {
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
}
</script>


<template>
  <div class="banner" id="about">
    <div class="bgc">
      {{ bannerActive }}
      <p>1234</p>
    </div>
    <div class="main">
      <div class="more">
        <p>
          來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧來去瞧瞧
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