
import { createRouter , createWebHistory } from 'vue-router';
import StartingPageView from "@/views/StartingPageView.vue"
import IdentficationView from "@/views/IdentificationView.vue"
import CovidQuestionView from "@/views/CovidQuestionView.vue"

const routes = [
  {path:'/' , component:StartingPageView},
  {path:'/identification' , component:IdentficationView},
  {path:'/covidquestion' , component:CovidQuestionView},
  
  
]
const router = createRouter({
  history:createWebHistory(),
  routes:routes
})


export default router