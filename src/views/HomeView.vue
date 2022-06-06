<template>
  <div class="home-bg-wrapper">
    <div class="home section" id="home">
      <h1 class="home-title">
        {{ $t("home.title-1") }}<br />{{ $t("home.title-2") }}
      </h1>
      <!-- <h1>{{ $t("welcome") }}</h1>
    <p v-html="$t('descr')"></p> -->
      <p class="home-text section-text">
        {{ $t("home.text") }}
      </p>
      <a class="home-button button" href="">{{ $t("home.button") }}</a>
      <!-- <div v-for="post in posts" :key="post.id">
      <p>{{ post.test1 }}</p>
      <p>{{ post.test2 }}</p>
    </div> -->
    </div>
  </div>

  <div class="service section" id="service">
    <h2 class="service-title blue-title">
      {{ $t("service.blue-title") }}
    </h2>
    <h2 class="service-title section-main-title">
      {{ $t("service.title-1") }}<br />{{ $t("service.title-2") }}
    </h2>
    <div class="cards-wrapper">
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
      <div class="card"></div>
    </div>
  </div>

  <div class="about-slider-bg-wrapper" id="about">
    <div class="about section">
      <h2 class="about-title blue-title">
        {{ $t("about.blue-title") }}
      </h2>
      <h2 class="about-title section-main-title">
        {{ $t("about.title-1") }}<br />{{ $t("about.title-2") }}
      </h2>
      <p class="about-text section-text">
        {{ $t("about.text") }}
      </p>
    </div>

    <div class="slider section">
      <!-- <h2 class="about-title blue-title">
        {{ $t("about.blue-title") }}
      </h2> -->
      <Slider />
    </div>
  </div>


</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import server from "@/server";
import axios from "axios";
import Slider from "@/components/Slider.vue";

export default {
  name: "HomeView",

  components: {
    Slider,
  },

  data() {
    return {
      posts: null,
    };
  },

  computed: {
    loading() {
      return this.posts === null;
    },
  },

  async created() {
    let response = await axios.get("http://wordpress/wp-json/markers/v1/post/");
    this.posts = response.data.map((post) => ({
      test1: post.acf.Name,
      test2: post.acf.image,
      img: post.acf.img.url,
    }));
    console.log(this.posts);

    // let response = await server.get("markers/v1/post/");
    // this.posts = response.data.map((post) => ({
    //   test1: post.acf.Name,
    //   test2: post.acf.image,
    // }));
    // console.log(this.posts);
  },
};
</script>

<style scoped lang="scss">
.section {
  /* Center the content */
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 80px;

  /* Take full size */
  height: 100vh;
  width: 100%;
  z-index: 1;
}

.home-bg-wrapper {
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  /* Take full size */
  height: 100vh;
  width: 100%;
  /* Background */
  /* Background */
  // background: url("@/assets/img/bg.png") center center / cover no-repeat;
  background: conic-gradient(
    from 90deg at 14.02% 100%,
    #0357ee -15.14deg,
    #aaeff4 2.47deg,
    #090909 176.81deg,
    #090909 319.21deg,
    #0357ee 344.86deg,
    #aaeff4 362.47deg
  );

  &::after {
    content: "";
    width: 100%;
    height: 100vh;
    background: conic-gradient(
      from 90deg at 14.02% 100%,
      #0357ee -15.14deg,
      #aaeff4 2.47deg,
      #090909 176.81deg,
      #090909 319.21deg,
      #0357ee 344.86deg,
      #aaeff4 362.47deg
    );
    filter: blur(100px);
    position: absolute;
  }
}

.home-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 113.4%;
  color: $CLR_LIGHT;

  // чинит неработающий с after space-between
  // margin-top: 30vh;
}

.section-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
}

.home-text {
  color: $CLR_LIGHT;
  width: 297px;
}

.home-button {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 35px;
  gap: 10px;
  border: 1px solid #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: $CLR_LIGHT;
  text-decoration: none;
  text-transform: uppercase;
  margin-top: 75px;
}

.blue-title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: $CLR_DEEP_BLUE;
}

.section-main-title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  line-height: 122.4%;
}

.service {
  background-color: #ffffff;
}

.service-title {
  margin: 0 auto;
  text-align: center;
}

.cards-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.card {
  width: 260px;
  height: 380px;
  background-color: cadetblue;
}

.about-slider-bg-wrapper {
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  /* Take full size */
  height: 200vh;
  width: 100%;
  /* Background */

  // background: conic-gradient(
  //   from 102.51deg at -11.05% 37.9%,
  //   #aaeff4 -27.83deg,
  //   #0548c1 1.56deg,
  //   #010101 22.95deg,
  //   #010101 84.58deg,
  //   #ffffff 256.03deg,
  //   #ffffff 326.61deg,
  //   #aaeff4 332.17deg,
  //   #0548c1 361.56deg
  // );
  background: conic-gradient(
    from 104.77deg at -9.1% 39.35%,
    #0548c1 -8.98deg,
    #010101 11.74deg,
    #010101 52.5deg,
    #010101 136.12deg,
    #ffffff 256.03deg,
    #ffffff 317.04deg,
    #fdffff 325.6deg,
    #aaeff4 334.44deg,
    #0548c1 351.02deg,
    #010101 371.74deg
  );

  &::after {
    content: "";
    width: 100%;
    height: 200vh;
    // background: conic-gradient(
    //   from 98.11deg at -18.67% 41.44%,
    //   #aaeff4 -22.3deg,
    //   #0548c1 0.24deg,
    //   #010101 22.95deg,
    //   #010101 84.58deg,
    //   #ffffff 258.54deg,
    //   #ffffff 325.44deg,
    //   #ffffff 329.92deg,
    //   #aaeff4 337.7deg,
    //   #0548c1 360.24deg
    // );
    background: conic-gradient(
      from 102.59deg at -9.65% 40.45%,
      #0548c1 -7.29deg,
      #010101 18.2deg,
      #010101 84.58deg,
      #ffffff 258.54deg,
      #ffffff 279.38deg,
      #ffffff 328.26deg,
      #aaeff4 336.52deg,
      #0548c1 352.71deg,
      #010101 378.2deg
    );
    filter: blur(100px);
    position: absolute;
  }
}


</style>
