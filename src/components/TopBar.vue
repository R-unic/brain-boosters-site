<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <navbar class="topbar">
    <router-link id="home" to="/">
      <img id="home-icon" src="https://brainboosters.online/meta.jpg" />
    </router-link>
    <router-link to="/services">Services</router-link>
    <router-link to="/about">About Me</router-link>
    <router-link to="/contact">Contact</router-link>
  </navbar>
</template>