function verificar() {
    const data = new Date()
    const ano = data.getFullYear() //pega o ano com 4 digitos
    const formularioAno = document.querySelector("#txtano")
    const res = document.querySelector("div#res")

    if (formularioAno.value.length == 0 || formularioAno.value > ano) {
        alert('[ERRO] Ano inválido. Verifique os dados e tente novamente!')
    } else {
        // const formularioSexo = document.getElementsByName('radsex')
        const formularioSexo = document.querySelector("input[name='radsex']:checked")
        //:checked --> Esse seletor retorna o botão de rádio dentro do grupo radsex que está atualmente marcado
        const idade = ano - Number(formularioAno.value)
        let genero = ''
        //fazendo a imagem de forma dinamica direto pelo JS ao invés de fazer no HTML
        const img = document.createElement('img') //cria uma tag img
        img.setAttribute('id', 'foto') //o img é criado com um id="foto"
        img.setAttribute('class', 'circular-img') // adicionado uma classe ao img

        if (formularioSexo.value === 'masc') {
            genero = 'Homem'

            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'img/bebe_tossindo.jpg')
            } else if (idade < 15) {
                //crianca
                img.setAttribute('src', 'img/anthonyjr_soprano.jpg')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'img/christopher_moltisanti.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/tony_soprano.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/junior_soprano.jpg')
            }
        } else if (formularioSexo.value === 'fem') {
            genero = 'Mulher'

            if (idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src', 'img/bebe_f.jpg')
            } else if (idade < 15) {
                //crianca
                img.setAttribute('src', 'img/meadow_soprano.jpg')
            } else if (idade < 30) {
                //jovem
                img.setAttribute('src', 'img/adriana_lacerva.jpg')
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'img/carmela_soprano.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/livia_soprano.jpg')
            }
        }

        res.style.textAlign = 'center' //forma de centralizar o texto direto pelo JS ao invés de usar CSS
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //adiciona um elemento apos o comando acimda
    }
}