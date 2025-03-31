// Assignment done pooja Pandey
/*
Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.



let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//-----------------------------------------------
*/
// Part 1: Debugging Challenge
let result = "5" - 2;
console.log("The result is: " + result);
//Problem:
//•//	The operation "5" - 2 involves subtracting a number from a string.
//	JavaScript will automatically convert the string "5" to the number 5 for subtraction, resulting in 3. However, this might not be what we expected when we log it with string concatenation.
//Fix:
//	Even though JavaScript implicitly converts the string to a number, to make the behavior more explicit and to ensure clarity, we can use Number() for type conversion.
let results = Number("5") - 2; // Explicitly convert "5" to a number
console.log("The result is: " + results);  // Output: "The result is: 3"
//2. Second Issue:
let isValid1 = Boolean("false");
if (isValid1) {
    console.log("This is valid!");
}
//issue
//	The expression Boolean("false") will always return true because any non-empty string (including "false") is truthy in JavaScript. Therefore, the console will always log "This is valid!", which might not be the intended behavior.
//fix:
//	If it is required to convert the string "false" into a boolean false, we should check if the string is "false" and explicitly convert it to false. Otherwise, leave it as is.
let isValid2 = Boolean("false" === "false"); // Convert only if the string is exactly "false"
if (isValid2) {
    console.log("This is valid!");  // Output: "This is valid!"
}
//3. Third Issue:
let age1 = "25";
let totalAge1 = age1 + 5;
console.log("Total Age: " + totalAge1);
//Problem:
//Here, we are trying to add a string ("25") and a number (5). JavaScript will perform string concatenation, so totalAge will result in "255" (the string "25" concatenated with "5").
//This might not be what we expected if we want to perform addition.
//Fix:
//We need to convert the string "25" to a number using Number() before performing the addition.
let age2 = "25";
let totalAge2 = Number(age2) + 5;  // Explicitly convert "25" to a number
console.log("Total Age: " + totalAge2);  // Output: "Total Age: 30"
//Final Corrected Code:

// 1. Fixing the subtraction operation with explicit type conversion
let result1 = Number("5") - 2; // Explicitly convert "5" to a number
console.log("The result is: " + result1);  // Output: "The result is: 3"

// 2. Fixing the Boolean conversion for a specific case
let isValid3 = Boolean("false" === "false"); // Convert only if the string is exactly "false"
if (isValid3) {
    console.log("This is valid!");  // Output: "This is valid!"
}

// 3. Fixing the age addition with explicit type conversion
let age3 = "25";
let totalAge3 = Number(age3) + 5;  // Explicitly convert "25" to a number
console.log("Total Age: " + totalAge3);  // Output: "Total Age: 30"
	
     //Number("5") - 2: Ensures the string "5" is converted to a number for accurate arithmetic.
//Boolean("false" === "false"): Explicitly checks if the string is "false" before converting it to a boolean.
//Number(age) + 5: Converts the string "25" to a number before performing the addition.
///hese changes make the type conversions more explicit, ensuring that the operations behave as expected.


//Part 2
//Example of Implicit Type Conversion:
//Scenario: In JavaScript, when you try to perform an operation between a number and a string, JavaScript will automatically convert the number to a string if the operation involves concatenation.
// Implicit type conversion example
let number = 42;
let text = "The answer is: ";

let result4 = text + number;  // Implicitly converts the number to a string
console.log(result4);  // Output: "The answer is: 42"
//Explanation:
//JavaScript implicitly converts the number 42 into a string because of the + operator used for string concatenation.
       //The result is "The answer is: 42", where 42 is treated as a string.
//________________________________________
//2. Example of Explicit Type Conversion:
// Explicit type conversion example
let strNumber = "100.5";  // A string representing a number

let explicitConversion = Number(strNumber);  // Explicitly converts the string to a number
console.log(explicitConversion);  // Output: 100.5 (as a number)

console.log(typeof explicitConversion);  // Output: "number"
//Explanation:
//Here, the string "100.5" is explicitly converted into a number using the Number() function.
//The typeof operator shows that the result is of type "number", confirming the conversion.
//________________________________________
//3. Edge Case with NaN (Not a Number):
// Edge case with NaN (Not a Number)
let invalidString = "hello";

let convertedValue = Number(invalidString);  // Attempting to convert a non-numeric string
console.log(convertedValue);  // Output: NaN

console.log(typeof convertedValue);  // Output: "number" (but NaN is a special number value)
//Explanation:
//In this case, the string "hello" cannot be converted to a valid number, so Number() returns NaN (Not-a-Number).
//The typeof operator returns "number", because NaN is a special numeric value in JavaScript.
//________________________________________
//4. Edge Case with null and undefined:
// Edge case with null and undefined
let nullValue = null;
let undefinedValue = undefined;

console.log(Number(nullValue));  // Output: 0
console.log(Number(undefinedValue));  // Output: NaN
//Explanation:
//null is explicitly converted to 0 when using Number().
  //undefined cannot be converted to a valid number, so it becomes NaN (Not-a-Number).
