import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Axios
import axios from "axios";
import VueAxios from "vue-axios";

// Vuetify
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
})

createApp(App)
    .use(store)
    .use(router)
    .use(vuetify)
    .use(VueAxios, axios)
    .mount('#app')
