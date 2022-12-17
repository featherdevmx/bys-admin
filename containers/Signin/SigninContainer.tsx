import { useFormik } from 'formik';
import { Chip } from '@mui/material';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorOutline } from '@mui/icons-material';
import React, { useMemo, useState, FC, useEffect } from 'react';
import { Button, Input, Loading, Spacer, Text, useInput } from '@nextui-org/react';

import {Row} from './SigninContainer.styled';
import { login } from '../../api';
import { ApiPostData } from '../../api/types';

export const SigninContainer: FC = () => {
  const router = useRouter();
  const { value, reset, bindings } = useInput('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const existToken = localStorage.getItem('bysAuthToken');
    console.log('Hay token ', existToken);
    if (existToken !== null) {
      // setTimeout(() => {
      //   router.push('/app/userLogged/Start');
      // }, 500);
    }
  }, [router]);

  const formik = useFormik({
    initialValues: {email: '', password: ''},
    onSubmit: () => {
      handleLogin();
      setLoading(true);
      formik.resetForm();
    }
  });
  

  const handleLogin = async () => {
    setError(false);

    const data = {
      email: formik.values.email,
      password: formik.values.password
    }

    const loginResponse = await login(data as unknown as ApiPostData );
    if (!loginResponse.access_token) {
      if (
          loginResponse.message.includes('E_PASSWORD_MISMATCH')
      ) {
          setErrorMessage('Usuario o Contraseña incorrecta.');
          toast.error('Usuario o Contraseña incorrecta.');
      } else if (loginResponse.message.includes('E_USER_NOT_FOUND')) {
          setErrorMessage('Usuario no registrado.');
          toast.error('Usuario no registrado.');
      } else {
          toast.error('Error en petición, intente más tarde');
      }
      setError(true);
      setLoading(false);
      return;
    }
    setLoading(false);
    const { token } = loginResponse.access_token;
    toast.success('Bienvenido a ByS!');
    localStorage.setItem('bysAuthToken', token);
    router.push('/app/userLogged/Start');
  };

  const validateEmail = (value:any) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)
  }

  const helper = useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      }
    const isValid = validateEmail(value)
    return {
      text: isValid ? 'Email Correcto' : 'Ingresa un mail correcto',
      color: isValid ? 'success' : 'error',
    }
  }, [value])

  return (
    <div className={'form_signin'}>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <form onSubmit={formik.handleSubmit}>
        <Text color="black" h2>
          Iniciar Sesión
        </Text>
        {error && (
        <Chip
          label={errorMessage}
          color="error"
          icon={<ErrorOutline />}
          className="fadein"
        />
        )}
        <Spacer y={1.5} />
        <Row>
          <Input
            required
            {...bindings}
            clearable
            shadow={false}
            bordered
            onClearClick={reset}
            status={helper.color as any}
            color={helper.color as any}
            helperColor={helper.color as any}
            helperText={helper.text}
            type="email"
            label="Email"
            name="email"
            placeholder="Correo Electrónico"
            size="lg"
            value={formik.values.email}
            onChange={(event) => formik.handleChange(event)}
          />
        </Row>
        <Spacer y={2.5} />
        <Row>
          <Input
            required
            bordered
            type="password"
            label="Contraseña"
            name="password"
            placeholder="Contraseña"
            size="lg"
            value={formik.values.password}
            onChange={(event) => formik.handleChange(event)}
          />
        </Row>
        <Spacer y={2.5} />
        <Row>
          {loading===false && (
            <Button type="submit" color="gradient">
                Iniciar Sesión
            </Button>
          )}
          {loading === true && (
            <Loading />
          )}
        </Row>
      </form>
    </div>
  )
}

export default SigninContainer;
