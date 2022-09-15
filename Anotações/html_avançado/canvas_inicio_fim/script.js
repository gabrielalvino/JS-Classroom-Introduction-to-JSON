
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

// Pseudocodigo
// Fazer uma linha: posição inicial, posição final,linha e cor;
// Fazer outra linha qye passe em cima dessa let


ctx.beginPath();

ctx.moveTo(10,10);
ctx.lineTo(400,300);
ctx.lineTo(10,300);
ctx.closePath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.stroke();



ctx.beginPath();

ctx.moveTo(100,300);
ctx.lineTo(400,300);
ctx.lineTo(200,200);
ctx.closePath();
ctx.strokeStyle = "orange";
ctx.lineWidth = 5;
ctx.stroke();
