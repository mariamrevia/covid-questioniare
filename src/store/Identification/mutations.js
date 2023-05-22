export default {
  updateIdentificationData(state, payload) {
    console.log(payload)
    state.Identification[payload.field] = payload.value
  }
}
