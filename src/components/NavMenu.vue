<template>

  <nav class="nav">
    <div class="nav-logo logo">
      <img src="@/assets/img/logo.svg" alt="" class="logo-img">
    </div>
    <ul class="nav-list">
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">Услуги</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">Работы</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">О нас</a></li>
      <li class="nav-list__item"><a href="#" class="nav-list__item-link">Отзывы</a></li>
    </ul>
    <div class="nav-contact">+ 7(910)-777-86-31</div>
  </nav>

</template>

<script setup>

</script>

<style scoped lang="scss">
  .nav{
    font-size: 20px;
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
</style>