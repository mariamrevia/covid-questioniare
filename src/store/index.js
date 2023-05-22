import { createStore } from 'vuex'
import Identification from './Identification/index.js'

export const store = createStore({
  modules: {
    IdentificationModel: Identification
  }
})
