let contato1 = document.getElementById("contato1")
let contato2 = document.getElementById("contato2")
let contato3 = document.getElementById("contato3")
let contato4 = document.getElementById("contato4")
window.addEventListener("load", function(){
    if (window.innerWidth <= 600) {
    contato1.textContent = "Email"
    contato2.textContent = "Grupo de Avisos"
    contato3.textContent = "Instagram"
    contato4.textContent = "Facebook"
    }
    else{
    contato1.textContent = "Email: menonitaagapeteixeira@gmail.com"
    contato2.textContent = "Grupo de Avisos: chat.whatsapp.com/GRbpBaswXWZ5Xe6CUC8X2C"
    contato3.textContent = "Instagram: @menonita_agape"
    contato4.textContent = "Facebook: Igreja Menonita Ágape - Teixeira Soares"
    }
})
window.addEventListener("resize", function(){
    if (window.innerWidth <= 600) {
    contato.textContent ="Instagram"
    contato1.textContent = "Email"
    contato2.textContent = "Grupo de Avisos"
    contato3.textContent = "Instagram"
    contato4.textContent = "Facebook"
    }
    else{
        contato1.textContent = "Email: menonitaagapeteixeira@gmail.com"
        contato2.textContent = "Grupo de Avisos: chat.whatsapp.com/GRbpBaswXWZ5Xe6CUC8X2C"
        contato3.textContent = "Instagram: @menonita_agape"
        contato4.textContent = "Facebook: Igreja Menonita Ágape - Teixeira Soares"
    }
})

//
