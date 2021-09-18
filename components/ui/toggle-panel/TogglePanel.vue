<template>
  <div class="faq-item">
    <div @click="active = !active" class="faq-item__title" :class="{'faq-item__title--open': active}">
      <slot name="title"></slot>
    </div>
    <vue-slide-up-down :active="active" :duration="300">
      <div class="faq-item__content">
        <span class="faq-item__answer">Ответ:</span> <slot name="content"></slot>
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
  data() {
    return {
      active: false
    }
  }

}
</script>

<style lang="scss">
  .faq-item{
    padding: 16px 24px;
    border: 1px solid #B3B3B3;
    border-radius: 3px;
    margin-bottom: 16px;
    font-size: 16px;
    &__title{
      font-weight: 600;
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
    &__content{
      padding-top: 10px;
    }
    &__answer{
      color: #A2A2A2;
    }
  }
</style>
