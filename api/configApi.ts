import axios from 'axios'

const configApi = axios.create({
  baseURL: 'https://api-dev.beneficiosysalud.com',
})

export default configApi
