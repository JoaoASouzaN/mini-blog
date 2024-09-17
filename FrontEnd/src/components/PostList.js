import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';

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