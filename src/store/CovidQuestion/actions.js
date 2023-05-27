export default {
  updateTestDate({ commit }, payload) {
    commit('updateTestDate', payload)
  },
  updateTestNumber({ commit }, payload) {
    commit('updateTestNumber', payload)
  },

  updateData({ commit }, payload) {
    console.log(payload)
    commit('updateData', payload)
  }
}
