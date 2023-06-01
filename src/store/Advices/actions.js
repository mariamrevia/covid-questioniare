import { sendData } from '@/services/api/form.js'
import router from '@/router/index.js'

function isEmpty(object) {
  if (object === '') return true
  if (typeof object !== 'object') return false
  for (let key in object) {
    if (!isEmpty(object[key])) return false
  }
  return true
}
export default {
  updateAdvicesData({ commit }, payload) {
    commit('updateAdvice', payload)
  },

  async sendDatatoAPI(_, payload) {
    const filteredPayload = Object.fromEntries(
      Object.entries(payload).filter((entry) => !isEmpty(entry[1]))
    )

    try {
      await sendData(filteredPayload)
      router.push('thankYou')
    } catch (error) {
      console.log(error)
    }
  }
}
