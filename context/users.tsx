import { createContext, useState } from 'react';
import { User, UserProps } from './types';

const UserDataContext = createContext({});

export function UsersContextProvider({ children }: UserProps) {
  const [UsersData, setUsersData] = useState<Array<User>>([]);
  return <UserDataContext.Provider value={{ UsersData, setUsersData }}>{children}</UserDataContext.Provider>;
}

export default UserDataContext;
