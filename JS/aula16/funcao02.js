//Executado em Node

function soma(n1, n2) {
    return n1 + n2
}

console.log('funcao soma: ', soma(2, 5));
console.log('funcao soma: ', soma(2));

function somaPreDef(n1=0, n2=0) {
    //utilizando parametros pré definidos para caso não sejam passados ambos
    return n1 + n2
}

console.log('funcao soma com valores definidos: ', somaPreDef(2, 5));
console.log('funcao soma com valores definidos: ', somaPreDef(2));
