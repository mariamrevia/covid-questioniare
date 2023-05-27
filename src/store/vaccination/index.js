import mutations from './mutations'
import getters from './getters'
import actions from './actions'

const storedVaccinationData = JSON.parse(localStorage.getItem('vaccinationData'))

export default {
  namespaced: true,
  state: {
    vaccinationData: storedVaccinationData
      ? storedVaccinationData.vaccinationData
      : {
          had_vaccine: '',
          vaccination_stage: '',
          i_am_waiting: ''
        }
  },
  mutations: mutations,
  getters: getters,
  actions: actions
}
