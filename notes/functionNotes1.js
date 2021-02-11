//Functions

//Variables declared within fucntion are for local use only
//Function can access outer variables
//Function can modify outer variable
let userName = 'Emily';

function showMessage() {
    userName = "Todd"; //changed outer variable

    let message = 'Hello, ' + userName;
    alert(message);
}

alert( userName); //Emily before function call

showMessage();

alert( userName ); //Todd, after the call

//shadow outer var when declared same inside funtion
let userName = 'Emily';

function showMessage() {
    let userName = "Todd"; //declare local variable

    let message = 'Hello, ' + userName; // Todd
    alert(message);
}

showMessage(); //Function uses its own userName

alert( userName ); // Emily, unchanged by function

//Default parameters are evaluated every time the function is called
//without the respective parameter
//If parameter is not provided, becomes undefined

//Basic return function
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
alert( result ); //3

//Convention to name functions beginning with reletive verb
showMessage();
getAge();
calSum();
createForm();

//Create many small functions and call to them in other functions
//Is easier to debug and read

//Function Declaration
function sayHi() {
    alert( "Hello" );
}

//Function Expression
let sayHi = function () {
    alert( "Hello" );
};

//Function Expression created when execution reaches and usable only from that moment
//Function Declaration can be called earlier than it is defined
//JS executes code by checking Global variables first

//Pracice
 
//Write a function called add7 that takes one number and returns that number + 7.
function add7(num) {
    let numAdd = num + 7
    return numAdd;
}

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(num1, num2) {
    let numMult = num1 * num2;
    return numMult;
}

//Write a function called capitalize that takes a string and returns that string with only the firt letter capitalized.
//Make sure that it can take strings that are lowercase, UPPERCASE, or BoTh.
function capitalize (str) {
    let capStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
    return capStr;
}

//Write a function called lastLetter that takes a string and returns the very last letter of that string.
function lastLetter(last) {
    let letter = last.charAt(last.lenth-1);
    return letter;
}