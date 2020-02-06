class post {
    constructor(titulo, autor, email, imagem, conteudo) {
        this.titulo = titulo
        this.autor = autor
        this.email = email
        this.imagem = imagem
        this.conteudo = conteudo
    }

}

function criarPost() {
    let titulopost = document.getElementById("titulo").value
    let nomeautor = document.getElementById("autor").value
    let emailautor = document.getElementById("email").value
    let imagempost = document.getElementById("image").value
    let conteudopost = document.getElementById("conteudo").value
    let array = []
    
    let novoPost = new post(titulopost, nomeautor, emailautor, imagempost, conteudopost)
    console.log(novoPost)

    array.push(novoPost.autor, novoPost.email, novoPost.titulo, novoPost.imagem, novoPost.conteudo)
    console.log(array)
    // Tentei várias maneiras mais simples, para apagar os inputs, mas não sei porque, nenhuma funcionou
    //ex: let campos = document.getElementsByClassName(campo).value  campos.innerHTML = ""
    let semTitulo = document.getElementById("titulo")
    semTitulo.value = ""
    let semAutor = document.getElementById("autor")
    semAutor.value = ""
    let semEmail = document.getElementById("email")
    semEmail.value = ""
    let semImagem = document.getElementById("image")
    semImagem = ""
    let semConteudo = document.getElementById("conteudo")
    semConteudo.value = ""
}
   
    // postPublicado.innerHTML += "<h3>" + novoPost.titulo + "</h3>" + "<h3>" + novoPost.autor + "</h3>" + 
    // "<p>" + novoPost.email + "</p>" + "<p>" + novoPost.conteudo + "</p>"
