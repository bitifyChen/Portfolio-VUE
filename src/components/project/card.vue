<script setup>
const card = defineProps({
  name: {
    type: String,
    default: "作品名稱",
  },
  id: {
    type: Number,
    default: 0,
  },
  type: {
    type: String,
    default: "網站設計",
  },
  banner: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <a class="card" href="project-detail.html">
    <div class="pic">
      <img :src="card.banner" alt="" />
    </div>
    <div class="info">
      <p class="title">{{card.name}}</p>
      <p class="type">{{card.type}}</p>
    </div>
  </a>
</template>
