import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import mitt from 'mitt';

import App from './App.vue'
import './assets/tailwind.css'

const emitter = mitt();
const app = createApp(App)
//event bus library
app.config.globalProperties.emitter = emitter;
app.use(VueAxios, axios)
app.mount('#app')