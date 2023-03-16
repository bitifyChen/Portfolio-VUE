<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const menuOpen = ref(false);
const route = useRoute();
watch(route, () => {
    menuOpen.value = false;
});
</script>


<template>
  <header class="main-header">
    <input type="checkbox" id="menu-handler" v-model="menuOpen" />
    <label class="hb" for="menu-handler">
      <span></span>
      <span></span>
      <span></span>
    </label>
    <label class="main-menu" for="menu-handler">
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/project">Project</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </label>
  </header>
</template>


<style scoped>
</style>