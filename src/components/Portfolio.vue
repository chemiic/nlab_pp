<template>
  <section class="portfolio" id="portfolio">
    <h2>Работы</h2>
    <swiper
        :slides-per-view="1"
        :loop="true"
        :speed="800"
        :space-between="50"
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
           <img :src="`${item.img}`" alt="" class="left-side__img">
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
    padding: 70px 0;
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
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    @media (max-width: 900px) {
      flex-direction: column;
      text-align: center;
    }
    @media (max-width: 650px) {
      width: 400px;
    }
    @media (max-width: 450px) {
      width: 280px;
    }

  }
  .left-side__img{
    width: 100%;
  }
  .right-side{
    max-width: 450px;
  }
  .rs__title{
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 1.2rem;
  }

</style>