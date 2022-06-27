/**
 *
 */
<template>
  <form enctype="application/x-www-form-urlencoded"
        action="/feedback/"
        method="post"
        id="form"
        class="resumeform"
        autocomplete="off">
    <div class="header">
      <h3>{{$t("send_res")}}</h3>
      <div class="close" @click="$parent.closeForm" v-html="$options.Svg.cross" />
    </div>

    <div class="input-wrapper">
      <input name="name" type="text" :placeholder="$t('name')" required />
      <label for="name">{{$t("name")}}</label>
    </div>

    <div class="input-wrapper">
      <input name="number" type="phone" v-mask="'+# ### ###-##-##'" :placeholder="$t('phone')" v-model="phonemod" required />
      <label for="number">{{$t("phone")}}</label>
    </div>

    <div class="input-wrapper">
      <input name="email" type="email" placeholder="Email" required />
      <label for="email">Email</label>
    </div>

    <div class="input-wrapper">
      <input name="message" type="text" :placeholder="$t('res_ref')" required />
      <label for="message">{{$t("res_ref")}}</label>
    </div>

    <!-- <input name="test" type="hidden" value="check" /> -->

    <input type="hidden" name="csrfmiddlewaretoken" :value="form_token">
    <input type="hidden" name="source" :value="source">
    <input type="hidden" name="type" value="3">
    <input type="hidden" name="user_datetime" :value="calcDate">

    <input @mouseover="fill(1)" @mouseout="fill(0)" @click="submit" class="send" :value="$t('send_res')" type="button" :style="background" />
  </form>
</template>

<script>
import Svg from "@/js/svg.js";

export default {
  Svg,
  data() {
    return {
      sending: false,
      percent: 0,
      phonemod: '',
      filling: false,
      source: window.location,
      form_token: "",
    }
  },

  computed: {
    background() {
      return {
        "background-image": "linear-gradient(135deg, #E71919 0%, #E71919 " + this.percent + "%, #1A1A1A " + this.percent + "%, #1A1A1A 100%)"
      }
    },
    
    calcDate() {
      var d = new Date();
      var new_date = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds());
      return (new_date/1000).toFixed(0);
    },
  },

  mounted() {
    this.form_token = document.getElementsByName("csrfmiddlewaretoken")[0].dataset.token;
  },

  methods: {
    submit() {
      let form = document.querySelector("#form");

      if (!form.checkValidity()) {
        alert(this.$t("form_warn"));
        return
      }

      this.loading = true;
      let formData = new FormData(form);
      this.sending = true;
      // console.log(form);
      
      fetch("/feedback/", {
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          alert(this.$t("form_sent"));
        }
      })
      .catch(response => console.error('Ошибка:', response.text));
    },
    
    fill(tobe) {
      this.filling = tobe;
      
      if (tobe) {
        this.filling = true;
        let i = 0;
        let fillgrad = () => {
          setTimeout(()=> {
            this.percent = i;
            i+=2;
            if (this.filling  && i <= 100) {
              fillgrad();
            }
          }, 1);
        };
        fillgrad();

      } else {
        let i = 100;
        let ungrad = () => {
          setTimeout(()=> {
            this.percent = i;
            i-=2;
            if (!this.filling && i >= 0) {
              ungrad();
            }
          }, 1);
        };
        ungrad();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 98%;
  background-color: #1A1A1A;
  padding: 48px;
  box-sizing: border-box;

  // Medium screens
  @media only screen and (min-width: 40.063em) {
  max-width: 626px;
  } /* min-width 641px, medium screens */

  .header, .input-wrapper {
    width: 100%;
  }

  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    h3 {
      margin: 0;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;

      // Medium screens
      @media only screen and (min-width: 40.063em) {
        font-size: 25px;
        line-height: 30px;
      } /* min-width 641px, medium screens */
    }

    .close {
      display: flex;
      align-items: center;
      width: 29px;
      height: 29px;
      stroke: white;
      cursor: pointer;
    }
  }

  label {
    align-self: baseline;
    color: #A9A9A9;
    opacity: 0;
    transition: opacity .3s ease;
    font-size: 14px;
    padding-left: 20px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column-reverse;

    &.textarea {
      &::before {
        content: "";
        width: 100%;
        height: 31px;
        background-image: linear-gradient(to bottom, transparent, #1A1A1A);
        position: relative;
        bottom: 33px;
      }
    }
  }

  input, textarea {
    height: 40px;
    margin-bottom: 24px;
    padding: 10px 20px;
    border: none;
    border-bottom: 2px solid $CLR_PRIMARY;
    background-color: #1A1A1A;
    font-family: "Open Sans";
    font-size: 24px;
    line-height: 33px;
    color: white;
    border-radius: 0%;
    
    // Medium screens
    @media only screen and (min-width: 40.063em) {
      font-size: 30px;
      line-height: 41px;
    } /* min-width 641px, medium screens */

    &::placeholder {
      font-size: 24px;
      line-height: 33px;
      color: #A9A9A9;

      // Medium screens
      @media only screen and (min-width: 40.063em) {
        font-size: 30px;
        line-height: 41px;
      } /* min-width 641px, medium screens */
    }

    &:focus {
      &::placeholder {
        opacity: 0;
      }
      + label {
        opacity: 1;
      }
    }
  }

  textarea {
    resize: none;
    height: 160px;
    padding-bottom: 0;
    scrollbar-width: none;
    margin-bottom: 0;

    ::-webkit-scrollbar-track {
      background-color: #787878;
    }

    ::-webkit-scrollbar {
        width: 2px;
        background-color: #1A1A1A;
    }
  }
  
  .send {
    width: 270px;
    height: 64px;
    margin-top: 10px;
    border: 2px solid $CLR_PRIMARY;
    box-sizing: border-box;
    // background-color: #1A1A1A;
    color: white;
    font-family: Montserrat;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
    transition: background-image 3s ease;

    // Medium screens
    @media only screen and (min-width: 40.063em) {
      margin-top: 40px;
    } /* min-width 641px, medium screens */
  }
}
.solution-header{
  color: white;
}

input:-webkit-autofill {
  background-color: #1A1A1A !important;
}
</style>
