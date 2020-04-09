import axios from 'axios'

// create singleton for axios
const service = axios.create({
  baseURL: 'https://adc-spotify-api.herokuapp.com', // api url
  mode: 'cors',
  credetials: 'same-origin',
  timeout: 20000
})

export default service
