class post {
    constructor(autor, email, titulo, conteudo) {
        this.autor = autor
        this.email = email
        this.titulo = titulo
        this.conteudo = conteudo
    }

}

function criarPost() {
    let titulopost = document.getElementById("titulo").value
    let nomeautor = document.getElementById("autor").value
    let emailautor = document.getElementById("email").value
    let conteudopost = document.getElementById("conteudo").value
    let campos = document.getElementsByClassName("campo").value
    let array = []
    
    let novoPost = new post(titulopost, nomeautor, emailautor, conteudopost)
    console.log(novoPost)
    
    array.push(novoPost.autor, novoPost.email, novoPost.titulo, novoPost.conteudo)
    console.log(array)

    document.getElementsByClassName("campo").value = ""
}