import { createApp } from 'vue'
import '@/assets/styles/index.less'
import router from '@/router'
import App from './App.vue'

createApp(App)
.use(router)
.mount('#app')
