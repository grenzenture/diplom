<template>
  <div class="vacancy" v-for="card in $options.cards" :key="key">
    <a class="vacancy-link link-fade" href="card.link">
      <div class="vacancy-job-number">
        <p class="job-number">JOB {{ $options.cards.indexOf(card) + 1 }}</p>
      </div>
      <div class="vacancy-body">
        <h3 class="vacancy-title">{{ card.title }}</h3>
        <p class="vacancy-text">Our desired qualifications:</p>
        <p class="vacancy-text">{{ card.text }}</p>
        <p v-if="card.text2" class="vacancy-text">{{ card.text2 }}</p>
        <p v-if="card.text3" class="vacancy-text">{{ card.text3 }}</p>
      </div>
      <div class="vacancy-link-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <path
            d="M310.6 182.6c-12.51 12.51-32.76 12.49-45.25 0L192 109.3V480c0 17.69-14.31 32-32 32s-32-14.31-32-32V109.3L54.63 182.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l128-128c12.5-12.5 32.75-12.5 45.25 0l128 128C323.1 149.9 323.1 170.1 310.6 182.6z"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  cards: [
    {
      link: "hh.ru",
      title: "Business development assistant",
      text: "- Excellent written and spoken merican dialect of english including grammar and slang (C1 -C2)",
      text2: "- Working experience",
      text3: "- Strong digital/technical skills and/or experience using CRM",
    },
    {
      link: "hh.ru",
      title: "Customer service assistant",
      text: "- Excellent written and spoken merican dialect of english including grammar and slang (C1 -C2)",
      text2: "- Working experience",
      text3: "- Strong digital/technical skills and/or experience using CRM",
    },
    {
      link: "hh.ru",
      title: "IT specialists",
      text: "- Excellent written and spoken merican dialect of english including grammar and slang (C1 -C2)",
      text2: "- Working experience",
      text3: "- Strong digital/technical skills and/or experience using CRM",
    },
    {
      link: "hh.ru",
      title: "Designer",
      text: "- Excellent written and spoken merican dialect of english including grammar and slang (C1 -C2)",
      text2: "- Working experience",
      text3: "- Strong digital/technical skills and/or experience using CRM",
    },
  ],
};
</script>

<style lang="scss">
.vacancy {
  color: white;
  display: flex;
  width: 70%;
  border-top: 2px solid white;
  margin-bottom: 60px;
  padding-top: 10px;

  .vacancy-link {
    text-decoration: none;
    display: flex;
    color: white;
    width: 100%;
    &:hover {
      .vacancy-link-icon {
        opacity: 1;
      }
    }

    .vacancy-job-number {
      flex-basis: 10%;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      display: flex;
      align-items: center;
    }

    .vacancy-body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 15px;
      flex-basis: 80%;

      .vacancy-title {
        font-family: "Montserrat";
        font-weight: 500;
        font-size: 25px;
        // line-height: 24px;
        text-transform: uppercase;
        color: white;
        margin: 0;
        padding-bottom: 25px;
      }
      .vacancy-text {
        font-family: "Montserrat";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 21px;
        color: white;
        margin: 0;
        padding-bottom: 10px;
      }
    }

    .vacancy-link-icon {
      flex-basis: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.5s;
      svg {
        transform: rotate(45deg);
        width: 30px;
        height: 30px;
        fill: white;
      }
    }
  }
}
</style>