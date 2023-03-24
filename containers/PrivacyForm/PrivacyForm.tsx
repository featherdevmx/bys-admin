/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { Button } from '../../components/ui/Button/Button';
import { NavBar, Row, InputText } from './PrivacyForm.styled';
import { PrivacyForm, PrivacyOneProps } from './types';
import 'react-quill/dist/quill.snow.css';
import { savePrivacy, getPrivacy } from '../../api/privacy-service';
import { useInfoUser } from '../../hooks/useInfoUser';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

export const PrivacyFormContainer: FC<PrivacyForm> = ({ id, edit }: PrivacyForm) => {
  const router = useRouter();
  const { UsersData } = useInfoUser();
  const [contentPrivacy, setContentPrivacy] = useState('');
  const [titlePrivacy, setTitlePrivacy] = useState('');
  // const [setIdPrivacy] = useState<PrivacyOneProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [updateTerms, setUpdateTerms] = useState<boolean>(false);

  const handleChangeForm = (valueChange: React.SetStateAction<string>) => {
    setContentPrivacy(valueChange);
  };

  const handleGetPrivacyOne = useCallback(async (idPrivacyParam: PrivacyOneProps) => {
    const onePrivacySaved = await getPrivacy(idPrivacyParam as PrivacyOneProps);
    console.log(`Holas perro ${JSON.stringify(onePrivacySaved)}`);
    // Asignamos información almacenada en BD
    setTitlePrivacy(onePrivacySaved.name);
    setContentPrivacy(onePrivacySaved.content);
    // setIdPrivacy(onePrivacySaved.id);
    setLoading(false);
    setUpdateTerms(true);
  }, []);

  useEffect(() => {
    if (edit === true) {
      setLoading(true);
      if (!updateTerms) {
        handleGetPrivacyOne(id as unknown as PrivacyOneProps);
      }
    }
  }, [id, edit, handleGetPrivacyOne]);

  const handleSave = async (info: string) => {
    setLoading(true);

    const dataPrivacy = {
      name: titlePrivacy,
      content: info,
      user_id: UsersData[0]?.id,
    };

    /*
    if (updateTerms) {
      const privacySave = await updatePrivacy(idPrivacy, dataPrivacy);
      if (privacySave.error === false) {
        setLoading(false);
        toast.success('Se guardo exitosamente el Aviso de Privacidad');
        setTimeout(() => {
          router.push('/app/user/Privacy');
        }, 1000);
      } else {
        setLoading(false);
        toast.error('Error al momento de guardar.');
      }
    }
    */

    const privacySave = await savePrivacy(dataPrivacy);
    if (privacySave.error === false) {
      setLoading(false);
      toast.success('Se guardo exitosamente el Aviso de Privacidad');
      setTimeout(() => {
        router.push('/app/user/Privacy');
      }, 1000);
    } else {
      setLoading(false);
      toast.error('Error al momento de guardar.');
    }
  };

  const handleCancel = () => {
    router.push('/app/user/Privacy');
  };

  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitlePrivacy(event.currentTarget.value);
  };

  return (
    <>
      {loading === true && <Loading />}
      <Row>
        <Toaster position="top-center" reverseOrder={true} />
      </Row>
      <Row>
        <InputText type="text" value={titlePrivacy} onChange={handleChangeTitle} placeholder="Selecciona título de Aviso de Privacidad." />
      </Row>
      <ReactQuill theme="snow" value={contentPrivacy} onChange={handleChangeForm} placeholder="Escribe la próxima versión de Aviso de Privacidad." />
      <NavBar>
        <Button title={'Guardar'} action={() => handleSave(contentPrivacy)} btnType={'principal'} />
        <Button title={'Cancelar'} action={() => handleCancel()} btnType={'principal'} />
      </NavBar>
    </>
  );
};
