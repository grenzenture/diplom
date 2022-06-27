<template>
  <swiper
    :effect="'fade'"
    :fadeEffect="{
      crossFade: true,
    }"
    :spaceBetween="30"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :pagination="{
      el: '.swiper-pagination',
      type: 'fraction',
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero,
      renderFraction: onlyCurrent,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <div class="slider-controls">
      <div class="swiper-button-prev">
        <svg
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3754 2.29449e-07C19.0471 1.7073e-07 19.7191 0.251118 20.231 0.753357C21.2563 1.75783 21.2563 3.38508 20.231 4.38956L6.33322 18.0002L20.231 31.6104C21.2563 32.6149 21.2563 34.2422 20.231 35.2466C19.2056 36.2511 17.5444 36.2511 16.519 35.2466L0.769042 19.8179C-0.256349 18.8134 -0.256349 17.1862 0.769041 16.1817L16.519 0.752953C17.0301 0.249108 17.7028 2.88254e-07 18.3754 2.29449e-07Z"
            fill="white"
            fill-opacity="0.29"
          />
        </svg>
      </div>
      <div class="swiper-button-next">
        <svg
          width="21"
          height="36"
          viewBox="0 0 21 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.62459 36C1.95292 36 1.28092 35.7489 0.769043 35.2466C-0.256348 34.2422 -0.256348 32.6149 0.769043 31.6104L14.6668 17.9998L0.769043 4.38956C-0.256348 3.38508 -0.256348 1.75783 0.769043 0.753357C1.79443 -0.251119 3.45557 -0.251119 4.48096 0.753357L20.231 16.1821C21.2563 17.1866 21.2563 18.8138 20.231 19.8183L4.48096 35.247C3.9699 35.7509 3.29725 36 2.62459 36Z"
            fill="white"
            fill-opacity="0.3"
          />
        </svg>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <!-- <li v-for="item in items" :key="item.message">
      {{ item.message }}
    </li> -->

    <swiper-slide v-for="slide in $options.slides" :key="key">
      <div class="slide-wrapper">
        <img class="slide-img" :src="slide.img" alt="" />
        <div class="slide-content">
          <h2 class="blue-title">WHAT WE DO</h2>
          <h2 class="slide-title">{{ slide.title }}</h2>
          <p class="slide-text">
            {{ slide.text }}
          </p>
        </div>
      </div>
    </swiper-slide>
    <!-- <swiper-slide>
      <div class="slide-wrapper">
        <img class="slide-img" src="" alt="" />
        <div class="slide-content">
          <h2 class="blue-title">WHAT WE DO</h2>
          <h2 class="slide-title">Mana</h2>
          <p class="slide-text">
            We not only develop a set of measures to improve the management
            system, but also provide assistance in their implementation.
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-wrapper">
        <img class="slide-img" src="" alt="" />
        <div class="slide-content">
          <h2 class="blue-title">WHAT WE DO</h2>
          <h2 class="slide-title">ting</h2>
          <p class="slide-text">
            We not only develop a set of measures to improve the management
            system, but also provide assistance in their implementation.
          </p>
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-wrapper">
        <img class="slide-img" src="" alt="" />
        <div class="slide-content">
          <h2 class="blue-title">WHAT WE DO</h2>
          <h2 class="slide-title">Mgement сon</h2>
          <p class="slide-text">
            We not only develop a set of measures to improve the management
            system, but also provide assistance in their implementation.
          </p>
        </div>
      </div>
    </swiper-slide> -->
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFade, Pagination, Navigation } from "swiper";

export default {
  slides: [
    {
      img: require(`@/assets/img/slide-img.png`),
      title: "Management сonsulting",
      text: "We not only develop a set of measures to improve the management system, but also provide assistance in their implementation.",
    },
    {
      img: require(`@/assets/img/img3.png`),
      title: "Business digitalization",
      text: "The introduction of the latest technologies in different areas of activity, as well as a deep transformation of products.",
    },
    {
      img: require(`@/assets/img/img1.png`),
      title: "Accounting consulting",
      text: "Recommendations for solving problems arising when taking into account new concluded contracts, etc.",
    },
    {
      img: require(`@/assets/img/img2.png`),
      title: "Legal support",
      text: "The success of the business can largely depend on the quality of the provision of legal services in the conduct of business activities, therefore large enterprises in the staffing table are trying to develop legal structures.",
    },
    {
      img: require(`@/assets/img/img4.png`),
      title: "Solution of banking issues",
      text: "Analysis of the external environment is a prerequisite for the successful construction of a business structure. One of the most important external factors is interaction with the bank and bank control.",
    },
    {
      img: require(`@/assets/img/img3.png`),
      title: "Analysis of financial and economic activities",
      text: "Based on the results of the analysis, we attach recommendations for making management decisions in the current situation.",
    },
  ],

  components: {
    Swiper,
    SwiperSlide,
  },

  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    };
  },
  methods: {
    addZero(num) {
      return num > 9 ? num : "0" + num;
    },
    onlyCurrent(currentClass, totalClass) {
      return '<span class="' + currentClass + '"></span>';
    },
  },
};
</script>

<style lang="scss" >
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

// кастомизация свайпера

.slide-wrapper {
  display: flex;
  width: 85%;

  .slide-img {
    height: calc(100vh - 200px);
    flex-basis: 50%;
    display: flex;
    box-sizing: border-box;
    background-color: blueviolet;
  }
  .slide-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 106px;
    flex-basis: 50%;
    max-width: 380px;

    .slide-title {
      font-family: "Montserrat";
      font-weight: 700;
      font-size: 45px;
      line-height: 122.4%;
      color: $CLR_LIGHT;
      text-transform: none;
      text-align: start;
    }
    .slide-text {
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: $CLR_LIGHT;
      text-align: start;
    }
  }
}

.slider-controls {
  height: 127px;
  background: rgba(3, 87, 238, 0.24);
  display: flex;
  position: absolute;
  z-index: 1;
  left: calc(50% - 127px);
  width: 50%;
  bottom: 100px;
  transform: translateY(50%);

  .swiper-button-next,
  .swiper-button-prev {
    height: 100%;
    width: 127px;
    margin: 0;
    position: static;
    &::after {
      content: none;
    }
  }
  .swiper-button-prev {
    background: rgba(196, 196, 196, 0.25);
  }

  .swiper-button-next {
    position: static;
  }
  .swiper-pagination {
    display: flex;
    position: static;
    width: auto;
    flex-grow: 1;
    align-self: center;
    justify-content: end;
    font-family: "Montserrat";
    font-weight: 700;
    font-size: 96px;
    line-height: 117px;
    color: rgba(255, 255, 255, 0.29);
    padding-right: 50px;
  }
}

.blue-title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: $CLR_BLUE;
}
</style>