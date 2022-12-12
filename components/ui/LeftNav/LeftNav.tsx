import React from 'react';
import {Ul} from './LeftNav.styled';

import {LeftNavProps} from './types';

export const LeftNav = (open:LeftNavProps) => {
  const openMenu = open.open;
  return (
    <Ul open={openMenu}>
      <li>{`Prevención`}</li>
      <li>{`Prevención`}</li>
      <li>{`Prevención`}</li> 
    </Ul>
  )
}