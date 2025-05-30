import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

createApp(App).mount('#app')
createApp(App).use(router).mount('#app')