import axios from 'axios';
import nextBase64 from 'next-base64';
export const API_USERNAME = 'benefits_and_health_mobile';
export const API_PASSWORD = 'secret';

const base64Encoded = nextBase64.encode(API_USERNAME+':'+API_PASSWORD);

export const configApiBasic = axios.create({
  baseURL: 'https://api-dev.beneficiosysalud.com',
  withCredentials: true,
});

configApiBasic.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
configApiBasic.defaults.headers.common['Authorization'] = 'Basic ' + base64Encoded;

export const configApi = axios.create({
  baseURL: 'https://api-dev.beneficiosysalud.com',
  withCredentials: true,
});

