<template>
  <div v-if="items.length > 0">
    <swiper class="swiper mainSlider" :options="swiperOption">
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div class="mainSlider__item" :style="{ backgroundImage: `url(${item.image})` }">
          <div class="container">
            <div class="mainSlider__content">
              <div class="mainSlider__title">{{ item.title }}</div>
              <div class="mainSlider__text">
                {{ item.text }}
              </div>
              <o-button white icon="arrow">Узнать подробнее</o-button>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="mainSlider__pagination" slot="pagination">
        <div class="container">
          <div class="row align-items-center justify-content-between">
            <div class="col-auto">
              <div class="swiper-pagination"></div>
            </div>
            <div class="col-auto">
              <div class="mainSlider__navigation">
                <div class="mainSlider__prev"></div>
                <div class="mainSlider__next"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'

import 'swiper/css/swiper.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.mainSlider__next',
          prevEl: '.mainSlider__prev',
        },
      },
    }
  },
}
</script>

<style lang="scss">
.mainSlider {
  &__item {
    background-size: cover;
    background-position: center;
    height: 540px;
    background-image: url(~assets/img/slider1.jpg);
    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.4);
      display: block;
      content: '';
    }
    & > .container {
      position: relative;
      height: 100%;
    }
  }
  &__content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: #FFF;
    max-width: 700px;
  }
  &__title {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 10px;
  }
  &__text {
    margin-bottom: 30px;
  }
  &__btn {
    background: #ffffff;
    border-radius: 3px;
    color: #323232;
    font-size: 16px;
    line-height: 1;
    padding: 20px 40px;
    display: inline-block;
    cursor: pointer;
    position: relative;
    &:before {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid #fff;
      border-radius: 3px;
      top: 8px;
      left: 8px;
    }
  }
}
.mainSlider__pagination {
  position: absolute;
  bottom: 32px;
  left: 0;
  width: 100%;
  .container {
    position: relative;
  }
  .swiper-pagination {
    position: relative;
    text-align: left;
  }
  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #fff;
    opacity: 1;
    margin: 2px 4px !important;
  }
  .swiper-pagination-bullet-active {
    width: 14px;
    height: 14px;
    border: 4px solid #ab3226;
    background: transparent;
    margin: 0 4px !important;
  }
}
.mainSlider__navigation {
  display: flex;
  flex-wrap: wrap;
  margin-right: -4px;
  margin-left: -4px;
}
.mainSlider__prev,
.mainSlider__next {
  width: 40px;
  height: 40px;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 2;
  position: relative;
  margin: 0 4px;
  background-repeat: no-repeat;
  background-position: center;
  &:focus {
    outline: none;
  }
}

.mainSlider__next {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDkgMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDEzTDcgN0wxIDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K);
}
.mainSlider__prev {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNCIgdmlld0JveD0iMCAwIDkgMTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik04IDEzTDIgN0w4IDEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIvPgo8L3N2Zz4K);
}

@media (max-width: 768px) {
  .mainSlider {
    &__title {
      font-size: 32px;
    }
  }
}
</style>
