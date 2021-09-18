<template>
  <div class="collectionItem">
    <nuxt-link :to="item.slug">
      <div class="collectionItem__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
    </nuxt-link>
    <div class="collectionItem__title">{{ item.name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style lang="scss">
.collectionItem{
  margin-bottom: 32px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #DDD;
  text-align: center;
  &__img{
    min-height: 224px;
    background-size: cover;
    background-position: center;
    background-color: #DDD;
  }
  &__title{
    font-size: 18px;
    font-weight: 600;
    margin: 16px 0;
  }
}
</style>
