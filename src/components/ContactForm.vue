<template>
  <FormKit type="form" #default="{ value }" submit-label="send">
    <div class="form-body">
      <FormKit type="text" label="First name" validation="required|length:3" />
      <FormKit type="text" label="Last name" validation="required|length:3" />
      <FormKit type="email" label="E-mail*" validation="required|email" />
      <FormKit
        type="text"
        label="Your message*"
        validation="required|length:3"
      />
    </div>
  </FormKit>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style lang="scss" >
form {
  margin: 50px auto !important;
  width: 500px !important;
}

.formkit-inner {
  box-shadow: none !important;
  border: 0 !important;
  // border-bottom: 1px solid #ffffff !important;
  border-radius: 0 !important;
  // width: 450px !important;
  width: 500px !important;
  color: #ffffff !important;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
}

.formkit-input {
  box-shadow: none !important;
  border: 0 !important;
  border-bottom: 2px solid #ffffff !important;
  border-radius: 0 !important;
  // width: 450px !important;
  width: 100% !important;
  height: 30px !important;
  transition: 0.2s ease-in;
  color: #ffffff !important;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;

  &:focus-visible {
    outline: 0;
    border-bottom: 2px solid #70d8df !important;
  }
}

.formkit-label {
  color: #ffffff !important;
  font-family: "Montserrat" !important;
  font-weight: 400 !important;
  font-size: 14px !important;
  line-height: 17px !important;
}
.formkit-wrapper {
  button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 12px 35px;
    gap: 10px;
    width: 500px !important;
    // width: 450px !important;
    height: 41px !important;
    border: 1px solid #ffffff !important;
    background: transparent !important;
    margin-top: 30px !important;

    font-family: "Montserrat";
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: white;
    text-transform: uppercase;
    transition: 0.2s ease-in;

    &:hover {
      border: 1px solid #70d8df !important;
    }
  }
}
</style>