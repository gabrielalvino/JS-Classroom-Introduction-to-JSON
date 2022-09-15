// Parte 02

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


function menos30(aluno){
  return aluno.idade < 30;
}

let alunosMenos30 = alunos.filter(menos30)



console.log(alunosMenos30);
