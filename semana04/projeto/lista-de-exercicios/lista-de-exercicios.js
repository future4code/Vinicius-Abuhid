/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
Exercício 1 
É uma função que recebe como parâmetro o valor que o usuário quer converter de dólar para real e
cria uma variável que recebe do usuário o valor da cotação e transforma essa informação  de string
para um número. 
Após o fechamento do bloco dessa função é declarada uma variável "meuDinheiro", que chama essa função
e dá o valor 100 como parâmetro.
Com o console.log, é registrado na tela então a variável "meuDinheiro" que será 
100*"valor da cotação"

Exercício 2 
O código em questão apresenta primeiramente uma função que recebe como parâmetro uma string e um 
número. Essa função declara e retorna a variável valorAposInvesimento. Mas o qual é o valor dessa
variável? Vai depender dos argumentos. Para verifica-los a função abre um switch case que
nomeia possiveis argumentos e o como eles vão interferir na variável que será retornada. 
Se o argumento não constar na lista criada, vai aparecer um alerta para o usuário e a variável
retornada não assumirá nenhum valor.

Para fazer então a função rodar, são então declaradas duas variáveis: a primeira dá como parâmetros 
uma string que está presente no switch case e o valor de 150. A função então executa o comando 
previsto para esta string envolvendo o valor de 150. 
Na segunda variável, o parâmentro dado não está previsto no switch case e, portanto, aparecerá para
o usuário um alerta e nada mais acontece.

É então dado um comando para que sejam essas variáveis imprimidas na tela. A primeira mosratá
um valor resultante do cálculo atribuído ao argumento passado. Já  asegundo mostrará um valor
undefined, pois o argumento não constava nas hipótese em que a variável retornada assumiria algum
valor.

Exercício 3 
São declaradas 3 variáveis, as 3 do tipo array. A primeira apresenta um conjunto de números.
A segunda e terceira, estão vazias.

É então executado um loop em que para cada item da primeira array haverá uma verificação: se o
o valor do resto da divisão desse item por 2 for 0, ele será adicionado à segunda array; se não,
ele será adicionado à terceira. Em outras palavras, se ele for par, vai para a segunda, se for
ímpar, para a terceira.

Seguindo o código, são dados 3 comandos de para imprimir na tela:
1. Uma string + o valor total de elementos da primeira array.
2. A primeira array, agora com todos os números pares da primeira
3. A segunda array, agora com todos os números ímpares da primeira

Exercício 4
São dadas 3 variáveis: numeros, numero1 e numero2. Numeros assume o valor de uma array, com vários
números. numero1 assume o valor infinito e numero2 o valor de zero.

Logo após temos um loop, em que para cada número de numeros, haverá uma verificação: se o número
for menor que a variável numero1, esta assume o valor daquele. E se o número for maior que numero2,
este assume o valor daquele. Logo numero1 e numero2 começam com seus respectivos valores, mas ao
longo do loop vão assumir vários outros, de forma que numero1 termina sendo o menor número da array,
-10 e numero2 termina sendo o maior, 1590.

No final numero1 e numero2 são monstrados na tela com seus novos valores assumidos.
*/

// EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO
// Exercício 1
// 3 maneiras de se percorrer uma lista:
// 1. for of
// 2. array.map(function(item, index, array))
// 3. array.forEach(function(item, index, array))
// ex:
function exercicio1 () {
    const array = ["segunda", "terça", "quarta", "quinta", "sexta"]
    const newArray = array.map((item, index, array) => {
    return item += "-feira"
    })
    return newArray
}
console.log(exercicio1())

// Exercício 2
// a) false
// b) false
// c) true
// d) true
// e) true

// Exercicio 3
// Este código não funciona, por dois motivos:
// 1. a variavel quantidadeDeNumerosPares não assume nenhum valor;
// 2. O loop não recebe nenhum incremento e ele será entãot infinito caso seja atendida a sua condição
// Dessa forma para que esse código funcionasse, eu o faria assim:
function numerosPares(quantidadeDeNumerosPares){
        i = 0
        while(i < quantidadeDeNumerosPares){
        console.log(i*2)
        i++
        }
}
numerosPares(5)

// Exercicio 4
function ladosTriangulo (a,b,c) {
    if (a === b && a === b && b === c){
        return "Equilátero"
    }
    else if (a === b || a === c || b === c){
        return "Isósceles"
    }
    else {
        return "Escaleno"
    }
}
console.log(ladosTriangulo(2,2,7))
console.log(ladosTriangulo(2,2,2))
console.log(ladosTriangulo(2,1,3))

//Exercício 5
//Obs: não conseguir fazer da maneira mais simples, pois quando eu botava tudo dentro da mesma função,
//a verificação parava logo no primeiro "else if" correto e não verificava os outros.
function comparaNumeros (a,b){
    if (a > b) {
        return "O maior é " + a
    }
    else if (a === b){
        return a + " e " + b + " são iguais"
        
    }
    else {
        return "O maior é " + b
    }
}   
function comparaNumeros2 (a,b){
    if (a % b === 0 && b % a === 0){
        return a + " e " + b + " são divisíveis um pelo outro"
    }
    else if(a % b === 0 && b % a !== 0){
        return a + " é divisível por " + b + " mas a recíproca não é verdadeira"
    }
    else if(a % b !== 0 && b % a === 0){
        return b + " é divisível por " + a + " mas a recíproca não é verdadeira"
    }
    else {
        return a + " e " + b + " não são divisíveis um pelo outro"
    }
}
function comparaNumeros3 (a,b){
    let diferença = ""
    if (a >= b){
        diferença = a - b
        return "A diferença entre eles é " + diferença
    }
    else {
        diferença = b - a
        return "A diferença entre eles é " + diferença
    }
}

function comparaGeral(a,b){
    return comparaNumeros(a,b) + ". " + comparaNumeros2(a,b) + ". " + comparaNumeros3(a,b)
}
console.log(comparaGeral(8,6))

//EXERCÍCIOS DE FUNÇÕES
//Exercício 1
function arrayDeNumeros(array){
    let maiorNumero = 0
    let segundoMaior = 0
    for (num of array){
        if(num > maiorNumero){
            maiorNumero = num
            for (ber of array){
                if (ber > segundoMaior && ber < maiorNumero){
                    segundoMaior = ber
                }
            }
        }
    }
    let menorNumero = Infinity
    let segundoMenor = Infinity
    for (num of array){
        if(num < menorNumero){
            menorNumero = num
            for (ber of array){
                if (ber < segundoMenor && ber > menorNumero){
                    segundoMenor = ber
                }
            }
        }
    }

    return "O segundo maior é " + segundoMaior + " e o segundo menor é " + segundoMenor
}
console.log(arrayDeNumeros([1, 2, 3, 4, 5]))

//Exercício 2
const funçaoSemNome = ()=>{
    return alert("Hello Future4")
}
console.log(funçaoSemNome())

//EXERCÍCIO DE OBJETOS
//Exercício 1 
//Um array é um conjunto de elementos, criado para evitar ter que criar uma variável para cada 
//elemento. Objeto por sua vez é um elemento com várias propriedades, em que cada propriedade tem
//um valor diferente. Ou seja, um objeto pode fazer parte de um array como seu elemento, e um array
//pode ser parte de um objeto como valor de uma de suas propriedades.

//Exercício 2
function criaRetangulo(lado1, lado2){
    return {largura: lado1, altura: lado2, parímetro: (2*(lado1 + lado2)), area: lado1*lado2}
}
console.log(criaRetangulo(10,5))

//Exercício 3
const filmePredileto = {nome: "DragonBall Super: Broly", ano: 2019, diretor: "Akira Toriyama", 
atores: ["Son Goku", "Vegeta", "Bulma", "Freeza", "Broly"] }
console.log("Venha assistir ao filme" + filmePredileto.nome + ", de " + filmePredileto.ano + 
" dirigido por " + filmePredileto.diretor + " e estrelado por " + filmePredileto.atores[0] + ", "
+ filmePredileto.atores[1] + ", " + filmePredileto.atores[2] + ", " + filmePredileto.atores[3] 
+ " e " + filmePredileto.atores[4])

//Ecercício 4
const Vinicius = {nome: "Vinicius", idade: "27", email: "viniciusabuhid@gmail.com", 
endereço: "Avenida Paulo Camilo Pena"}

function anonimizarPessoa(){
    let anonymous = Vinicius
    anonymous.nome = "Anônimo"
    return anonymous
}
console.log(anonimizarPessoa())

//EXERCICIOS DE FUNÇÕES DE ARRAY
//Exercício 1
const arrayIdades = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
//a
const soAdultos = arrayIdades.filter((pessoa, index, array) => {
    return pessoa.idade >= 20
})
console.log(soAdultos)

//b
const soMenores = arrayIdades.filter((pessoa, index, array) => {
    return pessoa.idade < 20
})
console.log(soMenores)

//Exercício 2
const arrayTestar = [1, 2, 3, 4, 5, 6]
//a
const multiplicaDois = arrayTestar.map((num, index, array) => {
    return num*2
})
console.log(multiplicaDois)
//b
const multiplicaTres = arrayTestar.map((num, index, array) => {
    return (num*3).toString()
})
console.log(multiplicaTres)
//c
const eParOuImpar = arrayTestar.map((num, index, array) => {
    if(num % 2 === 0){
        num.toString()
        num += " é par"
    }
    else if (num % 2 !== 0){
        num.toString()
        num += " é ímpar"
    }
    return num
})
console.log(eParOuImpar)
//Exercicio 3
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
//a
const soKenPode = pessoas.filter((visitante, index, array) => {
    return visitante.idade > 14 && visitante.idade < 60 && visitante.altura >= 1.5
})
console.log(soKenPode)
//b
const soKenNaoPode = pessoas.filter((visitante, index, array) => {
    return visitante.idade < 14 || visitante.idade > 60 || visitante.altura < 1.5
})
console.log(soKenNaoPode)

//Exercício 4
const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]

const emailPacientes = consultas.map((paciente, index, array) => {
    if (!paciente.cancelada && paciente.genero === "masculino"){
        return "Olá, Sr. " + paciente.nome +  ".Estamos enviando esta mensagem para " + 
        "lembrá-lo da sua consulta no dia " + paciente.dataDaConsulta + 
        ". Por favor, acuse o recebimento deste e-mail"
    }
    else if(!paciente.cancelada && paciente.genero === "feminino"){
        return "Olá, Sra. " + paciente.nome +  ".Estamos enviando esta mensagem para " + 
        "lembrá-la da sua consulta no dia " + paciente.dataDaConsulta + 
        ". Por favor, acuse o recebimento deste e-mail"   
    }
    else if(paciente.cancelada && paciente.genero === "masculino"){
        return "Olá, Sr." + paciente.nome + ". Infelizmente, sua consulta marcada " +
        "para o dia " +  paciente.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em" + 
        "contato conosco para remarcá-la"
    }
    else {
        return "Olá, Sra." + paciente.nome + ". Infelizmente, sua consulta marcada " +
        "para o dia " +  paciente.dataDaConsulta + " foi cancelada. Se quiser, pode entrar em" + 
        "contato conosco para remarcá-la"
    }
})
console.log(emailPacientes)

//Exercício 5
const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

function atualizaSaldo() {
        const contasAtualizadas = contas.map((conta, index, array) => {
        for (i=0; i <conta.compras.length; i++){
            let comprastotais = 0
            comprastotais += conta.compras[i]
            let saldoFinal = conta.saldoTotal - comprastotais
            conta.saldoTotal = saldoFinal
        }
        return conta
    })
    return contasAtualizadas
}
console.log(atualizaSaldo())