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

let cartasUsuario
let cartasUTexto
let somaUsuario = 0
let cartasComputador
let cartasCTexto
let somaComputador = 0
let vencedor

function pergunta1() {
   return confirm('Quer iniciar uma nova rodada?')
}

function pergunta2() {
   return confirm("Suas cartas são: " + cartasUTexto + " " + ". A carta revelada do computador é: " +
      cartasCTexto[0] + ". Deseja comprar mais uma carta?")
}

if (pergunta1()) {
   while (((somaUsuario === 0 && somaComputador === 0)) || ((somaUsuario > 21 || somaComputador > 21))) {
      cartasUsuario = []
      cartasUsuario.push(comprarCarta(), comprarCarta())
      cartasUTexto = []
      cartasUTexto.push(cartasUsuario[0].texto, cartasUsuario[1].texto)
      somaUsuario = 0
      somaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor

      cartasComputador = []
      cartasComputador.push(comprarCarta(), comprarCarta())
      cartasCTexto = []
      cartasCTexto.push(cartasComputador[0].texto, cartasComputador[1].texto)
      somaComputador = 0
      somaComputador = cartasComputador[0].valor + cartasComputador[1].valor
   }
   while (somaUsuario <= 21 && pergunta2()) {
      cartasUsuario.push(comprarCarta())
      cartasUTexto.push(cartasUsuario[cartasUsuario.length - 1].texto)
      somaUsuario = somaUsuario + cartasUsuario[cartasUsuario.length - 1].valor
   }
   while (somaComputador < somaUsuario) {
      cartasComputador.push(comprarCarta())
      cartasCTexto.push(cartasComputador[cartasComputador.length - 1].texto)
      somaComputador = somaComputador + cartasComputador[cartasComputador.length - 1].valor
   }
   if (somaUsuario <= 21 && (somaUsuario > somaComputador || somaComputador > 21)) {
      alert("Suas cartas são " + cartasUTexto + ". Sua pontuação é " + somaUsuario + ". " +
         "As cartas do computador são " + cartasCTexto + ". A pontuação do computador é " + somaComputador +
         ". O usuário ganhou")
   }
   else if (somaComputador <= 21 && (somaComputador > somaUsuario || somaUsuario > 21)) {
      alert("Suas cartas são " + cartasUTexto + ". Sua pontuação é " + somaUsuario + ". " +
         "As cartas do computador são " + cartasCTexto + ". A pontuação do computador é " + somaComputador +
         ". O computador ganhou")
   }
   else {
      alert("Suas cartas são " + cartasUTexto + ". Sua pontuação é " + somaUsuario + ". " +
         "As cartas do computador são " + cartasCTexto + ". A pontuação do computador é " + somaComputador +
         ". O jogo terminou empatado")
   }
}
else {
   console.log('fim de jogo')
}