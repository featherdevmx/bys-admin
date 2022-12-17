import styled from 'styled-components'

export const Main = styled.div`
  display: table;
  width: 100%;
  height: 100%;
`

export const Sidebar = styled.div`
  width: 15%;
  display: table-cell;
  vertical-align: top;
  padding: 20px 20px;
  background-color: aliceblue;
`

export const ContentFull = styled.div`
  width: 100%;
  display: table-cell;
  vertical-align: top;
  padding: 40px 40px;
`

export const ContentPartial = styled.div`
  width: 85%;
  display: table-cell;
  vertical-align: top;
  padding: 40px 40px;
`
