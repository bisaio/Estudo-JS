const confirmar = document.querySelector("#confirmar")
const res = document.querySelector("#res")

confirmar.addEventListener('click', () => {
    const numeroAleatorio = Math.floor(Math.random() * 5) + 1

    const radios = document.querySelectorAll("input[name='radNum']")
    let selecionado

    radios.forEach(radio => {
        if (radio.checked) {
            selecionado = parseInt(radio.id)
        }
    })

    if (selecionado === null) {
        alert("Por favor, selecione um número antes de confirmar."); return
    }

    if (selecionado == numeroAleatorio) {
        res.innerHTML = `O numero gerado foi ${numeroAleatorio} <br> Você acertou!`
    } else {
        res.innerHTML = `O numero gerado foi ${numeroAleatorio} <br> Você errou!`
    }
})