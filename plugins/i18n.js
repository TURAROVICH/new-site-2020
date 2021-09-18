import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store}) => {
  app.i18n = new VueI18n({
    locale: 'ru',
    fallbackLocale: 'ru',
    silentTranslationWarn: true,
    pluralizationRules: {
      /**
       * @param choice {number} a choice index given by the input to $tc: `$tc('path.to.rule', choiceIndex)`
       * @param choicesLength {number} an overall amount of available choices
       * @returns a final choice index to select plural word by
       */
      'ru': function(choice, choicesLength) {
        // this === VueI18n instance, so the locale property also exists here

        if (choice === 0) {
          return 0;
        }

        const teen = choice > 10 && choice < 20;
        const endsWithOne = choice % 10 === 1;

        if (choicesLength < 4) {
          return (!teen && endsWithOne) ? 1 : 2;
        }
        if (!teen && endsWithOne) {
          return 1;
        }
        if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
          return 2;
        }

        return (choicesLength < 4) ? 2 : 3;
      }
    },
    messages: {
      ru: {
        products: 'нет товаров | {n} товар | {n} товара | {n} товаров',
        filter: {
          type: {
            single: 'Наличие',
            brands: 'Бренды',
            colors: 'Цвета',
            patterns: 'Узоры',
            price: 'Цена',
            amount: 'Количество',
            rooms: 'Комната'
          },
          single: {
            present: 'В наличии',
            "sale-true": 'Распродажа',
            "sale-false": 'Не распродажа',
          }


        }

      },
    },
    numberFormats: {
      ru: {
        decimal: {
          style: 'decimal'
        }
      }
    }
  })
}
