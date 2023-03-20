<script setup>
import { useProjectDetailStore } from "@/stores/projectDetail";
const { data } = useProjectDetailStore();
</script>

<template>
  <div class="main-block">
    <div class="project-block">
      <div class="project-info">
        <div class="title">
          <h2 class="name">{{ data.name }}</h2>
          <p class="type">Type-{{ data.type }}</p>
        </div>
        <input type="checkbox" id="desc-handler" />
        <div class="descriptions">
          <div class="description" v-if="data.description">
            <p class="title">設計概念</p>
            <div class="text">
              <p>
                {{ data.description }}
              </p>
            </div>
          </div>
          <div class="description" v-if="data.customer_description">
            <p class="title">客戶介紹</p>
            <div class="text">
              <p>
                {{ data.customer_description }}
              </p>
            </div>
          </div>
          <div class="description" v-if="data.goal_description">
            <p class="title">專案目標</p>
            <div class="text">
              <p>
                {{ data.goal_description }}
              </p>
            </div>
          </div>
          <a
            class="link"
            :href="data.link_url"
            target="_blank"
            v-if="data.link_url"
          >
            前往瀏覽
          </a>
          <ul class="tags">
            <li class="tag" v-for="tag in data.tags" :key="tag">{{ tag }}</li>
          </ul>
        </div>
        <label class="btn-desc" for="desc-handler">
          <p><i class="fa-solid fa-chevron-down"></i></p>
        </label>
      </div>
      <div class="project-pic">
        <template v-for="m in data.modules" :key="m.id">
          <iframe
            v-if="m.url"
            class="yt-video"
            :src="`https://www.youtube.com/embed/${m.url}?autoplay=1&mute=1&controls=0&playlist=${m.url}&loop=1`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <img
            v-else-if="m.banner"
            :class="`col-${m.size}`"
            v-lazy="m.banner"
            alt=""
          />
          <img
            v-else-if="m.gif"
            :class="`col-${m.size}`"
            v-lazy="m.gif"
            alt=""
          />
        </template>
      </div>
    </div>
  </div>
</template>
