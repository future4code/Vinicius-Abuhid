<p align="center">
<img src="./assets/Labenu.png" alt="slogan Labenu" width="200px">
</p>

<p align="center">Curso Web Full Stack - 13/01/2020 a 17/07/20020</p>


<h1 align="center">
Projeto semanas n°18 e 19: LaBook
</h1>

<p align="center">Rede Social, que embora possa parecer diferente, é uma ideia totalmente original. A aplicação busca prmover uma interação entre os seus usuários que podem se seguir, postar publicações diversar e interagir nas publicações uns dos outros</p>

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
Essa semana, mais um Freela surgiu. Um jovem empreendedor teve uma ideia revolucionária que parece ter dado certo, mas está precisando de uma força para deixar o backend redondo. Ele já tem um time cuidando do Frontend, e você irá cuidar do backend - com bastante atenção à alta complexidade que a ideia que ele teve requer. O Astrodev, já famoso pela qualidade das entregas de seu time de programadores, foi contatado e repassou a tarefa a você. Segue o email enviado por ele:

```
Prezada(o),

	Essa semana será simples. É só fazer o backend de uma rede social.
O nome da rede se chama LaBook, nasceu como uma rede de alunos de 
universidades americanas, e agora parece que já tem um número aceitável 
de usuários (2 bilhões).
	Você deverá construir o backend da LaBook, garantindo que 
que todos os requisitos descritos em anexo sejam cumpridos. O
prazo é até sexta-feira.
	É um contrato importante para nós, portanto, sem atrasos ou erros.

Att., 

Astrodev
```

#### Requisitos obrigatórios ####
O LaBook será uma rede social com o objetivo de promover a conexão e interação entre seus mais diversos usuários. Os usuários podem criar posts de dois tipos ("evento" ou "normal), comentá-los e curti-los também. O desenvolvedor do frontend ~~acha que~~ é bastante experiente; dessa forma, já preparou uma lista de todos os endpoints que serão necessários para o projeto:

1. **Cadastrar**

    Para o cadastro nessa rede social, o usuário deve fornecer seu nome, seu e-mail e uma senha. Além disso, esse endpoint já tem que realizar o login do usuário, fornecendo seu token de autenticação no retorno da requisição.

2. **Logar**
3. **Fazer amizade**

    Criar uma amizade é simples: basta receber o token de autenticação junto com o Id do usuário com o qual se deseja fazer amizade. 

    Uma amizade é uma "relação mútua": quando um usuário vira amigo de outro, esse outro "já é amigo" desse primeiro usuário (ou seja, o segundo usuário não precisa virar amigo do outro depois)

    **Não há a necessidade de "aceitar" uma amizade.**

4. **Desfazer Amizade**

    Encerrar uma amizade segue o mesmo fluxo de fazer: com o token de autenticação e o id do usuário, já é possível realizar esse processo.

    Observação: você deve retornar um erro caso o usuário tente desfazer uma amizade com alguém com quem não tem essa amizade registrada no banco!

5. **Criar post**
6. **Ver todo o Feed**
7. **Ver apenas um tipo de post do Feed**

Por fim, ressaltam-se dois fatos:

- Você deve analisar e pensar quais são os endpoints que necessitam do token de autenticação
- Lembre-se de que o Backend deve ser muito conciso. Isso significa que você deve prever a maior parte dos erros que possam acontecer e já se precaver contra eles. (Não se preocupe muito com essa parte, mas, se der tempo, foque nisso!)

## Como rodar a aplicação :arrow_forward:

No terminal, clone o repositório onde está o projeto:
```
git clone 
```
Entre na pasta do projeto:
```
cd 'Labook'
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
