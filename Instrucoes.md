# mini-blog
Trabalho acadêmico realizado durante o 4 semestre do curso de analise e desenvolvimento de sistemas com o objetivo de aprender a utilizar o React e TypeScript, desenvolvendo o backend e o frontend de um miniblog.

# 💬 Trabalho 1: Miniblog
## Instruções
  ### Antes de começar, leiam atentamente as instruções! ;
  ## Entrega:
  # ⚠ IMPORTANTE ⚠ 
1) Você deve realizar a entrega pelo moodle. Ao finalizar o projeto disponibilizar um link para o surge e o link para o repositório no github.
2) O repositório deve ter um readme completo, que especifique descrição do projeto e tecnologias utilizadas.
3) A entrega deverá ser feita até 20/09
  - O não cumprimento dos itens acima ocorrerá em nota zerada para o grupo.
  - O readme tem que ser bem escrito e não genérico, além de não contér placeholders criados por IA
  - Verifique o acesso ao link do surge antes da entrega
  - Os commits feitos no projeto serão avaliados, então utilize de nomes significativos
  
## Instruções Gerais
 - Lembre-se de iniciar um projeto em React

Vocês têm que criar componentes separados, da maneira que acharem melhor. Será avaliado equanto a componentização escolhida.
Vale a pena destacar que o tutorial e a documentação oficais do ReactJS são muito boas; então, caso tenha alguma dificuldade muito grande, podem recorrer a este arquivo.

React: Uma biblioteca JavaScript para criar interfaces de usuário. React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.

[React](https://pt-br.reactjs.org/)
## ⚠ Lembre-se de criar o link do Surge! ⚠

## Escopo do Projeto
  Você foi contratado para desenvolver um Miniblog, um aplicativo simples onde os usuários podem criar, visualizar e deletar postagens de texto com a possibilidade de adicionar imagens.
  
### Features

## Lista de Postagens:

- Cada postagem deve conter um título, conteúdo e, opcionalmente, uma imagem (essa imagem deverá ser inserida por URL, ou seja, link direto).
- A imagem da postagem deve ser exibida na lateral esquerda, ocupando toda a altura do container da postagem e cerca de 40% da largura. Os 60% restantes devem ser usados para exibir o título e a descrição logo abaixo.
- Caso a postagem não tenha uma imagem, uma imagem padrão deve ser exibida no lugar.
- O conteúdo das postagens deve ser limitado a um determinado número de caracteres visíveis, com um botão "Leia mais" para visualizar o texto completo em uma modal.

## Criação de Postagem:
- Abaixo da lista de postagens, deve haver um formulário com três campos de input: um para o título da postagem, outro para o conteúdo, e um terceiro opcional para o link da imagem.
- Um botão de "Postar" deve ser incluído para adicionar a nova postagem à lista.
- O título da postagem deve ser limitado a um máximo de 50 caracteres.
- Após postar, os campos de input devem ser resetados.
  
## Visualização de Postagem:
- Caso o conteúdo da postagem exceda um determinado número de caracteres, um botão "Leia mais" deve ser exibido. 
- Ao clicar no botão, o conteúdo completo da postagem deve ser exibido em uma modal.

## Deleção de Postagem:
- Cada postagem deve ter um botão "Deletar" associado a ela. Ao clicar neste botão, a postagem deve ser removida da lista.

## Estilização e Layout:
- Utilize styled-components para criar um layout agradável e responsivo.
- A imagem deve ser exibida na lateral esquerda do post, ocupando 40% da largura e toda a altura do container. O título e a descrição devem ser exibidos na parte direita do post, ocupando os 60% restantes do espaço.
- Caso a postagem não possua uma imagem, utilize uma imagem padrão.
- A modal que exibe o conteúdo completo da postagem deve ter uma altura fixa e permitir rolagem interna.
 
## Requisitos Adicionais
### Componentização e Organização do Código:
- O projeto deve ser bem componentizado. Divida a interface em componentes reutilizáveis e organizados, como Header , Banner , PostItem , PostList , PostForm , entre outros.
- Mantenha a lógica de manipulação de estado e efeitos colaterais encapsulada nos componentes principais, evitando misturar lógica de negócios e renderização.
- O código deve ser limpo e seguir as boas práticas de desenvolvimento, como nomes de variáveis e funções claros, comentários explicativos onde necessário, e uma estrutura de arquivos organizada.

# Responsividade:
- O layout deve ser responsivo, adaptando-se bem a diferentes tamanhos de telas desktop (não precisa 
se preocupar com dispositivos móveis).

## Validação de Inputs:
- Implemente validações adequadas nos campos de input. Por exemplo, o campo de título não deve permitir mais de 50 caracteres, e o campo de link de imagem deve verificar se o valor inserido é uma URL válida.

## Faça com que tanto o botão de enviar, como o botão "enter" crie o post.