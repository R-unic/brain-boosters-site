import HomePage from "./components/HomePage.vue"
import AboutMePage from "./components/AboutMePage.vue";
import ServicesPage from "./components/ServicesPage.vue";
import ContactPage from "./components/ContactPage.vue";

const Routes = <const>[
  { path: "/", component: HomePage },
  { path: "/services", component: ServicesPage },
  { path: "/about-me", component: AboutMePage },
  { path: "/contact", component: ContactPage }
];

export default Routes;