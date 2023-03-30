import jwt from 'jsonwebtoken';
import { servicesPost, handleErrorResponse } from './serviceApi';
import { ApiPostData, UserInfo } from './types';

export interface JwtPayloadLocal {
  data: {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
    };
  };
}

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

export const getUserInfo = (token: string): UserInfo => {
  // console.log(`token ${token}`);
  const decodedToken = jwt.decode(token);
  const { data } = decodedToken as JwtPayloadLocal;

  return data;
};
