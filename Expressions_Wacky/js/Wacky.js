/**
 * Created with JetBrains WebStorm.
 * User: DirkEngram1
 * Date: 9/12/13
 * Time: 9:52 PM
 * To change this template use File | Settings | File Templates.
 */

var TimeAtGym = ["Months" , "Days" , "Minutes"];
var Months = prompt ("How many months out of the year do you go to the gym?");
var Days = prompt ("How many days a week do you go to the gym? ");
var Minutes = prompt ("How many minutes do you spend at the gym?");
var Time = Months * Days * Minutes;
alert(Time);
console.log(Time);


