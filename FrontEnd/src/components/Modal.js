import React, { useState } from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  overflow-y: auto;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 95%;
    padding: 15px;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const Description = styled.div`
  max-width: 100%;
  max-height: ${({ expanded }) => (expanded ? 'none' : '100px')};
  overflow: hidden;
  transition: max-height 0.3s ease;
  word-wrap: break-word; /* Adiciona quebra de palavras longas */
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
  margin-top: 10px;
`;

const Modal = ({ isOpen, onClose, children }) => {
  const [expanded, setExpanded] = useState(false);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalCloseButton onClick={onClose}>X</ModalCloseButton>
        <Description expanded={expanded}>{children}</Description>
        <ReadMoreButton onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Leia menos' : 'Leia mais'}
        </ReadMoreButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;