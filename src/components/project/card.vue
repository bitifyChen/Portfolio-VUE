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
  date: {
    type: Date,
    default: "2020-01-01",
  },
});
</script>

<template>
  <RouterLink :to="`/project/${card.id}`" class="card">
    <div class="pic">
      <img v-lazy="card.banner" alt="" />
    </div>
    <div class="info">
      <p class="title">{{ card.name }}</p>
      <p class="type">{{ card.type }}</p>
    </div>
  </RouterLink>
</template>
