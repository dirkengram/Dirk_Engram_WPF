//Prompt and Alert
var budget = prompt ("Please enter your budget amount");
var expenses = prompt ("please enter amount of donations");
var jobs = prompt ("Please enter the number of jobs");
var balance = budget * jobs - expenses;
console.log("Your account balance is" + " $" + balance);
alert(balance);

