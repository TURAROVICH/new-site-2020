<template>
  <div class="page">
    <div class="container">
      <Breadcrumbs/>
      <div class="row">
        <div class="col-12 col-md-9">
          <h1 class="page__title">
            Наши магазины
          </h1>
        </div>
      </div>
      <div class="row no-gutters">
        <div class="col-12 col-md-4">
          <div class="map__city-container">
            <div class="map__city-inner">
              <div v-for="(city, index) in cities" :key="index">
                <city-toggle-panel
                  :city="city"
                  @select-shop="selectShop"/>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-8">
          <yandex-map
            :coords="center"
            ymap-class="o-map"
            zoom="16"
            :controls="[]"
            v-if="showMap"
            @map-was-initialized="initHandler">
            <ymap-marker v-for="(marker, i) in markers"
              :key="i"
              :coords="marker.coords"
              :marker-id="i"
              :hint-content="marker.title"
            />
          </yandex-map>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Breadcrumbs from '@/components/common/Breadcrumbs'
import CityTogglePanel from '@/components/ui/toggle-panel/CityTogglePanel'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  components: {
    Breadcrumbs,
    CityTogglePanel,
    yandexMap,
    ymapMarker
  },
  methods: {
    initHandler(map) {
      this.map = map
      this.map.controls.add('zoomControl', {position: {right: '20px', top: '20px'}})
    },
    selectShop(coords) {
      this.map.panTo(coords, {
        flying: 1
      });
    }
  },
  async mounted () {
    this.showMap = true
  },
  async asyncData({ store }) {
    const breadcrumbs = [
      { title: 'Наши магазины' },
    ]
    await store.dispatch('ui/setBreadcrumbs', { breadcrumbs })
    await store.dispatch('site/getStores')

    const center = store.state.site.cities[0].shops[0].coords;
    const showMap = false;
    const map = undefined;


    const cities = [
      {
        title: 'Москва',
        shops: [
          {
            id: 1,
            title: 'Главный офис Odesign и шоу-рум',
            address: '105120, Москва, ул.Нижняя Сыромятническая, д.10, Центр дизайна Artplay, стр.2, этаж 3',
            phones: ['+7 800 302-96-80 Общий', '+7 495 280-73-74'],
            email: 'info@odesign.ru',
            schedule: 'пн-вс с 10:00 до 22:00',
            scheduleSpec: '31 декабря - с 10:00 до 15:00<br/>1 января - выходной<br/>2 января - выходной',
            coords: [55.75372656900127,37.66726699999998]
          },
          {
            id: 2,
            title: 'Стильные шведские обои Odesign',
            address: '105120, Москва, ул.Нижняя Сыромятническая, д.10, Центр дизайна Artplay, стр.2, этаж 3',
            phones: ['+7 800 302-96-80 Общий', '+7 495 280-73-74'],
            email: 'info@odesign.ru',
            schedule: 'пн-вс с 10:00 до 22:00',
            scheduleSpec: '31 декабря - с 10:00 до 15:00<br/>1 января - выходной<br/>2 января - выходной',
            coords: [55.761978, 37.635098]
          },
          {
            id: 3,
            title: 'Стильные шведские обои Odesign флагманский магазин',
            address: '119261, Москва, Ленинский пр-т д. 70/11',
            phones: ['+7 800 302-96-80 Общий', '+7 495 280-73-74'],
            email: 'info@odesign.ru',
            schedule: 'пн-вс с 10:00 до 22:00',
            scheduleSpec: '31 декабря - с 10:00 до 15:00<br/>1 января - выходной<br/>2 января - выходной',
            coords: [55.687497, 37.543318]
          }
        ]
      },
      {
        title: 'Астрахань',
        shops: [
          {
            id: 4,
            title: 'DECORRO',
            address: '414000, Астрахань, ул. Кирова, 19, 3 этаж',
            phones: ['+7 800 302-96-80 Общий', '+7 495 280-73-74'],
            email: 'info@odesign.ru',
            schedule: 'пн-вс с 10:00 до 22:00',
            scheduleSpec: '31 декабря - с 10:00 до 15:00<br/>1 января - выходной<br/>2 января - выходной',
            coords: [46.350146, 48.037410]
          }
        ]
      },
      {
        title: 'Белгород',
        shops: [
          {
            id: 5,
            title: 'Примьера',
            address: '308027, Белгород, ул. Щорса, 8Г',
            phones: ['+7 800 302-96-80 Общий', '+7 495 280-73-74'],
            email: 'info@odesign.ru',
            schedule: 'пн-вс с 10:00 до 22:00',
            scheduleSpec: '31 декабря - с 10:00 до 15:00<br/>1 января - выходной<br/>2 января - выходной',
            coords: [50.584532, 36.565933]
          }
        ]
      }
    ];

    return { center, showMap, map, cities: store.state.site.cities }
  },
  computed: {
    markers: function () {
      return this.cities.reduce((acc, city) => {
        return [
          ...acc,
          ...city.shops.reduce((a, shop) => {
            return [
              ...a,
              {coords: shop.coords, title: shop.name,}
            ]
          }, [])
        ]
      }, [])
    }
  }
}
</script>

<style lang="scss">
.o-map {
  height: 730px;
}
.map{
  &__city{
    font-size: 28px;
    font-weight: 700;
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
    &-wrap{
      padding-bottom: 20px;
      border-bottom: 1px solid #DDD;
      margin-bottom: 20px;
    }
    &-container{
      overflow-y: auto;
      max-height: 730px;
      padding-right: 20px;
      &::-webkit-scrollbar-button {
        background-image:none;
        background-repeat:no-repeat;
        width:5px;
        height:0
      }

      &::-webkit-scrollbar-track {
        background-color:#efefef;
      }

      &::-webkit-scrollbar-thumb {
        -webkit-border-radius: 0;
        border-radius: 0;
        background-color:#323232;
      }

      &::-webkit-scrollbar-thumb:hover{
        background-color:#323232;
      }

      &::-webkit-resizer{
        background-image:none;
        background-repeat:no-repeat;
        width:4px;
        height:0
      }

      &::-webkit-scrollbar{
        width: 4px;
        height: 6px;
      }
    }
    &-inner{
      padding-bottom: 50px;
    }
  }
  &__shop{
    &-list{
      padding: 32px 0;
    }
    &-title{
      font-size: 22px;
      font-weight: 700;
      margin-bottom: 20px;
      cursor: pointer;
      position:relative;
      padding-right: 50px;
      &:after{
        content: '';
        background-image: url(~assets/img/ico-arrow-down.svg);
        background-position: center;
        width: 10px;
        height: 5px;
        display: block;
        position: absolute;
        right: 0;
        top: 15px;
        background-size: cover;
        transform: translateY(-50%);
      }
      &--open{
        &:after{
          transform: translateY(-50%) rotate(180deg);
        }
      }
      &--one{
        &:after{
          display: none;
        }
      }
    }
    &-param{
      max-width: 355px;
      padding-bottom: 20px;
    }
    &-spec-schedule{
      color: #8F8F8F;
    }
    &-info{
    }
  }
}
@media (max-width: 768px) {

}
</style>
