<template>
  <section class="portfolio">
    <h2>Работы</h2>
    <swiper
        :slides-per-view="1"
        :loop="true"
        :speed="800"
        navigation
        :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
        :modules="[Navigation, Pagination, Autoplay]"
        class="mySwiper"
        id="mySlider"
    >
      <swiper-slide v-for="item in portfolio">
       <div class="slide">
         <div class="left-side">
           <img :src="`src/assets/img/portfolio/${item.img}`" alt="" class="left-side__img">
         </div>
         <div class="right-side">
           <p class="rs__title">{{item.title}}</p>
           <p class="rs__text">{{item.text}}</p>
         </div>
       </div>
      </swiper-slide>


    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import {portfolio} from "../stores/portfolio.js";

</script>

<style scoped lang="scss">

  .portfolio{
    background-color: #f2f2f2;
    padding: 70px;
    .mySwiper{
      max-width: 1200px;
      margin: 0 auto;
    }
    h2{
      margin-bottom: 60px;
      @media (max-width: 900px) {
        margin-bottom: 30px;
      }
    }
  }
  .slide{
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
  .rs__title{
    font-weight: bold;
    margin-bottom: 20px;
  }

</style>