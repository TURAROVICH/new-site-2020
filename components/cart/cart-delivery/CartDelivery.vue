<template>
  <div class="cart-delivery">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="form__radio-group">
          <input type="radio" :id="`form-delivery-${item.id}}`" name="form-delivery" class="form__radio-input" :value="item.id">
          <label class="form__radio-label form__radio-label--bold" :for="`form-delivery-${item.id}}`">{{ item.title }}</label>
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

.cart-delivery{
  border-bottom: 1px solid #DDD;
  padding-bottom: 16px;
  margin-bottom: 16px;
}
@media (max-width: 768px) {

}
</style>
