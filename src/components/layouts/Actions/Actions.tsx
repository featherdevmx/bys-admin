import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Text } from '@nextui-org/react';
import { useInfoUser } from '@/hooks/useInfoUser';
import { MenuLink } from '../../ui/MenuLink';
import { MenuActions, Menu, Logout } from './Actions.styled';

export const Actions: FC = () => {
  const router = useRouter();

  const { UsersData, setUsersData } = useInfoUser();

  const options = [
    {
      id: 1,
      path: '/user/Start',
      title: 'Inicio',
    },
    {
      id: 2,
      path: '/user/Privacy',
      title: 'Aviso de Privacidad',
    },
    {
      id: 3,
      path: '/user/Terms',
      title: 'Términos y Condiciones',
    },
    /* ToDO - URLS finales */
    {
      id: 4,
      path: '/user/Coberturas',
      title: 'PSP - Coberturas',
    },
    {
      id: 5,
      path: '/user/Asistencias',
      title: 'PSP - Asistencias',
    },
    {
      id: 6,
      path: '/user/Refound',
      title: 'Reembolsos y Devoluciones',
    },
    {
      id: 7,
      path: '/user/Seguros',
      title: 'Seguro de Vida',
    },
    {
      id: 8,
      path: '/user/Pfg',
      title: 'Plan Familiar Golden',
    },
    {
      id: 9,
      path: '/user/Gmm',
      title: 'Gastos Médicos Mayores',
    },
    {
      id: 10,
      path: '/user/Glosario',
      title: 'Glosario',
    },
  ];

  const handleLogout = () => {
    setUsersData([]);
    localStorage.removeItem('bysAuthToken');
    router.push('/');
  };

  return (
    <MenuActions>
      <Text color="black" h3>
        ¡Hola {UsersData[0]?.firstName}!
      </Text>
      <Text color="black" h5>
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
