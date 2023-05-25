import mutations from './mutations'
import getters from './getters'
import actions from './actions'

export default {
  namespaced: true,

  state: {
    AdvicesData: {
      non_formal_meetings: '',
      number_of_days_from_office: null,
      what_about_meetings_in_live: '',
      tell_us_your_opinion_about_us: ''
    }
  },
  mutations: mutations,
  getters: getters,
  actions: actions
}
