const confirmar = document.querySelector("#confirmar")
const radios = document.querySelectorAll("input[name='jokenpo']")
const res = document.querySelector("#res")

confirmar.addEventListener('click', () => {
    radios.forEach(radio => {
        if (radio.checked) {
            selecionado = String(radio.id)
        }
    })

    if (selecionado === null) {
        alert("Por favor, selecione uma opção antes de confirmar."); return
    }

    res.innerHTML = `${selecionado.toUpperCase()}`
})