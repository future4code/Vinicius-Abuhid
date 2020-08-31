/*
EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
Exercício 1. O código em questão está fazendo um laço e ao final deste, imprimirá a variável sum na tela. 
Para cada vez que a variável i for menor do que 15, ela será somada à variável sum, que tem o valor inicial de 0. 
Além disso, no final de cada laço é incrementado o valor de 1 à varável i, de forma que seu valor muda para o
próximo laço. O valor mostrado na tela, será então, a soma total de i a sum até que i chegue no valor de 14.
Resultado: 1+2+3+4+5+...+14= 105

Exercício 2. 
a. O comando push acrescenta um intem no final de uma array
b. [10, 15, 25, 30]
c. Se a variável numero fosse 4, a mensagem no console seria: [12]. 
Se fosse 3, a mensagem seria [12, 15, 18, 21,27,30]
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// Exercício 3.
//a.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let maior = arrayOriginal[0]
let menor = arrayOriginal[0]
for(let i = 0; i < arrayOriginal.length; i++) {
let a = arrayOriginal[i]
if (a>maior) {
    maior = a
}
}
for(let i = 0; i < arrayOriginal.length; i++) {
let a = arrayOriginal[i]
if (a<menor) {
    menor = a
}
}
console.log("o maior número é " + maior + " e o menor é " + menor)

//b.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let numero of arrayOriginal){
    console.log(numero/10)
} 

//c.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
for (let numero of arrayOriginal){
    if (numero % 2 === 0)
    console.log(numero)
}

//d.
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let i = 0
let newArray = []
for (let numero of arrayOriginal) {
    newArray.push ("O elemento do índex" + i + " é " + numero)
     i++
}
console.log(newArray)

//DESAFIOS
//Desafio 1
0
00
000
0000

//Desafio 2
const num = Number(prompt("Ecolha seu número, Jogador 1"))
console.log("Vamos jogar")
const palpite = Number(prompt("Qual o seu palpite"))
console.log("O número chutado foi " + palpite)
while (num !== palpite) {
    if (num < palpite) {
        console.log ("Errrrou. O número escolhido é menor")
        palpite
    }
    else if (num > palpite) {
        console.log("Errrrou. O número escolhido é maior")
        palpite
    }
}
console.log("Parabéns! Você acertou!! Quer uma medalha?")

//Desafio 3
