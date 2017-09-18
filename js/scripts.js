$(document).ready(function() {
  $("form#favorite").submit(function(event){
    var food = $("input#food").val();
    var color = $("input#color").val();
    var animal = $("input#animal").val();
    var season = $("input#season").val();
    var favorites = [food, color, animal, season];
    var firstThree = [favorites[0],  favorites[1], favorites[2]];
    $("#foody").text(favorites[0]);
    $("#colory").text(favorites[1]);
    $("#animaly").text(favorites[2]);
    $("#seasony").text(favorites[3]);
    $("#myfavfood").text(favorites[0]);
    $("#myfavcolor").text(firstThree[1]);
    $("#myfavanimal").text(firstThree[2]);
    $(".output").show();
    event.preventDefault();
  });

  //For Grocery.html
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
      var list = $("input." + grocery).val();
      var listSorted = []
      list.push(listSorted)
      listSorted.sort();
      alert(listSorted);
    });
    event.preventDefault();
  });


//for icecream thing
  $("button#icecream").click(function(event){
    var flavors = ["chocolate", "strawberry", "banana"]

    flavors.forEach(function(flavor){
      alert(flavor);
    })
  });
});
