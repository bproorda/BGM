console.log('This is connected and working');
var name = prompt('What is your name?')
var greeting = "Hello, "+ name + ".";

var gametype = prompt("Do you prefer 1. Role play board games or 2. Chess. Please enter 1 or 2")
var response

var a = document.createElement('a');
var linkText = document.createTextNode("Francesco's Site");
a.appendChild(linkText);
a.title = "Francesco's Site";
a.href = "https://francescodt.github.io/bgmu/";
document.body.appendChild(a);

 if (gametype == 1) {
     response = ' You should check out Francesco\'s Site! There is a link above';
 } else if (gametype == 2) {
     response = ' Welcome to BMG\'s Chess Page!';
 } else {
     response = ' oops, did you enter a wrong number?';
 }
console.log(greeting);
console.log(response);
// alert(greeting);
document.write(greeting.bold());
document.write(response);
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
 