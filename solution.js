var colors =["red", "blue", "orange", "green"];
function changeColor(){
 var randomIndex= Math.floor(Math.random() * colors.length);
    $("body").css("background", colors[randomIndex]);
}

function addColor(){
  var newColor= $("#newColor").val();
    colors[colors.length]= newColor;
        $("body").css("background",  colors[colors.length]);
}

$(document).ready(function(){
   $("#change").click(changeColor);
    $("#add").click(addColor);
});