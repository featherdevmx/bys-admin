import React, { useState } from 'react';
import type { NextPage } from 'next';
import { Layout } from '@/components/layouts';
import { EditorFormContainer } from '@/containers/EditorForm';

const NewPrivacy: NextPage = () => {
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Aviso de Privacidad');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>{'Crear nueva versión'}</h3>
      <EditorFormContainer edit={false} id={''} app={'privacy'} />
    </Layout>
  );
};

export default NewPrivacy;
