/* eslint-disable @typescript-eslint/no-explicit-any */
// ToDO
import React, {useState, FC} from 'react'
import {Button, Text, Table, Row, Col} from '@nextui-org/react'
import {
  Header,
  Body,
  Main,
  StyledBadge,
  IconButton,
} from './TermsContainer.styled'
import {EyeIcon} from '../../components/ui/EyeIcon'
import {EditIcon} from '../../components/ui/EditIcon'

export const TermsContainers: FC = () => {
  const [lastVersion] = useState<string>('12-12-2022 20:09:23')

  const columns = [
    {name: 'Fecha', uid: 'created_at'},
    {name: 'Creado por', uid: 'author'},
    {name: 'Status', uid: 'status'},
    {name: 'Acciones', uid: 'actions'},
  ]

  const terms = [
    {
      id: 1,
      created_at: '2022-12-20 19:56:03',
      author: 'Alberto Luebbert M.',
      status: 'active',
    },
    {
      id: 2,
      created_at: '2022-11-20 19:56:03',
      author: 'Efrain Antonio R.',
      status: 'inactive',
    },
    {
      id: 3,
      created_at: '2022-10-20 19:56:03',
      author: 'Alberto Luebbert M.',
      status: 'inactive',
    },
  ]

  const RenderActions = () => (
    <Row justify="center" align="center">
      <Col css={{d: 'flex'}}>
        <IconButton onClick={() => console.log('View TyC')}>
          <EyeIcon
            size={20}
            fill="#979797"
            height={undefined}
            width={undefined}
          />
        </IconButton>
      </Col>
      <Col css={{d: 'flex'}}>
        <IconButton onClick={() => console.log('Edit TyC')}>
          <EditIcon
            size={20}
            fill="#979797"
            height={undefined}
            width={undefined}
          />
        </IconButton>
      </Col>
    </Row>
  )

  const renderCell = (user: any, columnKey: any) => {
    const cellValue = user[columnKey]
    switch (columnKey) {
      case 'status':
        return <StyledBadge type={user.status}>{cellValue}</StyledBadge>
      case 'actions':
        return <RenderActions />
      default:
        return cellValue
    }
  }

  return (
    <Main>
      <Header>
        <Text color="black" h5>
          Última Actualización:{' '}
          <Text color="gray" h5>
            {lastVersion}
          </Text>
        </Text>
        <Button type="submit" color="gradient">
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
              <Table.Column
                key={column.uid}
                align={column.uid === 'actions' ? 'center' : 'start'}>
                {column.name}
              </Table.Column>
            )}
          </Table.Header>
          <Table.Body items={terms}>
            {item => (
              <Table.Row>
                {columnKey => (
                  <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                )}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
      </Body>
    </Main>
  )
}
