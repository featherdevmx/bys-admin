import styled from 'styled-components';

export const NavComponent = styled.div`
  width: 100%;
  display: flex;
  height: 100px;
  min-width: 320px;
  align-items: center;
  flex-direction: 'row';
  padding: '200px 300px';
  justify-content: flex-start;
  background-color: rgb(38, 41, 43);
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;
