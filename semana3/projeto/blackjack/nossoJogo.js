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
let cartas = [comprarCarta(), comprarCarta(), comprarCarta(), comprarCarta()]
let soma1 = Number(cartas[0].valor) + Number(cartas[1].valor)
let soma2 = Number(cartas[2].valor) + Number(cartas[3].valor)
if (perg1) {
   console.log("Usuário - cartas: " + cartas[0].texto + " " + cartas[1].texto + " - pontuação " + soma1)
   console.log("Computador - cartas: " + cartas[2].texto + " " + cartas[3].texto + " - pontuação " + soma2)
      if (soma1 > soma2 ) {
         console.log("O usuário ganhou!")
      }
      else if (soma1 < soma2) {
         console.log("O computador ganhou!")
      }
      else if (soma1 === soma2) {
         console.log("Empate!")
      }
}
else {
   console.log("O jogo acabou")
}