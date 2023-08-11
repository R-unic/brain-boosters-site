<script setup lang="ts">
import { RouterView } from "vue-router";
import TopBar from "./components/TopBar.vue";
import type Routes from "./routes";
</script>

<script lang="ts">
function getPageName(routeName: string): string {
  switch (routeName as (typeof Routes)[number]["path"]) {
    case "/": return "Home";
    case "/about-me": return "About";
    case "/contact": return "Contact";
    case "/services": return "Services";
  }
}
</script>

<template>
  <header>

  </header>

  <main>
    <TopBar />
    <div class="page">
      <h1 class="bold larger">{{ getPageName($route.path) }}</h1>
      <br/>
      <router-view/>
    </div>
  </main>
</template>
