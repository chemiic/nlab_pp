<template>
  <DefaultLayout>
    <HomePage>
      <router-view/>
    </HomePage>
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from "@/layouts/DefaultLayout.vue";
  import HomePage from "./pages/HomePage.vue";

</script>

<style lang="scss">
  h1,h2,h3,h4,h5,h5{
    font-family: Montserrat,sans-serif;
  }
  h2{
    font-size: 30px;
    text-align: center;
    @media (max-width: 900px) {
      font-size: 30px;
    }
    @media (max-width: 550px) {
      font-size: 20px;
    }
  }
  button {
    cursor: pointer;
  }
  /* remove blue outline */
  button:focus {
    outline: 0;
  }
</style>

