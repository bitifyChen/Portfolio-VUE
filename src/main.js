import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'

//Font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();


import App from './App.vue'
import router from './router'

import './assets/css/style.css'


const app = createApp(App)
app.use(createPinia())
app.use(VueLazyLoad)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon);

app.mount('#app')
