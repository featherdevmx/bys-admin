import { useContext } from 'react';
import UserDataContext from '@/context/users';
import { UserContextType } from '@/context/types';

export const useInfoUser = () => {
  const { UsersData, setUsersData } = useContext(UserDataContext) as UserContextType;
  return {
    UsersData,
    setUsersData,
  };
};
