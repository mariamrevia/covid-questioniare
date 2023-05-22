
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from "./router/index"
import { store } from './store';
import "./config/vee-validate/rules";


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')