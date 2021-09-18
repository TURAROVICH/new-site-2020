<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col-12 col-md-9">
          <h1 class="page__title">
            Партнерство
          </h1>

          <div class="page__text page__text--block">
            <p>Студия «О-Дизайн» является эксклюзивным дистрибьютором на территории Российской Федерации таких шведских брендов ,как BorasTapeter, ECO wallpaper, MR PERSWALL и английского бренда Cole&Son.</p>

            <p>Концепция <span class="red">BorasTapeter</span> отражает в первую очередь семейные ценности и предлагает тандем классического и современного дизайна.</p>

            <p>Стиль <span class="red">ECO wallpaper</span> – молодежный, яркий, смелый.</p>

            <p>Продукция <span class="red">MR PERSWALL</span> – это оригинальные фотообои и фотопанно по стандартным и индивидуальным размерам.</p>

            <p>Английские элитные обои <span class="red">Cole&Son</span> представлены компанией с собственным архивом - неисчерпаемым источником идей для создания новых коллекций, разрабатывая которые дизайнеры тщательно отбирают орнаменты, подбирают цветовую гамму, бережно сохраняя индивидуальный стиль обоев, одновременно придавая оттенок современности.</p>

            <p>Мы строим нашу маркетинговую политику на гибких взаимовыгодных условиях, стремимся всегда поддерживать высокий уровень сервиса и уверены, что партнерство с нашей компанией может иметь только положительный результат для обеих сторон.</p>

            <p>Всю необходимую информацию о нас и предлагаемой нами продукции Вы можете получить на сайте <a href="http://www.odesign.ru">www.odesign.ru</a> или по почте <a href="mailto:info@odesign.ru">info@odesign.ru</a></p>
          </div>

          <div class="page__text page__text--block">
            <div class="form">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-name">Имя</label>
                    <input type="text" v-model="form.name" class="form__input" id="form-name">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-company">Компания</label>
                    <input type="text" v-model="form.company" class="form__input" id="form-company">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-email">Email</label>
                    <input type="text" v-model="form.email" class="form__input" id="form-email">
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="form__group">
                    <label class="form__label" for="form-phone">Телефон</label>
                    <input type="text" v-model="form.phone" class="form__input" id="form-phone">
                  </div>
                </div>
              </div>
              <div class="row justify-content-center justify-content-md-end">
                <div class="col-auto form__btn-wrap">
                  <o-button black>Отправить сообщение</o-button>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div class="col-12 col-md-3">
          <CollectionSimpleWidget title="Коллекции" limit="3"/>
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
import ProductSimpleWidget from '@/components/product/product-simple-widget/ProductSimpleWidget'
import CollectionSimpleWidget from '@/components/product/collection-simple-widget/CollectionSimpleWidget'

export default {
  components: {
    Breadcrumbs,
    Slider,
    ProductTopWidget,
    ProductWidget,
    NewsWidget,
    ProductSliderWidget,
    ProductSimpleWidget,
    CollectionSimpleWidget
  },
  async asyncData({ store }) {
    const form = {
      name: '',
      company: '',
      email: '',
      phone: ''
    }
    const breadcrumbs = [
      { title: 'Партнерство' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { form }
  }
}
</script>

<style lang="scss">
@media (max-width: 768px) {

}
</style>
