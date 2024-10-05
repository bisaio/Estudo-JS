var idade = 67

console.log(`Você tem ${idade} anos, seu VOTO é:`);

if (idade < 16) {
    console.log('NÃO VOTA');
} else if (idade < 18 || idade >= 65) {
    console.log('OPCIONAL');
} else {
    console.log('OBRIGATÓRIO');
}
