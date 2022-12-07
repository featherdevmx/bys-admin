import React, { FC } from 'react'
import Image from 'next/image'
import { Text, Spacer } from '@nextui-org/react'

import { NavBarProps } from './types'
import styles from './NavBar.module.css'

export const NavBar: FC<NavBarProps> = ({ title = 'ByS' }) => {
  const logo =
    'https://www.beneficiosysalud.com/wp-content/uploads/2021/07/bs-logo-blanco-ok-01.svg'

  return (
    <div className={styles.navbar}>
      <Image
        src={logo}
        alt="ByS"
        width={240}
        height={60}
        style={{ marginRight: 20 }}
      />
      <Text color="white" h3>{`:: ${title}`}</Text>
      <Spacer css={{ flex: 1 }} />
    </div>
  )
}
