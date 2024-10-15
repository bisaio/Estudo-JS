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

    if (isNaN(inicio) || isNaN(fim) || isNaN(passo)) {
        alert("todos os campos devem ser preenchidos")
        return
    }

    if (passo === 0) {
        inicio <= fim ? passo = 1 : passo = -1;
        alert(`O passo nao pode ser igual a zero, ${inicio <= fim ? 'passado para 1' : 'passado para -1'}`)
    }

    if (inicio > fim && passo > 0) {
        alert("O passo nao pode ser maior ou igual a zero em contagens decrescentes")
        return
    }

    let text = ""

    if (inicio <= fim) {
        for (let i = inicio; i <= fim; i += passo) {
            text += `${i} ➡ `
            
            if (i + passo > fim) {
                text += "🏁"
            }
        }
    } else {
        for (let i = inicio; i >= fim; i += passo) {
            text += `${i} ➡ `
            
            if (i + passo < fim) {
                text += "🏁"
            }
        }
    }

    resultado.innerHTML = text
}