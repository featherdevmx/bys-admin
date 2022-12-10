import { useMemo, useState } from 'react'
import { NextPage } from 'next'
import nextBase64 from 'next-base64';
import { Button, Text, Input, Spacer, useInput } from '@nextui-org/react'
import {servicesManager} from '../../../../api'

const Signin: NextPage = () => {
  const { value, reset, bindings } = useInput('');
  const [username] = useState('');
  const [password] = useState('');
  const base64Encoded = nextBase64.encode(username+':'+password);
  

  const handleInput = (e: any) => {
    console.log('event ', e);
  };

  const handleLogin2 = async () => {
    /*
    console.log('Iniciar Sesión')
    console.log('Username ', username);
    console.log('Password ', password);
    console.log('Password 64 ', base64Encoded);

    
    const formdata = new FormData();
    formdata.append('grant_type', 'password');
    formdata.append('username', username);
    formdata.append('password', password);

    await configApiBasic.post('/oauth/token', formdata).then((response) => {
      console.log('Service '+JSON.stringify(response));
    }).catch((error) => {
      console.log('Error en servicio '+error);
    });
    */
  }

  const handleLogin = async () => {
    console.log('*** Login');
    const params = {
      username: '',
      password: ''
    }

    const data = {
      type: 'auth',
      requestType: 'POST',
      data: params,
      route: '/auth'
    }

    await servicesManager(data);
  };

  const validateEmail = (value) => {
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
      <form>
        <Text color="white" h2>
          Iniciar Sesión
        </Text>
        <Spacer y={2.5} />
        <div className="form-input">
          <Input
            required
            {...bindings}
            clearable
            shadow={false}
            bordered
            onClearClick={reset}
            status={helper.color}
            color={helper.color}
            helperColor={helper.color}
            helperText={helper.text}
            type="email"
            label="Email"
            placeholder="Correo Electrónico"
            size="lg"
            value={username}
            onChange={handleInput}
          />
        </div>
        <Spacer y={3.5} />
        <div className="form-input">
          <Input
            required
            size="lg"
            bordered
            label="Contraseña"
            type="password"
            value={password}
            onChange={handleInput}
          />
        </div>
        <Spacer y={3.5} />
        <div className="form-input">
          <Button size="lg" color="gradient" onPress={handleLogin}>
            Iniciar Sesión
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Signin
