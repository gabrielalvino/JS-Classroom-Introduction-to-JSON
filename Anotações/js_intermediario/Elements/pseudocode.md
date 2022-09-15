
Desafio 01)

1. Criar duas div com id na qual ambas contenha um texto com título e pragrago

2. Com já script na head fazer função  para mostrar o elemnto filho da div

3. E depois que pegar o elemento filho, imprima o elemento pai e o que está contido nele

Resultado

<script>
  window.onload = function(){

    let d1 = document.getElementById("d1");
    let h1 = d1.children[2];
    let p = d1.children[1];

    console.log(d1);
    console.log(h1);
    console.log(p);

  }
</script>

</head>
<body>

<div id="d1">
<h1>Title 01 </h1>
<p>Life is not a game</p>
</div>

<div id="d2">
<h1>Title 02 </h1>
<p>Life is a game</p>
</div>

Desafio 02)

1. Pegue o elemento filho o elemento título pela tag
   OK
2.use for para aparecer o conteuto presente na tag h
  Ok

1. crie um event list que ao clicar no título apareça o elemto 

4.crie uma função para mostra o elemento pai
