/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from 'formik';
import { Chip } from '@mui/material';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorOutline } from '@mui/icons-material';
import React, { useMemo, useState, FC } from 'react';
import { Button, Input, Loading, Spacer, Text, useInput } from '@nextui-org/react';

import { getUserInfo, login } from '@/api';
import { ApiPostData } from '@/api/types';
import { useInfoUser } from '@/hooks/useInfoUser';
import { Row, FormContainer } from './Signin.styled';

export const SigninContainer: FC = () => {
  const showClarity = false;
  const router = useRouter();
  const { value, reset, bindings } = useInput('');
  const { UsersData, setUsersData } = useInfoUser();
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const keyClarity = process.env.REACT_APP_CLARITY_KEY;
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: () => {
      handleLogin();
      setLoading(true);
      formik.resetForm();
    },
  });

  const handleLogin = async () => {
    setError(false);

    const data = {
      email: formik.values.email,
      password: formik.values.password,
    };

    const loginResponse = await login(data as unknown as ApiPostData);
    if (!loginResponse.access_token) {
      if (loginResponse.message.includes('E_PASSWORD_MISMATCH')) {
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
    const userInfo = getUserInfo(token);
    const { user } = userInfo;

    const newUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    };

    setUsersData([...UsersData, newUser]);

    // Clarity
    window.clarity('consent');
    window.clarity('identify', `${user.firstName} ${user.lastName}`);

    toast.success('Bienvenido a ByS!');
    localStorage.setItem('bysAuthToken', token);
    router.push('/user/Start');
  };

  const validateEmail = (checkValue: any) => checkValue.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  const helper = useMemo(() => {
    if (!value)
      return {
        text: '',
        color: '',
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? 'Email Correcto' : 'Ingresa un mail correcto',
      color: isValid ? 'success' : 'error',
    };
  }, [value]);

  return (
    <div className={'form_signin'}>
      <Toaster position="top-center" reverseOrder={true} />
      <FormContainer>
        {showClarity && (
          <div>
            <h5>Mide {keyClarity?.length}</h5>
            <h5>Var: {keyClarity}</h5>
            <h5>Url: {process.env.REACT_APP_BASE_URL}</h5>
            <h5>Key: {process.env.REACT_APP_CLARITY_KEY}</h5>
          </div>
        )}
        <form onSubmit={formik.handleSubmit}>
          <Text color="black" h2>
            Iniciar Sesión
          </Text>
          {error && <Chip label={errorMessage} color="error" icon={<ErrorOutline />} className="fadein" />}
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
              onChange={event => formik.handleChange(event)}
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
              onChange={event => formik.handleChange(event)}
            />
          </Row>
          <Spacer y={2.5} />
          <Row>
            {loading === false && (
              <Button type="submit" color="gradient">
                Iniciar Sesión
              </Button>
            )}
            {loading === true && <Loading />}
          </Row>
        </form>
      </FormContainer>
    </div>
  );
};
