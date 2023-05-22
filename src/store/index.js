import { createStore } from 'vuex'
import Identification from './Identification/index.js'
import CovidQuestion from './CovidQuestion/index.js'
import vaccination from "./vaccination/index.js"

export const store = createStore({
  modules: {
    IdentificationModel: Identification,
    CovidQuestionModel:CovidQuestion,
    vaccinationModel:vaccination
  }
})
