# Código

document.addEventListener("DOMContentLoaded",() => {

    let squares = document.getElementsByClass(".squares");

    squares.forEach((square) =>{
        square.addEventListener("click",handleClick);
    });

    function handleClick(event){
        console.log(event.target);
    }
});



# Código Comentado:

# 1 ) document.addEventListener("DOMContentLoaded",() => {

A)document.addEventListene

- primeiro, deixa de pensar em CSS e HTML, agora é hora de pensar em aplicação JS.
- segundo, tenho que entender que vou ter que ter um evento para dar funcionalidade ao meu jogo.
    - pense em partes:
        ----- meu js vai ter que indentificar as peças que clico
        ----- vai ter que indentificar jogador 01 e jogador 02
        ------ vai ter identificar qual peça está sendo jogada
        ------- finalizar o jogo




B) DOMContentLoaded

- Usei, pois meu evento tem que começar quando o HTML e o CSS forem carregados.2


C) arrow function

- veja o video em caso de dúvida https://www.youtube.com/watch?v=S5Mn0qQzJ-0


# 2) let squares = document.querySelectorAll(".squares");

- usei para pegar os quadros 
-
# 3) squares.forEach((square) =>{
    square.addEventListener("click",handleClick);
    });

- Repansondo dentro do meu envento eu crie nessa função
- peguei a classe square
- agora, fiz um forEachpara pegar cada square e esse for each vai fazer um evento ao clicar, vai chamer a função handle clique.


# 4)    function handleClick(event){
        console.log(event.target);
    }

- declarei a função handle clique que mostra no console o elemento que clicar.


# 5) Conclusão

1) Primeiro crie um envento global para depois de carregar o html e o CSS
2) Esse evento vai ter um nome e uma função bem grande, usei um arrow function
3) Dentro na minha função começa o trabalho de fato.
4) primeiro peguei a classe que queria para começar a trabalhar, usei document.
   querySelectorAll.
5) Peguei a classe agora, tenho que pensar... o que quero? quero que ao clicar indentifique o elemento que cliquei.
6) Então, faço um forEac para pegar cada elemento da minha classe.
7) No meu elemnto faço adiciono um evento click e uma outra função handlClick.
8) Digo que essa função ao clicar tem que aparecer o elemento que cliequei no console.
