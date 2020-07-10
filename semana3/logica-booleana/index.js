    /* Exercícios de Interpretação de Código
Exercício 1
    a. false
    b. false
    c. true
    d. false
    e. boolean

    Exercício 2
    a. Array é um conjunto de elementos. É declarada da seguinte forma: uma variável, seja cons, let, ou var;
    o nome dessa variável, um sinal de = e os elementos todos entre []
    b. O index inicial de um array é sempre 0.
    c. nomeDaArray.lenght = número de elementos daquela array
    d. I. undefined
    II. null
    III. 11
    IV. 3 e 4
    V. 19 e 9
    VI. 3
    VII. 1

Exercícios de escrita de código
Exercício 1
a.  const respostaa = (77 - 32)*5/9 + 273.15
    console.log (respostaa + "k")

b.  const respostab = (80)*9/5+32
    console.log(respostab + "F")

c.  const respostac = (30)*9/5 + 32
    const respostacc = (respostac - 32)*5/9 + 273.15
    console.log(respostac + "F" + " " + "e" + " " + respostacc +"K")

d.  const respostad = prompt("Insira a quantidade de graus Celsius que deseja converter para Fahrenheits")
    console.log((respostad)*9/5 + 32 + "F")

Exercício 2
    const resposta1 = prompt("Qual o nome do seu cachorro?")
    console.log("Qual o nome do seu cachorro?" + " O meu cachorro se chama " + resposta1)
    const resposta2 = prompt("Qual a sua comida preferida?")
    console.log("Qual a sua comida preferida?" + " A minha comida preferida é " + resposta2)
    const resposta3 = prompt("Qual o seu felino preferido?")
    console.log("Qual o seu felino preferido?" + " O meu felino preferido é o " + resposta3)
    const resposta4 = prompt("Qual o seu filme de super-heroi preferido?")
    console.log("Qual o seu filme de super-heroi preferido?" + " O meu filme de super-heroi preferido é " + resposta4)
    const resposta5 = prompt("Se você fosse um pokemon, qual você seria?")
    console.log("Se você fosse um pokemon, qual você seria?" + " Se eu fosse um pokemon eu seria um " + resposta5)

Exercício 3
    const valorAPagar = 280*0.5
    console.log("R$"+valorAPagar)
    const Desconto =  valorAPagar*0.15
    console.log("R$" + (valorAPagar - Desconto))
*/
    let array
    console.log('I. ', array)
    
    array = null
    console.log('II. ', array)
    
    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('III. ', array.length)
    
    let i = 0
    console.log('IV. ', array[i], " e ", array[i+1])
    
    array[i+1] = 19
    const valor = array[i+6]
    console.log('V. ', array[i+1], " e ", valor)
    
    i+=1
    array[i] = array[i-1]
    console.log('VI. ', array[i])
    
    i = array.length - 1
    array[i] = array[i-3]
    const resultadoC = array[i]%array[1]
    console.log('VII. ', resultadoC)

    const respostaa = (77 - 32)*5/9 + 273.15
    console.log (respostaa + "k")

    const respostab = (80)*9/5+32
    console.log(respostab + "F")

    const respostac = (30)*9/5 + 32
    const respostacc = (respostac - 32)*5/9 + 273.15
    console.log(respostac + "F" + " " + "e" + " " + respostacc +"K")

    const respostad = prompt("Insira a quantidade de graus Celsius que deseja converter para Fahrenheits")
    console.log((respostad)*9/5 + 32 + "F")

    const resposta1 = prompt("Qual o nome do seu cachorro?")
    console.log("Qual o nome do seu cachorro?" + " O meu cachorro se chama " + resposta1)
    const resposta2 = prompt("Qual a sua comida preferida?")
    console.log("Qual a sua comida preferida?" + " A minha comida preferida é " + resposta2)
    const resposta3 = prompt("Qual o seu felino preferido?")
    console.log("Qual o seu felino preferido?" + " O meu felino preferido é o " + resposta3)
    const resposta4 = prompt("Qual o seu filme de super-heroi preferido?")
    console.log("Qual o seu filme de super-heroi preferido?" + " O meu filme de super-heroi preferido é " + resposta4)
    const resposta5 = prompt("Se você fosse um pokemon, qual você seria?")
    console.log("Se você fosse um pokemon, qual você seria?" + " Se eu fosse um pokemon eu seria um " + resposta5)

    const valorAPagar = 280*0.5
    console.log("R$"+valorAPagar)
    const Desconto =  valorAPagar*0.15
    console.log("R$" + (valorAPagar - Desconto))