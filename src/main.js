
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/style.css"
import router from "./router/index"
import { store } from './store';
import "./config/vee-validate/rules";

createApp(App).use(router).use(store).mount('#app');