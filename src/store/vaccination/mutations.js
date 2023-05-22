export default {
    updateVaccinationData(state, payload) {
      console.log(payload)
      state.vaccinationData[payload.name] = payload.value;
    },
  };