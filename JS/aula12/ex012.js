var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}h.`);

if (hora < 6) {
    console.log('Bom madrugada!');
} else if (hora < 12) {
    console.log('Boa dia!');
} else if (hora <= 18){
    console.log('Boa tarde!');
} else if (hora <= 24) {
    console.log('Boa noite!');    
} else if(hora >= 25) {
    console.log('Horário inválido!')
}
