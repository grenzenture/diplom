<template>
  <div class="section">
    <p>lklk</p>
    <!-- <h1>{{ $t("welcome") }}</h1>
    <p v-html="$t('descr')"></p>
    <hr />
    <div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
          <a
            v-if="$i18next.resolvedLanguage !== lng"
            v-on:click="$i18next.changeLanguage(lng)"
          >
            {{ languages[lng].nativeName }}
          </a>
          <strong v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </strong>
          <span v-if="index < Object.keys(languages).length - 1"
            >&nbsp;|&nbsp;</span
          >
        </span>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HomeView",
  // name: "TranslationShowCase",
  // data() {
  //   return {
  //     languages: {
  //       en: { nativeName: "English" },
  //       de: { nativeName: "Deutsch" },
  //     },
  //   };
  // },
};
</script>

<style lang="scss" scoped>
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

  background-color: #010101;
}
</style>
