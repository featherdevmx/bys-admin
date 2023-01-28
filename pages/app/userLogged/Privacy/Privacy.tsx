import React, {useState} from 'react'
import type {NextPage} from 'next'
import {Layout} from '../../../../components/layouts'

const Privacy: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true)
  const [title] = useState<string>('Aviso de Privacidad')
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false)
  return (
    <Layout
      headTitle={title}
      showIconMenu={showIconMenu}
      changeIconMenu={changeIconMenu}
      setChangeIconMenu={setChangeIconMenu}>
      <h1>{title}</h1>
      {/* Insert here Container Component */}
    </Layout>
  )
}

export default Privacy
