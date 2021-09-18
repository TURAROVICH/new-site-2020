<template>
  <div v-if="selectedShop">
    <div @click="selectShop"
         class="map__shop-title"
         :class="{'map__shop-title--open': selectedShop === shop.id && isOpened, 'map__shop-title--one': one}"
         v-html="formattedShop.title">
    </div>
    <vue-slide-up-down @close-end="closeEnd" @open-end="openEnd" :active="(selectedShop === shop.id && isOpened) || one" :duration="300">
      <div class="map__shop-info">
        <div class="map__shop-param map__shop-address">{{shop.address}}</div>
        <div class="map__shop-param map__shop-phone">
          <div v-for="phone in shop.phones" :key="phone">{{phone}}</div>
        </div>
        <div class="map__shop-param map__shop-email">{{shop.email}}</div>
        <div class="map__shop-param map__shop-schedule" v-if="shop.schedule">{{shop.schedule}}</div>
        <div class="map__shop-param map__shop-schedule" v-if="shop.scheduleSpec">
          <div class="map__shop-param map__shop-spec-schedule">График работы в праздники:</div>
          <div v-html="shop.scheduleSpec"></div>
        </div>
      </div>
    </vue-slide-up-down>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down';

export default {
  components: {
    VueSlideUpDown
  },
  props: {
    shop: {
      type: Object,
      required: true
    },
    selectedShop: {
      type: String,
      required: true
    },
    one: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    selectShop() {
      if (!this.isOpened) {
        this.$emit('select-shop', this.shop.id, this.shop.coords)
        this.isOpened = true
      }
    },
    openEnd() {
      this.isOpened = true
    },
    closeEnd() {
      this.isOpened = false
    }
  },
  computed: {
    formattedShop: function () {
      return {
        ...this.shop,
        title: this.shop.title.replace('O', '<span class="red">O</span>')
      }
    }
  },
  data() {
    return {
      active: false,
      isOpened: false
    }
  }

}
</script>

<style lang="scss">
</style>
