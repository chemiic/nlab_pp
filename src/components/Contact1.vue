<template>
  <section class="contact__small">
    <h2 class="cs__title">Бесплатная консультация</h2>
    <p class="cs_text">+ 7(910)-777-86-31</p>
  </section>
</template>

<style scoped lang="scss">
    .contact__small{
      color: white;
      text-align: center;
      padding: 100px 0;
      background: url("@/assets/img/contact.png") no-repeat;
      background-size: cover;
    }
    .cs__title{
      margin-bottom: 50px;
    }
    .cs_text{
      font-size: 32px;
      @media (max-width: 900px) {
        font-size: 24px;
      }
      @media (max-width: 550px) {
        font-size: 16px;
      }
    }
</style>