//array literal
var array_name = [item1, item2, item3];
var cars = ["Saab", "Volvo", "BMW"];
//spaces and line breaks not important

//using keyword 'new' //recommend use above syntax
var cars = new Array("Saab", "Volvo", "BMW");

//access elements of array
var name = cars[0];
//index starts at 0

//changing array element
cars[0] = "Ope1";

//access full array 
document.getElementById("demo").innerHTML = cars;

//arrays are objects //typeof returns object
//arrays use numbers to access elements
var person = ["John", "Doe", "46"];
person[0];
//objects use names to access members
var person = {firstName:"John", lastName:"Doe", age:46};
person.firstName;
//variables can be objects
//arrays can have variables of different types in same
//[objects, functions, arrays]

//built-in array properties and methods
var x = cars.length; //# of elements
var y = cars.sort();

//access first
fruits = ["Bananas", "Orange", "Apple", "Mango"];
var first = fruits[0];
//access last
var last = fruits[fruits.length -1];

//looping array elements
var fruits, text, fLen, i;
fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;

text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
// array.forEach() function
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text = "</ul>";

function myFunction(value) {
    text += "<li>" + value + "</li>";
}

//adding array elements
fruits.push("Lemon");
fruits[fruits.length] = "Lemon";
//high indexes could creat 'holes' 

//associative array - arrays with named indexes
//js does not support named indexes

// arrays use numbered indexes, objects use named indexes
//use objects for element names to be strings

//ECMAScript 5 method to test is array
Array.isArray(fruits); //returns true
//create own isArray() function
function isArray(x) {
    return x.constructor.toString().indexOf("Array") > -1;
}
//if object created by a given constructor
fruits instanceof Array; // returns true

////////Array Methods////////
//convert to string
document.getElementById("demo").innerHTML = fruits.toString();
//Banana,Orange,Apple,Mango
document.getElementById("demo").innerHTML = fruits.join(" * ");
//Banana * Orange * Apple * Mango

//pop out and push in
fruits.pop(); //removes last element
var x = fruits.pop(); //returns value, x is now Mango
fruits.push("Kiwi");
var x = fruits.push("Kiwi"); //x is now 5

//shifting elements
fruits.shift(); //removes frist element //shifts others to lower index
var x = fruits.shift(); // x is not Banana
fruits.unshift("Lemon"); // add Lemon to beginning, unshift older elements

//delete //may leave undefined holes, use pop or shift instead
delete fruits[0];
//splice() add new items
fruits.splice(2, 0, "Lemon", "Kiwi");
//first parameter where added in, how many removed, define new elements to add
//returns array with deleted items
fruits.splice(0, 1); //removes first element

//concat()
var myGirls = ["Emily", "Bella"];
var myBoys = ["Todd", "Charlie", "Niko"];
var myChildren = myGirls.concat(myBoys);
//returns new array, doesnt change existing
//take multiple arguments, strings
var myChildren = arr1.concat(arr2, arr3);
var myChildren = arr1.concat("Peter");


//slice into new array //from element on //doesnt' take from source array
var citrus = fruits.slice(1);
var citrus = fruits.slice(1, 3); //!= end argument

//toString() is automatic when outputting array
