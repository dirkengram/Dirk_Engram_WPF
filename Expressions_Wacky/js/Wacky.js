//Dirk A Engram September 12 2013 Expressions

var TimeAtGym = ["Months" , "Days" , "Minutes"];
var Months = prompt ("How many months out of the year do you go to the gym?");
var Days = prompt ("How many days a week do you go to the gym? ");
var Minutes = prompt ("How many minutes do you spend at the gym?");
var Time = Months * Days * Minutes;
alert("The amount of time you spend at the gym is" + Time + "minutes");
console.log(Time);


