<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <div class="cart" v-if="cart.items.length > 0">
        <div class="row">
          <div class="col-12 order-2 order-md-1">
            <h1 class="page__title">
              Контактные данные
            </h1>
          </div>
          <div class="col-12 col-md-7 order-3 order-md-2">
            <div class="form form--checkout">
              <div class="row">
                <div class="col-12">
                  <div class="form__group">
                    <label class="form__label" for="form-name">Фамилия Имя Отчество*</label>
                    <input type="text" v-model="form.name" class="form__input" id="form-name">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-phone">Телефон*</label>
                    <input type="text" v-model="form.phone" class="form__input" id="form-phone">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-email">E-mail*</label>
                    <input type="text" v-model="form.email" class="form__input" id="form-email">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form__group">
                    <label class="form__label" for="form-address">Город, адрес, дом</label>
                    <input type="text" v-model="form.address" class="form__input" id="form-address">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form__group">
                    <label class="form__label" for="form-comment">Ваше сообщение</label>
                    <textarea type="text" v-model="form.comment" class="form__input form__input--textarea" id="form-comment"/>
                  </div>
                </div>
              </div>
              <div class="cart__select-block">
                <div class="cart__select-block-title">Способ доставки:</div>
                <cart-delivery v-for="(item, index) in deliveries"
                               :key="index"
                               :item="item"/>
              </div>
              <div class="cart__select-block">
                <div class="cart__select-block-title">Способ оплаты:</div>
                <cart-payment v-for="(item, index) in payments"
                              :key="index"
                              :item="item"/>
              </div>
              <div class="cart__select-block">
                <div class="form__checkbox-group">
                  <input type="checkbox" id="form-agreement" class="form__checkbox-input">
                  <label class="form__checkbox-label" for="form-agreement">Я принимаю договор оферты и согласен на обработку персональных данных</label>
                </div>
                <div class="form__checkbox-group">
                  <input type="checkbox" id="form-subscribe" class="form__checkbox-input">
                  <label class="form__checkbox-label" for="form-subscribe">Я хочу получать рассылку об акциях и предложениях по E-mail</label>
                </div>
              </div>
              <div class="cart__select-block-title">К оплате: {{ $n(cart.currentSum, 'decimal') }}  ₽</div>
              <div class="row">
                <div class="col-auto">
                  <o-button black @click="$router.push('/shop/categories')">Оформить заказ</o-button>
                </div>
                <div class="col-auto">
                  <o-button @click="$router.push('/cart')">Вернуться в корзину</o-button>
                </div>
              </div>

            </div>
          </div>
          <div class="col-12 col-md-5 order-1 order-md-3">
            <div class="cart-checkout">
              <div class="cart-checkout__title">
                <div class="row">
                  <div class="col">Состав заказа:</div>
                  <div class="col-auto">{{ $n(cart.currentSum, 'decimal') }} ₽</div>
                </div>
              </div>
              <cart-item-checkout v-for="(item, index) in cart.items"
                         :key="index"
                         :item="item"/>
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
import CartDelivery from '@/components/cart/cart-delivery/CartDelivery'
import CartPayment from '@/components/cart/cart-payment/CartPayment'
import CartItemCheckout from '@/components/cart/cart-item/CartItemCheckout'
import Breadcrumbs from '@/components/common/Breadcrumbs'

export default {
  components: {
    Breadcrumbs,
    CartItemCheckout,
    CartDelivery,
    CartPayment
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Оформление заказа' },
    ]

    const form = {
      name: '',
      phone: '',
      email: '',
      address: '',
      comment: '',
      delivery: undefined,
      payment: undefined
    }
    const items = [
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 2, price: 35700, discount: 35},
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 1, price: 5700, discount: 0},
      { title: 'Обои Elegance 5 Espirit 128', sku: '36148-5', size: '10,05м Х 0,53м', image: '/product/prod1.jpg', quantity: 1, price: 35700, discount: 0},
    ]

    const deliveries = [
      {id: 1, title: 'Самовывоз', text: 'Бесплатно по адресу Москва, ул. Мясницкая, 22<br/>ежедневно с 10:00 до 22:00' },
      {id: 2, title: 'Курьерская доставка', text: 'Бесплатно по адресу Москва, ул. Мясницкая, 22<br/>ежедневно с 10:00 до 22:00' },
      {id: 3, title: 'Доставка почтой', text: 'Бесплатно по адресу Москва, ул. Мясницкая, 22<br/>ежедневно с 10:00 до 22:00' },
    ]

    const payments = [
      {id: 1, title: 'При получении', text: 'Оплата заказа при получении' },
      {id: 2, title: 'Оплата картой онлайн', text: 'Оплата банковскими картами Visa и MasterCard' },
      {id: 3, title: 'Безналичный расчет', text: 'Для оплаты юридических лиц' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { items, form, deliveries, payments }
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
.cart-checkout{
  &__title{
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #DDD;
  }
  margin-bottom: 16px;
  border-bottom: 1px solid #DDD;
}
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
  &__select-block{
    margin-bottom: 40px;
    &-title{
      font-size: 24px;
      font-weight: 600;
      margin-bottom: 20px;
    }
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
