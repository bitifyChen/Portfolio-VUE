<script setup>
import { useProjectsStore } from '@/stores/projects'
const { list } = useProjectsStore()
</script>

<template>
   {{ list }}
</template>
