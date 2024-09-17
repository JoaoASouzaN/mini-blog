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