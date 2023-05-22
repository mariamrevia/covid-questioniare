
import { createRouter , createWebHistory } from 'vue-router';
import StartingPageView from "@/views/StartingPageView.vue"
import IdentficationView from "@/views/IdentificationView.vue"

const routes = [
  {path:'/' , component:StartingPageView},
  {path:'/identification' , component:IdentficationView},
  
  
]
const router = createRouter({
  history:createWebHistory(),
  routes:routes
})


export default router