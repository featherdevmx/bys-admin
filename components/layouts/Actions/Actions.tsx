import React, {FC} from 'react';
import { useRouter } from 'next/router';
import { Text } from '@nextui-org/react';
import {MenuLink} from '../../ui/MenuLink';
import {MenuActions, Menu, Logout} from './Actions.styled';

export const Actions:FC = () => {

  const router = useRouter();

  const options = [
    {
      id: 1,
      path: '/',
      title: 'Inicio',
    },
    {
      id: 2,
      path: '/app/userLogged/coberturas',
      title: 'PSP - Coberturas',
    },
    {
      id: 3,
      path: '/app/userLogged/asistencias',
      title: 'PSP - Asistencias',
    },
    {
      id: 4,
      path: '/app/userLogged/ryd',
      title: 'Reembolsos y Devoluciones',
    },
    {
      id: 5,
      path: '/app/userLogged/seguro',
      title: 'Seguro de Vida',
    },
    {
      id: 6,
      path: '/app/userLogged/pfg',
      title: 'Plan Familiar Golden',
    },
    {
      id: 7,
      path: '/app/userLogged/gmm',
      title: 'Gastos Médicos Mayores',
    },
    {
      id: 8,
      path: '/app/userLogged/glosario',
      title: 'Glosario',
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('bysAuthToken');
    router.push('/');
  };

  return (
    <MenuActions>
      <Text color="black" h3>
          Seleccione una opción
      </Text>
      <Menu>
      {options.map(item => (
        <>
          <MenuLink type={'link'} id={item.id} path={item.path} title={item.title} />
        </>
      ))}
      </Menu>
      <Logout>
        <MenuLink type={'btn'} title={'Cerrar Sesión'} action={() => handleLogout()}/>
      </Logout>
    </MenuActions>
  )
}