<template>
  <div class="page page--content">
    <div class="container">
      <Breadcrumbs :items="breadcrumbs"/>
      <div class="row">
        <div class="col">
          <div class="category-title">Коллекции</div>
          <div class="category-text">
            Примесь облучает расширяющийся гамма-квант. В ряде недавних экспериментов квантовое состояние усиливает вихрь. Интерпретация всех  ниже наблюдений предполагает, что еще до начала измерений зеркало ортогонально. Расслоение излучает квант. Течение среды вращает ультрафиолетовый осциллятор.
          </div>
        </div>
        <div class="col-auto"></div>
      </div>
      <div>
        <div class="row">
          <div class="col-12 col-md-3" v-for="item in products" :key="item.id">
            <CollectionItem :item="item"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/common/Breadcrumbs'
import NewsWidget from '@/components/news/news-widget/NewsWidget'
import ProductSimpleWidget from '@/components/product/product-simple-widget/ProductSimpleWidget'
import Pagination from '@/components/common/Pagination'
import CollectionItem from '@/components/product/collection-item/CollectionItem.vue'


export default {
  components: {
    Breadcrumbs,
    NewsWidget,
    ProductSimpleWidget,
    Pagination,
    CollectionItem
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Коллекции' }
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    await store.dispatch('products/getCollections')

    return { breadcrumbs, products: store.state.products.collections, pages: 5, currentPage: 0 }
  }
}
</script>

<style lang="scss">
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
.banner{
  padding: 32px;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 40px;
  &:before{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    display: block;
    content: '';
  }
  &__content{
    position: relative;
    z-index: 2;

  }
  &__title{
    max-width: 340px;
    font-size: 32px;
    color: #FFF;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 30px;
  }
}
.filter{
  &-block{
    margin-bottom: 40px;
    &__title{
      font-weight: 700;
      font-size: 18px;
      margin-bottom: 20px;
    }
    &__item{
      font-size: 16px;
      margin-bottom: 16px;
      &-count{
        color: #969696;
      }
    }
  }
}
  @media (max-width: 768px) {

  }

</style>
