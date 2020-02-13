console.log('This is connected and working');
function runGreeting() {
    var name = prompt('What is your name?')
    var greeting = "Hello, "+ name + ".";

    //got help from W3 for this part
    console.log(greeting);
    var para = document.createElement("p");
    console.log(para);
    var node = document.createTextNode(greeting);
    console.log(node);
    para.appendChild(node);

    var element = document.getElementById("hello");
    console.log(element);
    element.appendChild(para);
}

runGreeting();

function whichGame() {

var gametype = prompt("Do you prefer 1. Role play board games or 2. Chess. Please enter 1 or 2");
var response;


 if (gametype == 1) {
     response = ' You should check out Francesco\'s Site! There is a link above';
 } else if (gametype == 2) {
     response = ' Welcome to BGM\'s Chess Page!';
 } else {
     response = ' oops, did you enter a wrong number?';
 }
console.log(response);
// alert(greeting);

// document.write(response);
   //got help from W3 for this part
   
   var para = document.createElement("p");
   console.log(para);
   var node = document.createTextNode(response);
   console.log(node);
   para.appendChild(node);

   var element = document.getElementById("game2");
   console.log(element);
   element.appendChild(para);

}
whichGame();

//trying to make an alert when you click a link
function checkbox() {
var confirmmessage = "Thank you for visiting! Enjoy Francesoco's site!";
var go = "https://francescodt.github.io/bgmu/";
var message = "Action Was Cancelled By User";

if (confirm(confirmmessage)) {

    window.location = go;

} else {

     alert(message);
}

}


 