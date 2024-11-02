const input_a = document.querySelector("#a")
const input_b = document.querySelector("#b")
const input_c = document.querySelector("#c")
const res = document.querySelector("#res")
const confirmar = document.querySelector("#confirmar")
const canvas = document.querySelector("#canvas")

confirmar.addEventListener('click', verificar)

function verificar() {
    res.innerHTML = ''

    const a = parseInt(input_a.value)
    const b = parseInt(input_b.value)
    const c = parseInt(input_c.value)

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Preencha os campos corretamente.'); return
    }

    if (a <= 0 || b <= 0 || c <= 0) {
        alert('Não é possível formar um triângulo a partir de um lado 0 ou negativo. Preencha os campos com valores válidos.'); 
        canvas.style.display = 'none';
        return
    }

    if ((a < (b + c)) && (b < (c + a)) && (c < (a + b))) {
        triangle(a, b, c)
    } else {
        res.innerHTML = "<center>Não é possível formar um triângulo com os valores informados! Siga as regras citadas acima.</center>"
        canvas.style.display = 'none';
    }
}

function triangle(a, b, c) {
    let color = ''

    if ((a == b) && (b == c)) {
        res.innerHTML = 'TRIÂNGULO EQUILÁTERO'
        color = 'red'
    } else if ((a == b) || (b == c) || (a == c)) {
        res.innerHTML = 'TRIÂNGULO ISÓCELES'
        color = 'green'
    } else {
        res.innerHTML = 'TRIÂNGULO ESCALENO'
        color = 'blue'
    }

    const p = (a + b + c) / 2
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c))

    res.innerHTML += `<br> ÁREA = ${area.toFixed(2)}`

    draw(a, b, c, color)
}

function draw(a, b, c, color) {
    const ctx = canvas.getContext("2d")

    canvas.style.display = 'block'

    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maxSide = Math.max(a, b, c)
        const margin = 25
        const scaleFactor = (canvas.width - margin * 2) / maxSide

        const sideA = a * scaleFactor
        const sideB = b * scaleFactor
        const sideC = c * scaleFactor

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2 + margin

        const xC = centerX - sideC / 2
        const yC = centerY + sideC / 3
        ctx.beginPath()
        ctx.moveTo(xC, yC)

        const xB = xC + sideC, yB = yC
        ctx.lineTo(xB, yB)

        const angle = Math.acos((sideA ** 2 + sideC ** 2 - sideB ** 2) / (2 * sideA * sideC))
        const xA = xC + Math.cos(angle) * sideA
        const yA = yC - Math.sin(angle) * sideA
        ctx.lineTo(xA, yA)

        ctx.closePath()

        ctx.fillStyle = color
        ctx.fill();
    } else {
        canvas.innerHTML = 'O navegador não suporta o Canvas.'
    }
}