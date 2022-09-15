

function novoAluno(nome, idade){
  return {nome,idade};
}


let alunos = [
  novoAluno("Ana",18),
  novoAluno ("Bia",21),
  novoAluno("João", 32)
]


function alunosDaqui5Anos(aluno){
  return {
    nome: aluno.nome,
    idade: aluno.idade + 5
  }
}
// não faça aluno.idade += 5

console.log(alunos.map(alunosDaqui5Anos));
