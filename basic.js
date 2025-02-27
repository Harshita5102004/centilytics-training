//Javascript 
//JavaScript is a scripting language used to create interactive web pages and applications

//	Variables  in javascript
//declare a variables in js three type
let a=9;
var b=3;
const c=2;
console.log(a,b,c);//print output 

/*javaScript has 8 Datatypes*/
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


// functions in javaScript

function Name_function(){// define function and name of function
    console.log("Hello this side  harshita");
}
Name_function();//calling of function we can call function multiple time


//Arrow function
 const fun1 = (x, y) => {
 console.log("the multiply of X and y is "+x + y);
};

fun1(5,2);// function call
fun1(7,2);// function call

const fun2 = (a,b) => {
    return a+b;
}

console.log("the addition of two number is "+fun2(2,3));


//callback function

function f1(name){
    console.log("this is Normal function");
   f2();
}

function f2(){
    console.log("this is callback function");
}
f1("harshita",f2);


// Array in javascript
let arr=[23,57,89,4];
console.log(arr);

//add a new element in array at last
arr.push(34);
console.log(arr);

//delete element in array at last in array
arr.pop();
console.log(arr);

//add element to the beginning of array
arr.unshift(0);
console.log(arr);

//remove first elements
arr.shift();
console.log(arr); 





