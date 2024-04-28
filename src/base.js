var alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 5 },
    { nome: "Ana", nota: 6 },
    { nome: "Luiza", nota: 8 },
    { nome: "Carlos", nota: 7 },
    { nome: "Mariana", nota: 9 },
    { nome: "Lucas", nota: 5 },
    { nome: "Juliana", nota: 8 },
    { nome: "Fernando", nota: 5 }
];

const check = alunos.filter((aluno) => aluno.nota >= 6)

console.log(check)