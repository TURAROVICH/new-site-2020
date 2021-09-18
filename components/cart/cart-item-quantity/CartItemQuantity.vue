<template>
  <div class="quantity-wrap">
    <div class="quantity">
      <button class="quantity__btn quantity__btn--dec" @click="decrement">-</button>
      <input type="text" v-model="value" class="quantity__input" readonly="readonly"/>
      <button class="quantity__btn quantity__btn--inc" @click="increment">+</button>
    </div>
  </div>

</template>

<script>


export default {
  components: {
  },
  props: {
    quantity: {
      type: Number,
      required: true
    }
  },
  methods: {
    decrement: function () {
      this.value = this.value > 2 ? this.value - 1 : 1
    },
    increment: function () {
      this.value += 1
    }
  },
  computed: {
    value: {
      get: function () {
        return this.quantity
      },
      set: function (newValue) {
        this.$emit('change-quantity', newValue)
      }
    }
  }
}
</script>

<style lang="scss">
.quantity-wrap{
  display:inline-block;
}
.quantity{
  border: 1px solid #DDD;
  display:flex;
  flex-wrap: wrap;
  border-radius: 5px;
  overflow: hidden;
  &__btn{
    border: none;
    background: none;
    box-shadow: none;
    outline: none;
    text-align: center;
    font-size: 16px;
    line-height: 1;
    &--inc{
      padding: 10px 14px 10px 6px;
    }
    &--dec{
      padding: 10px 6px 10px 14px;
    }
    &:focus{
      outline: none;
    }
  }
  &__input{
    border: none;
    outline: none;
    width: 30px;
    text-align: center;
    font-size: 16px;
    line-height: 1;
    padding: 10px 0;
  }
}
@media (max-width: 768px) {

}
</style>
