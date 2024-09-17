import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

const PostItem = styled.div`
  display: flex;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  overflow: hidden;
`;

const PostImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 8px;
  margin-right: 20px;
`;

const PostContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const PostTitle = styled.h2`
  font-size: 22px;
  color: #333;
  margin: 0;
`;

const PostText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
  line-height: 1.5;
  max-height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${props => props.longText ? '4' : 'none'};
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Modal = styled.div`
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
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 600px;
  position: relative;
`;

const ModalClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const PostList = ({ posts, onEdit, onDelete }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleReadMore = (post) => {
    setSelectedPost(post);
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
  };

  if (posts.length === 0) {
    return <p>Nenhuma postagem disponível.</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <PostImage src={post.imageUrl || logo} alt="Post thumbnail" />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostText longText={post.content.length > 200}>
              {post.content}
            </PostText>
            {post.content.length > 200 && (
              <Button onClick={() => handleReadMore(post)}>Leia mais</Button>
            )}
            <Button onClick={() => onEdit(post)}>Editar</Button>
            <Button onClick={() => onDelete(post.id)}>Excluir</Button>
          </PostContent>
        </PostItem>
      ))}
      
      {selectedPost && (
        <Modal onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <PostTitle>{selectedPost.title}</PostTitle>
            <PostText>{selectedPost.content}</PostText>
            <ModalClose onClick={handleCloseModal}>X</ModalClose>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
};

export default PostList;