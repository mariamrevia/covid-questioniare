export default {
  updateAdvice(state, payload) {
    state.advicesData[payload.name] = payload.value
    localStorage.setItem('advicesData', JSON.stringify(state))
  }
}
