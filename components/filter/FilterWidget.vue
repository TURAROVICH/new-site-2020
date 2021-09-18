<template>
  <div>
    <div class="filter" :class="{'filter--open': mobileOpen}">
      <div class="filter__title-block">
        <div class="row align-items-center no-gutters">
          <div class="col">
            <div class="filter__title">Фильтр</div>
          </div>
          <div class="col-auto">
            <div class="filter__close">
              <img src="~assets/img/ico-menu-close.svg" alt="close"  @click="mobileOpen = !mobileOpen">
            </div>
          </div>
        </div>
      </div>
      <filter-block v-for="filter in filters" :filter="filter" :key="filter.type"/>
    </div>
    <div class="filter-trigger" :class="{'filter-trigger--open': !mobileOpen}"  @click="mobileOpen = !mobileOpen">Фильтр <div class="filter-trigger__count">3</div></div>
  </div>
</template>

<script>
import FilterBlock from '@/components/filter/filter-block/FilterBlock.vue'


export default {
  components: {
    FilterBlock
  },
  props: {
    filters: {
      type: Array,
      default: []
    }
  },
  data () {
    return {
      mobileOpen: false,
    }
  }
}
</script>

<style scoped lang="scss">
.filter-trigger{
  display: none;
}
.filter__title-block{
  display: none;
}

@media (max-width: 768px) {
  .filter{
    position: fixed;
    top: 0;
    width: 100%;
    left: 0;
    padding: 20px;
    background: #FFF;
    z-index: 100;
    overflow-y: auto;
    height: 100%;
    transform: translateX(-100%);
    transition: all 0.2s ease-in;
    &--open{
      transform: translateX(0);

    }
  }
  .filter-trigger{
    display: block;
    position: fixed;
    width: 80%;
    left: 10%;
    bottom: 20px;
    padding: 10px 20px;
    border-radius: 30px;
    background-color: #AB3226;
    color: #FFF;
    z-index: 200;
    text-align: center;
    box-shadow: 0 0 64px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    opacity: 0;
    transition: all 0.2s ease-in;
    &--open{
      opacity: 1;
    }
    &__count{
      display: inline-block;
      color: #323232;
      background: #FFF;
      line-height: 1;
      padding: 6px 10px;
      border-radius: 50%;
    }

  }
  .filter__title-block{
    border-bottom: 1px solid #DDD;
    margin-bottom: 16px;
    padding-bottom: 16px;
    display: block;
  }
  .filter__title{
    font-size: 24px;
    font-weight: 700;
  }
  .filter__close{
    margin-right: -6px;
  }
  .filter__block{
    border-bottom: 1px solid #DDD;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }
}
</style>
