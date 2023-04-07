import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import { EditorFormContainer } from '@/containers/EditorForm';

const EditPrivacy: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      router.push('/user/Privacy');
    }
  }, [id, router]);

  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Aviso de Privacidad');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>{'Editar versión'}</h3>
      <EditorFormContainer edit={true} id={id as string} app={'privacy'} />
    </Layout>
  );
};

export default EditPrivacy;
