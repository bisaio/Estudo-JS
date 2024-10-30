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
    {link: 'randomNumber/randomNumber.html', nome: 'Número aleatório'}
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