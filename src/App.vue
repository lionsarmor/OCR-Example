<script setup>
import { RouterView } from 'vue-router'
import DashboardHeader from './components/DashboardHeader.vue'
</script>

<template>
  <DashboardHeader />
  <main class="p-4">
    <RouterView />
  </main>
</template>

<style scoped></style>
