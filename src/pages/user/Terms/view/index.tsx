import React, { useCallback, useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import { NavBlack } from '@/components/ui/NavBlack/NavBlack';
import { EditorOneProps } from '@/containers/EditorForm/types';
import { getPrivacy } from '@/api/privacy-service';
import { Loading } from '@nextui-org/react';

export interface TermsOneItemProps {
  name: string;
  created_at: string;
  status: boolean | number;
  content: string;
}

const TermsView: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const [showIconMenu] = useState<boolean>(true);
  const [title] = useState<string>('Términos y Condiciones');
  const [changeIconMenu, setChangeIconMenu] = useState<boolean>(false);
  const [content, setContent] = useState<TermsOneItemProps>();

  const handleGetTerm = useCallback(async () => {
    const privacySaved = await getPrivacy(id as unknown as EditorOneProps);
    if (privacySaved) {
      setTimeout(() => {
        setLoading(false);
        setContent(privacySaved);
      }, 1000);
    }
  }, [id]);

  const handleGoBack = useCallback(() => {
    router.push('/user/Terms');
  }, [router]);

  useEffect(() => {
    if (!id) {
      router.push('/user/Terms');
    } else {
      setLoading(true);
      handleGetTerm();
    }
  }, [handleGetTerm, id, router]);

  return (
    <Layout headTitle={title} showIconMenu={showIconMenu} changeIconMenu={changeIconMenu} setChangeIconMenu={setChangeIconMenu}>
      <NavBlack action={() => handleGoBack()} title={'Atrás'} />
      {loading === true && <Loading />}
      {loading === false && (
        <>
          <h1>{content?.name}</h1>
          <h3>Fecha: {content?.created_at}</h3>
          <h3>Status: {content?.status === 0 ? 'Activo' : 'Inactivo'}</h3>
          <p>{content?.content}</p>
        </>
      )}
    </Layout>
  );
};

export default TermsView;
