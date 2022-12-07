import { useMemo } from 'react'
import { NextPage } from 'next'
import { Button, Text, Input, Spacer, useInput } from '@nextui-org/react'
import { configApi } from '../../../../api'

const Signin: NextPage = () => {
  const { value, reset, bindings } = useInput('')

  const handleLogin = async () => {
    console.log('Iniciar Sesión')

    await configApi
      .post('/auth/')
      .then((response) => {
        //
        console.log('Response ' + response)
      })
      .catch((error) => {
        console.log('Error: ' + error)
      })
  }

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
          />
        </div>
        <Spacer y={3.5} />
        <div className="form-input">
          <Input
            size="lg"
            bordered
            label="Contraseña"
            labelPlaceholder="Contraseña"
            initialValue=""
            type="password"
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
