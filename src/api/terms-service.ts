/* eslint-disable @typescript-eslint/no-explicit-any */
import { servicesGet, handleErrorResponse, servicesPost } from './serviceApi';

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

export const saveTerms = async (data: any) => {
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
