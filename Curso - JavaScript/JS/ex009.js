// OBJETOS

// REPRESENTARMOS ALGO DO MUNDO REAL NO CÓDIGO

const alunoSenai = {
    nome: "Carlos",
    idade: 30,
    curso: "JavaScript",
    ativo: true,
    estudar: function(materia){
        console.log("Estou estudando...", materia)
    }
}

console.log(alunoSenai)
// console.log(alunoSenai.nome)
// console.log(alunoSenai.curso)
console.table(["materia", "objetos", "curso"])
// alunoSenai.estudar("Objetos")
// alunoSenai.estudar("JavaScript no navegador")