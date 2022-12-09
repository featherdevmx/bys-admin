import axios, { AxiosResponse, AxiosErrorResponse } from 'axios';
import nextBase64 from 'next-base64';
export const API_USERNAME = '';
export const API_PASSWORD = '';

const base64Encoded = nextBase64.encode(API_USERNAME+':'+API_PASSWORD);

const configApi = axios.create({
  baseURL: '',
  withCredentials: true,
});
 
export interface ConfigAPIInput {
  type?: string;
  requestType: string;
  data: object;
}

export interface ConfigAPIResponse {
  then: AxiosResponse,
  catch: AxiosErrorResponse
}

export const servicesManager = async ({type, requestType, data}:ConfigAPIInput) => {
  if (type === 'auth') {
    console.log('Es auth');
    configApi.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    configApi.defaults.headers.common['Authorization'] = 'Basic ' + base64Encoded;
  } else {
    console.log('No es auth');
  }

  console.log('Type ', type);
  console.log('Request ', requestType);
  console.log('Data ', data);
  return;

};
