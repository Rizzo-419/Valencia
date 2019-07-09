
/*
-------------------------------------
INSTRUCTIONS
-------------------------------------
-delete external file, move to webpage
-Ask user to input two numbers, x and y
-Numbers will be different?
-Display sum of x and y is z
-Display product of x and y is z
-Display statement x is bigger than y, or y is bigger than x


--------------------------------------
THOUGHTS BEFORE STARTING/RESEARCHING
--------------------------------------
-stucture page as a form
-two <input> tags for user to input a number
    convert the text to a number
-<button> for user to submit
-find out what pseduo class to use ::onClick or ::onSubmit JavaScript will check to see if the numbers are equal
-::onClick or ::onSubmit JavaScript will add, multiply, and compare
-boolean type for the compare
    x > y return text, otherwise return other text
-three sections to display results
    <div> sections maybe?
-learn how to place where results are returned
    probably inserting name of function?

*/


//define variables, not required
var x;
var y;
var z;

//addition function
function addXY()
{
    var x = parseInt(document.getElementById("valueX").value);
    var y = parseInt(document.getElementById("valueY").value);
    var z = document.getElementById("sum");
    z.value = x + y;
}
