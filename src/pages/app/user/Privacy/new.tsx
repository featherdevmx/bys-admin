import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../../../../components/layouts';
import { PrivacyFormContainer } from '../../../../containers/PrivacyForm';

const NewPrivacy: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Crear nueva versión');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h1>{title}</h1>
      <PrivacyFormContainer edit={false} id={''} />
    </Layout>
  );
};

export default NewPrivacy;
