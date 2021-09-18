<template>
  <div class="sideMenu" :class="{'sideMenu--open': menuShow}">
    <div class="sideMenu__inner">
      <div class="row align-items-center no-gutters">
        <div class="col-auto">
          <div @click="$emit('close')" class="sideMenu__close">
            <img src="~/assets/img/ico-menu-close.svg" alt="close">
          </div>
        </div>
        <div class="col">
          <div class="sideMenu__title">Меню</div>
        </div>
      </div>
      <div class="sideMenu__item-list">
        <div v-for="(item, index) in items" class="sideMenu__item" :key="index">
          <div v-if="item.type && item.type === 'separator'" class="sideMenu__separator"></div>
          <a v-else  @click.prevent="link(item.link)" class="sideMenu__link" :class="{'sideMenu__link--spec': item.spec}">{{ item.title }}</a>
        </div>
      </div>
      <soc-icons/>
    </div>
  </div>
</template>

<script>
import SocIcons from '@/components/common/SocIcons'

export default {
  components: {
    SocIcons
  },
  props: {
    menuShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    link(link) {
      this.$emit('close');
      this.$router.push(link)
    }
  },
  data () {
    return {
      items: [
        { title: 'Распродажа', link: '/shop/category/wallpaper', spec: true },
        { title: 'Коллекции', link: '/shop/collections' },
        { title: 'Акции', link: '/offers' },
        { title: 'Обои на заказ', link: '/' },
        { type: 'separator' },
        { title: 'Гарантии и возврат', link: '/guarantee' },
        { title: 'Вопрос-ответ', link: '/faq' },
        { title: 'Советы', link: '/' },
        { title: 'Статьи', link: '/' },
        { type: 'separator' },
        { title: 'О компании', link: '/' },
        { title: 'Новости', link: '/news' },
        { title: 'Пресс-релизы', link: '/' },
        { title: 'Дизайнерам', link: '/' },
        { type: 'separator' }
      ]
    }
  }
}
</script>

<style lang="scss">
.sideMenu{
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  background: #FFF;
  height: 100%;
  z-index: 1000;
  box-shadow: 16px 0 64px rgba(0, 0, 0, 0.16);
  transform: translateX(-450px);
  transition: transform 0.2s ease-in;
  overflow-y: auto;
  &--open{
    transform: translateX(0);
  }
  &__inner{
    padding: 32px;
  }
  &__item{
    margin-bottom: 16px;
  }
  &__item-list{
    margin-top: 30px;
  }
  &__link{
    color: #323232;
    transition: color 0.35s ease-in;
    font-size: 17px;
    cursor: pointer;
    &--spec, &:hover, &:focus{
      color: #AB3226;
    }
  }
  &__separator{
    border-bottom: 1px solid #DDD;
    margin: 25px 0;
  }
  &__close{
    margin-left: -6px;
    margin-right: 10px;
    cursor: pointer;
  }
  &__title{
    font-size: 20px;
    font-weight: 700;
  }
}
@media (max-width: 768px) {
  .sideMenu{
    width: 100%;
    transform: translateX(-120%);
    &--open{
      transform: translateX(0);
    }
    &__item{
      margin-bottom: 10px;
    }
    &__separator{
      margin: 20px 0;
    }
  }
}
</style>
