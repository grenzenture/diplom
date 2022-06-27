<template>
  <div class="lang-wrapper">
    <h1 class="hide">{{ $t("welcome") }}</h1>

    <div class="fade-block" v-if="languages">
      <span
        class="fade"
        v-for="(lng, index) in Object.keys(languages)"
        :key="lng"
      >
        <a
          class="link-hover"
          v-if="$i18next.resolvedLanguage !== lng"
          v-on:click="switchLang(lng)"
        >
          {{ languages[lng].nativeName }}
        </a>

        <a class="link-hover active-color" v-else v-on:click="switchLang(lng)">
          {{ languages[lng].nativeName }}
        </a>
        <span class="divider" v-if="index < Object.keys(languages).length - 1"
          >&nbsp;|&nbsp;</span
        >
      </span>
    </div>
  </div>
</template>

<script>
import i18next from "i18next";
export default {
  name: "TranslationShowCase",
  data() {
    return {
      languages: {
        en: { nativeName: "EN" },
        ru: { nativeName: "RU" },
      },
    };
  },
  mounted: function () {},
  computed: {},
  methods: {
    switchLang(lng) {
      i18next.changeLanguage(lng);
      this.currentLang = this.languages[lng].nativeName;
    },
  },
};
</script>

<style lang="scss" scoped>
.hide {
  display: none;
}

.active-color {
  color: $CLR_BLUE !important;
}
.link-hover {
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: $CLR_BLUE;
  }
}

.current {
  color: $CLR_BLUE;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.lang-wrapper {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.lang__list {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.lang__item {
  display: block;
  opacity: 0;
  transition: opacity 0.5s ease;
  margin-left: 16px;
}

.lang__link {
  display: block;
  font-weight: 400;
  color: #fff;
}
.lang__item--selected {
  opacity: 1;
  pointer-events: none;
  order: 1;
}

p {
  margin: 0;
}

.divider {
  color: #fff;
}
</style>