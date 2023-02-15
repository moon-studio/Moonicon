import { createI18n } from 'vue-i18n'
import zh_CN from './modules/zh_CN'
import en_US from './modules/en_US'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en_US',
  messages: {
    zh_CN,
    en_US
  }
})

export default i18n
