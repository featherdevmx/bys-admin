/* eslint-disable @typescript-eslint/no-explicit-any */
import {ApiPostProps} from './types'

const API_URL = process.env.REACT_APP_BASE_URL

const defaultHeaders = {
  'content-type': 'application/json',
  accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
}

const defaultMultipartHeaders = {}

function headers(isMultipartRequest = false, isLoginRequest = false) {
  let jwt = null
  const locale = 'es'

  try {
    jwt = localStorage ? localStorage.getItem('bysAuthToken') : null
  } catch (error) {
    jwt = null
  }

  if (jwt === null || isLoginRequest) {
    if (isMultipartRequest) {
      return defaultMultipartHeaders
    }

    return {...defaultHeaders, 'Accept-Language': locale}
  }

  if (jwt !== null && isMultipartRequest) {
    return {...defaultMultipartHeaders, authorization: `Bearer ${jwt}`}
  }

  return {
    ...defaultHeaders,
    authorization: `Bearer ${jwt}`,
    'Accept-Language': locale,
  }
}

export const servicesPOST = async (params: ApiPostProps) => {
  const {route, data, isLoginRequest} = params

  console.log(':: POST Request')
  console.log(':: Data Sended -> ', data)
  console.log(':: Go To Route -> ', route)
  console.log(':: IsLoginRequest -> ', isLoginRequest)

  const options: any = {
    cache: 'no-cache',
    headers: headers(false, isLoginRequest),
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
  }

  const url = API_URL + route

  const response = await fetch(url, options)
  return response
}

export const handleErrorResponse = (errorResponse: any) => {
  const error = JSON.parse(errorResponse)

  if (Array.isArray(error)) {
    return {
      error: true,
      message: error[0].message
        ? error[0].message
        : 'Ha ocurrido un error al intentar realizar la operación.',
    }
  }
  return {
    error: true,
    message: error.message
      ? error.message
      : 'Ha ocurrido un error al intentar realizar la operación.',
  }
}
