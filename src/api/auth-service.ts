import jwt from 'jsonwebtoken';
import { servicesPost, handleErrorResponse } from './serviceApi';
import { ApiPostData, TokenPayload, UserInfo } from './types';

export const login = async (data: ApiPostData) => {
  try {
    const endpoint = `/auth`;

    const params = {
      data,
      route: endpoint,
      isLoginRequest: true,
    };

    const response = await servicesPost(params);

    if (response.ok) {
      return await response.json();
    }
    const errorResponse = await response.text();
    console.log('ERROR login()', errorResponse);
    return handleErrorResponse(errorResponse);
  } catch (error) {
    console.log('CATCH login()', error);
    return error;
  }
};

export const getUserInfo = (token?: string): UserInfo | null => {
  const tokenToDecode = token ?? localStorage.getItem('bysAuthToken');
  if (!tokenToDecode) {
    return null;
  }

  try {
    const decodedToken = jwt.decode(tokenToDecode) as TokenPayload;
    return decodedToken.data.user;
  } catch (err) {
    console.error(err);
    return null;
  }
};
