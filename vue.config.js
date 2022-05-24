const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/_variables.scss";
        `,
      },
    },
  },
  // configureWebpack: (config) => {
  //   return {
  //     devServer: {
  //       proxy: {
  //         "/wp-json": {
  //           target: "https://wordpress",
  //           secure: false,
  //           changeOrigin: true,
  //         },
  //       },
  //     },
  //   };
  // },
});
