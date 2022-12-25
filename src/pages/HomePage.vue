<template>
  <swiper
      :slides-per-view="1"
      :loop="true"
      :speed="800"
      navigation
      :pagination="{
         clickable: true,
      }"
      :autoplay="{
        delay: 3002220,
        disableOnInteraction: true,
      }"
      :modules="[Navigation,Pagination, Autoplay]"
      class="mySwiper"
  >
    <swiper-slide>
        <img src="@/assets/img/slider__img1.png" alt="" class="slider__img">
        <div class="slider__content">
          <div class="slider__text">Ремонт Apple</div>
          <MyBtn>Подробнее</MyBtn>
        </div>
    </swiper-slide>

    <swiper-slide>
        <img src="@/assets/img/slider__img2.png" alt="" class="slider__img">
        <div class="slider__content">
          <div class="slider__text">Ремонт ПК</div>
          <MyBtn>Подробнее</MyBtn>
        </div>
    </swiper-slide>

    <swiper-slide>
        <img src="@/assets/img/slider__img3.png" alt="" class="slider__img">
        <div class="slider__content">
          <div class="slider__text">Ремонт Ноутбуков</div>
          <MyBtn>Подробнее</MyBtn>
        </div>
    </swiper-slide>

    <swiper-slide>
        <img src="@/assets/img/slider__img4.png" alt="" class="slider__img">
        <div class="slider__content">
          <div class="slider__text">Ремонт телефонов</div>
          <MyBtn>Подробнее</MyBtn>
        </div>
    </swiper-slide>

  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Pagination, Navigation, Autoplay } from "swiper";
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';
  import 'swiper/css/autoplay';
  import MyBtn from "../components/UI/MyBtn.vue";

</script>

<style scoped lang="scss">
  .slider__img{
    width: 100vw;
  }
  .slider__content{
    position: absolute;
    top: 40%;
    left: 200px;
    color: white;
  }
  .slider__text{
    font-size: 50px;
    font-family: Montserrat, sans-serif;
    margin-bottom: 30px;
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