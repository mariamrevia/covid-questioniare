import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default  {

    state: {
        IdentificationData: {
            first_name: '',
            last_name: '',
            email: ''
        }
    },
  
    mutations: mutations,
    actions: actions,
    getters: getters
}