<script>
    $("#btn").click(()=> {
        $("#green").hide(1000).show(1000);
    })
</script>

<script>
  $("#btn").click(()=> {
      $("#green").hide(2000,function callBack(){
        $("#red").show(2000);
      });
  })
</script>
