class Elementos {

    /** @returns {HTMLInputElement} */
    static get inputInicio() {
        return document.querySelector("#inicio")
    }

    /** @returns {HTMLInputElement} */
    static get inputFim() {
        return document.querySelector("#fim")
    }

    /** @returns {HTMLInputElement} */
    static get inputPasso() {
        return document.querySelector("#passo")
    }

    /** @returns {HTMLButtonElement} */
    static get buttonContar() {
        return document.querySelector("#contar")
    }

}



Elementos.buttonContar.addEventListener('click', contarPassos)

function contarPassos() {
    let inicio = parseInt(Elementos.inputInicio.value)
    const fim = parseInt(Elementos.inputFim.value)
    let passo = parseInt(Elementos.inputPasso.value)


    if (inicio > fim) {
        alert("O inicio da contagem nao pode ser menor que o fim")
        return
    }

    if (passo == 0) {
        passo = 1
        alert("O passo nao pode ser igual a zero, passado para passo 1")
        return
    }

    if (passo >= fim) {
        alert("O passo nao pode ser maior ou igual que o fim")
        return
    }

    let text = ""

    for (let i = inicio; i <= fim; i += passo) {
        text += `${i} ➡`
        
        if (i + passo > fim) {
            text += "🏁"
        }
    }

    resultado.innerHTML = text
}


