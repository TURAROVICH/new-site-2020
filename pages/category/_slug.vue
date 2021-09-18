<template>
  <div class="page page--content">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col">
          <div class="category-title">Обои</div>
          <div class="category-text">
            Примесь облучает расширяющийся гамма-квант. В ряде недавних экспериментов квантовое состояние усиливает вихрь. Интерпретация всех  ниже наблюдений предполагает, что еще до начала измерений зеркало ортогонально. Расслоение излучает квант. Течение среды вращает ультрафиолетовый осциллятор.
          </div>
        </div>
        <div class="col-auto"></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3">
          <filter-widget :filters="filter"/>
        </div>
        <div class="col-12 col-md-9">
          <div class="banner" style="background-image: url(/banners/banner1.jpg)">
            <div class="banner__content">
              <div class="banner__title">Здесь находится тестовый заголовок баннера</div>
              <o-button white icon="arrow">Узнать подробнее</o-button>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="col-auto">
              <div class="category-count">{{ $tc('products', total) }}</div>
            </div>
            <div class="col-auto">
              <div class="category-sort">Сортировка по умолчанию</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-4" v-for="item in products" :key="item.id">
              <ProductItem :item="item"/>
            </div>
          </div>
          <Pagination/>
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
import ProductItem from '@/components/product/product-item/ProductItem'
import FilterWidget from '@/components/filter/FilterWidget'


export default {
  components: {
    Breadcrumbs,
    NewsWidget,
    ProductSimpleWidget,
    Pagination,
    ProductItem,
    FilterWidget
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Обои' }
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    await store.dispatch('products/getProducts')

    const products = store.state.products.products
    const filter = store.state.products.filter
    const total = products.length

    return { breadcrumbs, products, filter, total }
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

  @media (max-width: 768px) {

  }

</style>
