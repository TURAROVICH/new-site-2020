<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <h1 class="page__title">
        Акции
      </h1>
      <div class="row banners">
        <div class="col-12">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="banners__item">
            <div class="banners__item-title">Банер</div>
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
      { title: 'Акции' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { }
  }
}
</script>

<style lang="scss">
  .banners{
    &__item{
      height: 368px;
      margin-bottom: 32px;
      background: #5C5C5C;
      position: relative;
      &-title{
        color: #6D6D6D;
        font-weight: 800;
        font-size: 60px;
        line-height: 100%;
        text-transform: uppercase;
        text-align: center;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translateY(-50%);
      }
    }
  }

@media (max-width: 768px) {

}
</style>
