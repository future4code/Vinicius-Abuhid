/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
Exercício 1
O código recebe um numeral do usuário e transforma o tipo dele de string para número. A partir daí ele testa, por meio
da operação resto da divisão se aquele número é par ou ímpar. Se for par o comando de imprimir na tela a mensagem:
"Passou no teste", será executado. Se for ímpar o comando de imprimir a mensagem "Não passou no teste", será executado.

Exercício 2
a. O código em questão serve para imprimir na tela, uma mensagem de preço que corresponda com o nome da fruta digitado
pelo usuário.
b. O preço da fruta Maçã é R$ 2.25
c. 
d. O preço da fruta Pêra é R$ 5

Exercício 3
Nesse caso haverá erro e não haverá mensagem, pois a variável mensagem foi definida no escopo de um bloco específico, 
o que não é reconhecido pelo código fora desse bloco. Assim, a instrução de imprimir na tela o valor da variável
mensagem, não poderá ser cumprida, visto que, validamente, não lhe foi dado nenhum valor.
*/

//EXERCÍCIOS DE ESCRITA DE CÓDIGO
//Exercício 4
const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
if (num1>num2) {
    console.log (num1, num2)
} 
else {
    console.log(num2, num1)
} 

/*Se ambos os números forem iguais, é executada a instrução em que o número 1 não é maior do que o 2,
ou seja, a instrução decorrente de else. É imprimido primeiro o num2 e depois o num1.*/

const num1 = Number(prompt("Digite um número"))
const num2 = Number(prompt("Digite outro número"))
const num3 = Number(prompt("Só mais um por favor"))
if (num1>num2 && num2>num3){
    console.log(num1, num2, num3)
}
else if (num1>num3 && num3>num2){
    console.log(num1, num3, num2)
}
else if (num2>num1 && num1>num3) {
    console.log(num2, num1, num3)
}
else if (num2>num3 && num3>num1) {
    console.log(num2, num3, num1)
}
else if (num3>num2 && num2>num1) {
    console.log(num3, num2, num1)
}
else if (num3>num1 && num1>num2) {
    console.log(num3,num1,num2)
}
else {
    prompt("Pelo menos um dos números deve ser diferente")
} 

/* Não imprimiu nenhuma mensagem na tela, pois a condição de que todos os números fossem iguais, não gera nenhum
comando*/

//EXERCÍCIO 5
//a. https://1drv.ms/x/s!AsmWrZBi2nLIuw-vS56wyPVpNX0Q?e=5qVwrZ
//b.
const perg0 = prompt("Tem ossos?")
const perg1 = prompt("Tem pelo?")
const perg2 = prompt("É racional")
const perg3 = prompt("Tem penas")
const perg4 = prompt("É terrestre?")
const perg5 = prompt("Passa parte da vida na água")
if (perg0 === "não") {
    console.log("Classificação final: invertebrado")
}
else if (perg0 === "sim" && perg1 === "sim" && perg2 === "sim") {
    console.log("Classificação final: Ser humano")
}
else if (perg0 === "sim" && perg1 === "sim" && perg2 === "não") {
    console.log ("classificação final: mamífero não humano")
}
else if (perg0 === "sim" && perg1 ==="não" && perg3 === "sim"){
    console.log("Classificação final: ave")
}
else if (perg0 === "sim" && perg1 ==="não" && perg3 === "não" && perg4 === "sim"){
    console.log("Classificação final: Peixe")
}
else if (perg0 === "sim" && perg1 ==="não" && perg3 === "não" && perg4 === "não" && perg5 === "sim"){
    console.log("Classificação final: Anfíbio")
}
else if (perg0 === "sim" && perg1 ==="não" && perg3 === "não" && perg4 === "não" && perg5 === "não"){
    console.log("Classificação final: Réptil")
}