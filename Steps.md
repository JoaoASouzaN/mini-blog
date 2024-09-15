# Step by Step

- Seguindo o ensinado pelo Prof. Flavio Motta, defini o GitBash como o terminal padrão do VSCode, para isso segui os passos:
    Ctrl+, -> para entrar nas configurações do VSCode.
    Na parte Features -> Terminal -> Clicar em Edit in Settings.json
    Adicione a seguinte linha ao codigo presente:
    
   ```bash
     "terminal.integrated.defaultProfile.windows": "Git Bash"
   ```

## ⚠ Dica!
Aqui está uma lista dos comandos Git basicos, junto de suas explicações e exemplos, que podem nos ajudar a colaborar em projetos:

### 1. **`git clone`** – Clonar um repositório
   **Uso:**  
   ```bash
   git clone <url-do-repositório>
   ```
   **Explicação:**  
   Esse comando faz uma cópia completa do repositório remoto (por exemplo, do GitHub) para o seu computador local. Assim, você terá acesso a todo o histórico e aos arquivos do projeto. O URL do repositório pode ser encontrado no GitHub ou em outra plataforma de hospedagem de código.

### 2. **`git branch`** – Listar branches ou criar um novo branch
   **Uso:**  
   - Para listar branches:
     ```bash
     git branch
     ```
   - Para criar uma nova branch:
     ```bash
     git branch <nome-do-branch>
     ```
   **Explicação:**  
   Os branches permitem trabalhar em uma nova funcionalidade ou correção de bug sem interferir no código principal. Use esse comando para criar um novo branch onde você pode desenvolver suas mudanças de forma isolada.

### 3. **`git checkout` ou `git switch`** – Mudar de branch
   **Uso:**
   - Para mudar de branch:
     ```bash
     git checkout <nome-do-branch>
     ```
   - Comando moderno:
     ```bash
     git switch <nome-do-branch>
     ```
   **Explicação:**  
   Esses comandos permitem alternar entre os branches. Se você criou um branch novo, você deve "entrar" nele para começar a trabalhar nas suas alterações.

### 4. **`git pull`** – Baixar as alterações mais recentes do repositório remoto
   **Uso:**  
   ```bash
   git pull origin <nome-do-branch>
   ```
   **Explicação:**  
   Este comando busca as alterações mais recentes no repositório remoto e as integra ao seu branch atual. Sempre use antes de começar a trabalhar para garantir que você tenha a versão mais atualizada do código.

### 5. **`git add`** – Adicionar arquivos modificados para serem commitados
   **Uso:**  
   ```bash
   git add <nome-do-arquivo>
   ```
   Ou, para adicionar todos os arquivos modificados:
   ```bash
   git add .
   ```
   **Explicação:**  
   Antes de enviar suas mudanças ao repositório, você precisa "adicionar" os arquivos que modificou. Este comando prepara seus arquivos para serem commitados.

### 6. **`git commit`** – Confirmar as alterações no repositório local
   **Uso:**  
   ```bash
   git commit -m "Descrição clara das mudanças"
   ```
   **Explicação:**  
   Após adicionar os arquivos com `git add`, use `git commit` para salvar as alterações no histórico do repositório local. Sempre escreva uma mensagem de commit que descreva claramente o que foi alterado.

### 7. **`git push`** – Enviar as mudanças para o repositório remoto
   **Uso:**  
   ```bash
   git push origin <nome-do-branch>
   ```
   **Explicação:**  
   Depois de fazer o commit das suas mudanças localmente, use `git push` para enviá-las ao repositório remoto, como no GitHub, para que os outros membros do projeto possam ver e usar suas alterações.

### 8. **`git merge`** – Mesclar as mudanças de um branch no branch atual
   **Uso:**  
   ```bash
   git merge <nome-do-branch>
   ```
   **Explicação:**  
   Se você trabalhou em um branch separado e agora está pronto para trazer suas alterações de volta para o branch principal (geralmente o `main` ou `master`), use `git merge`. Isso integra as mudanças de outro branch no seu branch atual.

### 9. **`git fetch`** – Baixar as alterações mais recentes sem aplicar
   **Uso:**  
   ```bash
   git fetch
   ```
   **Explicação:**  
   Este comando busca as atualizações mais recentes do repositório remoto, mas não as aplica no seu código. Você pode usar isso para ver o que mudou antes de mesclar ou aplicar as mudanças localmente.

### 10. **`git status`** – Verificar o estado atual do repositório
   **Uso:**  
   ```bash
   git status
   ```
   **Explicação:**  
   Esse comando mostra quais arquivos foram modificados, quais estão prontos para commit, e se há arquivos não rastreados. É uma ótima maneira de verificar o que está acontecendo no seu repositório.

---

### **Exemplo de fluxo básico de colaboração:**

Aqui está um exemplo prático de como você pode usar esses comandos:

1. Clonar o projeto:
   ```bash
   git clone https://github.com/exemplo/projeto.git
   ```

2. Criar um novo branch para uma nova funcionalidade:
   ```bash
   git branch nova-funcionalidade
   git switch nova-funcionalidade
   ```

3. Fazer alterações no código.

4. Adicionar e commitar as alterações:
   ```bash
   git add .
   git commit -m "Adicionando nova funcionalidade"
   ```

5. Buscar alterações mais recentes do repositório remoto e mesclar:
   ```bash
   git pull origin main
   ```

6. Resolver possíveis conflitos e confirmar a mesclagem.

7. Enviar as alterações para o repositório remoto:
   ```bash
   git push origin nova-funcionalidade
   ```

Seguindo esse fluxo e utilizando os comandos corretamente, você conseguirá colaborar com outros desenvolvedores em um projeto sem problemas.

Ao salvar, uma pasta ".code" vai ser criada e o arquivo dentro será responsavel por definir o GitBash como principal. Para tornar isso o padrao para projetos futuros, podesse colocar essa linha de codigo no arquivo de configuração original do VSCode que está mais ou menos nesse caminho:
   ```bash
      C:\Users\<SeuUsuário>\AppData\Roaming\Code\User\settings.json
   ```

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