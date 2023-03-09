<script setup>
import Header from "./components/base/Header.vue";
import BgcBlock from "./components/base/BgcBlock.vue";
import TopBlock from "./components/base/TopBlock.vue";
import BottomBlock from "./components/base/BottomBlock.vue";
import { ref, watch } from "vue";
import { useRoute } from "vue-router";


const route = useRoute();
const pageName = ref("index");
const webName = ref("ChenChen");

</script>


<template>
  <Header />
  <main :class="$route.name">
    <BgcBlock /> 
    <TopBlock />
    <RouterView />
    <BottomBlock />
  </main>
</template>
<style scoped>
</style>

