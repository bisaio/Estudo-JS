function carregar() {
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imagem')

    var data = new Date()
    var hora = data.getHours()
    // var hora = 8

    msg.innerHTML = `Agora são <strong>${hora}h<strong>`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'img/lain_dia.gif'
        document.body.style.background = '#ccced6'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'img/lain_tarde.gif'
        document.body.style.background = '#cabc98'
    } else {
        //BOA NOITE
        img.src = 'img/lain_noite.gif'
        document.body.style.background = '#182552'
    }
}