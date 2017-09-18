var total = 0;
var groceryList = [];
var listSorted = []

$(document).ready(function(){
  $("button#next").click(function(event){
    total ++;
    var itemNumber = "item" + total;
    var input = document.createElement("input");
    input.type = "text";
    input.className = itemNumber;
    $("#list").append(input);
    groceryList.push(itemNumber);
    event.preventDefault();
  });

  $("form#grocery").submit(function(event){
    groceryList.forEach(function(grocery){
      var list = $("input." + grocery).val().toUpperCase();
      listSorted.push(list);
    });
    listSorted.sort();

    listSorted.forEach(function(list){
      $("#groceri").append("<li>" + list + "</li>");
    });
    event.preventDefault();
  });
});
