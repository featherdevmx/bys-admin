import React, {useState} from 'react'
import type { NextPage } from 'next';
import { Layout } from '../../../../components/layouts';

const User: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout 
      headTitle={'Usuarios'}
      showIconMenu={showIconMenu}
      changeIconMenu={changeIconMenu}
      setChangeIconMenu={setChangeIconMenu}
    >
      <h1>Usuarios</h1>
      { /* Insert here Container Component */}
    </Layout>
  )
}

export default User
