<template>
  <div class="page page--content">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col">
          <div class="page__title">Новости</div>
        </div>
        <div class="col-auto"></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-4" v-for="item in news" :key="item.id">
          <NewsItem :item="item"/>
        </div>
      </div>
      <Pagination :pages="pages" :current-page="currentPage"/>
    </div>

  </div>
</template>

<script>
import NewsItem from '@/components/news/news-item/NewsItem'
import Breadcrumbs from '@/components/common/Breadcrumbs'
import Pagination from '@/components/common/Pagination'

export default {
  components: {
    NewsItem,
    Breadcrumbs,
    Pagination
  },
  async asyncData({ $axios, store, req, isServer }) {
    const breadcrumbs = [
      { title: 'Новости' }
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    await store.dispatch('news/getNews')

    return { news: store.state.news.news, pages: store.state.news.pages, currentPage: store.state.news.currentPage }
  }
}

</script>

<style lang="scss">


@media (max-width: 768px) {

}
</style>
