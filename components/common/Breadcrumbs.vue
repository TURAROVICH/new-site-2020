<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__line" v-if="breadcrumbs.length > 1">
      <div class="breadcrumbs__item" v-for="(item, index) in breadcrumbs" :key="index">
        <nuxt-link v-if="item.link" :to="item.link" class="breadcrumbs__link">
          {{ item.title }}
        </nuxt-link>
        <div v-else class="breadcrumbs__label">
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  computed: {
    breadcrumbs: function () {
      return [
        { title: 'Главная', link: '/'},
        ...this.$store.state.ui.breadcrumbs
      ]
    }
  }
}
</script>

<style lang="scss">
.breadcrumbs{
  font-size: 13px;
  padding: 16px 0;
  border-bottom: 1px solid #E5E5E5;
  margin-bottom: 40px;
  &__line{
    display: flex;
    flex-wrap: wrap;
  }
  &__link{
    font-weight: 600;
    color: #AB3226;
    margin-right: 28px;
    position: relative;
    display: inline-block;
    &:hover,&:focus{
      color: #AB3226;
    }
    &:after{
      position: absolute;
      display: block;
      content: '';
      width: 4px;
      height: 8px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA1TDEgOSIgc3Ryb2tlPSIjMzIzMjMyIi8+Cjwvc3ZnPgo=);
      top: calc(50% - 3px);
      right: -15px;
    }
  }
  &__label{
    color: #ABABAB;
  }
}
@media (max-width: 768px) {
  .breadcrumbs{
    overflow-x: auto;
    margin: 0 -16px 20px;
    padding-left: 16px;
    &__line{
      width: max-content;
    }
  }
}
</style>
