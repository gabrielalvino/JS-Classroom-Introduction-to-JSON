// Construir um sistema de medias
// Preciso dos seguintes intens: nomes, notas1,notas2,media,
// criar metodos
// motrar a junção dos metodos


var names = ["Ana","Bia","Breno"];
var notes1 = [5,9,4];
var notes2 = [9,8,7];

function average(n1,n2) {
  return (n1 + n2) / 2;
}

function result(average){

  if (average > 7){
    return "approved";
  }else{
    return "reproved";
  }

}

for (var index in names){
  var name  = names[index];
  var note1 = notes1[index];
  var note2 = notes2[index];
  var average_note = average(note1, note2)

  console.log(name + " - " + note1 + " - " + note2 + " - " + average_note + " - " + result(average_note));

}
