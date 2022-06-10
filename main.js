const resposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const botaoPerguntar = document.querySelector("#botaoPerguntar")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas.",
    "Pergunte novamente mais tarde",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minha fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perpectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim!",
    "Concentre-se e pergunte novamente",
    "Sinais apontam que sim.",
]

function fazerPergunta() {
    resposta.style.opacity = 1
    botaoPerguntar.setAttribute("disabled", true)

    if(inputPergunta.value == "") {
        resposta.innerHTML = "Digite sua pergunta!"
        setTimeout(function() {
            resposta.style.opacity = 0
            botaoPerguntar.removeAttribute("disabled")
        }, 2000)
        return
    }

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    resposta.innerHTML = pergunta + respostas[numeroAleatorio]

    setTimeout(function() {
        resposta.style.opacity = 0
        botaoPerguntar.removeAttribute("disabled")
    }, 3000)
}

