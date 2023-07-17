import React, { FC } from 'react';
import { StyledBurger, ContainerBurger } from './Burger.styled';

import { BurgerProps } from './types';

export const Burger: FC<BurgerProps> = ({ changeIconMenu, setChangeIconMenu }) => (
  <ContainerBurger>
    <StyledBurger open={changeIconMenu} onClick={() => setChangeIconMenu(!changeIconMenu)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  </ContainerBurger>
);
