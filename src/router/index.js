
import { createRouter , createWebHistory } from 'vue-router';
import StartingPageView from "@/views/StartingPageView.vue"
import IdentficationView from "@/views/IdentificationView.vue"
import CovidQuestionView from "@/views/CovidQuestionView.vue"
import VaccinationView from "@/views/VaccinationView.vue"

const routes = [
  {path:'/' , component:StartingPageView},
  {path:'/identification' , component:IdentficationView},
  {path:'/covidquestion' , component:CovidQuestionView},
  {path:'/vaccination' , component:VaccinationView},
  
  
]
const router = createRouter({
  history:createWebHistory(),
  routes:routes
})


export default router