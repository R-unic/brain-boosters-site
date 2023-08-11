import "./assets/main.css"

import { createApp } from "vue"
import { createPinia } from "pinia"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Routes from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes: Routes
});

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.mount("#app");
