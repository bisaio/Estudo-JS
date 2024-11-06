/** 
* @typedef Atividade
* @property {string} link - link de direcionamento para a atividade
* @property {string} nome - nome da atividade
*/

/** @type {Atividade[]} */
const atividades = [
    {link: 'radarVelocidade/radarVelocidade.html', nome: 'Radar de Velocidade'},
    {link: 'fibonacci/fibonacci.html', nome: 'Fibonacci'},
    {link: 'fatorial/fatorial.html', nome: 'Fatorial'},
    {link: 'randomNumber/randomNumber.html', nome: 'Número aleatório'},
    {link: 'jokenpo/jokenpo.html', nome: 'Jokenpo'},
    {link: 'triangulos/triangulos.html', nome: 'Triângulos'},
    {link: 'equacao2grau/equacao2grau.html', nome: 'Equação de 2º grau'},
    {link: 'jogoForca/jogoForca.html', nome: 'Jogo da forca'},
    {link: 'calculoDias/calculoDias.html', nome: 'Calculo de diferença de dias'}
]

const atvs = document.querySelector("#atvs")

atividades.forEach(atividade => {
   atvs.innerHTML +=
    `
        <a href='${atividade.link}'>
            <section> ${atividade.nome} </section>
        </a>
   ` 
});