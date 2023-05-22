export default {
    updateTestDate(state, payload) {
      console.log(payload)
      state.data.antibodies.test_date = payload.value
    },
    updateTestNumber(state, payload) {
      console.log(payload)
      state.data.antibodies.number = payload.value
    },
    updateData(state, payload) {
      console.log(state , payload)
      state[payload.name] = payload.value
  
     
    }
  
  
  }
  