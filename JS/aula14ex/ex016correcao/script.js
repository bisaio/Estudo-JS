function contar() {
    let inicio = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (inicio.value == '' || fim.value === '' || passo.value === '') {
        //na aula a verificação é feita com == 0, mas ao verificar no console.log, a variavel.value.lenght era igual a UNDEFINED sempre
        // troquei apenas para value e verifiquei se o valor recebido era uma string vazia
        res.innerHTML = 'Impossível contar' //IÇAMENTO - mostra primeiro o alert mesmo colocando depois
        // window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1;
        }

        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{27A1}`//unicode emoji de seta  --> só funciona com crase
            }
        } else {
            //Contagem decrescente
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F3C1}` //unicode emoji de bandeira
    }
}