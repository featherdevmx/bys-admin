import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import { Button } from '../../components/ui/Button/Button';
import { NavBar } from './NewTerms.styled';
import 'react-quill/dist/quill.snow.css';
import { saveTerms } from '../../api/terms-service';

export const NewTermsContainers: FC = () => {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [loading] = useState<boolean>(false);

  const handleChange = (value: React.SetStateAction<string>) => {
    setContent(value);
  };

  const handleSave = async (info: string) => {
    console.log(`salvar${info}`);

    const temp = {
      name: 'Terminos v4',
      content: info,
      user_id: '164f479d-c6d3-4975-9354-df2f842cf428',
    };

    const termsSave = await saveTerms(temp);
    console.log(`Terms Save ${JSON.stringify(termsSave)}`);
  };

  const handleCancel = () => {
    router.push('/app/user/Terms');
  };

  return (
    <>
      <ReactQuill theme="snow" value={content} onChange={handleChange} />
      <NavBar>
        <Button title={'Guardar'} action={() => handleSave(content)} btnType={'principal'} />
        <Button title={'Cancelar'} action={() => handleCancel()} btnType={'principal'} />
      </NavBar>
      {loading === true && <Loading />}
    </>
  );
};
