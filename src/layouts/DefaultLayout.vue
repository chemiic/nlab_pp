<template>
  <div class="container">
    <NavMenu/>
    <main class="main">
      <slot/>
    </main>
    <Footer/>
  </div>
</template>

<script setup>
  import NavMenu from "@/components/NavMenu.vue";
  import Footer from "@/components/Footer.vue";
</script>

<style scoped lang="scss">
  .container{
    margin: 0 auto;
    max-width: 2560px;
  }
</style>