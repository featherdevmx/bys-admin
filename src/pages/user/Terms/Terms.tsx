import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { TermsContainer } from '@/containers/Terms';

const Terms: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Términos y Condiciones');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>Listado de Términos y Condiciones</h3>
      <TermsContainer />
    </Layout>
  );
};

export default Terms;
