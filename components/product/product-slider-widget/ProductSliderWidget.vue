<template>
  <div class="productSliderWidget">
    <div class="productWidget__title">
      <div class="row align-items-center">
        <div class="col">
          {{ title }}
        </div>
        <div class="col-auto">
          <div class="productSliderWidget__navigation" slot="button-next">
            <div class="productSliderWidget__prev"></div>
            <div class="productSliderWidget__next"></div>
          </div>
        </div>
      </div>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in products" :key="index">
        <ProductItem :item="item"/>
      </swiper-slide>
      <div class="productSliderWidget__pagination" slot="pagination">
        <div class="swiper-pagination"></div>
      </div>
    </swiper>
  </div>

</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import ProductItem from '@/components/product/product-item/ProductItem.vue'

export default {
  components: {
    ProductItem,
    Swiper, SwiperSlide
  },
  props: {
    title: String
  },
  data () {
    return {
      products: [
        {id: 1, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 2, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod2.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 3, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod3.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860',} },
        {id: 4, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod4.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 5, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod4.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 6, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod2.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} },
        {id: 7, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod1.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860'} },
        {id: 8, title: 'Обои Elegance 5 Espirit 128', img: '/product/prod5.jpg', params: '10,05м Х 0,53м', prices: { current: '13 860', old: '16 990'} }
      ],
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
          768: {
            slidesPerView: 4,
            spaceBetween: 32
          }
        },
        pagination: {
          el: '.swiper-pagination'
        },
        navigation: {
          nextEl: '.productSliderWidget__next',
          prevEl: '.productSliderWidget__prev'
        }
      }
    }
  }
}
</script>

<style lang="scss">
.productSliderWidget{
  padding: 80px 0 0;
  position: relative;
  &__title{
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 40px;
  }
  &__btnWrap{
    text-align: center;
  }
}
.productSliderWidget__pagination {
  position: absolute;
  bottom: 0px;
  left: 0;
  width: 100%;
  .container{
    position: relative;
  }
  .swiper-pagination{
    position: relative;
    text-align: center;
  }
  .swiper-pagination-bullet{
    width: 10px;
    height: 10px;
    background: #E4E4E4;
    opacity: 1;
    margin: 2px 4px!important;
  }
  .swiper-pagination-bullet-active{
    width: 14px;
    height: 14px;
    border: 4px solid #AB3226;
    background: transparent;
    margin: 0 4px!important;
  }
}
.productSliderWidget__navigation{
  display: flex;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-left: -4px;
  position: relative;
  z-index: 3;
}
.productSliderWidget__prev,
.productSliderWidget__next{
  width: 32px;
  height: 32px;
  border: 2px solid #323232;
  border-radius: 50%;
  z-index: 2;
  position: relative;
  margin: 0 4px;
  background-repeat: no-repeat;
  background-position: center;
  &:focus{
    outline: none;
  }
}

.productSliderWidget__next{
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDEgMTEiIHN0cm9rZT0iIzMyMzIzMiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=);
}
.productSliderWidget__prev{
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDggMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik03IDFMMiA2TDcgMTEiIHN0cm9rZT0iIzMyMzIzMiIgc3Ryb2tlLXdpZHRoPSIyIi8+Cjwvc3ZnPgo=);
}
</style>
