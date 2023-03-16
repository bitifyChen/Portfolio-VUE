<script setup>
import { ref, reactive, onMounted } from "vue";
import Card from "@/components/project/card.vue";
import { useProjectsStore } from "@/stores/projects";
const projects = useProjectsStore();
</script>

<template>
  <div class="main-block">
    <!--作品顯示控制-->
    <div class="card-controller">
      <label class="category custom-select">
        <input type="checkbox" />
        <div class="selected">
          <span><i class="fa-solid fa-sliders"></i></span>
          <p>{{ projects.type }}</p>
        </div>
        <ul class="dropdown">
          <li v-for="item in projects.typeList" :key="item" @click="projects.type = item"> {{ item }}</li>
        </ul>
      </label>
      <label class="sort custom-select">
        <input type="checkbox" />
        <div class="selected">
          <span><i class="fa-solid fa-arrow-down-z-a"></i></span>
          <p>{{ projects.sort }}</p>
        </div>
        <ul class="dropdown">
          <li v-for="item in projects.sortList" :key="item" @click="projects.sort = item">{{ item }}</li>
        </ul>
      </label>
    </div>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <!--作品列表-->
    <div class="cards">
      <Card
        v-for="card in projects.filterList"
        :name="card.name"
        :id="card.id"
        :type="card.type"
        :banner="card.banner"
        :date="card.date"
        :key="card.id"
      />
    </div>
  </div>
</template>


<style scoped>
</style>