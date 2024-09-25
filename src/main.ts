import { createApp } from 'vue'
import './style.css';
// @ts-ignore
import App from './app/page.vue'
import router from './router'

createApp(App).use(router).mount('#app')
