//----------------- Constants -------------------------------------------------
const displayOperation = document.querySelector(".display .operation");
const displayResult = document.querySelector(".display .result");

let reversedOperation = '';

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

//----------------- System related functions ----------------------------------
button1.onclick = () => {displayOperation.textContent += '1';}
button2.onclick = () => {displayOperation.textContent += '2';}
button3.onclick = () => {displayOperation.textContent += '3';}
button4.onclick = () => {displayOperation.textContent += '4';}
button5.onclick = () => {displayOperation.textContent += '5';}
button6.onclick = () => {displayOperation.textContent += '6';}
button7.onclick = () => {displayOperation.textContent += '7';}
button8.onclick = () => {displayOperation.textContent += '8';}
button9.onclick = () => {displayOperation.textContent += '9';}
button0.onclick = () => {displayOperation.textContent += '0';}

buttonClear.onclick = () => {
    displayOperation.textContent = '';
    displayResult.textContent = '';
}

buttonParenthesis.onclick = () => {
    let displayLeftParenthesis = true;

    if (displayOperation.textContent.length !== 0){
        const firstNbrChar = reversedOperation.search(/\d/g);
        if (firstNbrChar !== -1 && firstNbrChar < reversedOperation.search(/[^\)|\d|\%]/g)){
            const leftParenthesisCnt = displayOperation.textContent.match(/\(/g)
            const rightParenthesisCnt = displayOperation.textContent.match(/\)/g) 
            if (rightParenthesisCnt === null || rightParenthesisCnt.length < leftParenthesisCnt.length){
                displayOperation.textContent += '\)';
                displayLeftParenthesis = false;
            }
        }
    }

    if (displayLeftParenthesis){
        displayOperation.textContent += '\(';
    }
}

buttonPercentage.onclick = () => {
    if (reversedOperation.search(/\d|\%|\)/) === 0){
        displayOperation.textContent += '%';
    }
}

buttonDivision.onclick = () => {displayOperation.textContent += '/';}
buttonMultiplication.onclick = () => {displayOperation.textContent += 'x';}
buttonMinus.onclick = () => {displayOperation.textContent += '-';}
buttonPlus.onclick = () => {displayOperation.textContent += '+';}

buttonClearLast.onclick = () => {
    if (displayOperation.textContent.length > 0){
        displayOperation.textContent = 
            displayOperation.textContent.slice(0, displayOperation.textContent.length - 1);
    }
}

buttonDot.onclick = () => {
    if (reversedOperation.search(/\./g) === -1 || 
        reversedOperation.search(/\D/g) < reversedOperation.search(/\./g)){
            displayOperation.textContent += '.';
    }
}

buttonEqual.onclick = () => {
    displayOperation.textContent = displayResult.textContent;
    displayResult.textContent = '';
}

const displayOperationObserver = new MutationObserver(
    (mutationList, observer) => {
        for (const mutation of mutationList){
            if (mutation.type === 'childList'){
                reversedOperation = displayOperation.textContent.split("").reverse().join("");
                displayResult.textContent = resolve(displayOperation.textContent);
            }
        }
    }
);

displayOperationObserver.observe(displayOperation, {childList: true});