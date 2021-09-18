<template>
  <div class="filter-block__color-wrap" v-if="item.color" title="">
    <div class="filter-block__color"
         :class="{'filter-block__color--selected': active}"
         @click="onChange"
         :style="{backgroundColor: `#${item.color}`}"></div>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down';

export default {
  components: {
    VueSlideUpDown
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: false
    }
  },
  methods: {
    onChange: function(e) {
      this.active = !this.active
      this.$emit('change-filter', {filter: 'colors', value: this.item.slug, checked: this.active})
    }
  }
}
</script>

<style scoped lang="scss">

.filter{
  &-block{
    &__color{
      margin: auto;
      overflow: hidden;
      cursor: pointer;
      position: relative;
      &:before {
        content: '';
        padding-top: 100%;
        float: left;
      }
      border-radius: 4px;
      &-wrap{
        width: 20%;
        padding: 0 4px 8px;
      }
      &--selected{
        &:after{
          position: absolute;
          content: '';
          display: block;
          width: 20px;
          height:20px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-image: url(~assets/img/ico-color-check.svg);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }
    }
  }
}
@media (max-width: 768px) {

}
</style>
