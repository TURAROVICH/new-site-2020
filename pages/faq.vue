<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col-12 col-md-9">
          <h1 class="page__title">
            Часто задаваемые вопросы
          </h1>
          <div class="faq">
            <toggle-panel>
              <template #title>
                Моются ли ваши обои?
              </template>
              <template #content>
                Все обои протираются влажной губкой. (возможна влажная уборка)
              </template>
            </toggle-panel>
            <toggle-panel>
              <template #title>
                Насколько экологичны ваши обои?
              </template>
              <template #content>
                Все обои протираются влажной губкой. (возможна влажная уборка)
              </template>
            </toggle-panel>
            <toggle-panel>
              <template #title>
                Можно ли поклеить ваши обои в детскую?
              </template>
              <template #content>
                Все обои протираются влажной губкой. (возможна влажная уборка)
              </template>
            </toggle-panel>
            <toggle-panel>
              <template #title>
                Есть ли обои для кухни?
              </template>
              <template #content>
                Все обои протираются влажной губкой. (возможна влажная уборка)
              </template>
            </toggle-panel>
          </div>
          <o-button black>Задать вопрос</o-button>
        </div>
        <div class="col-12 col-md-3">
          <CollectionSimpleWidget title="Коллекции" :limit="2"/>
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
import CollectionSimpleWidget from '@/components/product/collection-simple-widget/CollectionSimpleWidget'
import TogglePanel from '@/components/ui/toggle-panel/TogglePanel'

export default {
  components: {
    Breadcrumbs,
    Slider,
    ProductTopWidget,
    ProductWidget,
    NewsWidget,
    ProductSliderWidget,
    CollectionSimpleWidget,
    TogglePanel
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Часто задаваемые вопросы' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { }
  }
}
</script>

<style lang="scss">
.faq{
  margin-bottom: 64px;
}
@media (max-width: 768px) {

}
</style>
