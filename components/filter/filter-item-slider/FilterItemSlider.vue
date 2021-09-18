<template>
  <div class="filter-block__item">
    <div class="filter-slider__values">
      <div class="row no-gutters">
        <div class="col-auto">
          <div class="filter-slider__label">от:</div>
        </div>
        <div class="col-auto">
          <div class="filter-slider__value">{{value}}</div>
        </div>
        <div class="col"></div>
        <div class="col-auto">
        </div>
        <div class="col-auto">
        </div>
      </div>
    </div>

      <vue-slider
        ref="slider"
        v-model="value"
        v-bind="options"
        @change="onChange"
      ></vue-slider>
  </div>
</template>

<script>

import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
import 'vue-slider-component/dist-css/vue-slider-component.css'
import 'vue-slider-component/theme/default.css'

let components = {
  VueSlider
}

export default {
  components,
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: false,
      value: this.filter.min,
      options: {
        dotSize: 14,
        width: 'auto',
        height: 4,
        contained: false,
        direction: 'ltr',
        data: null,
        dataLabel: 'label',
        dataValue: 'value',
        min: this.filter.min,
        max: this.filter.max,
        interval: 1,
        disabled: false,
        clickable: true,
        duration: 0.1,
        tooltip: 'none',
        tooltipFormatter: void 0,
      }
    }
  },
  methods: {
    onChange: function() {
      this.$emit('change-filter', {filter: 'amount', value: this.value})
    }
  }

}
</script>

<style scoped lang="scss">

.filter{
  &-slider{
    &__values{
      margin-bottom: 20px;
    }
    &__label{
      color: #969696;
      font-size: 16px;
      margin-right: 5px;
      line-height: 1;
    }
    &__value{
      min-width: 21px;
      line-height: 1;
    }
  }
}
@media (max-width: 768px) {

}
</style>
