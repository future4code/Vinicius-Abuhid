<p align="center">
<img src="./assets/Labenu.png" alt="slogan Labenu" width="200px">
</p>

<p align="center">Curso Web Full Stack - 13/01/2020 a 17/07/20020</p>


<h1 align="center">
Projeto semanas n°16: Lista de Tarefas
</h1>

<p align="center">Depois de ter feito o front, chegou a hora de fazer o backend de uma lista de tarefas, onde o usuário pode adicionar uma tarefa, marcá-la como sendo executada, e marcá-la como feita.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas :wrench:
Principais ferramentas utilizadas na construção da aplicação

- **Node Js** — Plataforma para construir aplicações web escaláveis
- **Typescript** - TypeScript é um superconjunto de JavaScript que adiciona linguagem a linguagem
- **Express** - Framework para Node.js que permite à aplicação lidar com multiplas e diferentes requisições http à uma URL específica
- **Knex** - Construtor de SQL querys para Node.js, que dentre outras funciolnalidades, propicia a criação de pool de conexao e propagação

## Escopo do projeto :pushpin:
Olá, tudo bem? O exercício de hoje vai lidar com um tema que vocês já estão acostumados. Já pedimos para vocês fazerem só o Front, já pedimos para fazerem o Front integrado, já até pedimos um projeto usando somente Node para isso: uma To Do List. Dessa vez, vai ser um pouquinho diferente, vocês vão fazer o backend dela.

Para começar a explicar o nosso sistema vamos falar sobre os usuários. O cadastro deles deve ser simples, pedindo: um nome, um apelido (nickname) e um email

As tarefas são definidas por: título, descrição, data limite até a qual precisa ser feita, status e usuário pedinte (o que criou a tarefa). Existem os usuários responsáveis por uma tarefa, ou seja, aqueles que terão que executa-las. Mais de um usuário pode ser diretamente responsável de mesma tarefa. Os status das tarefas são 3: *to do* ("a fazer"), *doing* ("fazendo") e *done* ("feita").

Dados esses requisitos do sistema, você deve modelar todo o banco de dados (usando MySQL) e implementar o backend. Leia atentamente a lista de endpoints mostrada abaixo antes de começar a modelagem do banco, aí estão descritas todas as informações necessárias para criá-los.

#### Endpoints Mínimos ####

1. Criar usuário

    **Método:** PUT
    **Path:** `/user`

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev",
    	"email": "astro@dev.com"
    }
    ```

2. Pegar usuário pelo id

    **Método:** GET
    **Path:** `/user/:id`

    **Path Param**: é o id do usuário

    **Body de Resposta:**

    ```json
    {
    	"id": "001",
    	"nickname": "astrodev"
    }
    ```

    **Observações**

3. Editar usuário

    **Método:** POST
    **Path:** `/user/edit`

    **Body:**

    ```json
    {
    	"name": "Astro Dev",
    	"nickname": "astrodev"
    }
    ```

4. Criar tarefa

    **Método:** PUT
    **Path:** `/task`

    **Body:**

    ```json
    {
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"creatorUserId": "001"
    }
    ```

5. Pegar tarefa pelo id

    **Método:** GET
    **Path:** `/task/:id`

    **Path Param**: é o id da tarefa

    **Body de Resposta:**

    ```json
    {
    	"taskId": "001",
    	"title": "Criar banco dos alunos",
    	"description": "Devemos criar o banco dos alunos para o módulo do backend",
    	"limitDate": "04/05/2020",
    	"status": "to_do",
    	"creatorUserId": "001",
    	"creatorUserNickname": "astrodev"
    }
    ```

## Como rodar a aplicação :arrow_forward:

No terminal, clone o repositório onde está o projeto:
```
git clone 
```
Entre na pasta do projeto:
```
cd 'lista de tarefas'
```
Instale as dependências:
```
npm install
```
Execute a aplicação:
```
npm start 
```

... 

## Licença :page_with_curl:

Desenvolvido por [Andrius Lazarino](https://github.com/andriusrl), [Nauara Melo](https://github.com/nauaramelo) e [Vinícius Abuhid](https://github.com/ViniciusAbuhid), sob a licençaX11, MIT - [Clique aqui](https://opensource.org/licenses/MIT) para mais detelhes.