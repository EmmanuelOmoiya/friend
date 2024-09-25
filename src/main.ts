import { createApp } from 'vue'
import './style.css'
import App from './app/page.vue'
import router from './router'
import  VueMeta from 'vue-meta';

createApp(App).use(router).mount('#app')
