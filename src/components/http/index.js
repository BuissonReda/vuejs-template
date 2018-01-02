import axios from 'axios'

// REST api : https://restcountries.eu/
const baseUrl = `https://restcountries.eu/rest/v2/`

export let HTTP = axios.create({
  baseURL: baseUrl
})
