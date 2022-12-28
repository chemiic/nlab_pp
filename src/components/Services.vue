<template>
  <section class="services" id="services">
    <h2 class="services__title">Услуги</h2>
    <div class="accordium" >
      <div class="block" v-for="(block) in services" :key="block.id">
        <div class="block__title" @click="acordion">{{block.title}}
          <span class="arrow">
            <svg width="30" height="18" viewBox="0 0 30 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.850959 0.865907C1.9858 -0.222941 3.82559 -0.223538 4.96085 0.865907L14.9732 10.4797L25.0399 0.816917C26.1741 -0.271933 28.0145 -0.27253 29.1498 0.816917C29.7164 1.36244 30 2.78967 30 2.78967C30 2.78967 29.7164 4.2169 29.1488 4.76083L17.47 15.9734C17.3582 16.1403 17.23 16.2994 17.0783 16.445C16.4983 17.0019 15.7348 17.2699 14.9734 17.257C14.2137 17.2693 13.4489 17.0019 12.8695 16.4444C12.7172 16.2992 12.5896 16.1401 12.4782 15.9734L0.85115 4.81142C-0.283276 3.72197 -0.284089 1.95575 0.850959 0.865907Z" fill="#054AC0"/>
            </svg>
          </span>
        </div>
          <div class="block__content">
            <ul>
              <li v-for="item in block.servicesList">{{item}}</li>
            </ul>
          </div>
      </div>
    </div>
  </section>

</template>

<script setup>
import {services} from "../stores/services.js";

const  acordion = (event) => {
  event.target.classList.toggle('active');
}

</script>

<style scoped lang="scss">
  .block__title.active{
    background-color: #054AC0;
    border-bottom: 2px solid black;
    color: white;
  }
  .block__title.active +  .block__content{
      height: auto;
      padding: 15px 15px 15px 30px;
  }
  .services{
    padding: 70px 0;
  }
  .block{
    border: 2px solid black;
    border-radius: 15px;
    margin: 30px;

    &__title{
      background-color: #fff;
      border-radius: 15px;
      padding: 40px 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-size:20px;
      font-weight: bold;
      transition: all .3s;
      @media (max-width: 900px) {
        padding: 40px 30px;
      }
      @media (max-width: 550px) {
        font-size: 16px;
      }

    }
    &__content{
      padding: 0;
      height: 0;
      overflow-y: hidden;
      transition: all .3s;
      @media (max-width: 550px) {
        font-size: 12px;
      }
      ul{
        list-style-type: disc;
        line-height: 1.5rem;
      }
    }
  }
</style>