<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <h1>NWCC</h1>
    <div v-for="post in posts" :key="post.id">
      <p>{{ post.test1 }}</p>
      <p>{{ post.test2 }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import server from "@/server";
import axios from "axios";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
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
