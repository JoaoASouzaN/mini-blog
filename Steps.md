# Step by Step

- Seguindo o ensinado pelo Prof. Flavio Motta, defini o GitBash como o terminal padrão do VSCode, para isso segui os passos:
    Ctrl+, -> para entrar nas configurações do VSCode.
    Na parte Features -> Terminal -> Clicar em Edit in Settings.json
    Adicione a seguinte linha ao codigo presente:
    
    ``` "terminal.integrated.defaultProfile.windows": "Git Bash" ```

Ao salvar, uma pasta ".code" vai ser criada e o arquivo dentro será responsavel por definir o GitBash como principal. Para tornar isso o padrao para projetos futuros, podesse colocar essa linha de codigo no arquivo de configuração original do VSCode que está mais ou menos nesse caminho:

    ``` C:\Users\<SeuUsuário>\AppData\Roaming\Code\User\settings.json ```

- Apos isso, iniciei criando duas pastas para o projeto do mini blog, o qual vou dividir em duas pastas principais FrontEnd e BackEnd.

Dentro da pasta BackEnd,  utilizando o npm init -y vamos criar o projeto,  executando o comando npm install typescript, npm i typescript, para baixar o typescript. Criando um index.ts para começar as configurações e testes. E executa lo usando tsc index.ts e node index.js. Caso não de certo, execute um npx ts-node index.ts. Os comando também podem ajudar ts-node @types/node @types express --save-dev, de  modo a fazer as instalação de algumas bibliotecas.

Consecutivamente o comando npm install express cors, instalara essas bibliotecas que seram uteis. Utilizei também um codigo base para fazer a configuração do backend e coloca-lo para observar a porta 5000 e em seguida executar o comando  npx tsc --init, para criar o tsconfig.json  e o npx ts-node index.ts para rodar, dentro do tsconfig.json iremos alterar ou descomentar as seguintes linhas do codigo 14, 28, 29, 55, 58, 59, 85.

# Comandos:

## BackEnd

    1- npm install typescript ts-node @types/node @types/express --save-dev
    2- npm install express cors
    3- npx tsc --init
    4- Codigo base para a configuração do BackEnd:

```     
    import express, { Request, Response } from 'express';
    import cors from 'cors';

    const app = express();
    app.use(cors());
    app.use(express.json());

    // Array para armazenar os posts temporariamente
    interface Post {
        id: number;
        title: string;
        content: string;
    }

    let posts: Post[] = [];

    // Rota para listar todos os posts
    app.get('/posts', (req: Request, res: Response) => {
        res.json(posts);
    });

    // Rota para criar um novo post
    app.post('/posts', (req: Request, res: Response) => {
    const newPost: Post = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content,
    };
    posts.push(newPost);
        res.status(201).json(newPost);
    });

    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });

```
   5- Codigo para alteração no package,json:
```
    "scripts": {
        "start": "ts-node index.ts",
        "build": "tsc"
    }
```
   6- Alteracao tsconfig.json
```
    14-  "target": "es6", 
    28-  "module": "commonjs",
    29-  "rootDir": "./src",
    55-  "sourceMap": true,
    58-  "outDir": "./build",
    59-  "removeComments": true,
    85-  "noImplicitAny": true,
```

## FrontEnd

Para dar inicio ao FrontEnd do projeto, usei o comando cd ../FrontEnd , já nessa pasta executei o comando npx create-react-app mini-blog, onde mini-blog é o nome do projeto e pode ser trocado para qualquer outro nome de projeto.

    1- npx create-react-app mini-blog
        - Cria um projeto react padrão algumas modificações podem ser feitas no resultado
        - Criar uma pasta api, components e styles dentro da src para conseguir organizar o projeto
        - Mover os arquivos .css para dentro de styles
        - Apagar o App.test, logo.svg, reportWebVitals e setupTests
        - No App.js, deve-se retirar a importação da logo e atualizar o import do App.css

    2- npm install --global surge
        - Instala o Surge para o Deploy do projeto, permitindo a avalização do professor


## Geral

- Ao utilizar um terminal para cada "parte" do projeto podemos iniciar o BackEnd com o comando npm run start, basta estar na pasta src ou na pasta onde o seu index.ts estiver, tendo em vista que este é o arquivo responsavel por toda a configuração e onde de fato sera possivel iniciar o servidor. É esperado que uma mensagem seja exibida no terminal, caso tenha sido configurada.

- Já no FrontEnd, iremos até a pasta src e tambem iremos executar o npm run start, para iniciar o FrontEnd. É esperado a abertura de uma nova guia com o conteudo do FrontEnd

## Erro:

- Por algum motivo, não estou conseguindo fazer uma boa integração entre o front e o back, mesmo tendo mretornos positivos no terminal. No entanto, os campos a serem preenchidos no FrontEnd, estão funcionando, mas ao clicar no botão, os campos são limpos dando a entender que foi publicado, mas nada acontece. Acredito, devido ao fato de na primeira vez que fiz a publicação, tinha uma mensagem "Nenhuma postagem disponível." referente a um feed vazio, a qual posteriormente não vem aparecendo. O que me leva a entender que algo está ocorrendo, mas não está sendo renderizado.