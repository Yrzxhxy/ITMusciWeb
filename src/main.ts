import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/index'
import ElementPlus from 'element-plus'
import CusButton from './components/customCom/button.vue'
import 'element-plus/dist/index.css'
const pinia =createPinia()
const vue =createApp(App)
vue.component("cusButton",CusButton)
vue.use(pinia)
vue.use(router)
vue.use(ElementPlus)
vue.mount('#app')
