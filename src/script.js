function mandar(){
    var nome = document.getElementById("nome").value
    var email = document.getElementById("email").value
    var contato = document.getElementById("contato").value

    var conteudo = "olá\n"
    conteudo+="nome:" + nome +"\n"
    conteudo +="email:" + email +"\n"
    conteudo +="whatsapp:" + contato +"\n"


     
    var link =`https://api.whatsapp.com/${contato}?text=${encodeURIComponent(conteudo)}`
    window.open(link, "_blank")
}