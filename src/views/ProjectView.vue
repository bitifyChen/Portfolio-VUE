<script setup>
import { ref, reactive, onMounted } from "vue";
import Card from "../components/project/card.vue";
import { useProjectsStore } from "@/stores/projects";
const project  = useProjectsStore();


</script>


<template>
  <div class="main-block">
    <!--作品列表-->
    <div class="cards">
      <Card
        v-for="card in project.list "
        :name="card.name"
        :id="card.id"
        :type="card.type"
        :banner="card.banner"
        :key="card.id"
      />
    </div>
  </div>
</template>


<style scoped>
</style>