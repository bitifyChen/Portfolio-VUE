import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'

import App from './App.vue'
import router from './router'

import './assets/css/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(VueLazyLoad)
app.use(router)

app.mount('#app')
