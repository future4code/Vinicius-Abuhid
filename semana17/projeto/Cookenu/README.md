<p align="center">
<img src="./assets/Labenu.png" alt="slogan Labenu" width="200px">
</p>

<p align="center">Curso Web Full Stack - 13/01/2020 a 17/07/20020</p>


<h1 align="center">
Projeto semana n°17: Cookenu
</h1>

<p align="center">Cookenu é uma rede social, voltada para os amantes da gastronomia. Os usuários podem criar um perfil, seguir uns aos outros, criar receitas, dentro outras funcionalidades</p>

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
Você sabia que está ficando famoso? Quanto mais e mais projetos você faz, mais seus clientes estão te divulgando por aí!

De manhã, você acordou, tomou uma bela xícara de café, verificou sua caixa de email e viu que tinha mais uma proposta de *Freela*. *Freela* vem de *Freelancer*, que é um trabalhador autônomo que sempre trabalha em projetos diferentes. Dessa vez, um cliente deseja te pagar muito bem para implementar o *Cookenu*.

Ele está tão desesperado que quer que esse projeto seja feito o mais rápido possível então pediu para você se reunir a um colega para fazer.

#### Requisitos obrigatórios ####
Esse produto nada mais é do que uma rede social, na qual os usuários podem dividir informações relevantes sobre comidas e receitas que tenham experimentado. Ela possui todas as funcionalidades mais comuns em redes sociais:

1. Cadastro

    Como o projeto está no início, o usuário só precisa informar: o id, e-mail, nome a sua senha para realizar o cadastro. A senha tem uma regra: ela deve conter, no mínimo, 6 carácteres. 

2. Login

    Basta informar o email e a senha corretamente que o usuário poderá se logar na aplicação. od a autenticação deve ser feita com um token.

3. Informações do próprio perfil

    A partir do token de autenticação fornecido no login, o usuário deve ser capaz de ver as suas informações não sensíveis salvas no banco (vulgo, id e email)

4. Criar receitas

    O usuário deve poder criar uma receita. A receita deve ter os seguintes atributos: título, descrição/modo de preparo e data de criação

5. Seguir usuário

    Um usuário deve poder seguir outros usuários. Para isso, ele deve fornecer o id do usuário que deseja seguir. Atente-se que essa funcionalidade se assemelha ao do instagram: um usuário seguir outro, não significa que "esse outro" está seguindo o primeiro.

6. Feed

    Um usuário deve poder visualizar as receitas criadas pelos usuários que ele segue. As receitas devem estar ordenadas pela data de criação.

-  **Endpoints mínimos para o MVP**

    Todos os endpoints, com exceção do Signup e Login, devem exigir autenticação.

1. **Signup**

    **Método:** POST
    **Path:** `/signup`

    **Entradas:**

    Body

    ```json
    {
    	"name": "Alice",
    	"email": "alice@lbn.com",
    	"password": "123456"
    }
    ```

    **Saídas**

    Body

    ```json
    {
    	"access_token": "token de acesso"
    }
    ```

2. **Login**

    **Método:** POST
    **Path:** `/login`

    **Entradas:**

    Body

    ```json
    {
    	"email": "alice@lbn.com",
    	"password": "123456"
    }
    ```

    **Saídas**

    Body

    ```json
    {
    	"access_token": "token de acesso"
    }
    ```


3. **Pegar próprio perfil**

    **Método:** GET
    **Path:** `/user/profile`

    **Entradas:**

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    **Saídas**

    Body

    ```json
    {
    	"id": "id do usuário",
    	"name": "Alice",
    	"email": "alice@lbn.com"
    }
    ```

4. **Pegar perfil de outro usuário**

    **Método:** GET
    **Path:** `/user/:id`

    **Entradas:**

    Path Param

    ```
    id: "id do usuário"
    ```

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    **Saídas**

    Body

    ```json
    {
    	"id": "id do usuário",
    	"name": "Alice",
    	"email": "alice@lbn.com"
    }
    ```

5. **Criar receita**

    **Método:** POST
    **Path:** `/recipe`

    **Entradas:**

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    Body

    ```json
    {
    	"title": "título da receita",
    	"description": "descrição da receita"
    }
    ```

6. **Pegar receita**

    **Método:** GET
    **Path:** `/recipe/:id`

    **Entradas:**

    Path Param

    ```
    id: "id da receita"
    ```

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    **Saídas**

    Body

    ```json
    {
    	"id": "id da receita",
    	"title": "Ovo Frito",
    	"description": "Pega o ovo, põe na frigideira e reza!"
    	"cratedAt": "31/12/2020"
    }
    ```

7. **Seguir usuário**

    **Método:** POST
    **Path:** `/user/follow`

    **Entradas:**

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    Body

    ```json
    {
    	"userToFollowId": "id do usuário que se deseja seguir"
    }
    ```

    **Saídas**

    Body

    ```json
    {
    	"message": "Followed successfully"
    }
    ```

8. **Deixar de seguir usuário**

    **Método:** POST
    **Path:** `/user/unfollow`

    **Entradas:**

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    Body

    ```json
    {
    	"userToUnfollowId": "id do usuário que se deseja deixar de seguir"
    }
    ```

    **Saídas**

    Body

    ```json
    {
    	"message": "Unfollowed successfully"
    }
    ```

9. **Pegar feed de receitas**

    **Método:** GET
    **Path:** `/user/feed`

    **Entradas:**

    Headers

    ```
    Authorization: "token de autenticação"
    ```

    **Saídas**

    Body

    ```json
    {
    	"recipes": [{
    			"id": "id da receita",
    			"title": "título da receita",
    			"description": "descrição da receita",
    			"createdAt": "31/12/2020",
    			"userId": "id do usuário que criou a receita",
    			"userName": "nome do usuário que criou a receita"
    	}]
    }
    ```

## Como rodar a aplicação :arrow_forward:

No terminal, clone o repositório onde está o projeto:
```
git clone 
```
Entre na pasta do projeto:
```
cd 'Cookenu'
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

Desenvolvido por [Thales Milanezi](https://github.com/ThalesMilanezi) e [Vinícius Abuhid](https://github.com/ViniciusAbuhid), sob a licençaX11, MIT - [Clique aqui](https://opensource.org/licenses/MIT) para mais detelhes.
