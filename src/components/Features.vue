<template>
  <div class="features">
    <h2 class="feature__title">Почему мы?</h2>
    <div class="features__cards">
      <div class="feature" v-for="item in features">
        <img :src="`src/assets/img/features/${item.img}`" alt="" class="feature__img">
        <p class="feature__text">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

import {features} from "../stores/features.js";
</script>

<style scoped lang="scss">
.features{
  padding: 70px 0 100px 0;
  text-align: center;
  font-size: 40px;
}
.features__cards{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 30px;
  margin: 30px auto 0 auto;
  max-width: 1440px;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
}
.feature{
  font-size: 16px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 25px;
  margin: 0 auto;

}
</style>