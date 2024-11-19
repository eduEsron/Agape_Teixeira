let contato = document.getElementById("contatoLink")
function getContato() {
    if (window.innerWidth <= 600) {
        contato.href = "https://www.instagram.com/menonita_agape/"
    }
}
contato.addEventListener("click", getContato)
window.addEventListener("load", function(){
    if (window.innerWidth <= 600) {
    contato.textContent ="Instagram"
    }
    else{
        contato.textContent ="Contatos"
    }
})
window.addEventListener("resize", function(){
    if (window.innerWidth <= 600) {
    contato.textContent ="Instagram"
    }
    else{
        contato.textContent ="Contatos"
    }
})

