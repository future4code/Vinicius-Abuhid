<p align="center">
<img src="./assets/Labenu.png" alt="slogan Labenu" width="200px">
</p>

<p align="center">Curso Web Full Stack - 13/01/2020 a 17/07/20020</p>


<h1 align="center">
Projeto semanas n°15: Labenu system
</h1>

<p align="center">Sistema interno da Labenu, onde estão todas as informações sobre os funcionários e alunos da escola</p>

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
Você estuda na Labenu_ há tanto tempo que já parecem anos, não é? Então, hoje, vamos pedir para criar um sistema que represente o básico da nossa organização. 

Ele deve possuir, ao menos, as 3 entidades importantes:

1. Estudantes 

    Representa estudantes da nossa instituição. Eles devem possuir: id, nome, email data de nascimento e os principais hobbies dele. 

2. Docente

    Representa docentes da nossa instituição. Eles devem possuir: id, nome, email  e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

3. Turma

    Toda turma é composta das seguintes características: id, nome, data de início, data de término, lista de professores responsáveis, uma lista de alunos e módulo atual em que a turma está.

    O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Para esse exercício, vamos considerar que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

#### Requisitos obrigatórios ####
As funcionalidades básicas são:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma; e

→ Pegar a idade de algum estudante a partir do id

**Além disso, vocês devem se atentar as seguintes instruções:**

1. Você deve criar uma pasta `src` e colocar todas as implementações nela. 
2. Para a entrega, deve haver um arquivo `src/index.ts`, no qual você cria: duas turmas, dois aluno e quatro professores e adicione-os nas turmas da forma que achar mais pertinente.
3. Você deve salvar as informações das turmas em um arquivo `missions.json`, estudantes em `students.json` e docentes em `teachers.json`.
4. No sistema todo, deve haver, ao menos, **1 interface** e **1 classe abstrata**
5. É **opcional** fazer o sistema receber os parâmetros pelo terminal. Você pode fazer isso diretamente no código
6. O mais importante: **seja criativo no seu projeto! Queremos dar muitas risadas! 😄**

## Como rodar a aplicação :arrow_forward:

No terminal, clone o repositório onde está o projeto:
```
git clone 
```
Entre na pasta do projeto:
```
cd 'labenu system'
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

Desenvolvido por [Vinícius Abuhid](https://github.com/ViniciusAbuhid), sob a licençaX11, MIT - [Clique aqui](https://opensource.org/licenses/MIT) para mais detelhes.