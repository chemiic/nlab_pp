<template>
  <button class="btn">
    <slot/>
  </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
  .btn{
    padding: 15px 35px;
    background-color: #054AC0;
    border: none;
    transition: all 0.3s;
    color: white;
    border-radius: 10px;
    &:hover{
      background-color: #2B73EF;
      cursor: pointer;
    }
  }
</style>