//Dirk A Engram September 19 2013 Conditionals Assignment

var age = prompt ("How old are you","21");
var kidAge = prompt ("Please enter of child", "5");

if(age >= 21 && kidAge < 6){
    console.log("You and your child may enter the movie and there is no charge for the child.")
}else{ if(age < 21){
    console.log("You are not old enough to see this movie!")
}else{ if(age >= 21 && kidAge > 5){
    console.log("You and your child may enter the movie but the child is to old for a free ticket! ")

}
}
}