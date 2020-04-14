////////////////////
var buttonElement = document.getElementById("luckyButton");


var luckyNumber = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var randomluckyNumber= Math.floor(Math.random()*luckyNumber.length);

buttonElement.addEventListener("click", check);


function check() {
  var nameElement= document.getElementById("name").value;

  if (nameElement == "") {
    alert("Please enter your name.");
  } else {
    luckyDraw();
  }
}
function luckyDraw () {
  var nameElement= document.getElementById("name").value;
  var luckyOutput= document.getElementById("lucky-output");

  console.log(randomluckyNumber)


  if (randomluckyNumber != "7") {
    alert(nameElement+", your number is: "+ randomluckyNumber + ". " + "The lucky number today was: 7!");

  } else {
    alert("Congratulations! You got the lucky number: 7!");
    luckyOutput.innerText = ("Use this code: 349134 to get 97% off on your first order at buyflowers.com!")
    luckyOutput.style.textShadow = "0 0 1vmin white";
  }
}
