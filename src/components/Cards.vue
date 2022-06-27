<template>
  <div class="card" v-for="card in $options.cards" :key="key">
    <div class="card-img">
      <img class="card-img" :src="card.img" alt="" />
    </div>
    <div class="card-body">
      <h3 class="card-title">{{ card.title }}</h3>
      <p class="card-text">{{ card.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  cards: [
    {
      img: require(`@/assets/img/img1.png`),
      title: "Consulting",
      text: "In a nutshell, consultants provide expert opinions, analysis, and recommendations to organizations or individuals, based on their own expertise",
    },
    {
      img: require(`@/assets/img/img2.png`),
      title: "Branding",
      text: "Branding is the process of communicating a unique selling proposition, or differential, that sets a product or service apart from the competition. Examples of branding techniques include the use of logos, taglines, jingles or mascots.",
    },
    {
      img: require(`@/assets/img/img3.png`),
      title: "IT SPECIALISTS",
      text: "An IT Specialist, or IT Support Specialist, is in charge of setting up, managing and troubleshooting the technology systems that a business uses to maintain computer and software networks",
    },
    {
      img: require(`@/assets/img/img4.png`),
      title: "DESIGN",
      text: "A design is a plan or specification for the construction of an object or system or for the implementation of an activity or process, or the result of that plan or specification in the form of a prototype, product or process",
    },
  ],
};
</script>

<style lang="scss" >
.card {
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  width: 260px;
  height: 380px;
  // margin-top: 45px;

  .card-img {
    height: 155px;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;

    .card-title {
      font-family: "Montserrat";
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #1e1b14;
      margin: 0;
    }
    .card-text {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: #1e1b14;
    }
  }
}
</style>