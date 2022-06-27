<template>
  <div class="career">
    <VacancyCards />
  </div>
</template>

<script>
import VacancyCards from "@/components/VacancyCards.vue";

export default {
  name: "HomeView",

  components: {
    VacancyCards,
  },
};
</script>

<style lang="scss" scoped>
.career {
  align-items: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  background-color: $CLR_DARK_BG;
  width: 100%;
  padding: 0 80px;
  z-index: 1;
  padding-top: 200px;

}
</style>
