//Dirk A Engram September 19 2013 Conditional Assignment

var curYear = prompt("Please Enter the current year", "2013");
var yearBorn = prompt("Please Enter the year you were born", "1987");
var age = curYear - yearBorn;
var alcohol;

alcohol = (age > 21) ? "You are old enough to consume alcohol" : "You are not old enough to consume alcohol!";
console.log(alcohol);
alert(alcohol);

