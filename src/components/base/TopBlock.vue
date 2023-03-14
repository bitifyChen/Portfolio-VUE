<script setup>
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const pageName = ref("");

onMounted(async () => {
  await router.isReady();
  pageName.value = route.name;
});

watch(route, (to) =>
{
  typewriter(pageName.value, to.name, pageName);
});

const typewriterIcon = ref("");
const typewriter = (oldWord, newWord, place) => {
  typewriterIcon.value = "|";
  //clear
  let x = oldWord.length;
  clearing();
  function clearing() {
    if (x >= 0) {
      place.value = oldWord.slice(0, x);
      x--;
      setTimeout(clearing, 100);
    } else {
      typing();
    }
  }
  //add
  let i = 0;
  function typing() {
    if (i < newWord.length + 1) {
      place.value = newWord.slice(0, i);
      i++;
      setTimeout(typing, 100);
    } else {
      typewriterIcon.value = ".";
    }
  }
};
</script>

<template>
  <div class="top-block">
    <h2 class="title">{{ pageName }}{{ typewriterIcon }}</h2>
  </div>
</template>
