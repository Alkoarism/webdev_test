//----------------- Constants -------------------------------------------------
const displayOperation = document.querySelector(".display .operation");
const displayResult = document.querySelector(".display .result");

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
const buttonClear = document.querySelector('.numPad .clear');
const buttonParenthesis = document.querySelector('.numPad .parenthesis');
const buttonPercentage = document.querySelector('.numPad .percentage');
const buttonDivision = document.querySelector('.numPad .division');
const buttonMultiplication = document.querySelector('.numPad .multiplication');
const buttonMinus = document.querySelector('.numPad .minus');
const buttonPlus = document.querySelector('.numPad .plus');
const buttonClearLast = document.querySelector('.numPad .clear-last');
const buttonDot = document.querySelector('.numPad .dot');
const buttonEqual = document.querySelector('.numPad .equal');

//----------------- Button Control functions ----------------------------------

button1.onclick = () => {addElement('1');}
button2.onclick = () => {addElement('2');}
button3.onclick = () => {addElement('3');}
button4.onclick = () => {addElement('4');}
button5.onclick = () => {addElement('5');}
button6.onclick = () => {addElement('6');}
button7.onclick = () => {addElement('7');}
button8.onclick = () => {addElement('8');}
button9.onclick = () => {addElement('9');}
button0.onclick = () => {addElement('0');}

buttonParenthesis.onclick = () => {addElement('(');}
buttonPercentage.onclick = () => {addElement('%');}
buttonDivision.onclick = () => {addElement('\/');}
buttonMultiplication.onclick = () => {addElement('x');}
buttonMinus.onclick = () => {addElement('-');}
buttonPlus.onclick = () => {addElement('+');}
buttonDot.onclick = () => {addElement('.');}

buttonClearLast.onclick = () => {removeLastElement();}
buttonClear.onclick = () => {resetEquation();}
buttonEqual.onclick = () => {
    displayOperation.textContent = displayResult.textContent;
    displayResult.textContent = '';
}

const displayOperationObserver = new MutationObserver(
    (mutationList, observer) => {
        for (const mutation of mutationList){
            if (mutation.type === 'childList'){
                displayResult.textContent = resolve(displayOperation.textContent);
            }
        }
    }
);

displayOperationObserver.observe(displayOperation, {childList: true});