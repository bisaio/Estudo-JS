//Executado em Node
// 5! = 5 x 4 x 3 x 2 x 1
// 5! = 5 x 4! (mesma coisa)
// fatorial de n! = n x (n-1)!
// 1! = 1

//funcao fatorial RECURSIVA
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5));