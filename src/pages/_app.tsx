import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { UsersContextProvider } from '@/context/users';

import '@/styles/globals.css';
import '@/styles/login.css';

import { darkTheme } from '../themes';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UsersContextProvider>
      <NextUIProvider theme={darkTheme}>
        <Component {...pageProps} />
      </NextUIProvider>
    </UsersContextProvider>
  );
}
