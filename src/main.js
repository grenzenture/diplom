import { createApp } from "vue";
import i18n from "./i18n";
import { plugin, defaultConfig } from "@formkit/vue";
// import App from "./App.vue";
import App from "./Suspenser.vue";
import router from "./router";
import "normalize.css/normalize.css";
import "@formkit/themes/genesis";
import fonts from "./assets/scss/fonts.scss";
import style from "./assets/scss/style.scss";

const app = i18n(createApp(App));

app.use(plugin, defaultConfig);
app.use(router);
app.mount("#app");

/**
 * Анимация появления текста
 * Проходим по каждому блоку fade_block
 * Затем по каждому элементу в блоке,
 * для каждого элемента (если он виден на экране) меняем opacity с задержкой 0.3 секунды от предыдущего элемента.
 * Две версии анимации: для использования с плавным скроллом и с обычным скроллом.
 * @param {*} fade_block - селектор блока с текстом
 */
// document.addEventListener("DOMContentLoaded", () => {
//   setTimeout(() => {
//     let blocks = document.querySelectorAll(".fade-block");
//     console.log(blocks);

//     for (let i = 0; i < blocks.length; i++) {
//       let block = blocks[i];

//       if (window.innerWidth > 1024) {
//         let delay = 0.3;
//         for (let j = 0; j < block.children.length; j++) {
//           let item = block.children[j];
//           console.log(item);
//           item.style.transition = `opacity 1.5s ease-out ${delay}s`;
//           item.style.opacity = "1";
//           delay += 0.3;
//         }
//       }
//     }
//   }, 1700);
// });
