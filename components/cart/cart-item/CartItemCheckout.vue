<template>
  <div class="row no-gutters align-items-md-center cart-item">
    <div class="col-auto">
      <div class="cart-item__img" :style="{ backgroundImage: `url(${item.image})` }"></div>
    </div>
    <div class="col">
      <div class="row no-gutters align-items-center">
        <div class="col-12 col-md">
          <div class="cart-item__title">{{item.title}}</div>
          <div class="cart-item__sku">Номер: {{item.sku}}</div>
        </div>
        <div class="col-auto">
          <div class="cart-item__price-block">
            <div class="cart-item__discount-block" v-if="item.price !== item.currentPrice">
              <div class="cart-item__discount">-{{item.discount}}%</div>
              <div class="cart-item__price cart-item__price--old">{{ $n(item.price, 'decimal') }} ₽</div>
            </div>
            <div class="cart-item__price">{{ $n(item.currentPrice, 'decimal') }} ₽</div>
          </div>
        </div>
        <div class="col-auto"><div class="cart-item__quantity">x {{item.quantity}} =</div></div>
        <div class="col-auto col-md-auto">
          <div class="cart-item__sum">{{ $n(item.currentSum, 'decimal') }} ₽</div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>


export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">

.cart-item{
  padding: 10px 0;
  &__img{
    width: 60px;
    height: 60px;
    background-size: cover;
    margin-right: 15px;
    border-radius: 5px;
  }
  &__sku{
    color: #656565;
    font-size: 14px;
  }
  &__size{
    color: #656565;
    font-size: 16px;
  }
  &__title{
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1px;
    padding-right: 20px;
  }
  &__discount{
    background: #FF3435;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 600;
    color: #FFF;
    display: inline-block;
    line-height: 1;
    padding: 3px 5px;
  }
  &__price{
    letter-spacing: 0.2px;
    font-weight: 600;
    font-size: 14px;
    &--old{
      text-decoration-line: line-through;
      color: #676767;
      font-weight: 400;
    }
  }
  &__sum {
    letter-spacing: 0.2px;
    font-weight: 600;
    font-size: 14px;
  }
  &__quantity{
    font-weight: 600;
    font-size: 14px;
    padding: 0 10px;
  }
  &__delete{
    width: 14px;
    height: 14px;
    background-image: url(~assets/img/ico-cart-delete.svg);
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
  &__discount-block{
    display: inline-block;
    position: relative;
    text-align: left;
  }
  &__price-block{
    text-align: right;
  }
}
@media (max-width: 768px) {
  .cart-item{
    padding: 10px 0;
    &__img{
      margin-bottom: 20px;
    }
    &__title{
      font-size: 16px;
    }
    &__sku{
      font-size: 14px;

    }
    &__size{
      font-size: 14px;
    }
    &__price{
      font-size: 14px;
    }
    &__sum{
      font-size: 14px;
      padding-right: 20px;
    }
    &__discount{

    }
  }
}
</style>
