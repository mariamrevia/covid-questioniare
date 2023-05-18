import { createStore } from 'vuex';
export const store = createStore ({
           state: {
        formData: {
            first_name: '',
            last_name: '',
            email: ''
        }
    },


    
    mutations: {
        updateFormData(state, payload) {
            state.formData[payload.field] = payload.value;
         
        }
    },
      actions: {
        updateFormData(context, payload) {
          context.commit('updateFormData', payload);
        }
      },

    });