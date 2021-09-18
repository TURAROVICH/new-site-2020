<template>
  <div class="page page--content" v-if="news">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col-12 col-md-8 order-1">
          <div class="page__title">
            {{ news.title }}
          </div>
          <div class="page__text" v-html="news.text"></div>
        </div>
        <div class="col-12 col-md-4 order-3 order-md-2">
          <ProductSimpleWidget title="Новинки"/>
        </div>
        <div class="col-12 order-2 order-md-3">
          <NewsWidget title="Еще новости" button-text="Читать все новости"/>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/common/Breadcrumbs'
import NewsWidget from '@/components/news/news-widget/NewsWidget'
import ProductSimpleWidget from '@/components/product/product-simple-widget/ProductSimpleWidget'


export default {
  components: {
    Breadcrumbs,
    NewsWidget,
    ProductSimpleWidget
  },
  async middleware({ store, redirect, params }) {
    await store.dispatch('news/getNewsBySlug', { slug: params.slug })
    if (!store.state.news.currentNews) {
      redirect('/error')
    }
  },
  async asyncData({ store }) {
    const news = store.state.news.currentNews

    const breadcrumbs = [
      { title: 'Новости', link: '/news' },
      { title: news.title }
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { news }
  }
}
</script>

<style lang="scss">


@media (max-width: 768px) {

}
</style>
