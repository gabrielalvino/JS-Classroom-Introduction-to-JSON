

function novoAluno(nome, idade){
  return {nome,idade};
}


let alunos = [
  novoAluno("Ana",18),
  novoAluno ("Bia",21),
  novoAluno("Danilo", 40),
  novoAluno("João", 32)
]

function grupoMenos30(aluno) {
  return aluno.idade < 30;
}


let alunosMenos30 = alunos.filter(grupoMenos30)

console.log(alunosMenos30);

//  Eu posso fazer de outra forma o código támbem:
//  console.log(alunos.filter(grupoMenos30). Nesse caso eu só elaboro a função e chamo com filtro dentro do console.log.
