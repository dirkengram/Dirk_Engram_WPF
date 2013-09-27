/**
 * Created with JetBrains WebStorm.
 * User: DirkEngram1
 * Date: 9/26/13
 * Time: 3:20 PM
 * To change this template use File | Settings | File Templates.
 */

confirm("This program will calculate your body fat percentage.");
/* Factor 1	(Total body weight x 1.082) + 94.42
Factor 2	Waist measurement x 4.15
Lean Body Mass	Factor 1 - Factor 2
Body Fat Weight	Total bodyweight - Lean Body Mass
Body Fat Percentage	(Body Fat Weight x 100) / total bodyweight */

var factorOne = Number(prompt("What is your total body weight"));


