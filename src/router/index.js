import { createRouter, createWebHistory } from 'vue-router'
import StartingPageView from '@/views/StartingPageView.vue'
import IdentficationView from '@/views/IdentificationView.vue'
import CovidQuestionView from '@/views/CovidQuestionView.vue'
import VaccinationView from '@/views/VaccinationView.vue'
import AdvicesView from '@/views/AdvicesView.vue'
import ThankYouView from '@/views/ThankYouView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'startingPage', component: StartingPageView },
    { path: '/identification', name: 'identification', component: IdentficationView },
    { path: '/covidquestion', name: 'covidQuestion', component: CovidQuestionView },
    { path: '/vaccination', name: 'vaccination', component: VaccinationView },
    { path: '/advices', name: 'advices', component: AdvicesView },
    { path: '/thankyou', name: 'thankYou', component: ThankYouView }
  ]
})

export default router
