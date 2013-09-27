/**
 * Created with JetBrains WebStorm.
 * User: DirkEngram1
 * Date: 9/26/13
 * Time: 12:53 PM
 * To change this template use File | Settings | File Templates.
 */
//This program will calculate the perimeter of your house and compare it to the perimeter of my house.

confirm("First we must git the length in ft of each side of you house.");
var sideOne = Number(prompt("What is the length in ft of the front side of your house?"));
var sideTwo = Number(prompt("What is the length in ft of the left side of your house?"));
var sideThree = Number(prompt("What is the length in ft of the right side of your house?"));
var sideFour = Number(prompt("What is the length in ft of the back side of your house?"));

//Perimeter = side1 + side2 + side3 + side4

calcPerimeter = function(sideOne, sideTwo, sideThree, sideFour){
    var perimeter = sideOne + sideTwo + sideThree + sideFour;
    if(perimeter > 400){
        console.log("Your house is " + perimeter + "ft. and bigger then my house.");
    }else{
        if(perimeter < 400){
            console.log("Your house is " + perimeter + "ft. and smaller then my house.");
        }
    }
    if(perimeter === 400){
        console.log("Your house is 400ft. and the same size as my house.");
    }
};
calcPerimeter(sideOne, sideTwo, sideThree, sideFour);
