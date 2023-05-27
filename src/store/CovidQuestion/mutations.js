export default {
  updateTestDate(state, payload) {
    console.log(payload)
    state.data.antibodies.test_date = payload.value
    localStorage.setItem('data', JSON.stringify(state))
  },
  updateTestNumber(state, payload) {
    console.log(payload)
    state.data.antibodies.number = payload.value
    localStorage.setItem('data', JSON.stringify(state))
  },
  updateData(state, payload) {
    console.log(payload)
    state.covidData[payload.name] = payload.value
    localStorage.setItem('covidData', JSON.stringify(state))
  }
}
