import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import { EditorOneProps } from '../../../../containers/EditorForm/types';
import { getPrivacy } from '../../../../api/privacy-service';
//import { Layout } from '../../../../components/layouts';

// import { EditorFormContainer } from '../../../../containers/EditorForm';

const PrivacyView: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Aviso de Privacidad');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  const [content, setContent] = useState();

  const handlePrivacy = useCallback(async () => {
    const privacySaved = await getPrivacy(id as unknown as EditorOneProps);
    console.log('Hola', privacySaved);
    setContent(privacySaved);
  }, [id]);

  useEffect(() => {
    if (!id) {
      router.push('/user/Privacy');
    } else {
      handlePrivacy();
    }
  }, [handlePrivacy, id, router]);

  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <div>
        <h1>trasA</h1>
      </div>
      <h1>{content?.name}</h1>
      <h3>Fecha: {content?.created_at}</h3>
      <h3>Status: {content?.status === 0 ? 'Activo' : 'Inactivo'}</h3>
      <p>{content?.content}</p>
    </Layout>
  );
};

export default PrivacyView;
