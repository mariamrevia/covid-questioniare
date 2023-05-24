import { sendData } from '@/services/api/form.js'
import router from '@/router/index.js'

export default {
  updateAdviceData({ commit }, payload) {
    console.log(payload)
    commit('updateAdvice', payload)
  },

  async sendDatatoAPI(_, payload) {
    function isEmpty(obj) {
      if (obj === '') return true
      if (typeof obj !== 'object') return false
      for (let key in obj) {
        if (!isEmpty(obj[key])) return false
      }
      return true
    }

    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter((entry) => !isEmpty(entry[1]))
    )

    try {
      await sendData(filteredPayload)
      router.push('/thankyou')
    } catch (error) {
      console.log(error)
    }
  }
}
