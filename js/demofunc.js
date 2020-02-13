//for Lab 07

function pickNumber() {
    var n = prompt("Pick a number between 1 and 10");
    var x = Math.floor(Math.random())*11;
    var response;
    if (confirm("Was " + x + " your number? hit okay for yes, cancel for no")) {
        response = "Yes, Got it!"
    } else {
        response = "Missed it by that much"
    }
    console.log("Our guess was " + x);
    console.log("Our response was " + response);
    alert(response);
}
pickNumber();

var geoMean = function(n1,n2, n3) {
    var n1 = prompt("Pick your first number!");
    var n2 = prompt("Pick your second number!");
    var n3 = prompt("Pick your third number!");
    var ans = Math.sqrt(n1*n2*n3);
    console.log("our answer is " + ans);
    alert("The geometric mean of your numbers is " + ans)
}
geoMean();