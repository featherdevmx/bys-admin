import React,{FC} from 'react';
import Image from 'next/image';
import { useTheme, Text, Spacer} from '@nextui-org/react';

import {NavBarProps} from './types';

export const NavBar:FC<NavBarProps> = ({title='ByS'}) => {

  const {theme} = useTheme();
  const logo = 'https://www.beneficiosysalud.com/wp-content/uploads/2021/07/bs-logo-blanco-ok-01.svg';

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '20px 20px',
        backgroundColor: theme?.colors.gray100.value,
    }}>
      <Image src={logo} alt="ByS" width={240} height={60} style={{marginRight: 20}}/>
      <Text color='white' h3>{`:: ${title}`}</Text>
      <Spacer css={{flex: 1}}/>
    </div>
  )
}
