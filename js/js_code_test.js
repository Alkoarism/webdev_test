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
console.log(twoDecimalPlaces)

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

//A simple state change function:
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn(){
    if (btn.textContent === "Do the thing!"){
        btn.textContent = "Undo the thing";
        txt.textContent = "Oh boy, it's done now. :(";
    } else{
        btn.textContent = "Do the thing!";
        txt.textContent = "Guess what will be done. :)";
    }
}