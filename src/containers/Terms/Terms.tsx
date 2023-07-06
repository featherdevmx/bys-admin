/* eslint-disable consistent-return */
/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, FC } from 'react';
import { Button, Text, Table, Row, Col, Loading } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { isValid, format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { Modal } from '@/components/ui/Modal';
import { EyeIcon } from '@/components/ui/EyeIcon';
import { EditIcon } from '@/components/ui/EditIcon';
import { DeleteIcon } from '@/components/ui/DeleteIcon';
import { Button as ButtonNav } from '@/components/ui/Button/Button';
import { getTerms, deleteTerm } from '@/api/terms-service';
import { Header, Body, Main, StyledBadge, IconButton, NavActions } from './Terms.styled';

import { TermsUserItem } from './types';

const IMG_ADVERTICE = '/advertencia.png';

export const TermsContainer: FC = () => {
  const router = useRouter();
  const [terms, setTerms] = useState([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [lastVersion, setLastVersion] = useState<string>('');
  const [showLastVersion, setShowLastVersion] = useState<boolean>(false);
  const [contentDelete, setContentDelete] = useState<string>('');
  const [idDelete, setIdDelete] = useState<string>('');

  const columns = [
    { name: 'Fecha', uid: 'created_at' },
    { name: 'Nombre', uid: 'name' },
    { name: 'Creado por', uid: 'author' },
    { name: 'Status', uid: 'status' },
    { name: 'Acciones', uid: 'actions' },
  ];

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const fetchTerms = async () => {
    // Obtener todos los términos y condiciones
    const termsResponse = await getTerms();

    if (!termsResponse.error) {
      setTerms(termsResponse.data);
      setLoading(false);
      const date = new Date(termsResponse.data[0].created_at);
      if (isValid(date)) {
        const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
        setLastVersion(formattedDate);
      }
      setShowLastVersion(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchTerms();
  }, []);

  const handleAction = (id: string, action: string, name: string) => {
    if (action !== 'delete') {
      let routeTo;

      switch (action) {
        case 'edit':
          routeTo = '/user/Terms/edit/';
          break;
        case 'view':
          routeTo = '/user/Terms/view/';
          break;
        default:
          routeTo = '/user/Terms/view/';
          break;
      }

      router.push({ pathname: routeTo, query: { id } }, routeTo);
    } else {
      setIsOpen(true);
      setContentDelete(name);
      setIdDelete(id);
    }
  };

  const RenderActions = (user: TermsUserItem): any => {
    const { id, name } = user.info;

    return (
      <Row justify="center" align="center">
        <Col css={{ d: 'flex' }}>
          <IconButton onClick={() => handleAction(id, 'view', name)}>
            <EyeIcon fill="#979797" height={20} width={20} />
          </IconButton>
        </Col>
        <Col css={{ d: 'flex' }}>
          <IconButton onClick={() => handleAction(id, 'edit', name)}>
            <EditIcon fill="#979797" height={20} width={20} />
          </IconButton>
        </Col>
        <Col css={{ d: 'flex' }}>
          <IconButton onClick={() => handleAction(id, 'delete', name)}>
            <DeleteIcon fill="#979797" height={20} width={20} />
          </IconButton>
        </Col>
      </Row>
    );
  };

  const RenderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey];
    switch (columnKey) {
      case 'status':
        return <StyledBadge type={user.status}>{cellValue === 0 ? 'Activo' : 'Inactivo'}</StyledBadge>;
      case 'actions':
        return <RenderActions info={user} />;
      case 'author':
        return `${user.firstName} ${user.lastName}`;
      case 'created_at':
        const date = new Date(user.created_at);
        if (isValid(date)) {
          const formattedDate = format(date, 'yyyy-MM-dd HH:mm:ss');
          return formattedDate;
        }
        break;
      default:
        return cellValue;
    }
  };

  const goToNewVersion = () => {
    router.push('/user/Terms/new');
  };

  const handleDelete = async () => {
    setLoading(true);

    // Obtener todos los Términos y Condiciones
    const privacyDelete = await deleteTerm(idDelete);

    if (!privacyDelete.error) {
      setIsOpen(false);
      setLoading(false);
      fetchTerms();
      toast.success('¡Términos y Condiciones fue eliminado exitosamente!', { position: toast.POSITION.TOP_CENTER });
    }
  };

  const handleDeleteCancel = () => {
    setIsOpen(false);
  };

  return (
    <>
      {loading === true && <Loading />}
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
        <ToastContainer />
        {isOpen && (
          <Modal isOpen={isOpen} onClose={handleCloseModal}>
            <NavActions>
              <Image src={IMG_ADVERTICE} priority={true} alt="ByS" width={50} height={50} />
            </NavActions>
            <h4>¿Está seguro que desea eliminar este Término y Condición?</h4>
            <h3>{contentDelete}</h3>
            <NavActions>
              <ButtonNav title={'Eliminar'} action={() => handleDelete()} btnType={'principal'} />
              <ButtonNav title={'Cancelar'} action={() => handleDeleteCancel()} btnType={'principal'} />
            </NavActions>
          </Modal>
        )}
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
            <Table.Body items={terms}>{item => <Table.Row>{columnKey => <Table.Cell>{RenderCell(item, columnKey)}</Table.Cell>}</Table.Row>}</Table.Body>
          </Table>
        </Body>
      </Main>
    </>
  );
};
