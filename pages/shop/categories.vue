<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <h1 class="page__title">
        Категории
      </h1>
      <div class="row categories">
        <div class="col-12 col-md-4">
          <nuxt-link to="/shop/category/wallpapers">
            <div class="categories__item categories__item--lg" :style="{ backgroundImage: `url(/product/cat1.jpg)` }">
              <div class="categories__item-title">Обои</div>
            </div>
          </nuxt-link>
        </div>
        <div class="col-12 col-md-8">
          <div class="row">
            <div class="col-12 col-md-7">
              <div class="categories__item" :style="{ backgroundImage: `url(/product/cat2.jpg)` }">
                <div class="categories__item-title">Лепнина</div>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div class="categories__item categories__item--sm" :style="{ backgroundImage: `url(/product/cat3.jpg)` }">
                <div class="categories__item-title">Краски</div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-md-7">
              <div class="categories__item categories__item" :style="{ backgroundImage: `url(/product/cat4.jpg)` }">
                <div class="categories__item-title">Текстиль</div>
              </div>
            </div>
            <div class="col-12 col-md-5">
              <div class="categories__item categories__item--sm" :style="{ backgroundImage: `url(/product/cat5.jpg)` }">
                <div class="categories__item-title">Перейти в каталог</div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
import ProductWidget from '@/components/product/product-widget/ProductWidget'
import ProductTopWidget from '@/components/product/product-top-widget/ProductTopWidget'
import ProductSliderWidget from '@/components/product/product-slider-widget/ProductSliderWidget'
import NewsWidget from '@/components/news/news-widget/NewsWidget'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import ProductSimpleWidget from '@/components/product/product-simple-widget/ProductSimpleWidget'

export default {
  components: {
    Breadcrumbs,
    Slider,
    ProductTopWidget,
    ProductWidget,
    NewsWidget,
    ProductSliderWidget,
    ProductSimpleWidget
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Категории' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { }
  },

}
</script>

<style lang="scss">
  .categories{
    &__item{
      height: 280px;
      background-size: cover;
      background-position: center;
      margin-bottom: 32px;
      padding: 20px;
      position: relative;
      &:before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
      }
      &--lg{
        height: calc(100% - 32px);
      }
      &-title{
        position: absolute;
        bottom: 20px;
        color: #FFF;
      }
    }
  }

@media (max-width: 768px) {

}
</style>
