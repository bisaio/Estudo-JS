const letra = document.querySelector("#letra")
const res = document.querySelector("#res")
const confirm_word = document.querySelector("#confirm_word")
const confirm_letter = document.querySelector("#confirm_letter")
const word = document.querySelector("#div_word")
const letter = document.querySelector("#div_letter")

confirm_word.addEventListener("click", forca)

function forca() {
    word.style.display = 'none'
    letter.style.display = 'block'

    res.innerHTML = `FORCA`
}

//FIXME - implementar a possibilidade de escolher entre inserir a palavra ou colocar palavras pre-selecionadas
