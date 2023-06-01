export default {
  updateTestDate(state, payload) {
    state.covidData.antibodies.test_date = payload.value
    localStorage.setItem('covidData', JSON.stringify(state))
  },
  updateTestNumber(state, payload) {
    state.covidData.antibodies.number = payload.value
    localStorage.setItem('covidData', JSON.stringify(state))
  },
  updateData(state, payload) {
    state.covidData[payload.name] = payload.value
    localStorage.setItem('covidData', JSON.stringify(state))
  }
}
