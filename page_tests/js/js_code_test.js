//Console item manipulation script

//Dado que o código seja escrito corretamente, ";" se torna dispensável
console.log("Console Version of Hello World!")

//These can change.
let message = "Hello World!";
//alert(message); //Alerts are anoying...

let user = "John",
    age = 25,
    greeting = "Ahoy!";

//This can't (even the color is different)
const currenDay = "05.11.2023";

//This is an example of pre-established constants:
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

//A bit of exercise to test things out
let admin,
    name = "John";

admin = name;
//alert(admin); //Alerts are anoying...

//Number types
const myInt = 5;
const myFloat = 6.667;
console.log(typeof myInt);
console.log(typeof myFloat);

//Number decimal conversion
const lotsOfDecimals = 1.15613183153831;
console.log(lotsOfDecimals);
const twoDecimalPlaces = lotsOfDecimals.toFixed(2);
console.log(twoDecimalPlaces);

//Stringo to number conversion
let myNumber = "74";
myNumber += 3;
console.log(myNumber, typeof myNumber);
myNumber = Number(myNumber) + 3; //Isn´t this kinda... messy?
console.log(myNumber);

//Simple operations:
const num1 = 10;
const num2 = 50;
console.log(9 * num1, num1 ** 3, num2/ num1);

//Not so simple operations:
console.log(5 + 10 * 3, (num2 % 9) * num1, num2 + num1/8 + 2);

console.log("Day 2 of learning this wondrous language.");

//Strage type testing:
console.log(1/0);
console.log("Not a Number" / 2);
console.log(NaN + 1);
console.log(3 * NaN);
console.log(NaN ** 0); //Of all the math rules NaN could refuse to obey they chose this one...

//special strings:
const someone = "Carlos";
console.log(`Hi's name is ${someone}!`);
console.log(`Well, this is some funky quote... ${1 + "Awooga!"}`);
console.log(`Now, for a funkier quote: ${null + NaN + "Funky" + Infinity + true}`);

console.log(typeof 0, 
    typeof 14n, 
    typeof true, 
    typeof NaN, 
    typeof null, //This is not a object... It´s a "special" value with a type of it´s own
    typeof Symbol("id"),
    typeof alert, //This is also wrong, being technically a special object called function
    typeof Math);

console.log("Day 3 of learning this wondrous language.");

//some crazy logical operations in js:
console.log(true||"Not printed");
console.log(false||"Printed"); //or condition is not limited to boolean

if(1 && 0){
    alert("This won't be printed");
} else{
    console.log("This, however, will be printed.");
}

/*The first alert will be shown as it needs to be evaluated before
    conversion to boolean and thus, change to undefined, 2 will be
    evaluated as true as son, the comparisons halt*/
//alert(alert(1) || 2 || alert(3));

if(""){
    console.log("Empty string");
} else if (" " == "   "){
    console.log("Single spaced string");
} else{
    console.log("No empty space");
}