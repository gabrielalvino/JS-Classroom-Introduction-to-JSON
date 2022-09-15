# Como importar o jQuery?

Vocẽ pode usar o link da biblioteca como script js

# Como mostrar H1 no console.log usando Jquery e como esconder h1?

console.log($("h1"));
$("h1").hide();

# Como mostrar H1?

  setTimeout(()=>{
    $(".title1").show();
  } ,1000 )

# Como evitar conflito de bibliotecas?

<script>
    $.noConflict();
    jQuery(".title1").hide();
</script>


<script>
    let JQ = $.noConflict();
    JQ(".title2").hide();
</script>


# Como esconder no JS vanila?

    let titles = document.querySelectorAll("h1");
    titles.forEach(title => {
      title.style.display = "none";
    });

No vanila, tenho que primeiro chmar o style.


# Como mostrar um texto escondindo com display none ao quando usuaŕio estiver saindo da pagina?


<script>

  $(document).mouseleave(()=>{
    $("#exit").show();
  });
</script>
