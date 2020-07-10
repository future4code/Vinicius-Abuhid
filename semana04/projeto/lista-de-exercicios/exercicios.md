### Exercícios de interpretação de código
Analise os trechos de código em cada exercício e escreva o que ele faz, como faz e qual será o valor impresso no `console`.

**Importante:** A ideia é que vocês interpretem o código, então **não pode executar o código no JS**, tem que "executar" na cabeça de vocês.
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3b212c6-55a1-4759-81d7-a02ec24f6b38/carbon_(18).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f3b212c6-55a1-4759-81d7-a02ec24f6b38/carbon_(18).png)
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f178f37-b2b8-4aff-b385-6a92d48df317/carbon_(22).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8f178f37-b2b8-4aff-b385-6a92d48df317/carbon_(22).png)
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0956c13e-e4e7-482e-9ed0-e09c0b0d4278/carbon_(23).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0956c13e-e4e7-482e-9ed0-e09c0b0d4278/carbon_(23).png)
![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f2cd9c1-b6a1-481d-bff3-6c5b7b248e35/carbon_(25).png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f2cd9c1-b6a1-481d-bff3-6c5b7b248e35/carbon_(25).png)

### Exercícios de Lógica de Programação

1. Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
2. Para este exercício considere as seguintes variáveis:

    ```jsx
    const booleano1 = true
    const booleano2 = false
    const booleano3 = !booleano2
    const booleano4 = !booleano3 
    ```

    Sem rodar nenhum código, diga quais são os valores das expressões lógicas abaixo:

    a) `booleano1 && booleano2 && !booleano4`

    b) `(booleano1 && booleano2) || !booleano3`

    c)  `(booleano2 || booleano3) && (booleano4 || booleano1)`

    d) `!(booleano2 && booleano3) || !(booleano1 && booleano3)`

    e) `!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)`

3. Você tem que escrever um código que, dado um número **N**, ele imprima (no `console`) os **N** primeiros números pares (por exemplo, se **N** for 3, você deve imprimir 0, 2 e 4; se **N** for 5, deve imprimir 0, 2, 4, 6 e 8).  Um colega seu disse que já começou esta tarefa, mas não conseguiu terminar. Dê uma olhada no código dele:

    ```jsx
    const quantidadeDeNumerosPares
    let i = 0
    while(i <= quantidadeDeNumerosPares) {
      console.log(i*2)
    }
    ```

    Este código funciona? Por quê? Caso não funcione, corrija a implementação dele.

4. Vocês lembram de trigonometria? ~~(Oh, não, trigonometria)~~. Relaxem. O exercício é simples, mas mexe com isso. Veja bem: quando nos ensinam triângulos (uma figura de três lados), nós aprendemos como classifica-los dependendo do tamanho de seus lados. Se um triângulo possuir os **três lados iguais**, ele é chamado de "Equilátero". Se possuir, **dois (e somente 2) lados iguais**, diz-se que ele é "Isósceles". Se os **três lados tiverem medidas diferentes**, ele é "Escaleno". Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: `a, b, c`  e retorne se ele é equilátero, isósceles ou escaleno.

5. Faça um programa que, dados dois números,

    i. indique qual é o maior,

    ii. determine se eles são divisíveis um pelo outro (use o operador `%`) e

    iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)

    Um exemplo:

    ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3961a32-1d25-4c39-ac2b-c3b7333d9cc6/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a3961a32-1d25-4c39-ac2b-c3b7333d9cc6/Untitled.png)

### Exercícios de Funções

1. Escreva uma função que receba um `array` de números e imprima na tela o segundo maior e o segundo menor número. Em seguida, invoque essa função.
2. Escreva uma **função não nomeada** que faça um `alert("Hello Future4");`. Em seguida, invoque essa função.

### Exercícios de Objetos

1. Explique com as suas palavras o que são e quando podemos/devemos utilizar arrays e objetos.
2. Crie uma função chamada `criaRetangulo` que recebe como parâmetros dois lados (`lado1` e `lado2`) e retorna um objeto com 4 informações: largura (`lado1`), altura (`lado2`), perímetro (`2 * (lado1 + lado2)`) e área (`lado1 * lado2`).
3. Crie um objeto para representar seu filme favorito. Ele deve ter as seguintes propriedades: título, ano, diretor e atores/atrizes (lista com pelo menos 2 atores/atrizes). Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e estrelado por ATOR 1, ATRIZ 2, ATOR n`. A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
4. Crie um objeto que represente uma pessoa qualquer, com as propriedades de `nome`, `idade`, `email` e `endereco`. Crie uma função chamada `anonimizarPessoa`, que deverá retornar um **novo** objeto com as mesmas propriedades, mas com a string `ANÔNIMO` no lugar do nome. O objeto original deve ser mantido com o nome da pessoa.

###  Exercícios de Funções de array

1. Considere um array com o seguinte formato:

    ```jsx
    [
    	{ nome: "Pedro", idade: 20 },
    	{ nome: "João", idade: 10 },
    	{ nome: "Paula", idade: 12 },
    	{ nome: "Artur", idade: 89 } 
    ]
    ```

    a) Faça uma função que retorne um **novo array** só com os adultos (pessoas com idade igual ou superior a 20)

    b) Faça uma função que retorne um **novo array** só com as crianças/adolescentes (pessoas com idade inferior a 20)

2. Em todos os itens deste exercício, você terá que escrever uma **função** cuja entrada seja um **array**. Para testes, considere: `const array = [1, 2, 3, 4, 5, 6]`.

    a) Escreva uma função que **retorne** um array com as entradas multiplicadas por 2. Isto é `[2, 4, 6, 8, 10, 12]`.

    b) Escreva uma função que **retorne** um array com as entradas multiplicadas por 3 e como strings. Isto é: `["3", "6", "9", "15", "18"]` 

    c) Escreva uma função que **retorne** um array de strings dizendo: "${número} é par/impar". Isto é: `["1 é impar", "2 é par", "3 é impar", "4 é par", "5 é impar", "6 é par"]` 

3. Imagine que você trabalhe num parque de diversões, como desenvolvedor(a). As suas tarefas são sempre com o intuito de ajudar a automação de alguns processos internos do parque. Uma das atrações principais dele é a montanha russa do terror. As filas são muito grandes e todas as pessoas de várias idades insistem entrar no brinquedo, mesmo sabendo que não podem. Considere, então, essas pessoas:

    ```jsx
    const pessoas = [
    	{ nome: "Paula", idade: 12, altura: 1.8},
    	{ nome: "João", idade: 20, altura: 1.3},
    	{ nome: "Pedro", idade: 15, altura: 1.9},
    	{ nome: "Luciano", idade: 22, altura: 1.8},
    	{ nome: "Artur", idade: 10, altura: 1.2},
    	{ nome: "Soter", idade: 70, altura: 1.9}
    ]
    ```

    A regra para entrar na montanha russa do terror é: ter, no mínimo, 1.5m de altura; ser mais velho do que 14 anos e mais novo do que 60 anos.

    a) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **tem permissão de entrar** no brinquedo

    b) Escreva uma **função** que **receba** este array e **devolva** outro array somente com as pessoas que **não podem entrar** no brinquedo.

4. Você foi contratado por um escritório médico para gerar e-mails automáticos para seus clientes, lembrando-os de sua consulta marcada; ou avisa-los que foi cancelada. Considere, então, essas consultas:

    ```jsx
    const consultas = [
    	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
    	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
    	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
    	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
    ]
    ```

    A sua tarefa é criar um **array** com os e-mails para cada um deles. Existem dois padrões de e-mail. 

    Para as consultas **não canceladas** é:

    ```
    Olá, ${ Sr./Sra. } ${ nome da pessoa }. Estamos enviando esta mensagem para
    ${ lembrá-lo / lembrá-la } da sua consulta no dia ${ data da consulta }. Por favor, acuse
    o recebimento deste e-mail.
    ```

    Para as consultas **canceladas** é:

    ```
    Olá, ${ Sr./Sra. } { nome da pessoa }. Infelizmente, sua consulta marcada
    para o dia ${ data da consulta } foi cancelada. Se quiser, pode entrar em 
    contato conosco para remarcá-la
    ```

5. Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital. Antes de explicar a sua tarefa, você precisa entender como eles guardam as contas dos clientes. Basicamente, eles salvam o nome do clientes, o saldo total e uma lista contendo todas as compras realizadas pelo cliente. Veja abaixo:

    ```jsx
    const contas = [
    	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
    	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
    	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
    	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
    	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
    	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
    ]
    ```

    A sua tarefa é: faça uma função que receba um **array** com os objetos do tipo acima e atualize o **saldo total** individual de cada um, **sem criar um novo** array.

    Em outras palavras, o **array** do exemplo acima deve ficar assim:

    ```jsx
    [ 
    	{ cliente: 'João', saldoTotal: 400, compras: [ 100, 200, 300 ] },
    	{ cliente: 'Paula', saldoTotal: 6260, compras: [ 200, 1040 ] },
      { cliente: 'Pedro', saldoTotal: -3340, compras: [ 5140, 6100, 100, 2000 ] },
      { cliente: 'Luciano', saldoTotal: -1900, compras: [ 100, 200, 1700 ] },
      { cliente: 'Artur', saldoTotal: 1300, compras: [ 200, 300 ] },
      { cliente: 'Soter', saldoTotal: 1200, compras: [] } 
    ]
    ```