const letra = document.querySelector("#letra")
const palavra = document.querySelector("#palavra")
const res = document.querySelector("#res")
const confirm_word = document.querySelector("#confirm_word")
const confirm_letter = document.querySelector("#confirm_letter")
const word = document.querySelector("#div_word")
const letter = document.querySelector("#div_letter")

confirm_word.addEventListener("click", palavraForca)

function palavraForca() {
    word.style.display = 'none'
    letter.style.display = 'block'

    const chosenWord = palavra.value.split('')
    res.innerHTML = `${'_ '.repeat(chosenWord.length)}`

    confirm_letter.addEventListener("click", () => {
        letraForca(chosenWord)
    })
}

function letraForca(palavra) {
    const chosenLetter = letra.value
    let resultado = ""

    for (let posicao in palavra) {
        if (chosenLetter == palavra[posicao]){
            resultado += `<br>letra ${chosenLetter} encontrado na posição ${parseInt(posicao) + 1}`
        } 

        res.innerHTML = resultado
    }
}
//FIXME - implementar a possibilidade de escolher entre inserir a palavra ou colocar palavras pre-selecionadas
