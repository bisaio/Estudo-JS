const numero = document.querySelector("#numero")
const res = document.querySelector("#res")
const calc = document.querySelector("#calc")

calc.addEventListener('click', calcular)

function calcular() {
    res.innerHTML = ''

    if (numero.value === '') {
        alert('Preencha o campo corretamente!'); return
    }

    if (numero.value < 0) {
        alert('Não é possível realizar um calculo fatorial com numeros negativos.'); return
    }

    if (numero.value % 1 != 0) {
        alert('Insira um número inteiro.'); return
    }

    const num = Number(numero.value)

    let hold = `${num}! = `
    for(let i = num; i > 1; i--) {
        hold += `${i} x `
    }
    hold += '1'

    res.innerHTML = `${hold}`
    res.innerHTML += `<br><span style="color: green; font-weight: bold;">Resultado: ${fatorial(num)}<span>`
}

function fatorial(num) {
    if (num == 0 || num == 1) {
        return num
    } else {
        return num * fatorial(num - 1)
    }
}