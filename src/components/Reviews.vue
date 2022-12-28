<template>
  <section class="reviews">
    <h2>Отзывы</h2>
    <div class='reviews-wrap'>
      <div class='reviews__content'><iframe style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/97775248379?comments"></iframe>
       </div>
    </div>
  </section>
</template>

<script>

</script>

<style scoped lang="scss">
  .reviews{
    position: relative;
    color: white;
    padding: 70px 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;
    background: url("@/assets/img/otzivi.png") no-repeat;
    background-size: cover;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  .reviews__content{
    width:500px;
    height:700px;
  }
  @media(max-width:550px){
    .reviews-wrap{
      max-width: 300px;
      margin: 0 auto;
    }
    .reviews__content{
      width:auto;
    }
  }
</style>