//Dirk A. Engram Sept. 26 Functions

confirm("This program will check your eligibility to obtain a Georgia drivers license.");
var age = Number(prompt("How old are you?"));
var requirement =prompt("Have you had you Learners Permit for one year?");
var license;

/*If you are under the age of 16 or has not meet the requirements then you are not eligible for a drivers
  license in Georgia. */

var eligible = function(){
    license = ((age < 16) || (requirement === "no")) ? "You are not eligible for a drivers license!" : "You are eligible for a drivers license! Be safe.";
    console.log(license);
};

eligible();
