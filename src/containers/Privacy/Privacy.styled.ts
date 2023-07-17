import styled from 'styled-components';
import { styled as styledNU } from '@nextui-org/react';

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  align-content: flex-start;
  justify-content: flex-start;
  margin-bottom: 15px;
`;

export const Body = styled.div`
  margin-top: 15px;
`;

export const StyledBadge = styledNU('span', {
  display: 'inline-block',
  textTransform: 'uppercase',
  padding: '$2 $3',
  margin: '0 2px',
  fontSize: '10px',
  fontWeight: '$bold',
  borderRadius: '14px',
  letterSpacing: '0.6px',
  lineHeight: 1,
  boxShadow: '1px 2px 5px 0px rgb(0 0 0 / 5%)',
  alignItems: 'center',
  alignSelf: 'center',
  color: '$white',
  variants: {
    type: {
      0: {
        bg: '$successLight',
        color: '$successLightContrast',
      },
      1: {
        bg: '$errorLight',
        color: '$errorLightContrast',
      },
      vacation: {
        bg: '$warningLight',
        color: '$warningLightContrast',
      },
    },
  },
  defaultVariants: {
    type: 'active',
  },
});

export const IconButton = styledNU('button', {
  dflex: 'center',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  margin: '0',
  bg: 'transparent',
  transition: '$default',
  '&:hover': {
    opacity: '0.8',
  },
  '&:active': {
    opacity: '0.6',
  },
});

export const NavActions = styled.div`
  gap: 30px;
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 30px;
  min-width: 320px;
  align-items: center;
  flex-direction: 'row';
  justify-content: center;
`;
