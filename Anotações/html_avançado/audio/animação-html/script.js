
// Primeiro peguei o jogador

let jogador = document.getElementById("jogador");

// Depois peguei a posição do jogador

let xInicial = 0;
let yInicial = 0;


//Criar uma função para mover o jogador no quadro

function moverJogador(x,y){

  let posX = x + "px";
  let posY = y+ "px";

  jogador.style.top = posX;
  jogador.style.left = posY;

}

setInterval(function(){

  moverJogador(xInicial++, yInicial++);

}, 14);
