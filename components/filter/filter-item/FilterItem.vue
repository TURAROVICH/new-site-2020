<template>
  <div class="filter-block__item">
    <input type="checkbox" :id="`filter-${filter}-${item.slug}`" class="form__checkbox-input" @change="onChange">
    <label class="form__checkbox-label form__checkbox-label--sm" :for="`filter-${filter}-${item.slug}`">{{ item.name }}</label>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down';

export default {
  components: {
    VueSlideUpDown
  },
  props: {
    filter: {
      type: String,
      required: true
    },
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
      this.$emit('change-filter', {filter: this.filter, value: this.item.slug, checked: e.target.checked})
    }
  }
}
</script>

<style scoped lang="scss">

.filter{
  &-block{
    &__item{
      font-size: 16px;
      padding-bottom: 12px;
      &-count{
        color: #969696;
        letter-spacing: 1px;
        font-size: 14px;
      }
    }
  }
}
@media (max-width: 768px) {

}
</style>
