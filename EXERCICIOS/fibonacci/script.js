const numero = document.querySelector("#numero")
const res = document.querySelector("#res")
const calcular = document.querySelector("#calc")

calcular.addEventListener('click', fibonacci)

function fibonacci() {
    res.innerHTML = ''

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