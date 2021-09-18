<template>
  <div class="soc-icon row">
    <div class="col-auto soc-icon__item"><img src="~/assets/img/ico-instagram.svg" alt="instagram"></div>
    <div class="col-auto soc-icon__item"><img src="~/assets/img/ico-facebook.svg" alt="facebook"></div>
    <div class="col-auto soc-icon__item"><img src="~/assets/img/ico-twitter.svg" alt="twitter"></div>
    <div class="col-auto soc-icon__item"><img src="~/assets/img/ico-vk.svg" alt="vk"></div>
  </div>
</template>

<script>

export default {
  components: {},
}
</script>

<style lang="scss">
.soc-icon{
  margin-right: -10px;
  margin-left: -10px;
  &__item{
    padding: 0 10px;
  }
}
@media (max-width: 768px) {

}
</style>
