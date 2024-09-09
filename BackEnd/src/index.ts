import express, { Request, Response } from 'express';
import cors from 'cors';
import { randomUUID } from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

// Array para armazenar os posts temporariamente
interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
}

let posts: Post[] = [];

// Rota para listar todos os posts
app.get('/posts', (req: Request, res: Response) => {
  res.json(posts);
});

// Rota para criar um novo post
app.post('/posts', (req: Request, res: Response) => {
  const { title, content, imageUrl } = req.body;

  // Validações
  if (!title || title.length > 50) {
    return res.status(400).json({ message: 'O título é obrigatório e deve ter no máximo 50 caracteres.' });
  }
  if (!content) {
    return res.status(400).json({ message: 'O conteúdo é obrigatório.' });
  }

  const newPost: Post = {
    id: randomUUID(),  // Gera um ID único e aleatório
    title,
    content,
    imageUrl,  // Adiciona a URL da imagem, se houver
  };

  posts.push(newPost);
  res.status(201).json(newPost);
});

// Rota para editar uma postagem
app.put('/posts/:id', (req: Request, res: Response) => {
  const postId = req.params.id;
  const { title, content, imageUrl } = req.body;

  const postIndex = posts.findIndex(post => post.id !== postId);
  if (postIndex === -1) {
    return res.status(404).json({ message: 'Post não encontrado' });
  }

  // Atualiza o post
  posts[postIndex] = { ...posts[postIndex], title, content, imageUrl };
  res.status(200).json(posts[postIndex]);
});

// Rota para deletar um post pelo id
app.delete('/posts/:id', (req: Request, res: Response) => {
  const postId = req.params.id;
  posts = posts.filter(post => post.id !== postId);
  res.status(200).json({ message: 'Post deletado com sucesso' });
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});