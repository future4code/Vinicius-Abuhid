class post {
    constructor(autor, email, titulo, conteudo) {
        this.autor = autor
        this.email = email
        this.titulo = titulo
        this.conteudo = conteudo
    }

}

function criarPost() {
    const titulopost = document.getElementById("titulo").value
    const nomeautor = document.getElementById("autor").value
    const emailautor = document.getElementById("email").value
    const conteudopost = document.getElementById("conteudo").value
    let novoPost = new post(titulopost, nomeautor, emailautor, conteudopost)
    console.log(novoPost)
}