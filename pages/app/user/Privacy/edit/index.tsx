import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '../../../../../components/layouts';
import { PrivacyFormContainer } from '../../../../../containers/PrivacyForm';

const EditPrivacy: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Crear nueva versión');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h1>{title}</h1>
      <PrivacyFormContainer edit={true} id={id as string} />
    </Layout>
  );
};

export default EditPrivacy;
