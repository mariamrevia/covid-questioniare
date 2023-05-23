export default {
    updateAdvice(state, payload) {
    console.log(state , payload)
    state.AdvicesData[payload.name] = payload.value
  }
}