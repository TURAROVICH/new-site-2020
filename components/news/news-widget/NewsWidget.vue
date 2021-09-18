<template>
  <div class="newsWidget">
    <div class="newsWidget__title">{{ title }}</div>
    <div class="row">
      <div class="col-12 col-md-4" v-for="item in news" :key="item.id">
        <NewsItem :item="item"/>
      </div>
    </div>
    <div class="newsWidget__btnWrap">
      <nuxt-link to="/news">
        <o-button icon="eye">{{ buttonText }}</o-button>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import NewsItem from '@/components/news/news-item/NewsItem.vue'
export default {
  components: {
    NewsItem
  },
  props: {
    title: String,
    buttonText: {
      type: String,
      default: 'Показать больше'
    }
  },
  data () {
    return {
      news: []
    }
  },
  methods: {
    async fetchNews() {
      const news = await this.$axios.$get(process.env.BASE_URL + '/mock/news.json')
      this.news = news.slice(0,3)
    }
  },
  mounted() {
    this.fetchNews()
  }

}
</script>

<style lang="scss">
.newsWidget{
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
  .newsWidget {
    padding: 40px 0;

    &__title {
      font-size: 26px;
      margin-bottom: 20px;
      line-height: 1.20;
    }
  }
}
</style>
