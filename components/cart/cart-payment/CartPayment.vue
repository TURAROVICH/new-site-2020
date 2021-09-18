<template>
  <div class="cart-payment">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form__radio-group">
          <input type="radio" :id="`form-payment-${item.id}}`" name="form-payment" class="form__radio-input" :value="item.id">
          <label class="form__radio-label form__radio-label--bold" :for="`form-payment-${item.id}}`">{{ item.title }}</label>
        </div>
      </div>
      <div class="col-12 col-md-6" v-html="item.text"></div>
    </div>
  </div>
</template>

<script>


export default {
  components: {
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">

.cart-payment{
  border-bottom: 1px solid #DDD;
  padding-bottom: 16px;
  margin-bottom: 16px;
}
@media (max-width: 768px) {

}
</style>
