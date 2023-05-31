export default {
  updateVaccinationData(state, payload) {
    state.vaccinationData[payload.name] = payload.value
    localStorage.setItem('vaccinationData', JSON.stringify(state))
  }
}
