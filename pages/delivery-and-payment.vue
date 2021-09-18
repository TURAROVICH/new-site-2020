<template>
  <div class="page page--static">
    <div class="container">
      <Breadcrumbs/>
      <h1 class="page__title">
        Доставка и оплата
      </h1>
      <div class="row page__row">
        <div class="col-12 col-md-6">
          <h2 class="page__h2">Условия оплаты и доставки по Москве и Московской области</h2>
          <div class="page__hint">Дни доставки:</div>
          <div class="page__text page__text--block">Доставка заказов производится по будням, кроме государственных праздничных дней. Сроки доставки устанавливаются в соответствии со сроками ТК СДЭК. Доставка по Москве в пределах МКАД: 1-2 рабочих дня. Доставка за пределы МКАД: от 2-х рабочих дней. День передачи товара в ТК не учитывается при расчете количества дней на доставку.</div>
          <div class="page__hint">Время доставки:</div>
          <div class="page__text page__text--block">С 10:00 до 18:00</div>
          <div class="page__hint">Формат доставки:</div>
          <div class="page__text page__text--block">«До двери» с предварительным звонком</div>
          <div class="page__hint">Стоимость доставки:</div>
          <div class="page__text page__text--block">Бесплатно</div>
          <div class="page__hint">Способ оплаты:</div>
          <div class="page__text page__text--block">По выставленному счету – предварительная оплата заказа для юридических лиц  наличные – оплата курьеру при получении заказа на территории Москвы и МО банковская карта - оплата курьеру при получении заказа на территории Москвы и МО картой онлайн - оплата online до получения заказа, по ссылке присылаемой менеджером на указанные почту/телефон , после подтверждения заказа.</div>
        </div>
        <div class="col-12 col-md-6">
          <h2 class="page__h2">Условия оплаты и доставки<br/>по России</h2>
          <div class="page__hint">Дни доставки:</div>
          <div class="page__text page__text--block">Отгрузка заказов по России производится по будням, кроме государственных праздничных дней. Отгрузка производится после получения оплаты и согласования со специалистом компании "О-Дизайн" даты и времени.</div>
          <div class="page__hint">Формат доставки:</div>
          <div class="page__text page__text--block">До ближайшего терминала самовывоза До дома, если в городе есть представительство СДЭК</div>
          <div class="page__hint">Стоимость доставки:</div>
          <div class="page__text page__text--block">Бесплатно</div>
          <div class="page__hint">Способ оплаты:</div>
          <div class="page__text page__text--block">По выставленному счету – предварительная оплата заказа для юридических лиц картой онлайн - оплата online до получения заказа, по ссылке присылаемой менеджером на указанные почту/телефон , после подтверждения заказа.</div>
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

export default {
  components: {
    Breadcrumbs,
    Slider,
    ProductTopWidget,
    ProductWidget,
    NewsWidget,
    ProductSliderWidget
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Доставка и оплата' },
    ]

    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    return { }
  }
}
</script>

<style lang="scss">

@media (max-width: 768px) {

}
</style>
