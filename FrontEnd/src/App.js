import React, { useState } from 'react';

import PostForm from './components/PostForm';
import Modal from './components/Modal';

import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f0f2f5;

  @media (max-width: 768px) {
    flex-direction: column; // Em telas menores, a barra lateral e o conteúdo principal ficarão em coluna
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #f0f0f0;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h2`
  font-size: 20px;
  color: #007bff;
  margin-bottom: 20px;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarListItem = styled.li`
  margin: 10px 0;
`;

const SidebarLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #007bff;
    color: white;
  }

  svg {
    margin-right: 10px;
    font-size: 24px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  width: calc(100% - 270px);
  max-width: 1200px; // Define a largura máxima do contêiner
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    width: 100%;
    padding: 10px;
  }
`;

const AddPostButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  display: block; // Garante que o botão ocupe toda a largura disponível
  margin-left: auto; // Centraliza o botão horizontalmente
  margin-right: auto; // Centraliza o botão horizontalmente

  &:hover {
    background-color: #0056b3;
  }
`;

const PostItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 40%;
  object-fit: cover;
`;

const PostContent = styled.div`
  width: 60%;
  padding: 20px;

  h2 {
    font-size: 22px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
    margin-top: 10px;
  }

  button {
    margin-top: 10px;
    background-color: #007bff;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

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
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
`;


function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [currentPost, setCurrentPost] = useState(null);

  const handleAddPost = (newPost) => {
    newPost.id = Date.now(); // Gera ID único para o novo post
    setPosts([newPost, ...posts]);
    setShowForm(false);
  };

  const handleUpdatePost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
    setEditingPost(null);
    setShowForm(false);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleReadMore = (post) => {
    setCurrentPost(post);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPost(null);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <Sidebar>
        <SidebarTitle>Redes Sociais</SidebarTitle>
        <SidebarList>
          <SidebarListItem>
            <SidebarLink href="https://www.linkedin.com/in/joaoasouzan" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              LinkedIn
            </SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="https://github.com/JoaoASouzaN" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              GitHub
            </SidebarLink>
          </SidebarListItem>
          <SidebarListItem>
            <SidebarLink href="mailto:joaoif.eletro@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
              Email
            </SidebarLink>
          </SidebarListItem>
        </SidebarList>
      </Sidebar>
      <Content>
        <AddPostButton onClick={() => setShowForm(true)}>
          Adicionar Postagem
        </AddPostButton>
        {posts.map((post, index) => (
          <PostItem key={post.id || index}>
            <PostImage 
              src={post.image && post.image.trim() !== "" ? post.image : `https://picsum.photos/seed/${post.id}/600/400`} 
              alt={post.title} 
            />
            <PostContent>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <button onClick={() => handleEditPost(post)}>Editar</button>
              <button onClick={() => handleDeletePost(post.id)}>Excluir</button>
              <button onClick={() => handleReadMore(post)}>Leia mais</button>
            </PostContent>
          </PostItem>
        ))}
      </Content>
      {showForm && (
        <ModalOverlay>
          <ModalContent>
            <PostForm
              onAddPost={handleAddPost}
              onUpdatePost={handleUpdatePost}
              onClose={() => setShowForm(false)}
              editingPost={editingPost}
              setShowForm={setShowForm}
            />
          </ModalContent>
        </ModalOverlay>
      )}
      {showModal && currentPost && (
        <Modal isOpen={showModal} onClose={handleCloseModal}>
          <h2>{currentPost.title}</h2>
          <p>{currentPost.description}</p>
        </Modal>
      )}
    </AppContainer>
  );
}

export default App;