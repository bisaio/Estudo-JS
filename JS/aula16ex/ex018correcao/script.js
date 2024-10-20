let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let valores = []

function isNumero(num) {
    if (Number(num) >= 1 && Number(num) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(num, lista) {
    if (lista.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valore ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        alert("Valor inválido ou já encontrado na lista.")
    }

    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for (let posicao in valores) {
            soma += valores[posicao]
            if (valores[posicao] > maior)
                maior = valores[posicao]
            if (valores[posicao] < menor)
                menor = valores[posicao]
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}