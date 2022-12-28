<template>
  <nav class="nav">
    <div class="nav-logo logo">
      <img src="@/assets/img/logo.svg" alt="" class="logo-img">
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