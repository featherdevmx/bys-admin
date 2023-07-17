import { FC } from 'react';
import { GoBackButton, NavBar } from './NavBlack.styled';
import { NavBlackProps } from './types';

export const NavBlack: FC<NavBlackProps> = ({ action, title }) => (
  <NavBar>
    <GoBackButton onClick={() => action()} />
    {title}
  </NavBar>
);
