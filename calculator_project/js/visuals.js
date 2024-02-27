//----------------- Constants -------------------------------------------------
let displayContent = ""

const display = document.querySelector(".display");

const button1 = document.querySelector(".numPad .one");
const button2 = document.querySelector(".numPad .two");
const button3 = document.querySelector(".numPad .three");
const button4 = document.querySelector(".numPad .four");
const button5 = document.querySelector(".numPad .five");
const button6 = document.querySelector(".numPad .six");
const button7 = document.querySelector(".numPad .seven");
const button8 = document.querySelector(".numPad .eight");
const button9 = document.querySelector(".numPad .nine");
const button0 = document.querySelector(".numPad .zero");
const buttonEqual = document.querySelector(".numPad .equal");
const buttonPlus = document.querySelector(".numPad .plus");
const buttonMinus = document.querySelector(".numPad .minus");
const buttonMultiplication = document.querySelector(".numPad .multiplication");
const buttonDivision = document.querySelector(".numPad .division");
const buttonClear = document.querySelector(".numPad .clear");
const buttonClearEverything = document.querySelector(".numPad .clear-everything");

//----------------- System related functions ----------------------------------
function updateDisplay(content){
    if (content!== "CE"){
        if(content !== "C"){
            displayContent += content;
        } else{
            console.log(content);
            displayContent = displayContent.slice(0, (displayContent.length() - 1));
        }
    } else{
        displayContent = "";
    }

    display.textContent = displayContent;
}

button1.onclick = () => {updateDisplay("1")}
button2.onclick = () => {updateDisplay("2")}
button3.onclick = () => {updateDisplay("3")}
button4.onclick = () => {updateDisplay("4")}
button5.onclick = () => {updateDisplay("5")}
button6.onclick = () => {updateDisplay("6")}
button7.onclick = () => {updateDisplay("7")}
button8.onclick = () => {updateDisplay("8")}
button9.onclick = () => {updateDisplay("9")}
button0.onclick = () => {updateDisplay("0")}
buttonEqual.onclick = () => {updateDisplay("=")}
buttonPlus.onclick = () => {updateDisplay("+")}
buttonMinus.onclick = () => {updateDisplay("-")}
buttonMultiplication.onclick = () => {updateDisplay("*")}
buttonDivision.onclick = () => {updateDisplay("/")}
buttonClear.onclick = () => {updateDisplay("C")}
buttonClearEverything.onclick = () => {updateDisplay("CE")}
