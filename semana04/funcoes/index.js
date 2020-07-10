/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO
EXERCÍCIO 1 
a. []
b.[0, 1, 0, 1, 2, 3,]
c. [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]

EXERCÍCIO 2
a. 0
2
b. Funcionaria do mesmo jeito, pois o comparador === também é utilisado para comparar números

EXERCÍCIO 3
A função em questão, recebe uma array e devolve uma nova. No escopo da função são declaradas 3 variáveis:
a 1a e a 2a são números e a 3a uma nova array. Além disso, um loop faz operações numéricas entre a 1a e 2a
variáveis e os elementos da array dada. Após esse loop o novo valor numérico que assum a 1a e 2a variávies, 
são incorporados à 3a, formando assim uma nova array.
Eu chamaria essa função de "devolveUmaNovaArray"
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 4
// a.
function idadeCachorro (anoshumanos) {
    return anoshumanos*7;
}
console.log(idadeCachorro(5))
// b.
function dadosPessoa (nome, idade, endereço, estudante) {
    if (estudante === "sim") {
        return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e sou estudante."
    }
    else {
        return "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + endereço + " e não sou estudante."
    }
}
console.log (dadosPessoa("Vinicius", 27, "av Paulo Camilo Pena", "não"))

// EXERCÍCIO 5
function conversaoAnoSeculo (ano) {
    let sec = ""
    if (ano >= 1000 && ano < 1100) {
        sec = "século XI"
    }
    else if (ano >= 1100 && ano < 1200) {
        sec = "século XII"
    }
    else if (ano >= 1200 && ano < 1300) {
        sec = "século XIII"
    }
    else if (ano >= 1300 && ano < 1400) {
        sec = "século XIV"
    }
    else if (ano >= 1400 && ano < 1500) {
        sec = "século XV"
    }
    else if (ano >= 1500 && ano < 1600) {
        sec = "século XVI"
    }
    else if (ano >= 1600 && ano < 1700) {
        sec = "século XVII"
    }
    else if (ano >= 1700 && ano < 1800) {
        sec = "século XVIII"
    }
    else if (ano >= 1800 && ano < 1900) {
        sec = "século XVIV"
    }
    else if (ano >= 1900 && ano < 2000) {
        sec = "século XX"
    }
    else if (ano >= 2000 && ano < 2100) {
        sec = "século XXI"
    }
        

    return  "O ano " + ano + " pertence ao" + sec
}
console.log(conversaoAnoSeculo(1564))

// EXERCÍCIO 6
// a.
function arrayElementos (array) {
    return  array.length
}
console.log(arrayElementos([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))
//b.
function numeroParidade (numero) {
    let paridade = ""
    if (numero % 2 === 0){
        paridade = "O número é par"
    }
    else {
        paridade = "O número é ímpar"
    }
    return paridade
}
console.log(numeroParidade(19))
//c. 
function quantidadeNumPares (array) {
    let numpares = 0
    for (num of array)
    if (num % 2 === 0)
    numpares ++
    return  numpares
}
console.log(quantidadeNumPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))
// d.
function quantidadeNumPares (array) {
    let numpares = 0
    for (num of array)
    if (numeroParidade === "O número é par")
    numpares ++
    return  numpares
}
console.log(quantidadeNumPares([10, 23, 45, 78, 90, 52, 35, 67, 84, 22]))