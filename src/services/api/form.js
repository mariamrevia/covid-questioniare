import axios from '@/plugins/axios/axios.js'

export async function sendData(payload) {
  try {
    await axios.post('/create', payload)
  } catch (error) {
    console.log(error)
    throw error; 
  }
}
