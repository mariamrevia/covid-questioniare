import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  namespaced: true,

  state: {
    data: {
      had_covid: '',
      had_antibody_test: '',
      covid_sickness_date: '',
      antibodies: {
        test_date: '',
        number: null
      }
    }
  },
  mutations: mutations,
  getters: getters,
  actions: actions
}
