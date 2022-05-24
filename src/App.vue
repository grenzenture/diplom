<template>
  <nav>
    <img alt="logo" src="../src/assets/img/nwcc-logo.png" />
    <div class="nav-link-wrapper">
      <router-link to="/">Home</router-link>
      <a href="">Service</a>
      <a href="">About</a>
      <a href="">Contacts</a>
      <router-link to="/about">Career</router-link>
    </div>

    <button>EN</button>
  </nav>
  <router-view />
</template>

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

  .nav-link-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 70px;
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
</style>
