import comprarCarta from './naoMexer.js'
// NÃO REMOVA ESTA LINHA

/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Bem-vindo ao jogo de Blackjack!")
let perg1 = confirm("Quer iniciar uma nova rodada?")
let cartasUTexto = [comprarCarta().texto, comprarCarta().texto]
let cartasUValor = [comprarCarta().valor, comprarCarta().valor]
let cartasCTexto = [comprarCarta().texto]
let novaCarta = comprarCarta()
let somaU = cartasUValor[0] + cartasUValor[1]

if (perg1) {
   const perg2 = "Suas cartas são: " + cartasUTexto + " " +  ". A carta revelada do computador é: "+ 
   cartasCTexto[0] + ". Deseja comprar mais uma carta?"
   confirm(perg2)
   while (perg2 && somaU <= 21)
   cartasUTexto.push(novaCarta.valor)
   somaU += novaCarta.valor
   confirm(perg2)


}

else {
   console.log("O jogo acabou")
}