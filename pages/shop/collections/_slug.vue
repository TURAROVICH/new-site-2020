<template>
  <div class="page page--content">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs"/>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="collection-img">
            <img :src="collection.image" alt="">
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="category-title">{{ collection.name }}</div>
          <div class="category-text" v-html="collection.description"></div>
        </div>
        <div class="col-auto"></div>
      </div>
      <div>
        <div class="row">
          <div class="col-12 col-md-3" v-for="item in products" :key="item.id">
            <ProductItem :item="item"/>
          </div>
        </div>
        <Pagination/>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/common/Breadcrumbs'
import NewsWidget from '@/components/news/news-widget/NewsWidget'
import ProductSimpleWidget from '@/components/product/product-simple-widget/ProductSimpleWidget'
import Pagination from '@/components/common/Pagination'
import ProductItem from '@/components/product/product-item/ProductItem.vue'


export default {
  components: {
    Breadcrumbs,
    NewsWidget,
    ProductSimpleWidget,
    Pagination,
    ProductItem
  },
  async middleware({ store, redirect, params }) {
    await store.dispatch('products/getCollectionBySlug', { slug: params.slug })
    if (!store.state.products.currentCollection) {
      redirect('/error')
    }
  },
  async asyncData({ store }) {
    const collection = store.state.products.currentCollection;

    const breadcrumbs = [
      { title: 'Коллекции', link: '/shop/collections' },
      { title: collection.name }
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })

    const products = collection.papers

    return { breadcrumbs, products, collection }
  }
}
</script>

<style lang="scss">
.collection{
  &-img{
    margin-bottom: 60px;
  }
}
.category {
  &-title {
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
    line-height: 1.2;
  }
  &-text{
    color: #696969;
    font-size: 16px;
    margin-bottom: 70px;
  }
  &-count{
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 18px;
  }
  &-sort{
    margin-bottom: 40px;
    font-weight: 500;
    font-size: 18px;
  }
}
@media (max-width: 768px) {
  .collection {
      &-img {
        display: none;
      }
    }
  }

</style>
