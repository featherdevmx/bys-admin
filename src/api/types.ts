export interface ApiPostProps {
  data: object;
  route: string;
  isLoginRequest: boolean;
}

export interface ApiPostData {
  data: object;
}

export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface TokenPayload {
  data: {
    user: UserInfo;
  };
}

export interface ApiUpdateProps {
  data: object;
  url: string;
}
