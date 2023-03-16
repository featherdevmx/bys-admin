import styled from 'styled-components';

export const ContainerBurger = styled.div`
  background-color: transparent;
`;

export const StyledBurger = styled.div<{ open?: boolean }>`
  top: 15px;
  left: 20px;
  right: 20px;
  margin-left: 20px;
  z-index: 20;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? '#FFF' : '#FFF')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    margin-bottom: 5px;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;
