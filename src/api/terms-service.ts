/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditorOneProps } from '@/containers/EditorForm/types';
import { servicesGet, handleErrorResponse, servicesPost, servicesPut } from './serviceApi';

const API_URL = process.env.REACT_APP_BASE_URL;

export const getTerms = async () => {
  try {
    const endpoint = `${API_URL}/terms`;
    const response = await servicesGet(endpoint);

    if (response.ok) {
      return await response.json();
    }

    const errorResponse = await response.text();
    console.log('ERROR getTerms Service()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH Terms Service()', error);
    return error;
  }
};

export const saveTerm = async (data: any) => {
  try {
    const endpoint = `/terms`;

    const params = {
      data,
      route: endpoint,
      isLoginRequest: false,
    };

    const response = await servicesPost(params);

    if (response.ok) {
      return await response.json();
    }
    const errorResponse = await response.text();
    console.log('ERROR createTerms()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH createTerms()', error);
    return error;
  }
};

export const getTerm = async (idPrivacy: EditorOneProps) => {
  try {
    const endpoint = `${API_URL}/terms/${idPrivacy}`;
    const response = await servicesGet(endpoint);

    if (response.ok) {
      return await response.json();
    }

    const errorResponse = await response.text();
    console.log('ERROR Terms Service()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH Terms Service()', error);
    return error;
  }
};

export const updateTerm = async (idTerm: any, data: any) => {
  try {
    const endpoint = `${API_URL}/terms/${idTerm}`;

    console.log('la url es ', endpoint);

    const params = {
      data,
      url: endpoint,
    };

    const response = await servicesPut(params);

    if (response.ok) {
      return await response.json();
    }
    const errorResponse = await response.text();
    console.log('ERROR updatePrivacy Service()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH updatePrivacy Service()', error);
    return error;
  }
};
