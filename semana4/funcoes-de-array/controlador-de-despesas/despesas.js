class Despesa {
    constructor(valor, tipo, descriçao) {
        this.valor = valor
        this.tipo = tipo
        this.descriçao = descriçao
    }
}

let arraydados = []

function inserirDespesa(novoValor, novoTipo, novaDesc){
    const sessaoDespesas = document.querySelector("div")
    const ValorTotal = Number(document.getElementById("valorsomado"))
    sessaoDespesas.innerHTML += "<p> $" + novoValor + ",00 </p><ul><li>" + novoTipo + 
    "</li><li>" + novaDesc + "</li></ul>"
    ValorTotal.innerHTML + novoValor
}

function cadastrarDespesa() {

    const valorDespesa = Number(document.getElementById("valordesp").value)
    const tipoDespesa = document.getElementById("tipodesp").value
    const descriçaoDespesa = document.getElementById("descriçaodesp").value

    if (valorDespesa === "" || tipoDespesa === "" || descriçaoDespesa === ""){
        confirm("Preencha todos os campos do formulário, para poder cadastrar a sua despesa")
    }
    else {
    const novaDespesa = new Despesa(valorDespesa, tipoDespesa, descriçaoDespesa)
    console.log(novaDespesa)

    //Não consegui somar tudo de uma vez
    arraydados.push(novaDespesa)
    console.log(arraydados)
   
    inserirDespesa(novaDespesa.valor, novaDespesa.tipo, novaDespesa.descriçao)

    //Só apaga um por um
    let semValor = document.getElementById("valordesp")
    semValor.value = ""
    let semTipo = document.getElementById("tipodesp")
    semTipo.value = ""
    let semDesc = document.getElementById("descriçaodesp")
    semDesc.value = ""
    }

}

function filtragem(){
    const tipoDespesa2 = document.getElementById("tipodesp2").value
    const valorMaximo = Number(document.getElementById("valormax").value)
    const valorMinimo = Number(document.getElementById("valormin").value)
    console.log(arraydados)
    const filtroso = arraydados.filter((desp, index, array) => {
        return desp.tipo === tipoDespesa2 && desp.valor >= valorMinimo && desp.valor <= valorMaximo
            
        }
    )
    console.log(filtroso)
    
    for (item of filtroso){
    let sessaoDespesas = document.querySelector("div")
    sessaoDespesas.innerHTML = "<p> $" + item.valor + ",00 </p><ul><li>" + item.tipo + 
    "</li><li>" + item.descriçao + "</li></ul>"
    }
}

// const valorDespesa = document.getElementById("valordesp").value
//     valorDespesa.InnerHTML = ""
// const tipoDespesa = document.getElementById("tipodesp").value  tipoDespesa, 
// desp.tipo === tipoDespesa2 && desp.valor >= valorMinimo && desp.valor <= valorMaximo
//let filtrado = documento.getElementById("displaydesp")