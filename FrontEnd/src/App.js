import React, { useState, useEffect } from 'react';
import './styles/App.css'; // Certifique-se que o caminho do CSS esteja correto
import PostForm from './components/PostForm'; // Certifique-se que o caminho esteja correto
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([]);

  // Função para buscar postagens do backend
  useEffect(() => {
    fetch('http://localhost:5000/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Erro ao carregar postagens:', error));
  }, []);

  // Função para adicionar um novo post
  const addPost = (post) => {
    fetch('http://localhost:5000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((response) => response.json())
      .then((newPost) => setPosts((prevPosts) => [...prevPosts, newPost]))
      .catch((error) => console.error('Erro ao adicionar postagem:', error));
  };

  // Função para deletar um post
  const deletePost = (id) => {
    fetch(`http://localhost:5000/posts/${id}`, {
      method: 'DELETE',
    })
      .then(() => setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)))
      .catch((error) => console.error('Erro ao deletar postagem:', error));
  };

  return (
    <div className="App">
      <h1>Mini Blog</h1>
      <PostForm onPost={addPost} />
      <PostList posts={posts} onDelete={deletePost} />
    </div>
  );
}

export default App;