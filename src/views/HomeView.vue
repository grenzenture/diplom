<template>
  <div class="home-bg-wrapper">
    <div class="home section fade-block" id="home" :key="componentKey">
      <h1 class="home-title fade">
        {{ $t("home.title-1") }}<br />{{ $t("home.title-2") }}
      </h1>
      <p class="home-text section-text fade">
        {{ $t("home.text") }}
      </p>
      <a class="home-button button fade" href="#service">{{
        $t("home.button")
      }}</a>
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
      <Cards />
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
      <Slider />
    </div>
  </div>

  <div class="contacts section" id="contacts">
    <h2 class="contacts-title section-main-title">
      {{ $t("contacts.title") }}
    </h2>
    <ContactForm />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import server from "@/server";
import axios from "axios";
import Slider from "@/components/Slider.vue";
import Cards from "@/components/Cards.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "HomeView",

  components: {
    Slider,
    Cards,
    ContactForm,
  },

  data() {
    return {
      posts: null,
      test: null,
    };
  },

  computed: {
    loading() {
      return this.posts === null;
    },
  },

  mounted() {
    const anchors = document.querySelectorAll('a[href*="#"]');
    for (let anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
    this.fadeTextBlock(".fade-block");
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

  methods: {
    /**
     * Анимация появления текста
     * Проходим по каждому блоку fade_block
     * Затем по каждому элементу в блоке,
     * для каждого элемента (если он виден на экране) меняем opacity с задержкой 0.3 секунды от предыдущего элемента.
     * Две версии анимации: для использования с плавным скроллом и с обычным скроллом.
     * @param {*} fade_block - селектор блока с текстом
     */
    fadeTextBlock(fade_block) {
      console.log(fade_block);
      setTimeout(() => {
        let blocks = document.querySelectorAll(fade_block);
        console.log(blocks);

        for (let i = 0; i < blocks.length; i++) {
          let block = blocks[i];

          if (window.innerWidth > 1024) {
            let delay = 0.3;
            for (let j = 0; j < block.children.length; j++) {
              let item = block.children[j];
              console.log(item);
              item.style.transition = `opacity 1.5s ease-out ${delay}s`;
              item.style.opacity = "1";
              delay += 0.3;
            }
          }
        }
      }, 1100);
    },
  },
};
</script>

<style scoped lang="scss">
.fade {
  opacity: 0;
  transition: opacity 1.5s ease-out 0.2s;
}
.section {
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  padding: 0 80px;

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

  height: 100vh;
  width: 100%;
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
  margin-bottom: 35px !important;
}

.section-main-title {
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 45px;
  line-height: 122.4%;
  margin: 0;
  margin-bottom: 50px !important;
}

.service {
  background-color: $CLR_LIGHT;
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

.about-text {
  width: 533px;
  margin: 0;
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

.contacts {
  background-color: $CLR_DARK_BG;

  .contacts-title {
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: $CLR_LIGHT;
    text-align: center;
    width: 100%;
    margin-top: 80px;
  }
}
</style>