import Head from 'next/head';
import React, { FC } from 'react';

import {Main, ContentFull, Sidebar, ContentPartial} from './Layout.styled';

import {Actions} from './Actions/';
import { NavBar } from '../ui/NavBar';
import { LayoutProps } from './types'

export const Layout: FC<LayoutProps> = ({ children, title, headTitle, showIconMenu, changeIconMenu, setChangeIconMenu}) => {
  return (
    <>
      <Head>
        <title>{title || 'Beneficios y Salud'}</title>
        <meta name="author" content="Beneficios y Salud" />
        <meta name="description" content="Beneficios y Salud" />
        <meta name="keywords" content="beneficios y salud, beneficios, salud" />
      </Head>
      <NavBar
        title={headTitle}
        showIconMenu={showIconMenu}
        changeIconMenu={changeIconMenu}
        setChangeIconMenu={setChangeIconMenu}
      />
      <Main>
        {changeIconMenu === false && (
          <ContentFull>
            {children}  
          </ContentFull>
        )}
        {changeIconMenu === true && (
          <>
          <Sidebar>
            <Actions />
          </Sidebar>
          <ContentPartial>
            {children} 
          </ContentPartial>
          </>
        )}
      </Main>
    </>
  )
}
