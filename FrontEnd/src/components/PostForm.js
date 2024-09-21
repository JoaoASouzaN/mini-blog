import React, { useState, useEffect } from 'react';
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
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 95%; // Ajustar a largura do modal em dispositivos menores
    padding: 20px; // Reduzir o padding em dispositivos menores
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 20px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #000;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  resize: vertical;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;

  &:hover {
    background-color: #0056b3;
  }
`;

const PostForm = ({ onAddPost, onUpdatePost, onClose, editingPost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setDescription(editingPost.description);
      setImage(editingPost.image);
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      if (editingPost) {
        onUpdatePost({ ...editingPost, title, description, image });
      } else {
        onAddPost({ title, description, image });
      }
      setTitle('');
      setDescription('');
      setImage('');
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>{editingPost ? 'Editar Postagem' : 'Criar Nova Postagem'}</h2>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="title">Título</Label>
          <Input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            maxLength="50"
            placeholder="Digite o título da postagem"
            required
          />
          <Label htmlFor="description">Descrição</Label>
          <TextArea
            id="description"
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Digite a descrição da postagem"
            required
          />
          <Label htmlFor="image">URL da Imagem</Label>
          <Input
            id="image"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Digite a URL da imagem (opcional)"
          />
          <SubmitButton type="submit">{editingPost ? 'Salvar Alterações' : 'Adicionar Postagem'}</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PostForm;