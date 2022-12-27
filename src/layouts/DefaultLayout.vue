<template>
  <div class="container">
    <NavMenu/>
    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<script setup>
  import NavMenu from "@/components/NavMenu.vue";
</script>

<style scoped lang="scss">
  .container{
    margin: 0 auto;
    max-width: 2560px;
  }
</style>