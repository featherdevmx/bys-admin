import React, { FC, useState } from 'react';
import ReactQuill from 'react-quill';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../../components/ui/Button/Button';
import { NavBar, Row, InputText } from './NewTerms.styled';
import 'react-quill/dist/quill.snow.css';
import { saveTerms } from '../../api/terms-service';

import { useInfoUser } from '../../hooks/useInfoUser';

export const NewTermsContainer: FC = () => {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [titleTerms, setTitleTerms] = useState('');
  const { UsersData } = useInfoUser();

  const handleChangeForm = (valueChange: React.SetStateAction<string>) => {
    setContent(valueChange);
  };

  const handleSave = async (info: string) => {
    setLoading(true);

    const dataTerms = {
      name: titleTerms,
      content: info,
      user_id: UsersData[0].id,
    };

    const termsSave = await saveTerms(dataTerms);
    if (termsSave.error === false) {
      setLoading(false);
      toast.success('Se guardo exitosamente los Términos y Condiciones');
      setTimeout(() => {
        router.push('/app/user/Terms');
      }, 1000);
    } else {
      setLoading(false);
      toast.error('Error al momento de guardar.');
    }
  };

  const handleCancel = () => {
    router.push('/app/user/Terms');
  };

  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitleTerms(event.currentTarget.value);
  };

  return (
    <>
      {loading === true && <Loading />}
      <Row>
        <Toaster position="top-center" reverseOrder={true} />
      </Row>
      <Row>
        <InputText type="text" value={titleTerms} onChange={handleChangeTitle} placeholder="Selecciona título de Términos y Condiciones" />
      </Row>
      <ReactQuill theme="snow" value={content} onChange={handleChangeForm} />
      <NavBar>
        <Button title={'Guardar'} action={() => handleSave(content)} btnType={'principal'} />
        <Button title={'Cancelar'} action={() => handleCancel()} btnType={'principal'} />
      </NavBar>
    </>
  );
};
