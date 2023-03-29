import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import Signin from './app/guest/Signin';

const Home: NextPage = () => {
  const [showIconMenu] = useState<boolean>(false);
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);

  return (
    <Layout headTitle={'Login'} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <Signin />
    </Layout>
  );
};

export default Home;
