<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-auto col-md-2">
          <div class="footer__logo">
            <img src="~assets/img/logo.svg" alt="odesign"/>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="footer__blockTitle">Клиентам</div>
          <div class="footer__menu">
            <div class="row">
              <div class="col">
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Корзина</a>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Избранное</a>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/offers" class="footer__menuLink">Акции</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/shop/collections" class="footer__menuLink">Коллекции</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Наши магазины</a>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Обои на заказ</a>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/delivery-and-payment" class="footer__menuLink">Оплата и доставка</nuxt-link>
                </div>
              </div>
              <div class="col">
                <div class="footer__menuItem">
                  <nuxt-link to="/our-shops" class="footer__menuLink">Наши магазины</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">О компании</a>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/news" class="footer__menuLink">Новости</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/partnership" class="footer__menuLink">Партнерство</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Дизайнерам</a>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Пресс-релизы</a>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Статьи</a>
                </div>
              </div>
              <div class="col">
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Советы</a>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/reviews" class="footer__menuLink">Отзывы</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/faq" class="footer__menuLink">Вопрос-ответ</nuxt-link>
                </div>
                <div class="footer__menuItem">
                  <a href="#" class="footer__menuLink">Распродажа</a>
                </div>
                <div class="footer__menuItem">
                  <nuxt-link to="/guarantee" class="footer__menuLink">Гарантии и возврат</nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="footer__blockTitle">Контакты</div>
          <div class="footer__phone"><span class="footer__phoneCode">+7 495</span> 280-73-74</div>
          <div class="footer__address">Москва, ул. Мясницкая, д. 22 стр.1</div>
          <div class="footer__mail">info@odesign.ru</div>
          <soc-icons/>
        </div>
      </div>
    </div>
    <div class="footer__copy">2005-2020 «ODesign». Все права защищены</div>
  </div>
</template>

<script>
import SocIcons from '@/components/common/SocIcons'

export default {
  components: {
    SocIcons
  }
}
</script>

<style lang="scss">
  .footer{
    padding: 80px 0 0;
    background-color: #F2F2F2;
    &__logo{
      max-width: 112px;
      margin-top: -10px;
    }
    &__blockTitle{
      text-transform: uppercase;
      font-size: 15px;
      letter-spacing: 0.2px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    &__menu{
      &Item{
        margin-bottom: 12px;
      }
      &Link{
        color: #323232;
        font-size: 15px;
        &:hover,&:focus{
          color: #323232;
        }

      }
    }
    &__copy{
      color: #696969;
      text-align: center;
      text-transform: uppercase;
      font-size: 11px;
      letter-spacing: 2px;
      padding: 22px 0;
      border-top: 1px solid #DDD;
      margin-top: 40px;
    }
    &__phone{
      font-size: 20px;
      font-weight: 700;
      font-feature-settings: 'pnum' on, 'lnum' on;
      margin-bottom: 14px;
      &Code{
        color: #959595;
      }
    }
    &__address{
      font-size: 15px;
      margin-bottom: 16px;
    }
    &__mail{
      color: #AB3226;
      font-size: 15px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 768px) {
    .footer {
      &__logo {
        margin-bottom: 20px;
      }
      &__menu{
        line-height: 1.2;
        margin-bottom: 40px;
      }
      &__blockTitle{
      }
    }
  }
</style>
