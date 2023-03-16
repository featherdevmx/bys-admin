import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@nextui-org/react';
import { MenuLink } from '../../ui/MenuLink';
import { MenuActions, Menu, Logout } from './Actions.styled';

export const Actions: FC = () => {
  const router = useRouter();

  const options = [
    {
      id: 1,
      path: '/app/user/Start',
      title: 'Inicio',
    },
    {
      id: 2,
      path: '/app/user/Privacy',
      title: 'Aviso de Privacidad',
    },
    {
      id: 3,
      path: '/app/user/Terms',
      title: 'Términos y Condiciones',
    },
    /* ToDO - URLS finales */
    {
      id: 4,
      path: '/app/user/Coberturas',
      title: 'PSP - Coberturas',
    },
    {
      id: 5,
      path: '/app/user/Asistencias',
      title: 'PSP - Asistencias',
    },
    {
      id: 6,
      path: '/app/user/Ryd',
      title: 'Reembolsos y Devoluciones',
    },
    {
      id: 7,
      path: '/app/user/Seguros',
      title: 'Seguro de Vida',
    },
    {
      id: 8,
      path: '/app/user/Pfg',
      title: 'Plan Familiar Golden',
    },
    {
      id: 9,
      path: '/app/user/Gmm',
      title: 'Gastos Médicos Mayores',
    },
    {
      id: 10,
      path: '/app/user/Glosario',
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
        <MenuLink type={'btn'} title={'Cerrar Sesión'} action={() => handleLogout()} />
      </Logout>
    </MenuActions>
  );
};
