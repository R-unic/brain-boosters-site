<script setup lang="ts">
import { RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
</script>

<template>
  <header>

  </header>

  <main>
    <TopBar />
    <div class="page">
      <router-view/>
    </div>
  </main>
</template>
