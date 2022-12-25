<template>
  <NavMenu/>
  <main class="main">
    <slot/>
  </main>
</template>

<script setup>
import NavMenu from "@/components/NavMenu.vue";
</script>

<style scoped lang="scss">

</style>