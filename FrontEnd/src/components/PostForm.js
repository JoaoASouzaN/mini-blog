import React, { useState, useEffect } from 'react';
import '../styles/postForm.css';

const PostForm = ({ onAddPost, editingPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
      setImageUrl(editingPost.imageUrl || '');
    } else {
      setTitle('');
      setContent('');
      setImageUrl('');
    }
  }, [editingPost]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: editingPost ? editingPost.id : Date.now(),
      title,
      content,
      imageUrl,
    };

    onAddPost(newPost);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        maxLength={50}
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Conteúdo"
        required
      />
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        placeholder="URL da Imagem (opcional)"
      />
      <button type="submit">{editingPost ? 'Salvar' : 'Postar'}</button>
    </form>
  );
};

export default PostForm;