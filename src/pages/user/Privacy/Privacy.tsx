import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { PrivacyContainer } from '@/containers/Privacy/Privacy';

const Privacy: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Aviso de Privacidad');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>Listado de Avisos de Privacidad</h3>
      {/* Insert here Container Component */}
      <PrivacyContainer />
    </Layout>
  );
};

export default Privacy;
