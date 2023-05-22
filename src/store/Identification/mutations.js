export default {
  updateData(state, payload) {
    console.log(payload)
    state.IdentificationData[payload.name] = payload.value;
  },
};