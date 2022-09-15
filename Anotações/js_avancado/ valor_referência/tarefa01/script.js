
let turmaA = ["Joa","Bia", "Flavia"];

let turmaB = turmaA.slice();
let turmaC = [...turmaA];

turmaB.push("Mario");
turmaC.push("Fernanda")

console.log(turmaB);
console.log(turmaC);
console.log(turmaA);


let turmaD = {nome:"Pablo",idade:10};
let turmaE = Object.assign({},turmaD);
turmaE.idade = 12;


console.log(turmaE);
console.log(turmaD);
