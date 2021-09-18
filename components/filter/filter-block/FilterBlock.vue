<template>
  <div class="filter-block">
    <div class="filter-block__title" :class="{'filter-block__title--open': active}" @click="active = !active">
      {{ $tc(`filter.type.${filter.title}`) }}
    </div>
    <vue-slide-up-down :active="active" :duration="300">
      <div class="filter-block__variants filter-block__variants--color" v-if="filter.type.toLowerCase() === 'colors'">
        <filter-color-item v-for="variant in filter.variants" :key="variant.id" :item="variant" @change-filter="onChange"/>
      </div>
      <div class="filter-block__variants" v-else-if="filter.type.toLowerCase() === 'single'">
        <filter-item-single v-for="variant in filter.variants" :key="variant.id" :item="variant" :filter="filter.type"  @change-filter="onChange"/>
      </div>
      <div class="filter-block__variants" v-else-if="filter.type.toLowerCase() === 'amount'">
        <filter-item-slider :filter="filter.variants" @change-filter="onChange"/>
      </div>
      <div class="filter-block__variants" v-else>
        <filter-item v-for="variant in defaultVariants" :key="variant.id" :item="variant" :filter="filter.type" @change-filter="onChange"/>

        <vue-slide-up-down v-if="otherVariants.length > 0" :active="moreActive" :duration="300" class="filter-block__variants-other">
          <filter-item v-for="variant in otherVariants" :key="variant.id" :item="variant" :filter="filter.type" @change-filter="onChange"/>
        </vue-slide-up-down>
        <div v-if="otherVariants.length > 0" @click="moreActive = !moreActive" class="filter-block__variants-show">{{ showMoreText }}</div>
      </div>

    </vue-slide-up-down>
  </div>
</template>

<script>
import VueSlideUpDown from 'vue-slide-up-down';
import FilterColorItem from '@/components/filter/filter-color-item/FilterColorItem.vue'
import FilterItem from '@/components/filter/filter-item/FilterItem.vue'
import FilterItemSingle from '@/components/filter/filter-item-single/FilterItemSingle.vue'
import FilterItemSlider from '@/components/filter/filter-item-slider/FilterItemSlider.vue'

export default {
  components: {
    VueSlideUpDown,
    FilterColorItem,
    FilterItemSingle,
    FilterItemSlider,
    FilterItem
  },
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      active: true,
      moreActive: false
    }
  },
  computed: {
    defaultVariants: function () {
      return [...this.filter.variants].splice(0,10)
    },
    otherVariants: function () {
      return [...this.filter.variants].splice(10)
    },
    showMoreText: function () {
      return this.moreActive ? 'Свернуть' : 'Показать все'
    }
  },
  methods: {
    onChange: async function (params) {
      await this.$store.dispatch('products/changeFilter', params)
    }
  }
}
</script>

<style scoped lang="scss">

.filter{
  &-block{
    margin-bottom: 40px;
    &__title{
      font-weight: 700;
      font-size: 18px;
      cursor: pointer;
      position: relative;
      &:after{
        content: '';
        background-image: url(~assets/img/ico-arrow-down.svg);
        background-position: center;
        width: 10px;
        height: 5px;
        display: block;
        position: absolute;
        right: 0;
        top: 50%;
        background-size: cover;
        transform: translateY(-50%);
      }
      &--open{
        &:after{
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }
    &__variants{
      padding: 20px 0 0;
      &-show{
        color: #7B7B7B;
        display: inline-block;
        border-bottom: 1px dashed #7B7B7B;
        cursor: pointer;
        line-height: 1;
      }
      &--color{
        display: flex;
        flex-wrap: wrap;
        margin-left: -4px;
        margin-right: -4px;
      }
    }
  }
}
@media (max-width: 768px) {
  .filter-block{
    border-bottom: 1px solid #DDD;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
}
</style>
