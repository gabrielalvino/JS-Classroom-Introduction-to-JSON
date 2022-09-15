
let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let circulo = {

    x:250,
    y: 250,
    raio: 100,
    inicio: 0  ,
    fim: 0* Math.PI,

};

function drawCircle(c) {

  ctx.beginPath();
  ctx.rect(0, 0,500,500);
  ctx.fillStyle = "aqua"
  ctx.fill();
  ctx.stroke();

  ctx.arc(c.x,c.y,c.raio,c.inicio,c.fim);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "blue";
  ctx.fill();
  ctx.stroke();

};

setInterval(function() {

  if (circulo.fim < 2 * Math.PI) {
    circulo.fim += 0.1;
  }
  drawCircle(circulo);

}, 100);
