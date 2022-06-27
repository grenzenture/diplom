<template>
  <Transition name="fade" mode="out-in">
    <!-- <KeepAlive> -->
    <Suspense>
      <template #default>
        <App />
      </template>
      <template #fallback>
        <div class="suspense-background">
          <div class="gradient-background"></div>
          <!-- <div class="circle">
            <div class="gradient-background">
              <h1>hjnfrj</h1>
            </div>
          </div> -->
          <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
          <!-- <h1>Loading...</h1> -->
        </div>
      </template>
    </Suspense>
    <!-- </KeepAlive> -->
  </Transition>
</template>

<script>
import App from "./App.vue";

export default {
  name: "Suspenser",
  components: {
    App,
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
  // transition: opacity 1000s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  // opacity: 0;
}

.suspense-background {
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  height: 100vh;
  width: 100%;
  background-color: white;
  overflow: hidden;
}

@keyframes opas {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.gradient-background {
  opacity: 0;
  align-items: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;

  // position: absolute;
  left: 100%;
  bottom: 0;

  height: 100vh;
  width: 100vw;
  overflow: hidden;

  animation: opas 1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;

  // background-image: url("assets/img/bg.png");
  background-size: cover;

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
    width: 100vw;
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

// @keyframes ripple {
//   0% {
//     transform: scale(0);
//     // width: 0;
//     // height: 0;
//   }
//   95% {
//     filter: blur(0.1em);
//   }

//   100% {
//     // width: 300vmax;
//     // height: 300vmax;
//     transform: scale(1);
//     filter: blur(0);
//     // width: 200%;
//     // height: 200vh;
//     // transform: translate(0, 0);
//   }
// }

// .circle {
//   // position: absolute;
//   left: 0;
//   bottom: 0;
//   // transform: translate(-50%, 50%);
//   overflow: hidden;
//   z-index: 3;

//   border-radius: 50%;
//   // width: 100vw;
//   // height: 100vh;
//   width: 500vmax;
//   height: 500vmax;
//   background-color: transparent;
//   // opacity: 0.1;
//   filter: blur(1em);

//   animation: ripple 1s;
//   animation-timing-function: ease-in-out;
//   animation-fill-mode: forwards;
// }
</style>