import { NextPage } from 'next';
import NextLink from 'next/link';
import { useFormik } from 'formik';
import { Chip } from '@mui/material';
import { useMemo, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { ErrorOutline } from '@mui/icons-material';
import { Button, Input, Loading, Spacer, Text, useInput } from '@nextui-org/react';
import { login } from '../../../../api';
import { ApiPostData } from '../../../../api/types';

const Signin: NextPage = () => {
  const { value, reset, bindings } = useInput('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
          loginResponse.message.includes('E_PASSWORD_MISMATCH') ||
          loginResponse.message.includes('E_USER_NOT_FOUND')
      ) {
          toast.error('Usuario o Contraseña incorrecta');
      } else {
          toast.error('Error en petición, intente más tarde');
      }
      setError(true);
      setLoading(false);
      return;
    }
    setLoading(false);
    const { token } = loginResponse.access_token;
    console.log('Hay token ', token);
    toast.success('Bienvenido!')
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
          label="No reconocemos ese usuario/contraseña"
          color="error"
          icon={<ErrorOutline />}
          className="fadein"
        />
        )}
        <Spacer y={1.5} />
        <div className="form-input">
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
        </div>
        <Spacer y={2.5} />
        <div className="form-input">
          <Input
            required
            size="lg"
            bordered
            label="Contraseña"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={(event) => formik.handleChange(event)}
          />
        </div>
        <Spacer y={2.5} />
        <div className="form-input">
          {loading===false && (
            <Button type="submit" size="lg" color="gradient">
              Iniciar Sesión
            </Button>
          )}
          {loading === true && (
            <Loading />
          )}
        </div>
      </form>
    </div>
  )
}

export default Signin;
