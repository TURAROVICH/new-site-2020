<template>
  <div class="productWidget">
    <div class="productWidget__title">{{ title }}</div>
    <div class="row">
      <div class="col-12 col-md-3" v-for="item in products" :key="item.id">
        <ProductItem :item="item"/>
      </div>
    </div>
    <div class="productWidget__btnWrap">
      <o-button icon="eye">Показать больше</o-button>
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
    title: String
  },
  data () {
    return {
      products: [
        {id: 1, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 2, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod2.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 3, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod3.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860',} },
        {id: 4, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod4.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 5, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod4.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 6, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod2.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 7, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 8, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod5.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} }
      ]
    }
  }
}
</script>

<style lang="scss">
.productWidget{
  padding: 80px 0;
  &__title{
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  &__btnWrap{
    text-align: center;
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
