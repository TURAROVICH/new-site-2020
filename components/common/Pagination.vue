<template>
  <div class="pagination">
    <div class="pagination__item"
         :class="{'pagination__item--current': page === (currentPage + 1)}"
         v-for="page in pages">{{ page }}</div>
  </div>
</template>

<script>

export default {
  components: {},
  props: {
    pages: {
      type: Number,
      default: 0
    },
    currentPage: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.pagination{
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 40px;
}
.pagination__item{
  font-size: 15px;
  line-height: 1;
  padding: 8px 0;
  text-align: center;
  width: 40px;
  border: 1px solid #323232;
  border-radius: 3px;
  margin-right: 8px;
  transition: all 0.35s ease-in;
  cursor: pointer;
  &--current,
  &:hover,&:focus{
    background-color: #323232;
    color: #FFF;
  }
  &--next{
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA1TDEgOSIgc3Ryb2tlPSIjMzIzMjMyIi8+Cjwvc3ZnPgo=);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
    &:hover,&:focus{
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNiIgaGVpZ2h0PSIxMCIgdmlld0JveD0iMCAwIDYgMTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNSA1TDEgOSIgc3Ryb2tlPSIjRkZGIi8+Cjwvc3ZnPgo=)
    }
  }

}
@media (max-width: 768px) {
}
</style>
