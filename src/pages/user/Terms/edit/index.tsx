import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import { EditorFormContainer } from '@/containers/EditorForm';

const EditTerms: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      router.push('/user/Terms');
    }
  }, [id, router]);

  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Términos y Condiciones');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <h3>{'Editar Versión'}</h3>
      <EditorFormContainer edit={true} id={id as string} app={'terms'} />
    </Layout>
  );
};

export default EditTerms;
