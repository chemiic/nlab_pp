<template>
  <DefaultLayout>
    <HomePage/>
  </DefaultLayout>
</template>

<script setup>
  import DefaultLayout from "@/layouts/DefaultLayout.vue";
  import HomePage from "./pages/HomePage.vue";

</script>

<style>
  h1,h2,h3,h4,h5,h5{
    font-family: Montserrat,sans-serif;
  }
  h2{
    font-size: 2.5rem;
    text-align: center;
  }
  button {
    cursor: pointer;
  }
  /* remove blue outline */
  button:focus {
    outline: 0;
  }
</style>

