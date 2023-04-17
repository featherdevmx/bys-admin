import { NextPage } from 'next';
import React, { useState } from 'react';
import { Layout } from '@/components/layouts';
import { ErrorContainer } from '@/containers/ErrorC';

const Error403: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Aviso de Privacidad');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <ErrorContainer messageError="403" />
    </Layout>
  );
};

export default Error403;
