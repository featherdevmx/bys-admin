import axios, { AxiosResponse } from 'axios';
import nextBase64 from 'next-base64';
export const API_USERNAME = '';
export const API_PASSWORD = '';

const base64Encoded = nextBase64.encode(API_USERNAME+':'+API_PASSWORD);

const configApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});
 
export interface ConfigAPIInput {
  type?: string;
  requestType: string;
  data: object;
  route: string;
}

export interface ConfigAPIResponse {
  then: AxiosResponse,
  catch: AxiosResponse
}

export interface ApiPostProps {
  route: string,
  data: object
}

const servicesPOST = async (params:ApiPostProps) => {
  
  const {route, data} = params;
  console.log('otro 1 ', process.env.REACT_APP_BASE_URL);

  console.log('** petición POST');
  console.log('Data para post ', data);
  console.log('ira hacia ', route);
  
  let response;
  await configApi.post(route, params).then((response) => {
    console.log('Service '+JSON.stringify(response));
  }).catch((error) => {
    console.log('Error en servicio '+error);
  });
  return response;
};

export const servicesManager = async ({type, requestType, data, route}:ConfigAPIInput) => {
  
  if (type === 'auth') {
    // Integración API v1
    // configApi.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    // configApi.defaults.headers.common['Authorization'] = 'Basic ' + base64Encoded;
    configApi.defaults.headers.common['Content-Type'] = 'application/json';
    configApi.defaults.headers.common['Accept'] = 'json';
    
    
    switch (requestType) {
      case 'POST':
        servicesPOST({route, data});
        break;
    }   
  }

  //console.log('Type ', type);
  //console.log('Request ', requestType);
  return;

};
