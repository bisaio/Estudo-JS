const numero = document.querySelector("#numero")
const res = document.querySelector("#res")
const calcular = document.querySelector("#calc")

calcular.addEventListener('click', fibonacci)

function fibonacci() {
    res.innerHTML = ''

    if (numero.value === '') {
        alert('Preencha o campo corretamente!'); return
    }

    if (numero.value <= 0) {
        alert('insira um valor válido!'); return
    }

    if (numero.value % 1 != 0) {
        alert('Insira um número inteiro.'); return
    }

    const num = numero.value
    let sequence = 1
    let add = 0
    let hold = 0
    
    for (i = 1; i <= num; i++) {
        res.innerHTML += `${sequence} `
        hold = sequence
        sequence += add
        add = hold
    }
}

//FIXME - tentar fazer de forma recursiva