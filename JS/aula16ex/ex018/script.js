class Elementos {
    /** @returns {HTMLInputElement} */
    static get inputNumero() {
        return document.querySelector("#numero")
    }

    /** @returns {HTMLButtonElement} */
    static get botaoAdicionar() {
        return document.querySelector("#adicionar")
    }

    /** @returns {HTMLSelectElement} */
    static get selectNumero() {
        return document.querySelector("#select_numero")
    }

    /** @returns {HTMLButtonElement} */
    static get botaoFinalizar() {
        return document.querySelector("#finalizar")
    }

    /** @returns {HTMLButtonElement} */
    static get botaoRemover() {
        return document.querySelector("#remover")
    }

    /** @returns {HTMLDivElement} */
    static get divRes() {
        return document.querySelector("#res")
    }
}

Elementos.botaoAdicionar.addEventListener('click', adicionarNum)
Elementos.botaoFinalizar.addEventListener('click', finalizar)
Elementos.botaoRemover.addEventListener('click', remover)

let lista = []

function adicionarNum() {
    const num = Number(Elementos.inputNumero.value)

    Elementos.divRes.innerHTML = ''

    if (Elementos.inputNumero.value === '') {
        alert('Por favor, digite um número!')
        return
    }

    if (num < 1 || num > 100) {
        alert('Por favor, digite um número dentro do intervalod e 1 e 100.')
        return
    }

    if (lista.indexOf(num) != -1) {
        alert(`o número ${num} já está na lista.`)
        return
    }

    lista.push(num)

    item = document.createElement('option')
    item.text = `Valor ${num} adicionado.`
    item.value = num
    Elementos.selectNumero.appendChild(item)
}

function finalizar() {
    if (lista.length == 0) {
        alert('A lista está vazia, adicione números à ela!')
        return
    }

    const soma = lista.reduce((acumulador, valor) => acumulador + valor, 0)

    Elementos.divRes.innerHTML = `<p>A lista é [${lista}].</p>`
    Elementos.divRes.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
    Elementos.divRes.innerHTML += `<p>O maior valor informado foi ${Math.max(...lista)}.</p>`
    Elementos.divRes.innerHTML += `<p>O menor valor informado foi ${Math.min(...lista)}.</p>`
    Elementos.divRes.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    Elementos.divRes.innerHTML += `<p>A média dos valores digitados é ${soma / lista.length}.</p>`

}

function remover() {
    Elementos.divRes.innerHTML = ''

    const num_removido = Elementos.selectNumero.options[Elementos.selectNumero.selectedIndex]

    if (!num_removido) {
        alert('Item não encontrado')
        return
    }

    Elementos.selectNumero.removeChild(num_removido)

    const index = lista.indexOf(Number(num_removido.value))

    if (index == -1) {
        alert('Item não encontrado')
        return
    }

    lista.splice(index, 1)
}
