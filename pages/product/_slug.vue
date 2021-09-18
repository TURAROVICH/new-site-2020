<template>
  <div class="page page--content" v-if="product">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="product-img">
            <div class="product-img__item">
              <img src="/product/product-detail1.jpg" alt="Обои COLE&SON Великобритания ART 117/10028">
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="product-title">
            {{ product.title }}
          </div>
          <div class="tabs">
            <div class="tabs-header">
              <div class="tabs-header__inner">
              <div v-for="(tab, index) in tabs"
                   :key="index"
                   :class="{'tabs-header__item--active': index === currentTab}"
                   @click="changeTab(index)"
                   class="tabs-header__item">
                {{ tab.label }}
              </div>
              </div>
            </div>
            <div class="tabs-content">
              <div class="tabs-content__item" v-show="currentTab === 0">
                <table class="product-params">
                  <tbody>
                    <tr>
                      <td class="product-params__label">Название:</td>
                      <td class="product-params__value">Обои</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Коллекция:</td>
                      <td class="product-params__value">{{ product.collection.name }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Страна-изготовитель:</td>
                      <td class="product-params__value">{{ product.country.name }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Размер рулона:</td>
                      <td class="product-params__value">{{ product.params }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Стыковка:</td>
                      <td class="product-params__value">{{ product.docking.name }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Повтор рисунка:</td>
                      <td class="product-params__value">0,53 М</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Основа:</td>
                      <td class="product-params__value">{{ product.basis.name }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Производитель:</td>
                      <td class="product-params__value">{{ product.brand.name }}</td>
                    </tr>
                    <tr>
                      <td class="product-params__label">Экологичные:</td>
                      <td class="product-params__value">Да</td>
                    </tr>
                  </tbody>
                </table>
                <div class="tags">
                  <div class="tags__item">#Дизайн</div>
                  <div class="tags__item">#Обои</div>
                  <div class="tags__item">#Стены</div>
                  <div class="tags__item">#Cole&Son</div>
                  <div class="tags__item">#ECO</div>
                  <div class="tags__item">#Wallpaper</div>
                </div>
              </div>
              <div class="tabs-content__item" v-show="currentTab === 1">
                <div class="product-description">
                  {{ product.description }}
                </div>
              </div>
              <div class="tabs-content__item" v-show="currentTab === 2">
                <div class="product-description">
                  Миниатюрные канареечные вьюрки приютились среди жасминовых стеблей — современная версия изящного принта в стиле движения искусств и ремёсел. Объёмный и вместе с тем безмятежный рисунок в мягких ботанических оттенках. Расходясь веером по стене, обойный узор демонстрирует тонкие переходы цвета.
                </div>
              </div>
              <div class="tabs-content__item" v-show="currentTab === 3">
                <div class="product-eco">
                  <div class="row product-eco__item">
                    <div class="col-auto">
                      <img src="/product/eco-1.svg" alt="">
                    </div>
                    <div class="col">При поклейке нетканых обоев клей наносится сразу на стену.</div>
                  </div>
                  <div class="row product-eco__item">
                    <div class="col-auto">
                      <img src="/product/eco-2.svg" alt="">
                    </div>
                    <div class="col">Наши обои имеют маркировку CE, так как производятся в соответствии с высочайшими стандартами: санитарно-гигиеническими, природоохранными и требованиям к безопасности.</div>
                  </div>
                  <div class="row product-eco__item">
                    <div class="col-auto">
                      <img src="/product/eco-3.svg" alt="">
                    </div>
                    <div class="col">Знак Проверки качества Международной ассоциацией производителей обоев (IGI).</div>
                  </div>
                  <div class="row product-eco__item">
                    <div class="col-auto">
                      <img src="/product/eco-4.svg" alt="">
                    </div>
                    <div class="col">Древесное сырье, которое мы используем для изготовления обоев, поступает из возобновляемых лесных ресурсов.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="product-colors">
            <div class="product-block-title">Выберите цвет</div>
            <div class="product-colors__list">
              <div class="product-colors__item"
                   :class="{'product-colors__item--active': selectedColor === index}"
                   @click="selectedColor = index"
                   v-for="(color, index) in product.colors"
                   :key="index"
                   :style="{backgroundColor: `#${color.color}`}"></div>
            </div>
          </div>
          <div class="product-block-title">Цена рулона</div>
          <div class="row justify-content-between">
            <div class="col-auto">
              <div class="product-price">{{ product.prices.current }} руб.</div>
            </div>
            <div class="col-auto">
              <div class="row">
                <div class="col-auto">
                  <div class="product-counter">
                    <div class="product-counter__control product-counter__control--minus" @click="dec">-</div>
                    <input type="text" class="product-counter__input" v-model="count"/>
                    <div class="product-counter__control product-counter__control--plus" @click="inc">+</div>
                  </div>
                </div>
                <div class="col-auto">
                  <div class="product-button">В корзину</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="product-related">
        <ProductSliderWidget title="Похожие товары"/>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '@/components/common/Breadcrumbs'
import ProductSliderWidget from '@/components/product/product-slider-widget/ProductSliderWidget'


export default {
  components: {
    Breadcrumbs,
    ProductSliderWidget
  },
  async middleware({ store, redirect, params }) {
    await store.dispatch('products/getProductBySlug', { slug: params.slug })
    if (!store.state.products.currentProduct) {
      redirect('/error')
    }
  },
  async asyncData({ params, $axios, store }) {
    const product = store.state.products.currentProduct
    const breadcrumbs = [
      { title: 'Обои', link: '/shop/category/wallpaper' },
      { title: product.title }
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })

    /* @TODO вынести в отдельный компонент */
    const tabs = [
      {label: 'Параметры'},
      {label: 'Описание'},
      {label: 'Калькулятор'},
      {label: 'Экология'},
    ]
    const currentTab = 0
    const selectedColor = 0
    const count = 1
    return { breadcrumbs, tabs, currentTab, count, product, selectedColor }
  },
  methods: {
    changeTab(index) {
      this.currentTab = index
    },
    dec() {
      this.count -= 1
      if (this.count < 1) this.count = 1
    },
    inc() {
      this.count += 1
    }
  }
}
</script>
<style lang="scss">
.product{
  &-title{
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    margin-bottom: 25px;
  }
  &-block-title{
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    color: #848484;
    margin-bottom: 16px;
  }
  &-price{
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 20px;
  }
  &-button{
    background-color: #AB3226;
    color: #FFF;
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    background-image: url(~assets/img/ico-cart--white.svg);
    background-position: center left 50px;
    background-repeat: no-repeat;
    padding: 14px 50px 14px 80px;
    cursor: pointer;
  }
  &-related{
    margin-bottom: 100px;
  }
  &-description{
    font-size: 15px;
    line-height: 24px;
  }
  &-eco{
    font-size: 13px;
    &__item{
      margin-bottom: 20px;
    }
  }
  &-params{
    margin-bottom: 20px;
    &__label{
      font-weight: 500;
      font-size: 13px;
      text-transform: uppercase;
      color: #7C7C7C;
      padding-bottom: 15px;
      padding-right: 40px;
    }
    &__value{
      font-size: 13px;
      font-weight: 600;
      padding-bottom: 15px;
      text-transform: uppercase;
    }
  }
  &-colors{
    border-top: 1px solid rgba(0, 0, 0, 0.08);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    padding: 20px 0 25px;
    margin: 20px 0;
    &__title{

    }
    &__list{
      display: flex;
      flex-wrap: wrap;
    }
    &__item{
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 0 4px;
      position: relative;
      cursor: pointer;
      border: 1px solid #DDD;
      box-sizing: border-box;
      &:after{
        position: absolute;
        border-radius: 50%;
        width: 40px;
        height: 40px;
        border: 2px solid transparent;
        content: '';
        display:block;
        top: -5px;
        left: -5px;
        transition: all 0.35s ease;
      }
      &--active{
        &:after{
          border: 2px solid #AB3226;
        }
      }
    }
  }
  &-counter{
    display: flex;
    flex-wrap: wrap;
    border-radius: 3px;
    border: 2px solid #323232;
    &__input{
      border: 0;
      width: 30px;
      text-align: center;
      height: 48px;
      outline: none;
      line-height: 48px;
      font-size: 15px;
      padding: 0;
    }
    &__control{
      width: 35px;
      text-align: center;
      line-height: 48px;
      cursor: pointer;
      font-size: 30px;
    }
  }
  &-img{
    margin-bottom: 20px;
  }
}
.tabs-header{
  overflow-x: auto;
  margin: 0 0 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  &__inner{
    display: flex;
    flex-wrap: wrap;
    width: max-content;
  }
  &__item{
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 700;
    color: #848484;
    padding: 12px 0;
    cursor: pointer;
    margin-right: 32px;
    &--active{
      color: #AB3226;
      border-bottom: 2px solid #AB3226;;
    }
  }
}

.tags{
  &__item{
    font-size: 13px;
    font-weight: 500;
    padding: 4px 12px;
    background-color: #EBEBEB;
    border-radius: 32px;
    display: inline-block;
    margin-bottom: 10px;
  }
}

@media (max-width: 768px) {

}
</style>
