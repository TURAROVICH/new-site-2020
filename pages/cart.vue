<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <h1 class="page__title">
        Корзина
      </h1>
      <div class="cart" v-if="cart.items.length > 0">
        <div class="row no-gutters align-items-center cart__header">
          <div class="col-5">{{ $tc('products', cart.items.length) }}</div>
          <div class="col">Количество</div>
          <div class="col-2">Цена</div>
          <div class="col-2">Стоимость</div>
          <div class="col-auto col-delete"></div>
        </div>
        <cart-item v-for="(item, index) in cart.items"
                   :key="index"
                   :item="item"
                   :index="index"
                   @change-quantity="changeQuantity"
                   @delete-item="deleteItem"/>
        <div class="cart__footer">
          <div class="row justify-content-between">
            <div class="col-12 col-md">
              <div class="cart-promo">
                <div class="cart-promo__title">Введите промокод:</div>
                <div class="cart-promo__control">
                  <input type="text" class="cart-promo__input">
                  <button class="cart-promo__btn">Применить</button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-auto">
              <table class="cart-total">
                <tbody>
                <tr>
                  <td class="cart-total__label">Общая сумма:</td>
                  <td class="cart-total__value">{{ $n(cart.sum, 'decimal') }} ₽</td>
                </tr>
                <tr>
                  <td class="cart-total__label">Скидка:</td>
                  <td class="cart-total__value">{{ $n(cart.sumDiscount, 'decimal') }} ₽</td>
                </tr>
                <tr>
                  <td class="cart-total__label">К оплате:</td>
                  <td class="cart-total__value cart-total__value--lg">{{ $n(cart.currentSum, 'decimal') }} ₽</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="row justify-content-around justify-content-md-end">
            <div class="col-auto">
              <o-button black @click="$router.push('/checkout')">Оформить заказ</o-button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart" v-else>
        <div class="cart__text">В вашей корзине пока нет товаров</div>
        <o-button black @click="$router.push('/shop/collections')">Перейти в каталог</o-button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/cart/cart-item/CartItem'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default {
  components: {
    Breadcrumbs,
    CartItem
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Корзина' },
    ]

    const items = [
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 1, price: 35700, discount: 35},
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 1, price: 35700, discount: 0},
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 1, price: 35700, discount: 0},
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { items }
  },
  computed: {
    cart: function () {
      const items = this.items.map(item => {
        const currentPrice = item.discount ? Math.round((item.price / 100 * (100 - item.discount))) : item.price;
        return {
          ...item,
          currentPrice,
          sum:  Math.round(item.price * item.quantity),
          currentSum:  Math.round(currentPrice * item.quantity)
        }
      })
      const sum = items.reduce((acc,cur) => acc + cur.sum, 0)
      const currentSum = items.reduce((acc,cur) => acc + cur.currentSum, 0)
      const sumDiscount = Math.round(sum - currentSum)
      return {
        items,
        sum,
        currentSum,
        sumDiscount
      }
    }
  },
  methods: {
    changeQuantity: function (quantity, index) {
      this.items[index].quantity = quantity
    },
    deleteItem: function(index) {
      this.items.splice(index,1)
    }
  }
}
</script>

<style scoped lang="scss">
.cart{
  min-height: 500px;
  &__text{
    margin-bottom: 20px;
  }
  &__header{
    color: #656565;
    border-bottom: 1px solid #DDD;
    padding-bottom: 8px;
  }
  &__footer{
    margin-top: 40px;
  }
}
.cart-promo {
  &__title{
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  &__control{
    display: flex;
    flex-wrap: wrap;

  }
  &__input{
    outline: none;
    border: none;
    position: relative;
    padding: 10px 20px;
    background: #EDEDED;
    border-radius: 3px 0 0 3px;
    font-size: 16px;
  }
  &__btn{
    background: #323232;
    border: none;
    color: #FFF;
    padding: 10px 35px;
    border-radius: 0 3px 3px 0;
  }
}
.cart-total{
  margin-bottom: 40px;
  &__label{
    padding-right: 80px;
    padding-bottom: 16px;
    vertical-align: bottom;
    line-height: 1;
  }
  &__value{
    padding-bottom: 16px;
    font-weight: 600;
    line-height: 24px;
    &--lg{
      font-size: 24px;
    }
  }
}
.col-delete{
  width: 14px;
}

@media (max-width: 768px) {
  .cart{
    border-top: 1px solid #DDD;
    &__header{
      display: none;
    }
  }
  .cart-promo {
    &__control{
      margin-bottom: 50px;
    }
    &__input{
      width: 50%;

    }
    &__btn{
      width: 50%;
    }
  }
}
</style>
