import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify)
    .use(VueAxios, axios)
    .mount('#app')
