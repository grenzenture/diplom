<template>
  <nav>
    <img alt="logo" src="../src/assets/img/nwcc-logo.png" />
    <div class="nav-link-wrapper">
      <router-link class="link-hover" to="/">Home</router-link>
      <a class="link-hover" href="#service">Service</a>
      <a class="link-hover" href="#about">About</a>
      <a class="link-hover" href="#contacts">Contacts</a>
      <router-link class="link-hover" to="/career">Career</router-link>
    </div>
    <TranslationShowCase />
    <!-- <button>EN</button> -->
  </nav>

  <router-view />

  <div class="footer" id="footer">
    <img class="footer-logo" alt="logo" src="@/assets/img/nwcc-solo-logo.png" />
    <div class="footer-content">
      <div class="footer-contacts">
        <p class="contacts-adress">
          1146 Walker Rd. Suite D Great Falls, VA 22066
        </p>
        <p class="contacts-email">info@nwcc.tech</p>
        <p class="contacs-tel">Phone: 703-775-0848</p>
      </div>
      <nav class="footer-menu">
        <router-link class="link-hover" to="/" href="#home">Home</router-link>
        <a class="link-hover" href="#service">Service</a>
        <a class="link-hover" href="#about">About</a>
        <a class="link-hover" href="#contacts">Contacts</a>
        <router-link class="link-hover" to="/career">Career</router-link>
      </nav>
    </div>
    <div class="footer-copyright">
      <p>Copyright © 2022 North West Consulting Company, LLC.</p>
      <p>All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
import TranslationShowCase from "./components/TranslationShowCase.vue";
// import { i18nextPromise } from "./i18n.js";

export default {
  name: "App",
  components: {
    TranslationShowCase,
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
  },
  // used in combination with Suspense.
  // useful when translations are not in-memory...
  // async setup() {
  //   await i18nextPromise;
  //   return {};
  // },
};
</script>

<style lang="scss">
// @import "normalize-scss/sass/normalize/import-now";
#app {
  font-family: "Montserrat";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  padding: 30px 80px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  z-index: 2;

  .nav-link-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 70px;
  }

  .link-hover {
    transition: 0.2s ease-in;
    &:hover {
      color: $CLR_BLUE;
    }
  }

  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: $CLR_BLUE;
    }
  }
}

.footer {
  background-color: #010101;
  height: 415px;
  padding: 0 80px;
  z-index: 2;

  .footer-logo {
    margin-bottom: 50px;
  }

  .footer-content {
    display: flex;
    .footer-contacts {
      width: 189px;
      font-family: "Montserrat";
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: $CLR_LIGHT;
      margin-right: 300px;

      p {
        margin: 0;
        margin-bottom: 15px;
      }
      .contacts-adress {
      }

      .contacts-email {
      }

      .contacts-tel {
      }
    }

    .footer-menu {
      font-size: 14px;
      line-height: 17px;
      display: flex;
      flex-direction: column;
      padding: 0;
      position: static;
      width: auto;

      a {
        padding-bottom: 10px;
      }
    }
  }

  .footer-copyright {
    margin-top: 70px;
    color: white;

    p {
      margin: 0;
      margin-bottom: 5px;
    }
  }
}
</style>
