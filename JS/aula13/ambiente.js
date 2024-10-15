/*
console.log('Tudo bem');
console.log('Tudo bem');
console.log('Tudo bem');
console.log('Tudo bem');
console.log('Tudo bem');
console.log('Tudo bem'); 
*/

//executado no node

let contador = 1;
while (contador <= 6) {
    console.log(`WHILE: Passo ${contador}`);
    contador++
}

contador = 1;
do {
    console.log(`DO WHILE: Passo ${contador}`);
    contador++
} while (contador <= 6)