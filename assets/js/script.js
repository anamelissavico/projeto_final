function sejaBemVindo(){
    alert("Seja Bem Vindo!")
}

function enviar(){
    var nomePessoa =(document.getElementById("Nome").value)
    var email = (document.getElementById("email").value) 
    var telefone=(document.getElementById("telefone").value)

    document.getElementById("confirmarDados").innerHTML = `Obrigada pelo seu contato ${nomePessoa}!
    Assim que possivel entraremos em contato no email: ${email} ou pelo telefone: ${telefone}`
}

