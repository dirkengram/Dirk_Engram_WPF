//Dirk A Engram September 12 2013 Expressions
var wage = prompt ("Please enter your hourly wages");
var hours = prompt ("Please enter the number of hours you work a week");
var tax = prompt ("Please enter the average amount of taxes deducted from paycheck");
var payCheck = wage * hours - tax;
console.log("The amount of money you should get paid is" + " $" + payCheck);
alert(payCheck + " Dollars")
