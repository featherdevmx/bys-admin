import React, { FC } from 'react';
import Image from 'next/image';
import { Text, Spacer } from '@nextui-org/react';
import { Burger } from '../Burger';

import { NavBarProps } from './types';
import { NavComponent } from './NavBar.styled';

export const NavBar: FC<NavBarProps> = ({ title = 'ByS', showIconMenu = false, changeIconMenu, setChangeIconMenu }) => {
  const logo = '/logo.svg';

  return (
    <NavComponent>
      {showIconMenu === true && <Burger changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu} />}
      <Image src={logo} priority={true} alt="ByS" width={240} height={60} style={{ marginRight: 20 }} />
      <Text color="white" h3>{`:: ${title}`}</Text>
      <Spacer css={{ flex: 1 }} />
    </NavComponent>
  );
};
