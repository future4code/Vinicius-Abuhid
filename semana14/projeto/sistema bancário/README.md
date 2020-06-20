<p align="center">
<img src="./assets/Labenu.png" alt="slogan Labenu" width="200px">
</p>

<p align="center">Curso Web Full Stack - 13/01/2020 a 17/07/20020</p>


<h1 align="center">
Projeto semanas n°14: Sistema bancário
</h1>

<p align="center">Simulação de um sistema interno bancário com o fim de treinar os fundamentos de programação orientada a objetos ensinados na semana</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

## Ferramentas :wrench:
Principais ferramentas utilizadas na construção da aplicação

- **Node Js** — Plataforma para construir aplicações web escaláveis
- **Typescript** - TypeScript é um superconjunto de JavaScript que adiciona linguagem a linguagem

## Escopo do projeto :pushpin:
Um dos bancos mais famosos do brasil, o F4Bank, está passando por alguns problemas sérios de performanceem suas aplicações. Isso significa que as movimentações financeiras que passam pelos seus sistemas estãomuito lerdas: que é muito preocupante já que impede a empresa de ter novos usuários e crescer. Tendo istoem mente, o F4Bank decidiu elaborar um concurso para uma POC de um sistema bancário usando Typescript.

POC é uma sigla que significa "Proof of Concept" ("Prova de Conceito" em tradução livre). É muito comumfazermos uma POC quando queremos apresentar uma nova tecnologia ou arquitetura para uma empresa, com oobjetivo de convencê-la a utilizá-las. Uma POC, normalmente, não é muito complexa, mas deve possuir todasas funcionalidades básicas que permitam concluir se o conceito utilizado é válido para resolver o problemaou não. 

Com isso tudo em mente, você deve implementar uma POC com o objetivo de ganhar esta competição.Descrevemos, abaixo, todas as funcionalidades que a F4Bank precisa e logo depois as etapas dedesenvolvimento para os requisitos mínimos deste projeto.

#### Funcionalidades

- Criar Conta

    Um cliente pode criar uma conta no banco se tiver idade maior do que 18 anos. Ele deve informar: nome, CPF e data de nascimento. As contas devem guardar essas informações e uma propriedade para representar o saldo do usuário. Além disso devem persistir, também, todos os gastos do usuário num array de extrato (possuindo o valor, a data e uma descrição). Lembre-se de que todas as contas, ao serem criadas, começam com o saldo zerado. Não podem existir dois usuários diferentes com o mesmo CPF.

- Pegar Saldo

    O usuário deve conseguir verificar o saldo da sua conta, passando o seu nome e o seu CPF. 

- Adicionar saldo 🌚

    O usuário deve conseguir adicionar saldo à sua conta, passando seu nome, o CPF e o valor que desejar.

- Pagar Conta

    Esta funcionalidade é muito importante para os clientes. Eles podem pagar uma conta, se quiserem, passando: um valor, uma descrição e uma data de pagamento. Caso ele não informe a date, deve-se considerar que o pagamento é para ser feito no mesmo dia. Além disso, devemos nos atentar: ele não pode agendar um pagamento para um dia que já passou ou tentar pagar uma conta cujo valor seja maior do que o seu saldo.

- Transferência Interna

    A transferência entre contas é muito mais interessante ao banco do que aos clientes em si, porque, com esta funcionalidade, ela consegue influenciar seus clientes a convencerem conhecidos a migrarem para o banco. Para realizar esta transferência, o usuário deve informar o seu nome, o seu CPF, o nome do destinatário, o CPF do destinatário e o valor em si. Transferências não podem ser agendadas e devem respeitar o saldo do usuário remetente.

#### Requisitos obrigatórios ####

1. Criem um tipo para representar uma conta para o usuário
2. Criem mais um tipo: para representar as transações que serão salvas no extrato
3. Criem uma função (`createAccount`) que será responsável por cadastrar um usuário em um arquivo `JSON`.Neste momento, não se preocupe, com as validações descritas nas funcionalidades.
4. Criem uma função (`getAllAccounts`) que será responsável por pegar todos os usuários existentes noarquivo `JSON`.
5. Adicione, uma validação na função do item 1 (`createAccount`): o usuário deve possuir mais do que 18anos para conseguir se cadastrar. Caso não possua, exibam uma mensagem de erro.


## Como rodar a aplicação :arrow_forward:

No terminal, clone o repositório onde está o projeto:
```
git clone 
```
Entre na pasta do projeto:
```
cd 'Sistema bancário'
```
Instale as dependências:
```
npm install
```
Execute a aplicação:
```
npm start 
```

## Licença :page_with_curl:

Desenvolvido por [Vinícius Abuhid](https://github.com/ViniciusAbuhid), sob a licençaX11, MIT - [Clique aqui](https://opensource.org/licenses/MIT) para mais detelhes.
