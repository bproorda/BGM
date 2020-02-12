console.log('This is connected and working');
var hourNow = prompt('What time is it? 0-23')
var greeting


if (hourNow > 18 && hourNow < 24) {
    greeting = 'Shouldn\'t you be in bed?'
} else if (hourNow > 12 && hourNow < 18) {
    greeting = 'Why aren\'t you at work?'
} else if (hourNow >= 0 && hourNow < 12) {
    greeting = 'Did you have good breakfast?'
} else {
    greeting = 'wait, you did not give me the time in the right format'
}
console.log(greeting);
// alert(greeting);
document.write(greeting)
//trying to make an alert when you click a link
function checkbox() {
var confirmmessage = "Are you sure you want to continue?";
var go = "https://francescodt.github.io/bgmu/";
var message = "Action Was Cancelled By User";

if (confirm(confirmmessage)) {

    window.location = go;

} else {

     alert(message);
}

}