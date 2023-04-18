/* eslint-disable no-unused-expressions */
import React from 'react';
import { ModalProps } from './types';

import { ModalOverlay, ModalContent, ModalCloseButton } from './Modal.styled';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  const closeModal = () => {
    onClose && onClose();
  };

  return (
    <>
      {isOpen && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>X</ModalCloseButton>
            {children}
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
