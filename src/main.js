import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "normalize.css/normalize.css";
import fonts from "./assets/scss/fonts.scss";
import style from "./assets/scss/style.scss";

createApp(App).use(router).mount("#app");
