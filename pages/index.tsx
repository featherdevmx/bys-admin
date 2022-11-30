import type { NextPage } from 'next';
import Head from 'next/head';
import Signin from './app/pages/Signin/Signin';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Beneficios y Salud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Signin />
      </main>
    </div>
  )
}

export default Home