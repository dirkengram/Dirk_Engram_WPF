//Dirk A. Engram Sept. 26 Functions

confirm("This program will calculate your body fat percentage.");
/* Factor 1	(Total body weight x 1.082) + 94.42
Factor 2	Waist measurement x 4.15
Lean Body Mass	Factor 1 - Factor 2
Body Fat Weight	Total bodyweight - Lean Body Mass
Body Fat Percentage	(Body Fat Weight x 100) / total bodyweight */

var factorOne = Number(prompt("What is your total body weight"));
var factorTwo = Number(prompt("What is your waist measurement"));
var bodyMass = ((factorOne * 1.082) + 94.42) - (factorTwo * 4.15);
var bodyFat = factorOne - bodyMass;

var calcBodyFatPercentage = function(){
    var bodyFatPercentage = (bodyFat * 100) / factorOne ;
    console.log("Your body is " + bodyFatPercentage + " percent fat.")
};
calcBodyFatPercentage();

