export default {
  updateVaccinationData({ commit }, payload) {
    console.log(payload)
    commit('updateVaccinationData', payload)
  }
}
