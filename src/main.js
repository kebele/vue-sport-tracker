// THANKS TO JOHN KOMARNICKI FOR THIS APP
// https://www.youtube.com/c/JohnKomarnicki

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";

createApp(App)
  .use(router)
  .mount("#app");
