<template>
  <div class="productItem">
    <nuxt-link :to="`/product/${item.slug}`">
      <div class="productItem__img" :style="{ backgroundImage: `url(${item.img})` }"></div>
    </nuxt-link>
    <div class="productItem__title">{{ item.title }}</div>
    <div class="productItem__params">{{ item.params }}</div>
    <div class="row justify-content-between">
      <div class="col-auto">
        <div class="productItem__priceBlock">
          <div class="productItem__price">{{ item.prices.current }} ₽</div>
          <div v-if="item.prices.old" class="productItem__price productItem__price--old">{{ item.prices.old }} ₽</div>
        </div>
      </div>
      <div class="col-auto">
        <div class="addToCart">В корзину</div>
      </div>
    </div>
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
.productItem{
  margin-bottom: 60px;
  &__img{
    min-height: 276px;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    margin-bottom: 10px;
    background-color: #DDD;
  }
  &__title{
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 6px;
  }
  &__params{
    font-weight: 600;
    font-size: 14px;
    color: #656565;
    padding-bottom: 12px;
    border-bottom: 1px solid #DDD;
    margin-bottom: 12px;
  }
  &__price{
    font-weight: 700;
    font-size: 18px;
    &--old{
      opacity: 0.64;
      font-size: 14px;
      font-weight: 600;
      text-decoration: line-through;
    }
  }
}

.addToCart{
  color: #AB3226;
  font-size: 15px;
  font-weight: 600;
  background-image: url(~assets/img/ico-cart--sm.svg);
  background-position: center left;
  background-repeat: no-repeat;
  padding-left: 30px;
  cursor: pointer;
}
</style>
