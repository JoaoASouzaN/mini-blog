import React from 'react';
import logo from '../img/logo.svg'; // Certifique-se de ajustar o caminho para onde o logo do React está

const PostList = ({ posts, onDelete }) => {
    // Verifica se há postagens
    if (posts.length === 0) {
      return <p>Nenhuma postagem disponível.</p>;
    }
return (
    <div>
        {posts.map((post) => {
            // Definindo uma variavel para verificar o tamanho da descricao
            let displayedContent;
            if (post.content.length > 100) {
                displayedContent = `${post.content.substring(0, 100)}...`;
            }
            else {
                displayedContent = post.content;
            }

            <div key={post.id} style={{ display: 'flex', marginBottom: '20px' }}>
                <img
                    src={post.imageUrl || logo}  // Usa a imagem do React como padrão
                    alt="Post thumbnail"
                    style={{ width: '40%', height: 'auto' }}
                />
            <div style={{ width: '60%', paddingLeft: '10px' }}>
                <h2>{post.title}</h2>
                <p>{displayedContent}</p>
                {post.content.length > 100 && <button>Leia mais</button>}
                <button onClick={() => onDelete(post.id)}>Deletar</button>
            </div>
        </div>
    })}
    </div>
    );
};

export default PostList;