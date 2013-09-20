/**
 * Created with JetBrains WebStorm.
 * User: DirkEngram1
 * Date: 9/19/13
 * Time: 3:21 PM
 * To change this template use File | Settings | File Templates.
 */

var curYear = prompt("Please Enter the current year", "2013");
var yearBorn = prompt("Please Enter the year you were born", "1987");
var age = curYear - yearBorn;
var alcohol;

alcohol = (age > 21) ? "You are old enough to consume alcohol" : "You are not old enough to consume alcohol!";
console.log(alcohol);
