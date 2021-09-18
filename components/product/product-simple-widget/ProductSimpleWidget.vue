<template>
  <div class="productSimpleWidget">
    <div class="productSimpleWidget__title">{{ title }}</div>
    <div v-if="type === 'simple'">
      <div class="productSimpleWidget__item" v-for="(item, index) in items" :key="index">
        <div class="row no-gutters">
          <div class="col-auto">
            <div class="productSimpleWidget__itemImg" :style="{ backgroundImage: `url(${item.img})` }"></div>
          </div>
          <div class="col">
            <div class="productSimpleWidget__itemTitle">{{ item.title }}</div>
            <div class="productSimpleWidget__itemPriceBlock">
              <div class="productSimpleWidget__itemPrice">{{ item.prices.current }} ₽</div>
              <div v-if="item.prices.old" class="productSimpleWidget__itemPrice productSimpleWidget__itemPrice--old">{{ item.prices.old }} ₽</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="type === 'full'" class="row">
      <div class="col-12" v-for="item in items" :key="item.id">
        <ProductItem :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>

import ProductItem from '@/components/product/product-item/ProductItem.vue'

export default {
  components: {
    ProductItem
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'simple'
    },
    limit: {
      type: Number,
      default: 5
    }
  },
  data () {
    const items = [
      {id: 1, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
      {id: 2, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod2.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
      {id: 3, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod3.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860',} },
      {id: 4, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod4.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
      {id: 7, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
      {id: 8, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod5.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} }
    ];
    return {
      items: items.slice(0, this.limit)
    }
  }
}
</script>

<style lang="scss">
.productSimpleWidget{
  &__title{
    font-size: 19px;
    line-height: 32px;
    font-weight: 700;
    border-bottom: 1px solid #DDD;
    margin-bottom: 16px;
  }
  &__item{
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #DDD;
    &:last-child{
      border-bottom: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    &Img{
     width: 87px;
     height: 87px;
     border-radius: 6px;
     background-size: cover;
     background-position: center;
      margin-right: 16px;
    }
    &Title{
      font-size: 15px;
    }
    &Price{
      font-size: 17px;
      font-weight: 700;
      &--old{
        opacity: 0.64;
        font-size: 14px;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }
}
@media (max-width: 768px) {
  .productWidget {
    padding: 0 0 40px;

    &__title {
      font-size: 26px;
      margin-bottom: 20px;
      line-height: 1.20;
    }
  }
}
</style>
