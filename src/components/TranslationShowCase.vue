<template>
  <div class="hello">
    <!-- <h1>{{ $t("welcome") }}</h1> -->
    <!-- <p v-html="$t('descr')"></p> -->
    <div
      class="lang-wrapper"
      v-on:mouseover="(event) => visible(evebt)"
      v-on:mouseleave="() => hide()"
    >
      <!-- <p v-if="show">привет</p> -->
      <transition name="fade">
        <div class="lang-hide" :class="style" v-if="languages">
          <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
            <a
              class="tr-active"
              v-if="$i18next.resolvedLanguage !== lng"
              v-on:click="switchLang(lng)"
            >
              {{ languages[lng].nativeName }}
            </a>
            <a class="tr-hidden" v-if="$i18next.resolvedLanguage === lng">
              {{ languages[lng].nativeName }}
            </a>
            <span v-if="index < Object.keys(languages).length - 1"
              >&nbsp;|&nbsp;</span
            >
          </span>
        </div>
      </transition>
      <!-- <a class="lang-current">
        {{ currentLang }}
      </a> -->
    </div>
    <!-- <div class="lang-switcher">
      <div class="zawarudo"></div>
      <p class="cur-lang">{{ lang }}</p>
      <div class="lang-line" />
      <div class="lang-arrow" />
      <div class="dropdown">
        <div class="dropdown-content">
          <p
            class="drop-item"
            :class="{ current: lang === 'ru' }"
            @click="switchLang('ru')"
          >
            RU
          </p>
          <p
            class="drop-item"
            :class="{ current: lang === 'en' }"
            @click="switchLang('en')"
          >
            EN
          </p>
        </div>
      </div>
    </div> -->

    <!-- test -->
    <!-- <div class="lang-container" v-if="languages">
      <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
        <a
         class="first"
          v-if="$i18next.resolvedLanguage !== lng"
          @click="$i18next.changeLanguage(lng)"
          href=""
          >{{ languages[lng].nativeName }}</a
        >
        <a v-if="$i18next.resolvedLanguage === lng">
          {{ languages[lng].nativeName }}
        </a>
      </span>
    </div> -->
    <!-- test -->
  </div>

  <!-- <div>
      <div v-if="languages">
        <span v-for="(lng, index) in Object.keys(languages)" :key="lng">
          <a
            class="tr-active"
            v-if="$i18next.resolvedLanguage !== lng"
            v-on:click="$i18next.changeLanguage(lng)"
          >
            {{ languages[lng].nativeName }}
          </a>
          <a class="tr-hidden" v-if="$i18next.resolvedLanguage === lng">
            {{ languages[lng].nativeName }}
          </a>
          <span v-if="index < Object.keys(languages).length - 1"
            >&nbsp;|&nbsp;</span
          >
        </span>
      </div>
    </div> -->
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
      show: false,
      currentLang: "ff",
      style: "hide",
      // lang: i18next.language,
    };
  },
  mounted: function () {
    // this.currentLang = i18next.language;
  },
  methods: {
    /** Переключение языка сайта */
    // switchLang(lang) {
    //   i18next.changeLanguage(lang);
    //   this.lang = lang;
    //   const new_path = this.$router.currentRoute.path.replace(
    //     /\/\w\w/,
    //     `/${lang}`
    //   );
    //   this.$router.push({ path: new_path });
    // },

    visible: function (e) {
      e.preventDefault();
      this.style = "visible";
    },
    hide: function () {
      this.style = "hide";
    },

    switchLang(lng) {
      i18next.changeLanguage(lng);
      this.currentLang = this.languages[lng].nativeName;
    },
  },
};
</script>

<style lang="scss" scoped>
// .hide {
//   opacity: 0;
// }
// .visible {
//   opacity: 1;
// }
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

// .lang-hide {
//   opacity: 0;
//   transition: opacity 0.5s ease;
//   &:hover {
//     opacity: 1;
//   }
// }
// test
.lang__list {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.lang__item {
  display: block;
  // transform: translateY(100%);
  opacity: 0;
  transition: opacity 0.5s ease;
  margin-left: 16px;
}

.lang__link {
  display: block;
  // font-family: Roman,Arial;
  font-weight: 400;
  color: #fff;
}
.lang__item--selected {
  opacity: 1;
  pointer-events: none;
  order: 1;
}

// test
.lang-switcher {
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 113px;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  // Large screens
  @media only screen and (min-width: 1024px) {
    display: flex;
    margin-left: 20px;
    font-size: 14px;
    line-height: 134%;
  }

  // XLarge screens
  @media only screen and (min-width: 1441px) {
    width: 130px;
    margin-left: 24px;
    font-size: 16px;
    line-height: 134%;
  }

  &:hover {
    .dropdown {
      opacity: 1;
      pointer-events: all;
    }

    .lang-arrow {
      transform: rotate(-180deg);
    }
  }

  .zawarudo {
    display: flex;
    align-items: center;
    margin-right: 7px;
    margin-left: 10px;
    fill: white;
    transition: all 0.3s ease;
  }

  .cur-lang {
    text-transform: uppercase;
  }

  .lang-line {
    width: 1px;
    height: 20px;
    margin: 0 10px;
    background-color: white;
    transition: all 0.3s ease;
  }

  .lang-arrow {
    display: flex;
    align-items: center;
    margin-right: 10px;
    fill: white;
    transition: all 0.3s ease;
  }

  .dropdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 4px;
    opacity: 0;
    background-color: $CLR_DARK;
    transition: opacity 0.3s ease;
    box-sizing: border-box;
    box-shadow: 0px 7px 14px rgba(0, 0, 0, 0.05);
    border-top: 3px solid white;
    transform: translateY(100%);
    pointer-events: none;

    .drop-item {
      display: flex;
      justify-content: center;
      padding: 2px 0;
      transition: all 0.3s ease;
      color: white;

      &.current {
        color: white;
      }

      &:hover {
        background-color: white;
        color: white;
      }
    }
  }

  p {
    margin: 0;
  }
}
</style>