/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable consistent-return */
import React, { useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getTerm } from '../../../../api/terms-service';
import { EditorOneProps } from '../../../../containers/EditorForm/types';
// import { Layout } from '../../../../components/layouts';
// import { EditorFormContainer } from '../../../../containers/EditorForm';

export interface IdProps {
  id?: string | undefined;
}

const PrivacyView: NextPage = ({ privacySaved }: any) => {
  const router = useRouter();
  const { id } = router.query;
  // const [elId, setElId] = useState<IdProps>();
  console.log('Hola');
  console.log('Hola2 ', privacySaved);

  useEffect(() => {
    if (!id) {
      router.push('/user/Privacy');
    }
  }, [id, router]);

  return (
    <div>
      <h1>Hola {id}</h1>
      <h3>{privacySaved.title}</h3>
    </div>
  );
};

export async function getServerSideProps() {
  try {
    // const imageOfDay = await fetcher();
    // const last10DaysImages = await fetcher('&start_date=2023-03-28');
    console.log('Success ');
    const myId = '73da2b86-5f24-44ee-b373-fce92097ac6e';
    const privacySaved = await getTerm(myId as unknown as EditorOneProps);

    return {
      props: {
        privacySaved,
      },
    };
  } catch (error) {
    console.error('Error ', error);
  }
}

export default PrivacyView;
