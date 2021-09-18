<template>
  <button class="btn" :class="{'btn--white': white, 'btn--black': black, ...iconClass}" @click.prevent="$emit('click')">
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  props: {
    white: Boolean,
    black:  Boolean,
    icon:  String,
  },

  computed: {
    iconClass: function () {
      const icon = 'btn--' + this.icon;
      return { [icon]: !!this.icon }
    }
  }
}
</script>

<style lang="scss">
.btn{
  background: #FFFFFF;
  border-radius: 3px;
  color: #323232;
  font-size: 16px;
  line-height: 1;
  padding: 20px 40px;
  display: inline-block;
  position: relative;
  border: 1px solid #323232;
  margin-bottom: 20px;
  &:focus{
    outline: none;
  }
  span{
    position: relative;
    z-index: 2;
  }
  &:before{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid #323232;
    border-radius: 3px;
    top: 8px;
    left: 8px;
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 3px;
    top: 0;
    left: 0;
    z-index: 1;
    background-repeat: no-repeat;
  }
  &--white{
    border: 1px solid #FFF;
    &:before{
      border: 1px solid #FFF;
    }
  }
  &--black{
    background: #323232;
    color: #FFF;
    &:after{
      background: #323232;
    }
  }
  &--arrow{
    padding-right: 88px;
    &:after{
      background-image: url(~assets/img/ico-arrow.svg);
      background-position: center right 40px;
    }
  }
  &--eye{
    padding-right: 88px;
    &:after{
      background-image: url(~assets/img/ico-eye.svg);
      background-position: center right 32px;
    }
  }
}
</style>
