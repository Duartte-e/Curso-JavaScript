let idade = 40

let maiorDeIdade = idade>=18
let temIngresso = true
let temCarro = false
let temMoto = false

// PARA IR A UMA FESTA, PRECISA SER MAIOR DE IDADE E TER UM INGRESS0

let podeIraFesta = idade >= 18 && temIngresso == true && temCarro || temMoto
console.log ("Pode ir a festa?:", podeIraFesta)

// console.log ("É maior de idade?:", maiorDeIdade)