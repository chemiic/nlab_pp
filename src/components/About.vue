<template>
  <section class="about">
    <h2>О нас</h2>
    <div class="about__content">
      <div class="abuout__text">
        <p>Мы располагаем всей необходимой техникой и подходящим инструментарием для ремонта различных компонентов современной мобильной и стационарной техники.</p>
        <p>Наши инженеры быстро и качественно чинят как популярные гаджеты от Apple, Acer, Sony, Samsung, Toshiba, так и устройства других не менее известных брендов. </p>
        <p>Вы можете с уверенностью доверить нам свой телефон, ноутбук или любой другой девайс. Так как наши оплату вы совершите только после получения устройства обратно.</p>
      </div>
      <img src="@/assets/img/about.png" alt="" class="about__img">
    </div>
  </section>

</template>

<style scoped lang="scss">
  .about{
    padding: 70px 10px;
  }
  .about__content{
    padding: 70px 10px;
    display: flex;
    gap: 20px;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
    img{
      max-width: 470px;
      width: 100%;
    }
    p{
      max-width: 570px;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }
  .abuout__text{
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
</style>