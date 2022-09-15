
//  Way to do this

// function createStudent(name,n1,n2) {
//   return {
//     name: name,
//     note1: n1,
//     note2: n2,
//     average: function() {
//       return (this.note1 + this.note2)/2;
//     }
//   }
// }


function createStudent(name,n1,n2) {

  this.name1 = name;
  this.note1 = n1;
  this.note2 = n2;

  function average(n1,n2){
      return (n1 + n2)/2;
  }
}

// var classroom = [
//   createStudent("Gabriel",9,10),
//   createStudent("João",3,9)
// ]


var classroom = new createStudent("Igor",8,7);

console.log(classroom);



// classroom.forEach(function(studentElement){
//   console.log(studentElement);
// });





// for (var studentElement of classroom){
//   console.log(studentElement);
// }

// var student1 = classroom[0];
// var student2 = classroom[1];

// console.log(student1);
// console.log(student1.average());


// console.log(student2);
// console.log(student2.average());
