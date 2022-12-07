import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css';
import { darkTheme } from '../themes';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
