import React, {useState} from 'react'
import type {NextPage} from 'next'
import {Layout} from '../../../../components/layouts'

const Start: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true)
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false)
  return (
    <Layout
      headTitle={'Home'}
      showIconMenu={showIconMenu}
      changeIconMenu={changeIconMenu}
      setChangeIconMenu={setChangeIconMenu}>
      <h1>Bienvenido</h1>
      {/* Insert here Container Component */}
    </Layout>
  )
}

export default Start
