const velocRadar = document.querySelector("#velocRadar")
const velocVeiculo = document.querySelector("#velocVeiculo")
const btnCalcular = document.querySelector("#calcular")
const res = document.querySelector("#res")

btnCalcular.addEventListener('click', calcular)


function calcular() {
    res.innerHTML = ''
    
    const radar = Number(velocRadar.value)
    const veiculo = Number(velocVeiculo.value)
    
    if (velocRadar.value === '' || velocVeiculo.value === '') {
        alert('Preencha os campos corretamente!'); return
    }

    if (veiculo < 0) {
        alert('Insira uma velocidade válida'); return
    }

    const limite = limiteRadar(radar)

    const text = 
        `
            <p>Sua velocidade: ${veiculo}Km/h</p>
            <p>Limite aceito pelo radar: ${limite}Km/h</p>
        `

    const excesso = veiculo - limite

    const formatacao =  excesso % 1 === 0 ? excesso : excesso.toFixed(1)

    veiculo > limite
    ? res.innerHTML =  
        `
            ${text}
            <span style="color: red; font-weight: bold;">Você recebeu multa por estar ${formatacao} Km/h acima do limite.</span>
        `
    : res.innerHTML = 
        `
            ${text}
            <span style="color: green; font-weight: bold;">Você não recebeu multa.</span>
        `
}

function limiteRadar(velocidade) {
    const limite =  velocidade < 100 ? velocidade + 7 : velocidade + (velocidade*0.07)
    return limite
}

//FIXME - colocar o valor da multa