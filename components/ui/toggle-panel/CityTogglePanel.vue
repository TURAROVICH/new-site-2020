<template>
  <div :class="{'map__city-wrap': city.title === 'Москва'}">
    <div @click="selectCity" class="map__city" :class="{'map__city--open': active}">
      {{ city.title }}
    </div>
    <vue-slide-up-down :active="active" :duration="300">
      <div class="map__shop-list">
        <div class="map__shop" v-for="shop in city.shops" :key="shop.id">
          <shop-toggle-panel
            ref="shop"
            :shop="shop"
            :one="city.shops.length === 1"
            :selected-shop="selectedShop"
            @select-shop="selectShop"/>
        </div>
      </div>
    </vue-slide-up-down>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down';
import ShopTogglePanel from '@/components/ui/toggle-panel/ShopTogglePanel'

export default {
  components: {
    VueSlideUpDown,
    ShopTogglePanel
  },
  props: {
    city: {
      type: Object,
      required: true
    }
  },
  methods: {
    selectShop(id, coords) {
      this.$emit('select-shop', coords)
      this.selectedShop = id
    },
    selectCity() {
      this.active = !this.active
      this.selectedShop = this.city.shops[0].id || undefined
      const el = this.$refs.shop[0].$el.getElementsByClassName('map__shop-title')[0]
      el.click()
    }
  },
  mounted () {
  },
  data() {
    return {
      active: false,
      selectedShop: this.city.shops[0].id || undefined
    }
  }

}
</script>

<style lang="scss">
</style>
