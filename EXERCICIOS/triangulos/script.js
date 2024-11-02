const input_a = document.querySelector("#a")
const input_b = document.querySelector("#b")
const input_c = document.querySelector("#c")
const res = document.querySelector("#res")
const confirmar = document.querySelector("#confirmar")


confirmar.addEventListener('click', verificar)

function verificar() {
    res.innerHTML = ''

    const a = parseInt(input_a.value)
    const b = parseInt(input_b.value)
    const c = parseInt(input_c.value)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Preencha os campos corretamente.')
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        alert('Não é possível formar um triângulo a partir de um lado 0 ou negativo.'); return
    }

    if ((a < (b + c)) && (b < (c + a)) && (c < (a + b))) {
        triangle(a, b, c)
    } else {
        res.innerHTML = "<center>Não é possível formar um triângulo com os valores informados!</center>"
    }
}

function triangle(a, b, c) {

    if ((a == b) && (b == c)) {
        res.innerHTML = 'TRIÂNGULO EQUILÁTERO'
    } else if ((a == b) || (b == c) || (a == c)) {
        res.innerHTML = 'TRIÂNGULO ISÓCELES'
    } else {
        res.innerHTML = 'TRIÂNGULO ESCALENO'
    }

    const p = (a + b + c)/2
    const area = Math.sqrt(p*(p-a)*(p-b)*(p-c))

    res.innerHTML += `<br> ÁREA = ${area.toFixed(2)}`
}

//FIXME - TERMINAR O CANVAS
//https://www.ime.usp.br/~hitoshi/mac0420/notas/html/04-canvas.html
//https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
// function draw(a, b, c) {
//     const canvas = document.querySelector("#canvas")

//     if(canvas.getContext) {
//         const ctx = canvas.getContext("2d")

//         ctx.beginPath();
//     }
// }