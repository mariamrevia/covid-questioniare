import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const storedIdentificationData = JSON.parse(localStorage.getItem('identificationData'))
export default {
  namespaced: true,
  state: {
    identificationData: storedIdentificationData
      ? storedIdentificationData.identificationData
      : {
          first_name: '',
          last_name: '',
          email: ''
        }
  },

  mutations: mutations,
  actions: actions,
  getters: getters
}
