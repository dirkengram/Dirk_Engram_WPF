/**
 * Created with JetBrains WebStorm.
 * User: DirkEngram1
 * Date: 9/19/13
 * Time: 1:41 PM
 * To change this template use File | Settings | File Templates.
 */

var dogs = prompt("Enter the number of dogs you own", "1");
var weight = prompt ("Enter the combined weight of dogs/dog","55");
var food;

if(dogs < 2 || weight < 100){
    console.log("You will need one big bag of food per month");

