import React, { useState } from 'react';

const PostForm = ({ onPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validação simples de título e conteúdo
    if (title.length === 0 || content.length === 0) {
      alert('Título e conteúdo são obrigatórios.');
      return;
    }

    if (title.length > 50) {
      alert('O título deve ter no máximo 50 caracteres.');
      return;
    }

    const newPost = {
      title,
      content,
      imageUrl,
    };

    // Chama a função onPost passada pelo App.js
    onPost(newPost);

    // Limpa os campos após o envio
    setTitle('');
    setContent('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          required
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="imageUrl">URL da Imagem (opcional):</label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
      </div>
      <button type="submit">Postar</button>
    </form>
  );
};

export default PostForm;