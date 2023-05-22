import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  namespaced: true,
  state: {
    vaccinationData: {
      had_vaccine: '',
      vaccination_stage: '',
      i_am_waiting: ''
    }
  },

  mutations: mutations,
  getters: getters,
  actions: actions
}
