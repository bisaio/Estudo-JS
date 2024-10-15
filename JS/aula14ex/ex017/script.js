class Elementos {
    /** @return {HTMLInputElement} */
    static get inputNumero() {
        return document.querySelector("#numero")
    }

    /** @return {HTMLButtonElement} */
    static get buttonGerar() {
        return document.querySelector("#gerar")
    }

    /** @return {HTMLSelectElement} */
    static get selectTabuada() {
        return document.querySelector("#tabuada")
    }
}

Elementos.buttonGerar.addEventListener('click', gerarTabuada)

let item = document.createElement('option')
item.text = 'Escolha um numero'
Elementos.selectTabuada.appendChild(item)

function gerarTabuada() { 
    let numero = Number(Elementos.inputNumero.value)

    if (Elementos.inputNumero.value === ""){
        alert("preencha o campo de número")
    } else {
        Elementos.selectTabuada.innerHTML = ""

        for(i = 1; i <= 10; i++) {
            let item = document.createElement('option')
            item.text = `${numero} x ${i} = ${numero * i}`
            Elementos.selectTabuada.appendChild(item)
        }
    }


}