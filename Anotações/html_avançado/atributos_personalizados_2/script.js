let lista = document.getElementById("lista");

lista.dataset.n = "4";

let num = parseInt(lista.dataset.n)

let conteudo = "";

for (let i = 0; i < num; i++){

  conteudo +="<li> +i + </li>"

}
