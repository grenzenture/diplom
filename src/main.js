import { createApp } from "vue";
import i18n from './i18n'
// import App from "./App.vue";
import App from './Suspenser.vue'
import router from "./router";
import "normalize.css/normalize.css";
import fonts from "./assets/scss/fonts.scss";
import style from "./assets/scss/style.scss";

i18n(createApp(App)).use(router).mount("#app");
