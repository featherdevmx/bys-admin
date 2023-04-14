import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { useInfoUser } from '@/hooks/useInfoUser';

const Start: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);

  const { UsersData } = useInfoUser();

  useEffect(() => {
    console.log('Hola');
    console.log('User ', UsersData);
  }, [UsersData]);

  return (
    <Layout headTitle={'Home'} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h1>Bienvenido {UsersData[0]?.firstName}!</h1>
      {/* Insert here Container Component */}
    </Layout>
  );
};

export default Start;
