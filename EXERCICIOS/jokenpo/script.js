const confirmar = document.querySelector("#confirmar")
const res = document.querySelector("#res")
const radios = document.querySelectorAll("input[name='jokenpo']")
let selecionado = false

const opcoes = ['PEDRA', 'PAPEL', 'TESOURA']

confirmar.addEventListener('click', () => {
    res.innerHTML = ''

    radios.forEach(radio => {
        if (radio.checked) {
            selecionado = String(radio.id).toUpperCase()
        }
    })

    if (!selecionado) {
        alert("Por favor, selecione uma opção antes de confirmar."); return
    }

    const escolha_maquina = opcoes[Math.floor(Math.random() * opcoes.length)]

    jokenpo(selecionado, escolha_maquina)
})

function jokenpo(jogador, maquina) {

    if (jogador === maquina) {
        res.innerHTML =
            `
                Escolha da máquina: ${maquina}
                <br> Empate.
            `
        return
    }

    const condicoes = (jogador == 'PEDRA' && maquina == 'TESOURA') || (jogador == 'PAPEL' && maquina == 'PEDRA') || (jogador == 'TESOURA' && maquina == 'PAPEL')

    if (condicoes) {
        res.innerHTML =
            `
                Escolha da máquina: ${maquina}
                <br> Você ganhou.
            `
        return
    }

    res.innerHTML =
        `
            Escolha da máquina: ${maquina}
            <br> Você perdeu. Tente de novo!
        `
    return
}
