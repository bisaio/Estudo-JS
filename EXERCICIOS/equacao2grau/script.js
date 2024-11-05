const input_a = document.querySelector("#a")
const input_b = document.querySelector("#b")
const input_c = document.querySelector("#c")
const confirmar = document.querySelector("#confirmar")
const res = document.querySelector("#res")

confirmar.addEventListener('click', raiz)

function raiz() {
    res.innerHTML = ''

    const a = parseInt(input_a.value)
    const b = parseInt(input_b.value)
    const c = parseInt(input_c.value)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Coeficientes inválidos.'); return;
    }

    if (a == 0) {
        alert('A equação não é do 2º grau, pois o coeficiente A é igual a zero.'); return;
    }

    res.innerHTML = `EQUAÇÃO = ${a}x² + ${b}x + ${c} = 0`

    const delta = b * b - 4 * a * c

    if (delta < 0) {
        res.innerHTML += `<br>Δ = ${delta}, NEGATIVO`
    } else {
        const x1 = (-b + (Math.sqrt(delta))) / (2*a)
        const x2 = (-b - (Math.sqrt(delta))) / (2*a)
        res.innerHTML += `<br>X1 = ${x1.toFixed(2)} <br>X2 = ${x2.toFixed(2)}`
    }
}