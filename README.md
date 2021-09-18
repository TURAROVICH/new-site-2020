# odesign

## Шпаргалка по API

Полная документация находится здесь: https://odma.odesign.ru/swagger/

### GET /news?page=X&npp=X
Получить список анонсов новостей. `page` - номер страницы, `npp` - (news per page) количество новостей на страницу

### GET /news/{slug}
Получить полные данные новости. На данный момент не реализован рендеринг специфического маркдауна
текста статьи в кошерный HTML

### GET ​/slider​/{slug}
Получить данные слайдера. Сейчас в БД есть слайдеры с айдишниками 1, 2, 3. 

### GET ​/site​/stores
Получить список магазинов

### GET ​/papers​/collection​/list
Получить список обойных коллекций в кратком формате.

### GET ​/papers​/collection​/{tag}
Получить полные данные коллекции обоев. Включает список обоев коллекции в кратком формате.

### GET ​/papers​/list​/{tag}
Получить подборку обоев в кратком формате. Используется для отображения выборок типа
"новинки", "популярное", "распродажа" и т.п.

### GET ​/papers​/data​/{sku}
Получить полные данные обойки. `sku` - артикул обойки.

### GET /papers/filter
Параметры отбора передаются в GET. Допустимые значение содержатся в секции ответа `faset`.
Если что, можно сверяться с https://odesign.ru/podobrat-oboi/
Немножко пояснений

`faset.single` - это фактически информационно включено. Каждое значение передается одним параметром. `?present&sale-false`

`faset.brands`, `faset.patterns`, `faset.colors`, `faset.rooms` - динамически формируемые наборы значений. При выборе нескольких,
передаются через запятую: `?brands=aura,borastapeter&rooms=detskaya,koridor`

`faset.price` - интервалы цен. Значение `null` означает открытый диапазон. Передаются: `?price=-900` (до 900), `?price=2000-5000` (от 2000 до 5000)

`faset.amount` - интервал бегунка выбора количества. Передается `?amount=3`

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

[![Build Status](https://ci.wtp.su/api/badges/ODesign/new-site-2020/status.svg)](https://ci.wtp.su/ODesign/new-site-2020)
