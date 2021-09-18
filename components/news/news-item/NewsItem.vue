<template>
  <div class="newsItem">
    <nuxt-link :to="'/news/' + item.slug">
      <div v-if="item.image" class="newsItem__img" :style="{ backgroundImage: `url(${item.image.src})` }"></div>
    </nuxt-link>
    <div class="newsItem__date">{{ item.date }}</div>
    <nuxt-link :to="'/news/' + item.slug">
      <div class="newsItem__title">{{ item.title }}</div>
    </nuxt-link>
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
.newsItem{
  margin-bottom: 60px;
  display: block;
  &__img{
    min-height: 284px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    margin-bottom: 10px;
  }
  &__title{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 6px;
    color: #323232;
  }
  &__date{
    font-weight: 600;
    font-size: 14px;
    color: #656565;
    margin-bottom: 8px;
  }
}
</style>
