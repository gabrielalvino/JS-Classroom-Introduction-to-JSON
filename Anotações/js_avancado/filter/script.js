
function novoAluno(nome,idade){

  return{nome, idade};
}

let alunos = [

  novoAluno("Bia",17),
  novoAluno("Maria",20),
  novoAluno("Fernando",25),
  novoAluno("Breno",34),
  novoAluno("Gabriel",37),
];

console.log("aluno com menos de 30 anos");

for( let aluno of alunos) {
  if(aluno.idade < 30){
    console.log(aluno.nome);
  }
}
