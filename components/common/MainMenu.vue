<template>
  <div class="menu">
    <div class="row justify-content-center">
      <div class="col-auto menu__item" v-for="(item, key) in items" :key="key">
        <NuxtLink class="menu__link" :to="item.link">{{ item.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      items: [
        { title: 'Обои', link: '/shop/category/wallpaper' },
        { title: 'Лепнина', link: '/' },
        { title: 'Краски', link: '/' },
        { title: 'Текстиль', link: '/' },
        { title: 'Декор', link: '/' },
        { title: 'Наши магазины', link: '/our-shops' }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu{
  &__link{
    color: #323232;
    font-size: 17px;
    &:hover,&:focus{
      color: #323232;
    }
  }
}
</style>
