import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'
createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
