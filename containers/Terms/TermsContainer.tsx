import React, {useState} from 'react';
import {Header, Body, Main} from './TermsContainer.styled';
import { Button, Text } from '@nextui-org/react';

export const TermsContainers = () => {

  const [lastVersion, setLastVersion] = useState<string>('12-12-2022');

  return (
    <Main>
      <Header>
        <Text color="black" h4>
          Última Actualización: {lastVersion}
        </Text>
        <Button type="submit" color="gradient">
        Nueva versión
        </Button>
      </Header>
      <Body>
        <h1>Body</h1>
      </Body>
    </Main>
  )
}
