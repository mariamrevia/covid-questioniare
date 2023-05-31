export default {
  updateData(state, payload) {
    state.identificationData[payload.name] = payload.value
    localStorage.setItem('identificationData', JSON.stringify(state))
  }
}
