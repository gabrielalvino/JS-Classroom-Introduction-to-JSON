$(".item2").hide();

$("#list2 > .item5").hide();


$(".item1").css({"background-color":"red"});

let list1 = $("#list1");
console.log(list1);
console.log(list1.find(".item5"));

list1.find(".item4").hide();

list1Children = list1.children();
console.log(list1Children);
list1Children.show();
list1Children.css({"color":"green","text-align":"center"})
