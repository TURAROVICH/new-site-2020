<template>
  <div class="row no-gutters align-items-center cart-item">
    <div class="col-12 col-md-5">
      <div class="row no-gutters">
        <div class="col-auto">
          <div class="cart-item__img" :style="{ backgroundImage: `url(${item.image})` }"></div>
        </div>
        <div class="col">
          <div class="cart-item__title">{{item.title}}</div>
          <div class="cart-item__sku">Номер: {{item.sku}}</div>
          <div class="cart-item__size">Размер: {{item.size}}</div>
        </div>
      </div>
    </div>
    <div class="col col-md">
      <cart-item-quantity :quantity="item.quantity" @change-quantity="changeQuantity"/>
    </div>
    <div class="col col-md-2">
      <div class="cart-item__discount-block" v-if="item.price !== item.currentPrice">
        <div class="cart-item__discount">-{{item.discount}}%</div>
        <div class="cart-item__price cart-item__price--old">{{ $n(item.price, 'decimal') }} ₽</div>
      </div>
      <div class="cart-item__price">{{ $n(item.currentPrice, 'decimal') }} ₽</div>
    </div>
    <div class="col-auto col-md-2">
      <div class="cart-item__sum">{{ $n(item.currentSum, 'decimal') }} ₽</div>
    </div>
    <div class="col-auto col-delete">
      <div class="cart-item__delete" @click="deleteItem"></div>
    </div>
  </div>

</template>

<script>

import CartItemQuantity from '@/components/cart/cart-item-quantity/CartItemQuantity'

export default {
  components: {
    CartItemQuantity
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    changeQuantity: function (quantity) {
      this.$emit('change-quantity', quantity, this.index)
    },
    deleteItem: function() {
      this.$emit('delete-item', this.index)
    }
  }
}
</script>

<style scoped lang="scss">

.cart-item{
  padding: 30px 0;
  border-bottom: 1px solid #DDD;
  &__img{
    width: 85px;
    height: 85px;
    background-size: cover;
    margin-right: 16px;
    border-radius: 5px;
  }
  &__sku{
    color: #656565;
  }
  &__size{
    color: #656565;
  }
  &__title{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  &__discount{
    background: #FF3435;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    color: #FFF;
    display: inline-block;
    line-height: 1;
    padding: 3px 5px;
  }
  &__price{
    letter-spacing: 0.2px;
    font-weight: 600;
    &--old{
      text-decoration-line: line-through;
      color: #676767;
      font-weight: 400;
    }
  }
  &__sum {
    letter-spacing: 0.2px;
    font-weight: 600;
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
  }
}
@media (max-width: 768px) {
  .cart-item{
    padding: 20px 0;
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
      font-size: 12px;
      position: absolute;
      right: -5px;
      transform: translateX(100%);
    }
  }
}
</style>
