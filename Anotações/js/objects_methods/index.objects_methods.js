
// // Firt way to do it

// resultAverage = function(n1,n2){
//   return (n1 + n2)/2;
// }


// Second way to do it

function resultAverage(){
  return (this.notes[0] + this.notes[1])/2;
}

var student1 = {
  name: "Ana",
  notes: [9, 10],

  average: resultAverage
}

var student2 = {
  name: "Bia",
  notes: [10, 10],

  average: resultAverage
}

console.log(student1.name);
console.log(student1.average(student1.notes[0],student1.notes[1]));

console.log(student2.name);
console.log(student2.average(student2.notes[0],student2.notes[1]));

// console.log(student2.average(student2.notes[0],student1.notes[1]));
