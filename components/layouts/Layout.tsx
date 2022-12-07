import Head from 'next/head'
import React, { FC } from 'react'

import { NavBar } from '../ui'
import { LayoutProps } from './types'

export const Layout: FC<LayoutProps> = ({ children, title, headTitle }) => {
  return (
    <>
      <Head>
        <title>{title || 'Beneficios y Salud'}</title>
        <meta name="author" content="Beneficios y Salud" />
        <meta name="description" content="Beneficios y Salud" />
        <meta name="keywords" content="beneficios y salud, beneficios, salud" />
      </Head>
      <NavBar title={headTitle} />
      <main className='main'>
        {children}
      </main>
    </>
  )
}
