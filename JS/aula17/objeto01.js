let amigo = {
    nome: "José",
    sexo: "M",
    peso: 85.4,
    engordar(peso) {
        console.log("Engordou");
        this.peso += peso
    }
}

// console.log(amigo)

// console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)