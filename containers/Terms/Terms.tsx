import React, { useState, useEffect, FC } from 'react';
import { Button, Text, Table, Row, Col } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Header, Body, Main, StyledBadge, IconButton } from './Terms.styled';
import { EyeIcon } from '../../components/ui/EyeIcon';
import { EditIcon } from '../../components/ui/EditIcon';

import { getTerms } from '../../api/terms-service';

export const TermsContainers: FC = () => {
  const [lastVersion] = useState<string>('12-12-2022 20:09:23');
  const [terms, setTerms] = useState([]);
  const [showLastVersion] = useState<boolean>(false);
  const router = useRouter();

  const columns = [
    { name: 'Fecha', uid: 'created_at' },
    { name: 'Nombre', uid: 'name' },
    { name: 'Creado por', uid: 'author' },
    { name: 'Status', uid: 'status' },
    { name: 'Acciones', uid: 'actions' },
  ];

  useEffect(() => {
    console.log('Arranque de terms');
    const fetchData = async () => {
      // Obtener todos los términos y condiciones
      const termsResponse = await getTerms();

      if (!termsResponse.error) {
        setTerms(termsResponse.data);
      }
    };
    fetchData();
  }, []);

  const RenderActions = () => (
    <Row justify="center" align="center">
      <Col css={{ d: 'flex' }}>
        <IconButton onClick={() => console.log('View TyC')}>
          <EyeIcon size={20} fill="#979797" height={undefined} width={undefined} />
        </IconButton>
      </Col>
      <Col css={{ d: 'flex' }}>
        <IconButton onClick={() => console.log('Edit TyC')}>
          <EditIcon size={20} fill="#979797" height={undefined} width={undefined} />
        </IconButton>
      </Col>
    </Row>
  );

  const renderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'status':
        return <StyledBadge type={user.status}>{cellValue === 0 ? 'Activo' : 'Inactivo'}</StyledBadge>;
      case 'actions':
        return <RenderActions />;
      case 'author':
        return `${user.firstName} ${user.lastName}`;
      default:
        return cellValue;
    }
  };

  const goToNewVersion = () => {
    router.push('/app/user/Terms/new');
  };

  return (
    <Main>
      <Header>
        {showLastVersion === true && (
          <Text color="black" h5>
            Última Actualización:{' '}
            <Text color="gray" h5>
              {lastVersion}
            </Text>
          </Text>
        )}
        <Button type="submit" color="gradient" onPress={goToNewVersion}>
          Crear Nueva versión
        </Button>
      </Header>
      <Body>
        <Table
          aria-label="Example table with custom cells"
          css={{
            height: 'auto',
            minWidth: '100%',
          }}
          selectionMode="none">
          <Table.Header columns={columns}>
            {column => (
              <Table.Column key={column.uid} align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={terms}>{item => <Table.Row>{columnKey => <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>}</Table.Row>}</Table.Body>
        </Table>
      </Body>
    </Main>
  );
};
