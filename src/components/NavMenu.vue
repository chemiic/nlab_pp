<template>
  <nav class="nav">
    <div class="nav-logo logo">
      <svg class = 'logo-img' width="103" height="30" viewBox="0 0 103 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4795 29H17.1689L5.36816 8.47852H5.20117C5.25065 9.33203 5.29395 10.1917 5.33105 11.0576C5.36816 11.9235 5.40527 12.7894 5.44238 13.6553C5.47949 14.5088 5.5166 15.3685 5.55371 16.2344V29H0.414062V1.87305H7.66895L19.4512 22.1904H19.5811C19.5563 21.3493 19.5254 20.5143 19.4883 19.6855C19.4512 18.8568 19.4141 18.028 19.377 17.1992C19.3522 16.3704 19.3275 15.5417 19.3027 14.7129V1.87305H24.4795V29ZM35.4453 1.87305L35.7051 2.28125C35.4824 3.18424 35.1917 4.14909 34.833 5.17578C34.4867 6.1901 34.1032 7.21061 33.6826 8.2373C33.2744 9.264 32.86 10.2412 32.4395 11.1689H28.376C28.5492 10.4268 28.7223 9.64746 28.8955 8.83105C29.0811 8.01465 29.2542 7.19824 29.415 6.38184C29.5882 5.56543 29.7428 4.77376 29.8789 4.00684C30.015 3.23991 30.1325 2.52865 30.2314 1.87305H35.4453ZM39.5645 29V1.87305H45.3164V24.25H56.3193V29H39.5645ZM69.1035 7.8291C71.8867 7.8291 74.0205 8.43522 75.5049 9.64746C76.9893 10.8597 77.7314 12.7028 77.7314 15.1768V29H73.7793L72.6846 26.1797H72.5361C71.9424 26.9219 71.3363 27.528 70.7178 27.998C70.0993 28.4681 69.388 28.8145 68.584 29.0371C67.7799 29.2598 66.8027 29.3711 65.6523 29.3711C64.4277 29.3711 63.3268 29.1361 62.3496 28.666C61.3848 28.196 60.624 27.4785 60.0674 26.5137C59.5107 25.5365 59.2324 24.2995 59.2324 22.8027C59.2324 20.6009 60.0055 18.9805 61.5518 17.9414C63.098 16.89 65.4173 16.3086 68.5098 16.1973L72.1094 16.0859V15.1768C72.1094 14.0882 71.8249 13.2904 71.2559 12.7832C70.6868 12.276 69.8952 12.0225 68.8809 12.0225C67.8789 12.0225 66.8955 12.1647 65.9307 12.4492C64.9658 12.7337 64.001 13.0924 63.0361 13.5254L61.1621 9.70312C62.263 9.12174 63.4938 8.66406 64.8545 8.33008C66.2275 7.99609 67.6439 7.8291 69.1035 7.8291ZM72.1094 19.3887L69.9199 19.4629C68.0892 19.5124 66.8151 19.8402 66.0977 20.4463C65.3926 21.0524 65.04 21.8503 65.04 22.8398C65.04 23.7057 65.2936 24.3242 65.8008 24.6953C66.3079 25.054 66.9697 25.2334 67.7861 25.2334C68.9984 25.2334 70.0189 24.8747 70.8477 24.1572C71.6888 23.4398 72.1094 22.4193 72.1094 21.0957V19.3887ZM89.2354 0.128906V6.8457C89.2354 7.625 89.2106 8.39811 89.1611 9.16504C89.124 9.93197 89.0745 10.5257 89.0127 10.9463H89.2354C89.7796 10.0928 90.5218 9.36914 91.4619 8.77539C92.402 8.16927 93.6204 7.86621 95.1172 7.86621C97.4427 7.86621 99.3291 8.77539 100.776 10.5938C102.224 12.4121 102.947 15.0778 102.947 18.5908C102.947 20.9535 102.613 22.9388 101.945 24.5469C101.277 26.1426 100.343 27.3486 99.1436 28.165C97.9437 28.9691 96.5521 29.3711 94.9688 29.3711C93.4473 29.3711 92.2474 29.099 91.3691 28.5547C90.4909 28.0104 89.7796 27.3981 89.2354 26.7178H88.8457L87.8994 29H83.5762V0.128906H89.2354ZM93.2988 12.3936C92.3092 12.3936 91.5238 12.5977 90.9424 13.0059C90.361 13.4141 89.9342 14.0264 89.6621 14.8428C89.4023 15.6592 89.2601 16.6921 89.2354 17.9414V18.5537C89.2354 20.57 89.5322 22.1162 90.126 23.1924C90.7197 24.2562 91.8021 24.7881 93.373 24.7881C94.5358 24.7881 95.4574 24.25 96.1377 23.1738C96.8304 22.0977 97.1768 20.5452 97.1768 18.5166C97.1768 16.488 96.8304 14.9603 96.1377 13.9336C95.445 12.9069 94.4987 12.3936 93.2988 12.3936Z" fill="#054AC0"/>
      </svg>
    </div>
    <ul class="nav-list" v-show="IsBurgerActive">
      <li class="nav-list__item"><a href="" class="nav-list__item-link">Услуги</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">Работы</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">О нас</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">Отзывы</a></li>
    </ul>
    <div class="nav-contact" v-show="IsBurgerActive">+ 7(910)-777-86-31</div>

    
    <div id="burger"
         :class="{ 'active' : IsBurgerActive }"
         @click.prevent="IsBurgerActive = !IsBurgerActive">
      <slot>
        <button type="button" class="burger-button" title="Menu">
          <span class="burger-bar burger-bar--1"></span>
          <span class="burger-bar burger-bar--2"></span>
          <span class="burger-bar burger-bar--3"></span>
        </button>
      </slot>
    </div>

  </nav>
</template>

<script setup>

  import {ref } from 'vue'
  const IsBurgerActive = ref(true)

</script>

<style scoped lang="scss">
  #burger{
    display: none;
  }
  @media (max-width: 900px) {
    #burger{
      display: block;
    }
  }


  .nav{
    max-width: 1440px;
    margin: 0 auto;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    &-list{
      display: flex;
      justify-content: space-between;
      gap: 30px;
      list-style-type: none;
      &__item-link{
        color: black;
        text-decoration: none;
        transition: color 0.3s;
        &:hover{
          color: #2B73EF;
        }
      }
    }
  }


  /** burger **/
  .burger-button {
    position: relative;
    height: 30px;
    width: 32px;
    display: block;
    z-index: 60;
    border: 0;
    border-radius: 0;
    background-color: transparent;
    pointer-events: all;
    transition: transform .6s cubic-bezier(.165,.84,.44,1);
  }
  .burger-bar {
    background-color: #000;
    position: absolute;
    top: 50%;
    right: 6px;
    left: 6px;
    height: 2px;
    width: auto;
    margin-top: -1px;
    transition: transform .6s cubic-bezier(.165, .84, .44, 1), opacity .3s cubic-bezier(.165, .84, .44, 1), background-color .6s cubic-bezier(.165, .84, .44, 1);
  }
  .burger-bar--1 {
    -webkit-transform: translateY(-6px);
    transform: translateY(-6px);
  }
  .burger-bar--2 {
    transform-origin: 100% 50%;
    transform: scaleX(.8);
  }
  .burger-button:hover .burger-bar--2 {
    transform: scaleX(1);
  }
  .burger-bar--3 {
    transform: translateY(6px);
  }

  #burger.active .burger-button {
    transform: rotate(-180deg);
  }
  #burger.active .burger-bar--1 {
    transform: rotate(45deg)
  }
  #burger.active .burger-bar--2 {
    opacity: 0;
  }
  #burger.active .burger-bar--3 {
    transform: rotate(-45deg)
  }

</style>