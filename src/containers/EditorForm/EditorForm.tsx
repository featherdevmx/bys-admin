/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Loading } from '@nextui-org/react';
import toast, { Toaster } from 'react-hot-toast';
import { Button } from '../../components/ui/Button/Button';
import { NavBar, Row, InputText } from './EditorForm.styled';
import { EditorFormProps, EditorOneProps } from './types';
import 'react-quill/dist/quill.snow.css';
import { savePrivacy, getPrivacy, updatePrivacy } from '../../api/privacy-service';
import { saveTerm, getTerm, updateTerm } from '../../api/terms-service';

import { useInfoUser } from '../../hooks/useInfoUser';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

export const EditorFormContainer: FC<EditorFormProps> = ({ id, edit, app }: EditorFormProps) => {
  const router = useRouter();
  const { UsersData } = useInfoUser();
  const [titleUpdate, setTitleUpdate] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [contentUpdate, setContentUpdate] = useState('');
  const [idUpdate, setIdUpdate] = useState<EditorOneProps>();
  const [updatePage, setUpdatePage] = useState<boolean>(false);

  const handleChangeForm = (valueChange: React.SetStateAction<string>) => {
    setContentUpdate(valueChange);
  };

  const handleGetPrivacyOne = useCallback(async (idPrivacyParam: EditorOneProps) => {
    const onePrivacySaved = await getPrivacy(idPrivacyParam as EditorOneProps);
    // Asignamos información almacenada en BD
    setTitleUpdate(onePrivacySaved.name);
    setContentUpdate(onePrivacySaved.content);
    setIdUpdate(onePrivacySaved.id);
    setLoading(false);
    setUpdatePage(true);
  }, []);

  const handleGetTermsOne = useCallback(async (idTermsParam: EditorOneProps) => {
    const oneTermsSaved = await getTerm(idTermsParam as EditorOneProps);
    // Asignamos información almacenada en BD
    setTitleUpdate(oneTermsSaved.name);
    setContentUpdate(oneTermsSaved.content);
    setIdUpdate(oneTermsSaved.id);
    setLoading(false);
    setUpdatePage(true);
  }, []);

  useEffect(() => {
    if (edit === true) {
      setLoading(true);
      console.log(`App se llama ${app}`);
      switch (app) {
        case 'terms':
          if (!updatePage) {
            handleGetTermsOne(id as unknown as EditorOneProps);
          }
          break;
        default:
          if (!updatePage) {
            handleGetPrivacyOne(id as unknown as EditorOneProps);
          }
          break;
      }
    }
  }, [id, edit, handleGetPrivacyOne]);

  const handleSave = async (info: string) => {
    setLoading(true);

    const dataUpdateOrSaved = {
      name: titleUpdate,
      content: info,
      user_id: UsersData[0]?.id,
    };

    if (updatePage) {
      if (app === 'privacy') {
        const privacyUpdate = await updatePrivacy(idUpdate, dataUpdateOrSaved);

        if (privacyUpdate) {
          setLoading(false);
          toast.success('Se actualizo exitosamente el Aviso de Privacidad.');
          setTimeout(() => {
            router.push('/user/Privacy');
          }, 1000);
        } else {
          setLoading(false);
          toast.error('Error al momento de actualizar.');
        }
      } else if (app === 'terms') {
        const termsUpdate = await updateTerm(idUpdate, dataUpdateOrSaved);

        if (termsUpdate) {
          setLoading(false);
          toast.success('Se actualizo exitosamente los Términos y Condiciones.');
          setTimeout(() => {
            router.push('/user/Terms');
          }, 1000);
        } else {
          setLoading(false);
          toast.error('Error al momento de actualizar.');
        }
      }
    } else if (app === 'privacy') {
      const privacySave = await savePrivacy(dataUpdateOrSaved);
      if (privacySave.error === false) {
        setLoading(false);
        toast.success('Se guardo exitosamente el Aviso de Privacidad');
        setTimeout(() => {
          router.push('/user/Privacy');
        }, 1000);
      } else {
        setLoading(false);
        toast.error('Error al momento de guardar.');
      }
    } else if (app === 'terms') {
      const termsSave = await saveTerm(dataUpdateOrSaved);
      if (termsSave.error === false) {
        setLoading(false);
        toast.success('Se guardo exitosamente el Aviso de Privacidad');
        setTimeout(() => {
          router.push('/user/Terms');
        }, 1000);
      } else {
        setLoading(false);
        toast.error('Error al momento de guardar.');
      }
    }
  };

  const handleCancel = () => {
    switch (app) {
      case 'terms':
        router.push('/user/Terms');
        break;
      default:
        router.push('/user/Privacy');
        break;
    }
  };

  const handleChangeTitle = (event: React.FormEvent<HTMLInputElement>) => {
    setTitleUpdate(event.currentTarget.value);
  };

  return (
    <>
      {loading === true && <Loading />}
      <Row>
        <Toaster position="top-center" reverseOrder={true} />
      </Row>
      <Row>
        <InputText type="text" value={titleUpdate} onChange={handleChangeTitle} placeholder="Selecciona título de Aviso de Privacidad." />
      </Row>
      <ReactQuill theme="snow" value={contentUpdate} onChange={handleChangeForm} placeholder="Escribe la próxima versión de Aviso de Privacidad." />
      <NavBar>
        <Button title={updatePage ? 'Actualizar información' : 'Guardar'} action={() => handleSave(contentUpdate)} btnType={'principal'} />
        <Button title={'Cancelar'} action={() => handleCancel()} btnType={'principal'} />
      </NavBar>
    </>
  );
};
