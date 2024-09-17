import React from 'react';
import '../styles/modal.css'; // Arquivo CSS para estilização da modal

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          Fechar
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;