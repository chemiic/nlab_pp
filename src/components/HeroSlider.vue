<template>
  <section class="hero__slider">
    <swiper
        :slides-per-view="1"
        :loop="true"
        :speed="800"
        navigation
        :pagination="{
         clickable: true,
      }"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
        :modules="[Navigation,Pagination, Autoplay]"
        class="mySwiper"
    >
      <swiper-slide v-for="slide in services">
        <img :src=slide.img alt="" class="slider__img" style="pointer-events: none;">
        <div class="slider__content">
          <div class="slider__text">{{ slide.title }}</div>
          <a href="#services">
            <MyBtn>Подробнее</MyBtn>
          </a>

        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import MyBtn from "../components/UI/MyBtn.vue";
import {services} from "@/stores/services.js";


</script>
<style scoped lang="scss">
.slider__img{
  filter: brightness(0.7);
  width: 100vw;
}
.slider__content{
  position: absolute;
  top: 40%;
  left: 20%;
  color: white;
}
.slider__text{
  font-size: 50px;
  font-family: Montserrat, sans-serif;
  margin-bottom: 30px;
  @media (max-width: 900px) {
    font-size: 40px;
  }
  @media (max-width: 550px) {
    font-size: 32px;
  }

}
.swiper {
  width: 100%;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  background: #fff;
  display: flex;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}
</style>