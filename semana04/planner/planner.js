
// let terefasTerça = 
// let terefasQuarta = 
// let terefasQuinta = 
// let terefasSexta = 
// let terefasSabado = 
// let terefasDomingo =
// if (diasSemana.value === "segunda") {
//     
// } 

function registrarTarefas(){
    const diasSemana = document.getElementById("Dias da semana")
    const tarefaSegunda = document.getElementById("lista-segunda")
    const tarefaTerça = document.getElementById("lista-terça")
    const tarefaQuarta = document.getElementById("lista-quarta")
    const tarefaQuinta = document.getElementById("lista-quinta")
    const tarefaSexta = document.getElementById("lista-sexta")
    const tarefaSabado = document.getElementById("lista-sabado")
    const tarefaDomingo = document.getElementById("listadomingo")
    const input = document.querySelector("input")
    const novaTarefa = input.value
    if (novaTarefa === "") {
        confirm("Campo vazio. Vamos preencher?")
    }
    else {
        switch (diasSemana.value){
            case "segunda":
                tarefaSegunda.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "terça":
                tarefaTerça.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "quarta":
                tarefaQuarta.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "quinta":
                tarefaQuinta.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "sexta":
                tarefaSexta.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "sabado":
                tarefaSabado.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
            case "domingo":
                tarefaDomingo.innerHTML += "<li><a href='#'>" + novaTarefa +"</a></li>"
                break;
    }
    input.value = ""
}
}

function esvaziarLista(){
    const itemListas = document.getElementsByTagName("li")
    itemListas.innerHTML = ""
}
