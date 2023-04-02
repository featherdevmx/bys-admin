/* eslint-disable @typescript-eslint/no-explicit-any */
import { EditorOneProps } from '../containers/EditorForm/types';
import { servicesGet, handleErrorResponse, servicesPost, servicesPut } from './serviceApi';

const API_URL = process.env.REACT_APP_BASE_URL;

export const getPrivacies = async () => {
  try {
    const endpoint = `${API_URL}/privacy`;
    const response = await servicesGet(endpoint);

    if (response.ok) {
      return await response.json();
    }

    const errorResponse = await response.text();
    console.log('ERROR Privacy Service()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH Privacy Service()', error);
    return error;
  }
};

export const savePrivacy = async (data: any) => {
  try {
    const endpoint = `/privacy`;

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
    console.log('ERROR createPrivacy()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH createPrivacy()', error);
    return error;
  }
};

export const getPrivacy = async (idPrivacy: EditorOneProps) => {
  try {
    const endpoint = `${API_URL}/privacy/${idPrivacy}`;
    const response = await servicesGet(endpoint);

    if (response.ok) {
      return await response.json();
    }

    const errorResponse = await response.text();
    console.log('ERROR Privacy Service()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH Privacy Service()', error);
    return error;
  }
};

export const updatePrivacy = async (idPrivacy: any, data: any) => {
  try {
    const endpoint = `${API_URL}/privacy/${idPrivacy}`;

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
