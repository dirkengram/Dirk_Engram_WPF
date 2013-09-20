//Dirk A Engram September 19 2013 Conditionals Assignment

var dogs = prompt("Enter the number of dogs you own", "1");
var weight = prompt ("Enter the combined weight of dogs/dog","55");
var food;

if(dogs < 2 || weight < 100){
    console.log("You will need one big bag of food per month");
}else{ if( (dogs >= 2 && dogs <= 4) || (weight >= 100 && weight <= 150)){
            console.log("You will need two big bags of dog food a month");
}else{ if(dogs > 4 && weight > 150){
            console.log("You will need 3 or more big bags of dog food every month, good luck");
}
}
}
