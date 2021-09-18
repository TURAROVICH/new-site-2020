<template>
  <div class="productTopWidget">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="productTopWidget__item productTopWidget__item--1" :style="{ backgroundImage: `url(${items[0].img})` }">
          <div class="productTopWidget__itemTitle">{{ items[0].title }}</div>
          <div class="productTopWidget__itemText">{{ items[0].text }}</div>
          <div class="productTopWidget__itemPrice">{{ items[0].price }}</div>
          <div class="productTopWidget__itemArrow"></div>
        </div>
      </div>
      <div class="col-8 d-none d-md-block">
        <div class="row">
          <div class="col">
            <div class="productTopWidget__item productTopWidget__item--2" :style="{ backgroundImage: `url(${items[1].img})` }">
              <div class="productTopWidget__itemTitle">{{ items[1].title }}</div>
              <div class="productTopWidget__itemText">{{ items[1].text }}</div>
              <div class="productTopWidget__itemPrice">{{ items[1].price }}</div>
              <div class="productTopWidget__itemArrow"></div>
            </div>
          </div>
          <div class="col-5">
            <div class="productTopWidget__item productTopWidget__item--3" :style="{ backgroundImage: `url(${items[2].img})` }">
              <div class="productTopWidget__itemTitle">{{ items[2].title }}</div>
              <div class="productTopWidget__itemText">{{ items[2].text }}</div>
              <div class="productTopWidget__itemPrice">{{ items[2].price }}</div>
              <div class="productTopWidget__itemArrow productTopWidget__itemArrow--sm"></div>
            </div>
          </div>
          <div class="w-100"></div>
          <div class="col-5">
            <div class="productTopWidget__item productTopWidget__item--4" :style="{ backgroundImage: `url(${items[3].img})` }">
              <div class="productTopWidget__itemTitle">{{ items[3].title }}</div>
              <div class="productTopWidget__itemText">{{ items[3].text }}</div>
              <div class="productTopWidget__itemPrice">{{ items[3].price }}</div>
              <div class="productTopWidget__itemArrow productTopWidget__itemArrow--sm"></div>
            </div>
          </div>
          <div class="col">
            <div class="productTopWidget__item productTopWidget__item--5" :style="{ backgroundImage: `url(${items[4].img})` }">
              <div class="productTopWidget__itemTitle">{{ items[4].title }}</div>
              <div class="productTopWidget__itemText">{{ items[4].text }}</div>
              <div class="productTopWidget__itemPrice">{{ items[4].price }}</div>
              <div class="productTopWidget__itemArrow"></div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      items: [
        {id: 1, title: 'Обои', img: '/top/b1.jpg', text: 'Не только в вакууме, но и в любой нейтральной среде относительно низкой плотности мишень расщепляет элементарный взрыв.', price: 'от 3 590 ₽' },
        {id: 2, title: 'Лепнина', img: '/top/b2.jpg', text: 'Не только в вакууме, но и в любой нейтральной среде относительно низкой плотности мишень расщепляет элементарный взрыв.', price: 'от 3 590 ₽' },
        {id: 3, title: 'Краски', img: '/top/b3.jpg', text: 'Не только в вакууме, но и в любой нейтральной среде.', price: 'от 3 590 ₽' },
        {id: 4, title: 'Декор', img: '/top/b4.jpg', text: 'Не только в вакууме, но и в любой нейтральной среде.', price: 'от 3 590 ₽' },
        {id: 5, title: 'Текстиль', img: '/top/b5.jpg', text: 'Не только в вакууме, но и в любой нейтральной среде относительно низкой плотности мишень расщепляет элементарный взрыв.', price: 'от 3 590 ₽' }
      ]
    }
  }
}
</script>

<style lang="scss">
.productTopWidget{
  padding-top: 32px;
  &__item{
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    padding: 32px;
    height: 280px;
    margin-bottom: 32px;
    color: #FFF;
    position: relative;
    &Title{
      font-size: 28px;
      font-weight: 600;
      margin-bottom: 6px;
    }
    &Text{
      font-size: 15px;
    }
    &Price{
      font-feature-settings: 'pnum' on, 'lnum' on;
      position: absolute;
      bottom: 25px;
      left: 32px;
      font-size: 24px;
      font-weight: 700;
    }
    &Arrow{
      width: 57px;
      height: 12px;
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTciIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA1NyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTU2LjU2NTcgNi41NjU2OUM1Ni44NzgxIDYuMjUzMjcgNTYuODc4MSA1Ljc0Njc0IDU2LjU2NTcgNS40MzQzMkw1MS40NzQ1IDAuMzQzMTVDNTEuMTYyMSAwLjAzMDczMDkgNTAuNjU1NiAwLjAzMDczMDkgNTAuMzQzMSAwLjM0MzE1QzUwLjAzMDcgMC42NTU1NyA1MC4wMzA3IDEuMTYyMSA1MC4zNDMxIDEuNDc0NTJMNTQuODY4NiA2TDUwLjM0MzEgMTAuNTI1NUM1MC4wMzA3IDEwLjgzNzkgNTAuMDMwNyAxMS4zNDQ0IDUwLjM0MzEgMTEuNjU2OUM1MC42NTU2IDExLjk2OTMgNTEuMTYyMSAxMS45NjkzIDUxLjQ3NDUgMTEuNjU2OUw1Ni41NjU3IDYuNTY1NjlaTS02Ljk5MzgyZS0wOCA2LjhMNTYgNi44TDU2IDUuMkw2Ljk5MzgyZS0wOCA1LjJMLTYuOTkzODJlLTA4IDYuOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=);
      background-repeat: no-repeat;
      background-position: center right;
      position: absolute;
      right: 32px;
      bottom: 37px;
      &--sm{
        width: 32px;
      }
    }
    &--1{
      height: 592px;
    }
  }
}
</style>
