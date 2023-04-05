import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { NewTermsContainer } from '@/containers/NewTerms';

const NewTerms: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Términos y Condiciones');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>Crear nueva versión</h3>
      <NewTermsContainer />
    </Layout>
  );
};

export default NewTerms;
