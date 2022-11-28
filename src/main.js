import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import '../node_modules/element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import './index.css'
import router from './router'
import store from './store'

// createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
const app = createApp(App);
app.directive("focus", {
    mounted(el) {
        el.focus()
    }
})
app.directive("font-size-or-color", (el, binding) => {
    el.style[binding.arg] = binding.value;
})
app.directive("font-size-color", (el, binding) => {
    // console.log(binding)
    Object.keys(binding.value).forEach(key => {
        el.style[key]=binding.value[key]
    })
    // el.style[binding.arg] = binding.value;
})
app.use(router).use(store).use(ElementPlus).mount('#app')