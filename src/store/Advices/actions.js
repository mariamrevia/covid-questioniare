export default {
    updateAdviceData({ commit }, payload) {
    console.log(payload)
    commit( 'updateAdvice', payload)
  }
}