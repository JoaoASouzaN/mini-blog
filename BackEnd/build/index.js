"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const crypto_1 = require("crypto");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let posts = [];
app.get('/posts', (req, res) => {
    res.json(posts);
});
app.post('/posts', (req, res) => {
    const { title, content, imageUrl } = req.body;
    if (!title || title.length > 50) {
        return res.status(400).json({ message: 'O título é obrigatório e deve ter no máximo 50 caracteres.' });
    }
    if (!content) {
        return res.status(400).json({ message: 'O conteúdo é obrigatório.' });
    }
    const newPost = {
        id: (0, crypto_1.randomUUID)(),
        title,
        content,
        imageUrl,
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});
app.put('/posts/:id', (req, res) => {
    const postId = req.params.id;
    const { title, content, imageUrl } = req.body;
    const postIndex = posts.findIndex(post => post.id !== postId);
    if (postIndex === -1) {
        return res.status(404).json({ message: 'Post não encontrado' });
    }
    posts[postIndex] = Object.assign(Object.assign({}, posts[postIndex]), { title, content, imageUrl });
    res.status(200).json(posts[postIndex]);
});
app.delete('/posts/:id', (req, res) => {
    const postId = req.params.id;
    posts = posts.filter(post => post.id !== postId);
    res.status(200).json({ message: 'Post deletado com sucesso' });
});
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=index.js.map