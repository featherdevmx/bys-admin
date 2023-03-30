import { ReactNode } from 'react';

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type UserContextType = {
  // UsersContext: Array<User>;
  // setUsersContext: (value: Array<User>) => void;
  UsersData: Array<User>;
  setUsersData: (value: Array<User>) => void;
};

export interface UserProps {
  children: ReactNode;
}
