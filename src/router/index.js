
import { createRouter , createWebHistory } from 'vue-router';
import StartingPageView from "../views/StartingPageView.vue"

const routes = [
  {path:'/' , component:StartingPageView},
  
  
]
const router = createRouter({
  history:createWebHistory(),
  routes:routes
})


export default router