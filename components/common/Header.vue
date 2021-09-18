<template>
  <div class="header">
    <div class="row align-items-center">
      <div class="col-auto">
        <div class="menu__trigger" @click="toggleSideMenu">
          <img src="~assets/img/ico-menu.svg" alt="menu"/>
        </div>
        <SideMenu :menu-show="menuShow" @close="toggleSideMenu"/>
      </div>
      <div class="col-auto">
        <nuxt-link to="/">
          <img src="~assets/img/logo.svg" class="header__logo" alt="odesign"/>
        </nuxt-link>
      </div>
      <div class="col d-none d-md-block">
        <MainMenu/>
      </div>
      <div class="col-auto d-none d-md-block">
        <div class="header__phone">+7 800 900-00-00</div>
      </div>
      <div class="col-auto d-none d-md-block">
        <div class="header__call">Заказать звонок</div>
      </div>
      <div class="col-auto d-none d-md-block">
        <div class="header__search">
          <img src="~assets/img/ico-search.svg" alt="search"/>
        </div>
      </div>
      <div class="col-auto d-none d-md-block">
        <div class="header__fav">
          <img src="~assets/img/ico-favorite.svg" alt="favorite"/>
        </div>
      </div>
      <div class="col-auto d-none d-md-block">
        <nuxt-link to="/cart" class="header__cart">
          <img src="~assets/img/ico-cart.svg" alt="cart"/>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from '@/components/common/MainMenu'
import SideMenu from '@/components/common/SideMenu'

export default {
  components: {
    MainMenu,
    SideMenu
  },
  methods: {
    toggleSideMenu: function () {
      this.menuShow = !this.menuShow
    }
  },
  data() {
    return {
      menuShow: false
    }
  }
}
</script>

<style lang="scss">
  .header{
    padding: 20px 40px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
    &__phone{
      font-weight: 700;
    }
    &__call{
      color: #AB3226;
      font-size: 14px;
      padding: 10px 15px;
      border: 1px solid #AB3226;
      border-radius: 3px;
      cursor: pointer;
    }
  }
  .menu__trigger{
    cursor: pointer;
  }
  @media (max-width: 768px) {
    .header {
      padding: 20px 15px;
      &__logo{
        max-width: 120px;
        margin-left: -16px;
      }
    }
  }
</style>
