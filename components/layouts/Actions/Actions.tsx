import React, {FC} from 'react';
import {MenuLink} from '../../ui/MenuLink';
import { Text } from '@nextui-org/react';

export const Actions:FC = () => {

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

  return (
    <>
      <Text color="black" h3>
          Seleccione una opción
      </Text>
      {options.map(item => (
        <>
          <MenuLink id={item.id} path={item.path} title={item.title} />
        </>
      ))}
    </>
  )
}
