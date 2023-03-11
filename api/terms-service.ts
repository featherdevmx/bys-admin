import {servicesGet, handleErrorResponse} from './serviceApi'

const API_URL = process.env.REACT_APP_BASE_URL

export const getTerms = async () => {
  try {
    const endpoint = `${API_URL}/terms`
    const response = await servicesGet(endpoint)

    if (response.ok) {
      return await response.json()
    }

    const errorResponse = await response.text()
    console.log('ERROR getAreas()', errorResponse)
    return handleErrorResponse(errorResponse)
  } catch (error) {
    console.log('CATCH Terms Service()', error)
    return error
  }
}
