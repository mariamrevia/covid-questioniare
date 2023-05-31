import axios from '@/plugins/axios/axios.js'

export async function sendData(formData) {
  return axios.post('/create', formData);
}
