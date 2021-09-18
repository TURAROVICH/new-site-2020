<template>
  <div class="productSimpleWidget">
    <div class="productSimpleWidget__title">{{ title }}</div>
    <div class="row">
      <div class="col-12" v-for="item in items" :key="item.id">
        <CollectionItem :item="item"/>
      </div>
    </div>
  </div>
</template>

<script>

import CollectionItem from '@/components/product/collection-item/CollectionItem'

export default {
  components: {
    CollectionItem
  },
  props: {
    title: String,
    type: {
      type: String,
      default: 'simple'
    },
    limit: {
      type: Number,
      default: 5
    }
  },
  data () {
    const items = [
      {id: 1, title: 'Contemporary Restyled', img: '/product/prod1.jpg', slug: '/shop/collections/collection1' },
      {id: 2, title: 'Contemporary Restyled', img: '/product/prod2.jpg', slug: '/shop/collections/collection2' },
      {id: 3, title: 'Contemporary Restyled', img: '/product/prod3.jpg', slug: '/shop/collections/collection3' },
      {id: 4, title: 'Contemporary Restyled', img: '/product/prod4.jpg', slug: '/shop/collections/collection4' },
      {id: 5, title: 'Contemporary Restyled', img: '/product/prod4.jpg', slug: '/shop/collections/collection5' },
      {id: 6, title: 'Contemporary Restyled', img: '/product/prod2.jpg', slug: '/shop/collections/collection6' },
      {id: 7, title: 'Contemporary Restyled', img: '/product/prod1.jpg', slug: '/shop/collections/collection7' },
      {id: 8, title: 'Contemporary Restyled', img: '/product/prod5.jpg', slug: '/shop/collections/collection8' }
    ]
    return {
      items: items.slice(0, this.limit)
    }
  }
}
</script>

<style lang="scss">
.productSimpleWidget{
  &__title{
    font-size: 19px;
    line-height: 32px;
    font-weight: 700;
    border-bottom: 1px solid #DDD;
    margin-bottom: 16px;
  }
  &__item{
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid #DDD;
    &:last-child{
      border-bottom: 0;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    &Img{
     width: 87px;
     height: 87px;
     border-radius: 6px;
     background-size: cover;
     background-position: center;
      margin-right: 16px;
    }
    &Title{
      font-size: 15px;
    }
    &Price{
      font-size: 17px;
      font-weight: 700;
      &--old{
        opacity: 0.64;
        font-size: 14px;
        font-weight: 600;
        text-decoration: line-through;
      }
    }
  }
}
@media (max-width: 768px) {
  .productWidget {
    padding: 0 0 40px;

    &__title {
      font-size: 26px;
      margin-bottom: 20px;
      line-height: 1.20;
    }
  }
}
</style>
