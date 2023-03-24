export interface ApiPostProps {
  data: object;
  route: string;
  isLoginRequest: boolean;
}

export interface ApiPostData {
  data: object;
}

export interface UserInfo {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  };
}

export interface ApiUpdateProps {
  data: object;
  route: string;
}
