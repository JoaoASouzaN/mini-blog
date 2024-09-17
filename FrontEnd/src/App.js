import React, { useState } from 'react';

import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Modal from './components/Modal';

import './styles/app.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);

  const handleAddOrUpdatePost = (newPost) => {
    if (editingPost) {
      setPosts(
        posts.map((post) => (post.id === editingPost.id ? newPost : post))
      );
      setEditingPost(null);
    }
    else {
      setPosts([newPost, ...posts]);
    }
    setShowForm(false);
  };

  const handleEditPost = (post) => {
    setEditingPost(post);
    setShowForm(true);
  };


  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <div className="sidebar">
  <h2>Redes Sociais</h2>
  <ul className="social-links">
    <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
    <li><a href="mailto:seuemail@gmail.com">Email</a></li>
    <li><a href="https://wa.me/seunumerowhatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
  </ul>
</div>


      <main className="content">
        <button onClick={() => setShowForm(true)} className="add-post-btn">Adicionar Postagem</button>

        <Modal isOpen={showForm} onClose={() => setShowForm(false)}>
          <PostForm
            onAddPost={handleAddOrUpdatePost}
            editingPost={editingPost}
          />
        </Modal>

        <PostList posts={posts} onEdit={handleEditPost} onDelete={handleDeletePost} />
      </main>
    </div>
  );
}

export default App;