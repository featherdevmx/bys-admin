import React, {FC} from 'react';
import Head from 'next/head';

import {LayoutProps} from './types';
import { NavBar } from '../ui';

export const Layout:FC<LayoutProps> = ({children, title, headTitle}) => {
    return (
        <>
            <Head>
                <title>{title || 'Beneficios y Salud'}</title>
                <meta name="author" content="Beneficios y Salud" />
                <meta name="description" content="Beneficios y Salud" />
                <meta name="keywords" content="beneficios y salud, beneficios, salud" />
            </Head>
            <NavBar title={headTitle}/>
            <main style={{
                padding: '0px 20px'
            }}>
                {children}
            </main>
        </>
    )
}
