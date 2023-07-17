import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const GoBackButton = styled(ArrowBackIcon)`
  &.MuiSvgIcon-root {
    width: 80px;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const NavBar = styled.div`
  top: 0;
  width: calc(100%);
  background: #fecb18;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  //border: 1.5px solid #e0e3e5;
  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #1a2732;
  z-index: 200;
`;
