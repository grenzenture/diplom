<template>
  <div class="home">
    <h1 class="home-title">From ideas<br />to reality</h1>
    <p class="home-text">
      You don't have to be on the phone all the time to get results from an
      insurance company.
    </p>
    <a class="home-button button" href="">Read more</a>
    <!-- <div v-for="post in posts" :key="post.id">
      <p>{{ post.test1 }}</p>
      <p>{{ post.test2 }}</p>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import server from "@/server";
import axios from "axios";

export default {
  name: "HomeView",

  components: {},

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
.home {
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

  /* Background */
  background: url("@/assets/img/bg.png") center center / cover
    no-repeat;
  // background: conic-gradient(
  //   from 90deg at 14.02% 100%,
  //   #0357ee -15.14deg,
  //   #aaeff4 2.47deg,
  //   #090909 176.81deg,
  //   #090909 319.21deg,
  //   #0357ee 344.86deg,
  //   #aaeff4 362.47deg
  // );
}

.home-title {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 113.4%;
  color: $CLR_LIGHT;
}

.home-text {
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
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
</style>
