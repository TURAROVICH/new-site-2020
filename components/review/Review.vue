<template>
  <div class="review">
    <div class="row">
      <div class="col-auto">
        <div class="review__img">
          <img src="/review/ico-review.png" alt="">
        </div>
      </div>
      <div class="col">
        <div class="review__info">
          <div class="row justify-content-between">
            <div class="col-auto">
              <div class="review__name">{{ item.name }}</div>
            </div>
            <div class="col-auto">
              <div class="review__date">{{ item.date }}</div>
            </div>
          </div>
          <div class="review__text">{{ item.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.review {
  &__img{
    margin-top: 20px;
  }
  &__info {
    border-top: 1px solid #DDD;
    padding: 20px 0;
  }
  &__name{
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  &__date{
    font-size: 14px;
    color: #747272;
  }
  &__text{
    font-size: 16px;
  }
}
@media (max-width: 768px) {

}

</style>
