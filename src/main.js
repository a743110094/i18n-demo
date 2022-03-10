import { createApp } from 'vue'
import i18n from './language/i18n'
import App from './App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
createApp(App)
    .use(i18n)
    .use(ElementPlus)
    .mount('#app')
