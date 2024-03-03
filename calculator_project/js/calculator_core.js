//----------------- Constants -------------------------------------------------
const operations = new Map();

operations.set('+', add);
operations.set('-', subtract);
operations.set('*', multiply);
operations.set('/', divide);
operations.set('%', percentage);

RESULT = {
    solved: true,
    value: '',
    error: '',
}

//----------------- System related functions ----------------------------------
function resolve(text){
    RESULT.value = solveEquation(text);
    console.log(RESULT.value);

    if (RESULT.solved){
        return RESULT.value;
    } else
        return RESULT.error;
}

function solveEquation(equationText){
    console.log(equationText, typeof(equationText));
    let leftSide = '';
    let operationPos = equationText.search(/\%|\+|\-/);
    console.log(operationPos);
    let rightSide = '';

    if (operationPos !== -1){
        if (equationText[operationPos] === '%'){
            return operations.get(operation)(solveEquation(leftSide));
        }
    
        if (equationText[operationPos] === '+' || equationText[operationPos] === '-'){
            leftSide = equationText.split(0, operationPos);
            rightSide = equationText.split(operationPos);
            
            leftSide = solveEquation(leftSide);
            rightSide = solveEquation(rightSide);
            return operations.get
                (equationText[operationPos])
                (parseFloat(leftSide), parseFloat(rightSide));
        }
    }
    
    operationPos = equationText.search(/\x|\//);
    console.log(operationPos);
    if (operationPos !== -1){
        leftSide = equationText.split(0, operationPos);
        rightSide = equationText.split(operationPos);

        return operations.get
            (equationText[operationPos])
            (parseFloat(leftSide), parseFloat(rightSide));
    }

    console.log(parseInt(equationText), equationText);
    if (equationText.search(/\./) !== -1) return parseFloat(equationText);
    else return parseInt(equationText);
}

function solveParenthesis(parenthesized){
    
}

//----------------- Four calculator -------------------------------------------
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b === 0 && operator === "/"){
        return NaN;
    }
    return a / b;
}

function percentage(a){
    return a / 100;
}