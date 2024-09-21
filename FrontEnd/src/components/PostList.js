import React, { useState } from 'react';
import styled from 'styled-components';

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 800px;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;


const PostImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  margin-top: 10px;
`;

const PostContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const PostTitle = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  margin-bottom: 10px;
`;

const PostText = styled.p`
  font-size: 16px;
  color: #666;
  margin: 10px 0;
  line-height: 1.5;
  max-height: ${({ isFullContent }) => (isFullContent ? 'none' : '100px')};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ isFullContent }) => (isFullContent ? 'none' : '3')};
`;

const ReadMoreButton = styled.button`
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
  align-items: flex-start;
  padding-top: 50px;
  overflow-y: auto;
  z-index: 1000;
  max-width: 600px;
  max-height: 90vh;
  flex-direction: column;
`;

const ModalTitle = styled.h2`
  margin: 0;
`;

const ModalText = styled.p`
  margin: 10px 0;
`;

const PostList = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleReadMore = (post) => {
    setCurrentPost(post);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setCurrentPost(null);
  };

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <PostImage 
            src={post.image || `https://picsum.photos/seed/${post.id}/600/400`} 
            alt={post.title}
          />
          <PostContent>
            <PostTitle>{post.title}</PostTitle>
            <PostText>{post.description}</PostText>
            {post.description.length > 200 && (
              <ReadMoreButton onClick={() => handleReadMore(post)}>
                Leia mais
              </ReadMoreButton>
            )}
          </PostContent>
        </PostItem>
      ))}

      {isModalOpen && currentPost && (
        <Modal onClose={handleCloseModal}>
          <ModalTitle>{currentPost.title}</ModalTitle>
          <ModalText>{currentPost.description}</ModalText>
        </Modal>
      )}

    </>
  );
};

export default PostList;