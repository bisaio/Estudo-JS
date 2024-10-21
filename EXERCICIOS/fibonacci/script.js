const numero = document.querySelector("#numero")
const res = document.querySelector("#res")
const calcular = document.querySelector("#calc")

calcular.addEventListener('click', fibonacci)

function fibonacci() {
    res.innerHTML = ''

    const num = numero.value
    let fibo = 1
    let add = 0
    
    for (i = 1; i <= num; i++) {
        res.innerHTML += `${fibo} `
        fibo += add
        add = fibo
        console.log(add); //FIXME - ajeitar a sequencia (5 = 1 1 2 3 5)
    }
}
